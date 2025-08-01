import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then(res => res.json())
      .then(data => setUser(data));

    fetch('http://localhost:5000/api/leaderboard')
      .then(res => res.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="App">
      <h1>Intern Dashboard</h1>

      {user && (
        <div className="card">
          <h2>Welcome, {user.name}</h2>
          <p>Referral Code: <strong>{user.referralCode}</strong></p>
          <p>Total Donations Raised: ₹{user.totalDonations}</p>
        </div>
      )}

      <div className="card">
        <h2>Rewards</h2>
        <ul>
          <li>🎖️ Bronze Badge – ₹1,000</li>
          <li>🥈 Silver Badge – ₹5,000</li>
          <li>🏆 Gold Badge – ₹10,000</li>
        </ul>
      </div>

      <div className="card">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr><th>Name</th><th>Referral Code</th><th>Donations</th></tr>
          </thead>
          <tbody>
            {leaderboard.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.referralCode}</td>
                <td>₹{item.totalDonations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

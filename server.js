const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const user = {
  name: "Prajwal Nikhil",
  referralCode: "prajwal2025",
  totalDonations: 15000
};

const leaderboard = [
  { name: "Aarya Mehta", referralCode: "aarya2025", totalDonations: 18000 },
  { name: "Prajwal Nikhil", referralCode: "prajwal2025", totalDonations: 15000 },
  { name: "Rahul Singh", referralCode: "rahul2025", totalDonations: 12000 }
];

app.get('/api/user', (req, res) => {
  res.json(user);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

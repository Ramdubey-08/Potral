const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.json({
    name: "Rahul Sharma",
    referral: "rahul2025",
    totalDonations: 12000,
    rewards: [
      { title: "Bronze Badge", desc: "Collect your first ₹1000!" },
      { title: "Silver Donor", desc: "Raised ₹10,000+" },
    ],
  });
});

router.get("/leaderboard", (req, res) => {
  res.json([
    { name: "Rahul Sharma", code: "rahul2025", donations: 12000 },
    { name: "Simran Kaur", code: "simran2025", donations: 8500 },
    { name: "Ankit", code: "ankit2025", donations: 4000 },
  ]);
});

module.exports = router;

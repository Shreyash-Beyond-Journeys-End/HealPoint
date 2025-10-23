const express = require("express");
const router = express.Router();
const Nurse = require("../models/nurse");
const bcrypt = require("bcrypt");

const checkAdmin = require("../middlewares/checkAdmin");

// Get all nurses with department info
router.get("/get-nurses", async (req, res) => {
  try {
    const nurses = await Nurse.find({}).populate("department", "name");
    res.json(nurses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all nurses
router.get("/get-allNurses", async (req, res) => {
  try {
    const nurses = await Nurse.find();
    res.json(nurses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new nurse
router.post("/add-nurse", async (req, res) => {
  const { name, email, department } = req.body;
  try {
    const existingNurse = await Nurse.findOne({ email });

    if (existingNurse) {
      return res
        .status(400)
        .json({ error: "Nurse with this email already exists" });
    }

    const emailPrefix = email.split('@')[0];
    const password = emailPrefix + '@123';
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newNurse = new Nurse({
      name,
      email,
      password: hashedPassword,
      department
    });

    const savedNurse = await newNurse.save();

    res.status(200).json({ savedNurse, message: "Success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update nurse profile
router.put("/profile-update", async (req, res) => {
  const { userId, updatedProfile } = req.body;
  try {
    const updatedNurse = await Nurse.findByIdAndUpdate(
      userId,
      { $set: updatedProfile },
      { new: true, runValidators: true }
    );

    res.status(200).json({ status: "Success", user: updatedNurse });
  } catch (error) {
    console.error("Error updating profile:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

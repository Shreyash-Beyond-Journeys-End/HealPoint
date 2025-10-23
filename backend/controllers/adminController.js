const express = require("express");
const router = express.Router();
const checkAdmin = require("../middlewares/checkAdmin");

const Doctor = require("../models/doctor");
const Nurse = require("../models/nurse");
const User = require("../models/user");
const Department = require("../models/department");
const ContactUs = require("../models/contactUs");
const NewsLetter = require("../models/newsLetter");

router.get("/get-users", async (req, res) => {
  try {
    const users = await User.find({role:"patient"});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/delete-user/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get-contacts", async (req, res) => {
  try {
    const contacts = await ContactUs.find({});

    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/add-department", async (req, res) => {
  const { name, description, head, staff } = req.body;
  try {
    const existingDepartment = await Department.findOne({ name });

    if (existingDepartment) {
      return res
        .status(400)
        .json({ error: "Department with same name already exists" });
    }
    const newDept = new Department({
      name,
      description,
      head,
      staff,
    });

    const savedDept = await newDept.save();
    res.status(200).json(savedDept);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/delete-department/:id", async (req, res) => {
  try {
    const deletedDept = await Department.findByIdAndDelete(req.params.id);
    res.json(deletedDept);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get-department", async (req, res) => {
  try {
    const departments = await Department.find({}).populate("head", "name");
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/get-count", async (req, res) => {
  try {
      const patientCount = await User.countDocuments({ role: "patient" }).exec();
      const queriesCount = await ContactUs.countDocuments({}).exec();
      const departmentCount = await Department.countDocuments({}).exec();
      const doctorCount = await Doctor.countDocuments({}).exec();
      const nurseCount = await Nurse.countDocuments({}).exec();

      res.json({
          patientCount,
          queriesCount,
          departmentCount,
          doctorCount,
          nurseCount,
      });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


router.post("/new-letter",async(req,res)=>{
  const {email}=req.body
  try {
    const newNewsLetter = new NewsLetter({
      email,
    });
    const savedNewsLetter = await newNewsLetter.save();
    res.status(200).json({status:"Saved",savedNewsLetter});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})


router.get("/get-sent-newsletter",async(req,res)=>{
  try {
    const sentNewsletters = await NewsLetter.find();
    res.json(sentNewsletters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = router;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Doctor = require("../models/doctor");
const checkAdmin = require("../middlewares/checkAdmin");
const Appointment = require("../models/appointment");
const Communication = require("../models/communication");

router.get("/get-doctors", async (req, res) => {

    try {
      const doctors = await Doctor.find();
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.put("/profile-update", async (req, res) => {
    const { userId, updatedProfile } = req.body;
    try {
      const updatedUser = await Doctor.findByIdAndUpdate(
        userId,
        { $set: updatedProfile },
        { new: true, runValidators: true }
      );
  
      res.status(200).json({ status: "Success", user: updatedUser });
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  });

  

  router.delete("/delete-doctor/:id", async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await Doctor.findByIdAndDelete(userId);
      res.json({ msg: "Doctor deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


router.post("/add-doctor", async (req, res) => {
  const { name, email ,specialization } = req.body;
  try {
    const existingDoctor = await Doctor.findOne({ email });

    if (existingDoctor) {
      return res
        .status(400)
        .json({ error: "Doctor with this email already exists" });
    }
    const lastDoctor = await Doctor.findOne().sort({ doctorId: -1 });
    let doctorId;
    if (lastDoctor) {
      const lastDoctorIdNumber = parseInt(lastDoctor.doctorId, 10);
      doctorId = (lastDoctorIdNumber + 1).toString();
    } else {
      doctorId = "1";
    }
    const emailPrefix = email.split('@')[0];
    const password = emailPrefix + '@123' ;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newDoctor = new Doctor({
      name,
      email,
      doctorId:doctorId,
      password: hashedPassword,
      specialization
    });

    const savedDoctor = await newDoctor.save();

    res.status(200).json({savedDoctor,message:"Success"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/get-appointments/:id", async (req, res) => {
  const doctorId = req.params.id;
  try{
    const appointments = await Appointment.find({ doctorId });
    
    if(appointments.length === 0){
      return res.json({ message: "No appointments found" });
    }else{
      res.json(appointments);
    }
    
  }catch(error){
    res.status(500).json({ error: error.message });
  }
});

router.post("/add-message" , async (req , res) => {

  const{email , message ,from} = req.body ;
  
  const newCommunicationMessage = await new Communication({email , message ,from});

  try {
    await newCommunicationMessage.save();
    res.status(200).json("Successfully sent");
  } catch (error) {
    res.json("Couldn't send the message");
  }
});

router.get("/get-message/:email" , async (req , res) => {

  const email = req.params.email; // Correct way to access email from request parameters
  
  try {
    const messages = await Communication.find({email});
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Could not get the message" }); // Set proper status code and error response
  }
});


  module.exports = router;
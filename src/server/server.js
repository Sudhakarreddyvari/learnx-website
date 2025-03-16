const express = require("express");
const cors = require("cors");
const multer = require("multer");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer();

app.post("/submit-form", upload.none(), async (req, res) => {
  try {
    console.log("Received form submission:", req.body);

    const formData = new URLSearchParams();
    Object.keys(req.body).forEach((key) => {
      formData.append(key, req.body[key]);
    });

    console.log("Submitting to Zoho CRM:", formData.toString());

    const zohoResponse = await axios.post("https://crm.zoho.in/crm/WebToLeadForm", 
      formData.toString(), 
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    console.log("Zoho CRM response:", zohoResponse.status);

    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Zoho Submission Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit the form",
      error: error.message,
    });
  }
});

// Add a simple test route
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));


const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));

const express = require("express")
const cors = require("cors")
const multer = require("multer")
const axios = require("axios")

const app = express()

// Updated CORS configuration with specific origins
app.use(
  cors({
    origin: ["https://learn-x.in", "http://13.232.176.52:5000"],
    methods: ["GET", "POST"],
    credentials: true,
  }),
)

app.use(express.json())
const upload = multer()

app.post("/submit-form", upload.none(), async (req, res) => {
  try {
    console.log("Received form submission:", req.body)

    const formData = new URLSearchParams()
    Object.keys(req.body).forEach((key) => {
      formData.append(key, req.body[key])
    })

    console.log("Submitting to Zoho CRM:", formData.toString())

    const zohoResponse = await axios.post("https://crm.zoho.in/crm/WebToLeadForm", formData.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })

    console.log("Zoho CRM response:", zohoResponse.status)

    res.status(200).json({ success: true, message: "Form submitted successfully!" })
  } catch (error) {
    console.error("Zoho Submission Error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to submit the form",
      error: error.message,
    })
  }
})

// Add a simple test route
app.get("/", (req, res) => {
  res.send("LearnX Server is running!")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


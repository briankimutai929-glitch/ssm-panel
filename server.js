const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to SSM Panel API"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
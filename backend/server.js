const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models");
const sequelize = require("./config/database");
const routes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// ✅ Debug logging
app.use((req, res, next) => {
  console.log(`📍 ${req.method} ${req.path}`);
  next();
});

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.error("❌ ERROR:", err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5001;

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connection successful");
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("✅ Database synced");
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database error:", err);
    process.exit(1);
  });

module.exports = app;

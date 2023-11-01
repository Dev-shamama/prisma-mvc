const { PrismaClient } = require("@prisma/client");
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

// app.get("/", async (req, res) => {
//     const user = await prisma.user.findMany()
//     res.json(user)
// });

app.get("/", async (req, res) => {
  res.json({ msg: "ok" });
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTEN at http://localhost:${PORT}`);
});

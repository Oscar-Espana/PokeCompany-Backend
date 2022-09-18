import express from "express";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("hol");
  res.send("ping hola mundo");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
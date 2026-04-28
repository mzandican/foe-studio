import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/run", (req, res) => {
  const input = Number(req.query.input || 1)
  const result = input * Math.random() * 10
  res.json({ result })
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})

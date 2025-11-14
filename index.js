const express = require("express")
const os = require("os")
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.json({"message" : "Hello World"});
})

app.post('/add', (req, res) => {
  	const {a, b} = req.body;
	res.json({"sum": a+b})
})

app.get('/cpu', (req, res) => {
	let usage = 0
	for(let i = 0; i < 10000000000; i++) {
		usage += 1;
	 }
	res.json({"usage": usage})
})

app.get("/host", (req, res) => {
	res.json({"host": os.hostname()})
})

// app.listen(3000, () => {
// 	console.log("app is listening to port 3000")
// })

// console.log("ENV Variable", process.env.secret)
// console.log("User", process.env.user)


module.exports = {
	app
}
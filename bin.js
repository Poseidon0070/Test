const cluster = require("cluster");
const os = require("os");
const { app } = require("./index");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
} else {
	app.listen(3000, () => {
		console.log(`Worker ${process.pid} is running`);
	});
}


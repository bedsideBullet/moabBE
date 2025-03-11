import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();

const corsOptions = {
	origin: process.env.FRONTEND_URL || "http://localhost:5173",
	optionsSuccessStatus: 200,
	credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api", routes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;

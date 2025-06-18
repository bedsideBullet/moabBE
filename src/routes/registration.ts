import { Router } from "express";
import {
	registerUser,
	getRegistrations,
	getUserById,
	deleteRegistrations,
	updateRegistration,
	resetDemoData, // <-- add this import
} from "../controllers/registrationController";

const router = Router();

router.post("/", async (req, res) => {
	console.log("Received a POST request on /registration");

	try {
		await registerUser(req, res);
	} catch (error) {
		console.error("Error in /registration route:", error);
		res.status(500).json({ message: "Server error" });
	}
});

router.post("/delete", async (req, res) => {
	console.log("Received a POST request on /registration/delete");

	try {
		await deleteRegistrations(req, res);
	} catch (error) {
		console.error("Error in /registration/delete route:", error);
		res.status(500).json({ message: "Server error" });
	}
});

// --- Add this route for resetting demo data ---
router.post("/reset-demo", async (req, res) => {
	console.log("Received a POST request on /registration/reset-demo");
	try {
		await resetDemoData(req, res);
	} catch (error) {
		console.error("Error in /registration/reset-demo route:", error);
		res.status(500).json({ message: "Server error" });
	}
});
// ----------------------------------------------

router.get("/registrations", async (req, res) => {
	console.log("Received a GET request on /registrations");

	try {
		await getRegistrations(req, res);
	} catch (error) {
		console.error("Error in /registrations route:", error);
		res.status(500).json({ message: "Server error" });
	}
});

router.get("/:id", async (req, res) => {
	console.log("Received a GET request on /registration/:id");

	try {
		await getUserById(req, res);
	} catch (error) {
		console.error("Error in /registration/:id route:", error);
		res.status(500).json({ message: "Server error" });
	}
});

router.patch("/:id", async (req, res) => {
	console.log("Received a PATCH request on /registration/:id");

	try {
		await updateRegistration(req, res);
	} catch (error) {
		console.error("Error updating registration:", error);
		res.status(500).json({ message: "Server error" });
	}
});

export default router;

import express from "express";
import { subscribeCompanies } from "./company_streamingapi";

const app = express();

const PORT = process.env.PORT || 3001;

subscribeCompanies();

app.listen(PORT, function () {
	// eslint-disable-next-line no-console
	console.log("Server is running on port " + PORT);
});

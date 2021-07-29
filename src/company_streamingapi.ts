/* eslint-disable no-console */
import fetch from "node-fetch";
import JSONStream from "jsonstream";

/**
 * Connects to the companies steaming API and keeps connected
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function subscribeCompanies() {
	console.log("Company Streaming API connected");
	const reqString: string = "https://stream.companieshouse.gov.uk/companies";

	let response = await fetch(reqString, {
		headers: {
			Authorization:
				"Basic bmtxRlE4ZkhEd2NnVkZOYTY5bWs4M2dxTi1QUlVuNWpMRXpKSGVGWDo6",
		},
	});

	if (response.status != 200) {
		// An error - let's show it
		console.log(response.statusText);
		await new Promise(() => setTimeout(() => {}, 10));
		await subscribeCompanies();
	} else {
		// Get and show the message
		const stream = JSONStream.parse(false);
		const body = response.body;
		body
			.pipe(stream)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.on("data", (data: any) => {
				console.log(data);
			});
		body.on("close", () => {
			setTimeout(() => {
				subscribeCompanies();
				console.log("Disconnected from streamingAPI");
			}, 5000);
		});
	}
}

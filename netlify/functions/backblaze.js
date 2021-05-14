const axios = require('axios');

const authoriseBackblaze = async () => {
	try {
		const authorsationToken = btoa(`${process.env.BACKBLAZE_ACCOUNT_ID}:${process.env.BACKBLAZE_ACCOUNT_AUTH_TOKEN}`);
		const response = await axios({
			url: 'https://api.backblazeb2.com/b2api/v2/b2_authorize_account',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: authorsationToken,
			},
		});
		return {successful: true, message: response.apiUrl}
	} catch (error) {
		let message;
		if (error.response) {
			message = `Server responded with non 2xx code: ${JSON.stringify(error.response.data)}`;
		} else if (error.request) {
			message = `No response received: ${error.request}`;
		} else {
			message = `Error setting up response: ${error.message}`;
		}
		return { successful: false, message };
	}
};

exports.handler = async (event) => {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method not allowed.' };
	}

	return { statusCode: 200, body: JSON.stringify(await authoriseBackblaze()) };
};

function userSchema(argument) {
	return {
		type: "object",
		properties: {
			company_id: {
				type: "string", minLength: 36
			},
			email: {
				type: "string", minLength: 5
			},
			id: {
				type: "string"
			},
			name: {
				type: "string"
			},
			password: {
				type: "string", minLength: 14
			},
			phone: {}
		}
	};
}
var UserSchema = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title" : "User",
	"description" : "A NextGen Leads user",
	"type" : "object",
	"properties" : {
		"id" : {
			"type" : "string",
			"description" : "A unique hash that identifies the user in the DB",
			"required" : true
		},
		"name" : {
			"description" : "An object containing parts of the user's real name",
			"type" : "object",
			"properties" : {
				"first" : {
					"description" : "The user's first name",
					"type" : "string",
					"required" : true
				},
				"last" : {
					"description" : "The user's last name",
					"type" : "string",
					"required" : true
				}
			},
			"required" : true
		},
		"password" : {
			"description" : "An encrypted hash of the user's password for logging into the application",
			"type" : "string",
			"required" : true
		},
		"email" : {
			"description" : "The user's email address",
			"pattern" : "[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}",
			"type" : "string",
			"required" : true
		},
		"company_id" : {
			"description" : "The id for the company associated with the user",
			"type" : "string",
			"required" : true
		},
		"role" : {
			"description" : "The id for the role associated with the user",
			"type" : "string",
			"required" : true
		},
		"created" : {
			"description" : "The date the user account was created",
			"type" : "string",
			"required" : true
		},
		"updated" : {
			"description" : "The date the user account was last modified",
			"type" : "string",
			"format" : "date-time",
			"required" : false
		}
	}
}
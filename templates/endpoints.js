export const endpointsData = {
  "/api/users": {
    "GET": {
      "response": [
        { "id": 1, "name": "Alice" },
        { "id": 2, "name": "Bob" },
        { "id": 3, "name": "Charlie" }
      ]
    },
    "POST": {
      "request": {
        "body": {
          "name": "string",
          "email": "string"
        }
      },
      "response": {
        "message": "New user created"
      }
    }
  },
  "/api/users/:id": {
    "GET": {
      "response": {
        "id": 1,
        "name": "Alice"
      }
    },
    "PUT": {
      "request": {
        "body": {
          "name": "string",
          "email": "string"
        }
      },
      "response": {
        "message": "User details updated"
      }
    },
    "DELETE": {
      "response": {
        "message": "User deleted successfully"
      }
    }
  }
}

# Kanban-Board

Authentication with JSON Web Tokens (JWTs) is crucial for full-stack applications, as it provides a secure and scalable method for verifying user identities. JWTs are compact, URL-safe tokens that encode a user's authentication data, allowing servers to authenticate requests. Additionally, JWTs can include metadata and be easily verified and decoded, enhancing security while enabling seamless authentication across various parts of an application.

## User Story

```md
AS A member of an agile team
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks
```

## Getting Started

The starter code provides a complete, working full-stack application without authentication.

You will need to:

* Create a `.env` file for the server that includes:

  * A username for the database

  * A password for the database

  * A secret key for the JWT (this can be any random string)

* Complete the `authenticateToken` method in `server/src/middleware/auth.ts` 
jwt.verify(token, 'your_secret_key'): 
Verifies the token using the provided secret key.

* Important: Replace "your_secret_key" with your actual JWT secret key. This key should be kept highly confidential.

* If verification succeeds:
req.user = decoded: Adds the decoded user data (typically containing user ID, username, etc.) to the req.user property, making it accessible in subsequent middleware or route handlers.

* next(): Calls the next middleware or route handler in the chain.

* Use Insomnia to test the server API directly. 


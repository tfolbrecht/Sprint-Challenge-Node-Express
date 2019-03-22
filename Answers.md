## Mention two parts of Express that you learned about this week.

Express Server
Express Routing
express.json()

## Describe Middleware?

They way I like to think of Middleware is that they're functions with full access to req, res, able to modify them.
They sit between the client application and server application in the routing layer.

## Describe a Resource?

Everything accessible by a unique URI
Manpulating and using Resources is done by stricly through HTTP methods

## What can the API return to help clients know if a request was successful?

HTTP Status codes
2xx Success

The other three categories are:
- 3xx Redirect
- 4xx Client Error
- 5xx Server Error

## How can we partition our application into sub-applications?

You can break sub apps into individual files, then import them and their routers with and router.use them.
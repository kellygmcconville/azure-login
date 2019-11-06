## Setup
1. go to azure portal https://portal.azure.com/
2. Azure Active Directory
3. App Registrations
4. New Registration. Give the app a name and a callback url (e.g. http://localhost:3000)
5. 'Authentication' inside of that app registration.
6. check 'access token' and 'id token' under implicit grant and save.
7. copy the client_id and tenant_id from the app registration overview and replace in adalConfig.js  
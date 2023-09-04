# extrums-test-task

## Local setup

### backend
* Move to the backend directory `cd backend`
* Load node modules `npm i`
* Prepare a .env `npm run prepare:dev`
* Start the server `npm run start`

### frontend
* Move to the frontend directory `cd frontend`
* Load node modules `npm i`
* Prepare a .env file `npm run prepare:dev`
* Start the dev server `npm run dev`
* Open the link http://localhost:5173/

## Users
|email|password|permissions|
|-----|--------|-----------|
|nopermission@mail.com|password1|No permissions| 
|reader@mail.com|password2|Can read the counter value and the counter history|
|writer@mail.com|password3|Can read and change the counter value and read the counter history|
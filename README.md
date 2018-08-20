# condorBackend
## 1. Cloning the repository
```
git clone https://github.com/fabianMM04/condorBackend.git
```
## 2. Install dependecies
```
cd condorBackend
npm install
```
## 3. Run project
```
npm start or node index.js
```
## 4. API Providers
```
* GET: http://localhost:3789/api/providers
* GET: http://localhost:3789/api/provider/{id} ;example: http://localhost:3789/api/provider/5b76e839f56f0f11475b1f93
* POST: http://localhost:3789/api/provider 
  Header: Content-Type: application/json
  Body: {
	  "firstName": "Fabian 2",
	  "lastName": "Martinez Martelo",
          "middleName": "",
          "status": true,
          "user": "5b75d1671170c27af52d28ea", 
          "specialtie": "5a1ee5e6d0e8cfb9049a790c"
        }
* PUT: http://localhost:3789/api/provider/{id} ; example: http://localhost:3789/api/provider/5b76e839f56f0f11475b1f93
  Header: Content-Type: application/json
  Body: {
	  "firstName": "Fabiano",
	  "lastName": "Martinez",
          "middleName": "",
          "status": true,
          "user": "5b75d1671170c27af52d28ea", 
          "specialtie": "5a1ee5e6d0e8cfb9049a790c"
        }
* DELETE: http://localhost:3789/api/provider/{id} ; example: http://localhost:3789/api/provider/5b76e839f56f0f11475b1f93
```
## 5. API users
```
* GET: http://localhost:3789/api/users
* POST: http://localhost:3789/api/create/user 
  Header: Content-Type: application/json
  Body: {
	  "name": "Fabian 2",
	  "email": "fabianmm04@gmail.com",
          "password": "1234"
        }
* PUT: http://localhost:3789/api/update/user/{id} ; example: http://localhost:3789/api/update/user/5b7a3d4cd3f3e342f054f621
  Header: Content-Type: application/json
  Body: {
	  "name": "Fabiano",
	  "email": "fabianmm04@gmail.com",
          "password": "1234qwer"
        }
```




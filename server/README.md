# Employee Manager Server

This is an employee management application service that provides a REST API to manipulate employee data. By using nodejs as runtime and expressjs framework

## what is learned :book: 

- #### Database Mongodb
- #### Framework Express.js
- #### RESTAPI with method post, get, put, and delete

## Tech Used 🧑‍💻
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Configure ⚙️
| host      | port   | Database| Mongo |
|-----------|--------|---------|-------|
| localhost | 3000   | company| mongodb://localhost:27017|

If you want to change, edit the .env file

## database structure
```js
  {
    _id: ObjectId("6123456789abcdef01234567"),
    name: "John",
    position: "Manager"
  }
```

## Usage 📝

| Method| Url| Body | Params |
|---|---|---|---|
| GET | /employee | - | id? |
| POST | /employee | name, position | - |
| PUT | /employee | id, name, position | - |
| DELETE | /employee | id | -|


## Bugs and Issues ⚠️

Have a bug or problem? Open a [new issue here](https://github.com/Alamabd/employee-manager/issues) on GitHub

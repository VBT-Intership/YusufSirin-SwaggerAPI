#  UsersAPI with SwaggerEditor

| **Route** | **HTTP Method** | **Body** |
|-----|----|----|
|localhost:8090/users|``GET``|Empty|
|localhost:8090/users/add|``POST``|{'name':'Yusuf','surname':'Sirin'}|
|localhost:8090/users/remove/{id:}|``DELETE``|Empty|

---



### Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8090/docs
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.

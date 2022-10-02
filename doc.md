# 1. POST /register

- **To create a new user**

## URL

```jsx
/users/register
```

## Method

```jsx
POST
```

## URL Params

```jsx
None
```

## Request Headers

```jsx
None
```

## Request Body

```jsx
name=[string]
email=[string]
password=[string]
```

## Success **Response**

```jsx
Code: 201
Response:
{
    "msg": "Registration successful",
    "id": 1,
    "name": "Lalisa Manobal"
    "email": "lalisamanobal@gmail.com"
}
```

## Error Response

```jsx
Code: 400
Response:
{
    "error": [
        "Email already exists"
    ]
}

OR 

{
    "error": [
        "Invalid email format"
    ]
}

OR

{
    "error": [
        "Password must be at least 6 characters"
    ]
}
```


# 2. GET /login

- **To login with an existing account**

## URL

```jsx
/users/login
```

## Method

```jsx
GET
```

## URL Params

```jsx
None
```

## Request Headers

```jsx
None
```

## Request Body

```jsx
email=[string]
password=[string]
```

## Success Response

```jsx
Code: 200
Response:
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtbGFja21pbmtAZ21haWwuY29tIiwiaWF0IjoxNjQ1MzY1MzE4fQ.k0IzrEWzPbgiE9tdYwl_2aqxGCBAVS5ikUpZfjNUBsk"
}
```

## Error Response

```jsx
Code: 500
Response:
{
    "error": "Internal server error"
}
```


# 3. POST /tasks

- **To add a new task**

## URL

```jsx
/tasks
```

## Method

```jsx
POST
```

## URL Params

```jsx
None
```

## Request Headers

```jsx
access_token=[string]
```

## Request Body

```jsx
title=[string]
description=[string]
category=[string]
```

## Success Response

```jsx
Code: 201
Response:
{
    "title": "ngoding",
    "description": "biar keren",
    "category": "backlog"
}
```

## Error Response

```jsx
Code: 500
Response:
{
    "error": "Internal server error"
}
```


# 4. GET /tasks

- **To show all added tasks**

## URL

```jsx
/tasks
```

## Method

```jsx
GET
```

## URL Params

```jsx
None
```

## Request Headers

```jsx
access_token=[string]
```

## Request Body

```jsx
None
```

## Success Response

```jsx
Code: 200
Response:
[
    {
        "id": 1,
        "title": "merenung di bandung",
        "description": "ama bebeb dudung",
        "category": "backlog",
        "UserId": 1,
        "createdAt": "2022-02-20T14:02:33.277Z",
        "updatedAt": "2022-02-20T14:02:33.277Z",
        "User": {
            "id": 1,
            "name": "Lisa Manobal",
            "email": "lisamanobal@gmail.com"
        }
    },
    {
        "id": 2,
        "title": "melali di bali",
        "description": "ama bli",
        "category": "backlog",
        "UserId": 2,
        "createdAt": "2022-02-20T14:02:33.277Z",
        "updatedAt": "2022-02-20T14:02:33.277Z",
        "User": {
            "id": 1,
            "name": "Roseanne",
            "email": "roseanne@gmail.com"
        }
    },
    {
        "id": 3,
        "title": "resing",
        "description": "sama maman",
        "category": "backlog",
        "UserId": 3,
        "createdAt": "2022-02-20T14:02:33.277Z",
        "updatedAt": "2022-02-20T14:02:33.277Z",
        "User": {
            "id": 3,
            "name": "Park Jisoo",
            "email": "parkjisoo@gmail.com"
        }
    }
]
```

## Error Response

```jsx
Code: 500
Response:
{
    "error": "Internal server error"
}
```


# 5. GET /tasks/:id

- **To show a specific tasks**

## URL

```jsx
/tasks/:id
```

## Method

```jsx
GET
```

## URL Params

```jsx
/tasks/3
```

## Request Headers

```jsx
access_token=[string]
```

## Request Body

```jsx
None
```

## Success Response

```jsx
Code: 200
Response:
{
    "id": 3,
    "title": "resing",
    "description": "sama maman",
    "category": "backlog",
    "UserId": 1,
    "createdAt": "2022-02-20T14:13:43.594Z",
    "updatedAt": "2022-02-20T14:13:43.594Z",
    "User": {
            "id": 3,
            "name": "Park Jisoo",
            "email": "parkjisoo@gmail.com"
        }
}
```

## Error Response

```jsx
Code: 401
Response:
{
    "error": "Not authorized"
}

OR 

Code: 500
Response:
{
    "error": "Internal server error"
}
```


# 6. PUT /tasks/:id

- **To edit the entire data in a specific task**

## URL

```jsx
/tasks/:id
```

## Method

```jsx
PUT
```

## URL Params

```jsx
/tasks/3
```

## Request Headers

```jsx
access_token=[string]
```

## Request Body

```jsx
title=[string]
description=[string]
```

## Success Response

```jsx
Code: 200
Response:
{
    "id": 3,
    "title": "resing lagi",
    "description": "sama luna cinta",
    "UserId": 1,
    "createdAt": "2022-02-20T14:13:43.594Z",
    "updatedAt": "2022-02-20T14:13:43.594Z"
}
```

## Error Response

```jsx
Code: 401
Response:
{
    "error": "Not authorized"
}

OR 

Code: 500
Response:
{
    "error": "Internal server error"
}
```





# 7. PATCH /tasks/:id

- **To edit the one or some data but not entirely in a specific task**

## URL

```jsx
/tasks/:id
```

## Method

```jsx
PATCH
```

## URL Params

```jsx
/tasks/3
```

## Request Headers

```jsx
access_token=[string]
```

## Request Body

```jsx
category=[string]
```

## Success Response

```jsx
Code: 200
Response:
{
    "id": 3,
    "title": "resing lagi",
    "description": "sama luna cinta",
    "UserId": 1,
    "createdAt": "2022-02-20T14:13:43.594Z",
    "updatedAt": "2022-02-20T14:13:43.594Z"
}
```

## Error Response

```jsx
Code: 401
Response:
{
    "error": "Not authorized"
}

OR 

Code: 500
Response:
{
    "error": "Internal server error"
}
```




# 8. DELETE /tasks/:id

- **To delete a specific task**

## URL

```jsx
/tasks/:id
```

## Method

```jsx
DELETE
```

## URL Params

```jsx
/tasks/3
```

## Request Headers

```jsx
access_token=[string]
```

## Request Body

```jsx
None
```

## Success Response

```jsx
Code: 200
Response:
{
    "msg": "Task successfully deleted"
}
```

## Error Response

```jsx
Code: 401
Response:
{
    "error": "Not authorized"
}

OR 

Code: 500
Response:
{
    "error": "Internal server error"
}
```

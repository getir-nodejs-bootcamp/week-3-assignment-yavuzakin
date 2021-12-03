
# week-3-assignment

* Create a web server using Express.
* Redirect the requests sent by the client to the requested urls and respond with a message like "Home Page".
* Log all the requests coming from the client to a file using FS module.
* Redirect requests with 404 warning for undefined urls.
* Include get, post, put, patch and delete methods in express app.
* Accept JSON format in request body and respond in JSON format also.
* Include JWT in express app.
* Respond with 200 status code if the token is valid, 401 status code otherwise.


## Installation 

```bash
  git clone https://github.com/getir-nodejs-bootcamp/week-3-assignment-yavuzakin.git

  cd into the folder

  npm install
  
  npm start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`JWT_SECRET_KEY`, `PORT`

  ## API Reference

All requests need access token except **/api/v1/jwt**. Make a get request to **/api/v1/jwt** to 
get a valid access token and then put it inside your request's header. The key of access token must be **token**. 
Access token expires in 3 days.

```
{ token: Bearer ${accessToken} }
```
#### Get json web token

```
  GET /api/v1/jwt
```

#### Get home page

```
  GET /home
```

#### Get about page

```
  GET /about
```

#### Get all users

```
  GET /api/v1/users
```

#### Create a user

```
  POST /api/v1/users
```
| Request Body |
| :-------- |
| **Required**. All fields of [user model](#models) except id|

#### Get user by id

```
  GET /api/v1/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of user to fetch |

#### Update user with PUT method

```
  PUT /api/v1/users/:id
```

| Parameter | Type     | Description                       | Request Body |
| :-------- | :------- | :-------------------------------- | :------------ |
| `id`      | `number` | **Required**. Id of user to modify | **Required**. All fields of [user model](#models) except id |

#### Update user with PATCH method

```
  PATCH /api/v1/users/:id
```

| Parameter | Type     | Description                       | Request Body |
| :-------- | :------- | :-------------------------------- | :----------- |
| `id`      | `number` | **Required**. Id of user to modify | Any fields of [user model](#models) you'd like to update except id |

#### Delete user by id

```
  DELETE /api/v1/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of user to delete |

#### Get all posts

```
  GET /api/v1/posts
```
| Query    | Value     | Type     | Description                  |
| :------- | :-------- | :------- | :-------------------------------- |
| `userId` | `id`      | `number` | **Optional**. User id of posts to fetch |

#### Create a post

```
  POST /api/v1/posts
```
| Request Body |
| :-------- |
| **Required**. All fields of [post model](#models) except id|

#### Get post by id

```
  GET /api/v1/posts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of post to fetch |

#### Update post with PUT method

```
  PUT /api/v1/posts/:id
```

| Parameter | Type     | Description                       | Request Body |
| :-------- | :------- | :-------------------------------- | :----------- |
| `id`      | `number` | **Required**. Id of post to modify | **Required**. All fields of [post model](#models) except id|

#### Update post with PATCH method

```
  PATCH /api/v1/posts/:id
```

| Parameter | Type     | Description                       | Request Body |
| :-------- | :------- | :-------------------------------- | :----------- |
| `id`      | `number` | **Required**. Id of post to modify | Any fields of [post model](#models) you'd like to update |

#### Delete user by id

```
  DELETE /api/v1/posts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number (1-100)` | **Required**. Id of post to delete |

  
## Data Models
#### USERS
```json
[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "city": "Gwenborough"
      }
    },
    .
    .
    .,
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "city": "Lebsackbury"
      }
    }
]
```
#### POSTS
```json
[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nrepreh..."
    },
    .
    .
    .,
    {
      "userId": 10,
      "id": 100,
      "title": "at nam consequatur ea labore ea harum",
      "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque ..."
    }
]
```

  
## Technologies Used

**Server:** Node, Express

**Client:** Postman

  
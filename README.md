
# week-3-assignment

* Create a web server using Express.
* Redirect the requests sent by the client to the requested urls and respond with a message like "Home Page".
* Log all the requests coming from the client to a file using FS module.
* Redirect requests with 404 warning for undefined urls.
* Include get, post, put, patch and delete methods in express app.
* Accept JSON format in request body and respond in JSON format also.
* Include JWT in express app.
* Respond with 200 status code if the token is valid, 401 status code otherwise.


## API Reference

All requests need jwt except /jsonwebtoken. Make a get request to /jsonwebtoken to 
get a valid jwt and then put it inside your request's header with token key. 

{ **key**: token, **value**: Bearer ${jsonwebtoken} }

#### Get json web token

```
  GET /jsonwebtoken
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
  GET /users
```

#### Create a user

```
  POST /users
```
| Request Body |
| :-------- |
| **Required**. All the fields of [user model](#models)|

#### Get user by id

```
  GET /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number (1-10)` | **Required**. Id of user to fetch |

#### Update user with PUT

```
  PUT /users/:id
```

| Parameter | Type     | Description                       | Request Body |
| :-------- | :------- | :-------------------------------- | :------------ |
| `id`      | `number (1-10)` | **Required**. Id of user to modify | **Required**. All fields of [user model](#models) |

#### Update user with PATCH

```
  PATCH /users/:id
```

| Parameter | Type     | Description                       | Request Body |
| :-------- | :------- | :-------------------------------- | :----------- |
| `id`      | `number (1-10)` | **Required**. Id of user to modify | Any fields of [user model](#models) you'd like to update |

#### Delete user by id

```
  DELETE /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number (1-10)` | **Required**. Id of user to delete |

#### Get all posts

```http
  GET /posts
```

#### Create a post

```http
  POST /posts
```
| Request Body |
| :-------- |
| **Required**. All the fields of [post model](#models)|

#### Get all posts by userId

```http
  GET /posts?userId=${id}
```

| Query    | Value     | Type     | Description                  |
| :------- | :-------- | :------- | :-------------------------------- |
| `userId` | `id`      | `number (1-10)` | **Required**. User id of posts to fetch |

#### Get post by id

```http
  GET /posts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number (1-100)` | **Required**. Id of post to fetch |

#### Update post with PUT

```http
  PUT /posts/:id
```

| Parameter | Type     | Description                       | Request Body |
| :-------- | :------- | :-------------------------------- | :----------- |
| `id`      | `number (1-100)` | **Required**. Id of post to modify | **Required**. All the fields of [post model](#models) |

#### Update post with PATCH

```http
  PATCH /posts/:id
```

| Parameter | Type     | Description                       | Request Body |
| :-------- | :------- | :-------------------------------- | :----------- |
| `id`      | `number (1-100)` | **Required**. Id of post to modify | Any fields of [post model](#models) you'd like to update |

#### Delete user by id

```http
  DELETE /posts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number (1-100)` | **Required**. Id of post to delete |

  
## Models

```javascript
const User = [
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

```javascript
const Post = [
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

  
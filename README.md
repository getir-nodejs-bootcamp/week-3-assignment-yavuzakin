
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

#### Get home page

```http
  GET /home
```

#### Get about page

```http
  GET /about
```

#### Get json web token

```http
  GET /jsonwebtoken
```

#### Get all users

```http
  GET /users
```

#### Create a user

```http
  POST /users
```

#### Get user by id

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Update user with PUT

```http
  PUT /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to modify |

#### Update user with PATCH

```http
  PATCH /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to modify |

#### Delete user by id

```http
  DELETE /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |

#### Get all posts

```http
  GET /posts
```

#### Create a post

```http
  POST /posts
```

#### Get all posts by userId

```http
  GET /posts?userId=${id}
```

| Query    | Value     | Type     | Description                  |
| :------- | :-------- | :------- | :-------------------------------- |
| `userId` | `id`      | `string` | **Optional**. User id of posts to fetch |

#### Get post by id

```http
  GET /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

#### Update post with PUT

```http
  PUT /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to modify |

#### Update post with PATCH

```http
  PATCH /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to modify |

#### Delete user by id

```http
  DELETE /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to delete |

  
## Technologies Used

**Server:** Node, Express

**Client:** Postman

  
# basic-api
Basic REST API using Express.

You can store JSON strings using a RESTful API.


## Usage

| Method | Endpoint    | Body | Response
|----------------------------
| GET    | `/new-key`  |      | JS object. If status is true, apiKey is a key you can use to access the rest of the API. Example: <br> `{ status, apiKey }`
| GET     | `/data`    |      | . |
| GET     | `/data/:id`|      | . |
| POST    | `/data`    | ja   | . |
| PUT     | `/data/:id`| ja   | . |
| DELETE  | `/data/:id`|      | . |


## Internal data
The documents in the database

### `keys` collection
| Property | Data type |
|-------------------------
| apiKey   | string    |
| created  | datetime? |

### `data` collection
| Property | Data type |
|-------------------------
| json     | string    |
| apiKey   | datetime? |
| added    | datetime? |

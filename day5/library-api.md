# Library Books Resource REST API Design

A standard RESTful API specification for managing a library's books collection.

---

## Endpoints

### 1. List All Books
- **Method**: `GET`
- **Path**: `/api/v1/books`
- **Description**: Retrieves a paginated list of all books available in the library catalog.
- **Request Body**: None
- **Success Status Code**: `200 OK`

---

### 2. Get a Specific Book
- **Method**: `GET`
- **Path**: `/api/v1/books/{id}`
- **Description**: Retrieves detailed information for a single book identified by its unique ID.
- **Request Body**: None
- **Success Status Code**: `200 OK`

---

### 3. Create a New Book
- **Method**: `POST`
- **Path**: `/api/v1/books`
- **Description**: Adds a new book entry to the library catalog.
- **Request Body**:
  ```json
  {
    "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "author": "Robert C. Martin",
    "isbn": "978-0132350884",
    "publishedYear": 2008,
    "genre": "Software Engineering",
    "totalCopies": 5,
    "availableCopies": 5
  }
  ```
- **Success Status Code**: `201 Created`

---

### 4. Update an Existing Book
- **Method**: `PUT`
- **Path**: `/api/v1/books/{id}`
- **Description**: Updates all attributes and copy counts of an existing book identified by its ID.
- **Request Body**:
  ```json
  {
    "title": "Clean Code: A Handbook of Agile Software Craftsmanship (Revised)",
    "author": "Robert C. Martin",
    "isbn": "978-0132350884",
    "publishedYear": 2008,
    "genre": "Software Engineering",
    "totalCopies": 7,
    "availableCopies": 6
  }
  ```
- **Success Status Code**: `200 OK`

---

### 5. Delete a Book
- **Method**: `DELETE`
- **Path**: `/api/v1/books/{id}`
- **Description**: Permanently removes a book record from the library catalog by its ID.
- **Request Body**: None
- **Success Status Code**: `204 No Content`

---

### 6. Filter Books by Author (Query Parameter)
- **Method**: `GET`
- **Path**: `/api/v1/books?author={author_name}`
- **Description**: Retrieves a filtered list of books authored by a specific writer via the `author` query parameter.
- **Request Body**: None
- **Success Status Code**: `200 OK`

---

## Error Codes and Handling

### HTTP 400 Bad Request
- **Description**: Returned when the server cannot process the request due to client error, such as invalid JSON syntax, missing required fields, or failing validation rules.
- **Example Scenario**:
  - A client sends a `POST /api/v1/books` request without the mandatory `title` field, or provides an invalid data type like `"publishedYear": "twenty-twenty"` instead of an integer.
  - **Example Error Response**:
    ```json
    {
      "status": 400,
      "error": "Bad Request",
      "message": "Validation failed: 'title' is a required field, and 'publishedYear' must be a valid integer."
    }
    ```

---

### HTTP 404 Not Found
- **Description**: Returned when the requested resource or resource identifier cannot be found in the database.
- **Example Scenario**:
  - A client sends a `GET /api/v1/books/98765` or `DELETE /api/v1/books/98765`, but no book exists with the ID `98765` in the library records.
  - **Example Error Response**:
    ```json
    {
      "status": 404,
      "error": "Not Found",
      "message": "Book with ID 98765 was not found in the library catalog."
    }
    ```

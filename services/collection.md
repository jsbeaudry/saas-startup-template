# Collection Class Documentation

The `Collection` class provides methods to interact with a collection in a Supabase database.

## Constructor

### `constructor(name: string)`

- Creates a new instance of the Collection class.
- **Parameters:**
  - `name`: The name of the collection in the Supabase database.

## Methods

### `async post(data: object): Promise<object>`

- Inserts a new record into the collection.
- **Parameters:**
  - `data`: The data to be inserted into the collection.
- **Returns:**
  - A Promise that resolves to an object containing the result of the operation or an error object.

### `async upPost(data: object, contraintName: string): Promise<object>`

- Inserts or updates a record in the collection if there is a conflict.
- **Parameters:**
  - `data`: The data to be inserted or updated.
  - `contraintName`: The column name to resolve conflicts on.
- **Returns:**
  - A Promise that resolves to an object containing the result of the operation or an error object.

### `async get(where: object | null, selection: string = "*"): Promise<object[]>`

- Retrieves records from the collection based on a condition.
- **Parameters:**
  - `where`: An optional object representing the condition to filter records.
  - `selection`: An optional string representing the columns to select.
- **Returns:**
  - A Promise that resolves to an array of objects representing the retrieved records.

### `async update(where: object | null, data: object): Promise<object>`

- Updates records in the collection based on a condition.
- **Parameters:**
  - `where`: An optional object representing the condition to filter records.
  - `data`: The data to be updated.
- **Returns:**
  - A Promise that resolves to an object containing the result of the operation or an error object.

### `async delete(where: { key: string, value: any }): Promise<object>`

- Deletes records from the collection based on a condition.
- **Parameters:**
  - `where`: An object representing the condition to filter records, with a key and a value.
- **Returns:**
  - A Promise that resolves to an object containing the result of the operation or an error object.

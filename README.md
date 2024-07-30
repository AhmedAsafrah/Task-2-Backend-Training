Customer Management API
Objective

The goal of this project is to develop a simple Express application using TypeScript, with integration of TypeORM and MySQL. The application implements basic CRUD operations for a Customer entity and handles custom errors for specific scenarios, ensuring robust and user-friendly interaction.
Features
Customer Entity

The application includes a Customer entity with the following fields:

    id: A unique identifier for each customer (primary key).
    name: The name of the customer.
    mobilePhone: A unique mobile phone number for each customer.
    balance: The current balance associated with the customer.

CRUD Operations

The application supports the following CRUD operations:

    Create Customer: Allows adding a new customer to the database.
    Remove Customer: Enables the removal of an existing customer from the database.
    Edit Customer: Facilitates the modification of an existing customer's details.
    Get Customer by ID: Retrieves a specific customer's information using their unique ID.
    Get All Customers: Fetches a list of all customers in the database.

Custom Error Handling

The application includes custom error handling for various scenarios to ensure smooth and predictable operation. Specific errors handled include:

    Attempting to add a customer with a mobile phone number that is already in use.
    Trying to remove a customer that does not exist in the database.
    Attempting to edit the details of a non-existent customer.
    Trying to retrieve information for a customer that does not exist.

Usage

Once set up, the application provides a RESTful API to interact with the Customer entity. You can add, remove, edit, and retrieve customers through the provided endpoints. Testing can be done using tools like Postman to ensure all operations work as expected and handle errors gracefully.
Error Handling

The application is designed to handle errors effectively, providing meaningful messages and status codes for various error conditions, such as duplicate entries and non-existent records.
Contributing

Contributions to the project are welcome. You can fork the repository and submit pull requests for any enhancements or bug fixes.
License

This project is licensed under the MIT License.
Contact

For any questions or inquiries, please contact Ahmed Asafrah at 211033@ppu.edu.ps.

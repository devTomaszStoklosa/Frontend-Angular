# Angular User Management

This project is a CRUD application for user management built with Angular. It allows users to create, read, update, and delete user information. The application interacts with a backend API implemented in C#.

## Features

- User List: Displays a list of users with options to view, edit, or delete.
- User Detail: Shows detailed information for a selected user.
- User Form: Provides a form for creating or editing user information.

## Project Structure

```
angular-user-management
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── user-list
│   │   │   ├── user-detail
│   │   │   └── user-form
│   │   ├── models
│   │   └── services
│   ├── main.ts
├── angular.json
├── package.json
└── tsconfig.json
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd angular-user-management
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application, use the following command:
```
ng serve
```
Open your browser and navigate to `http://localhost:4200` to view the application.

## API Integration

The application interacts with a C# backend API for user management. Ensure that the API is running and accessible for the application to function correctly.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
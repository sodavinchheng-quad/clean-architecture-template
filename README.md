## Project Architecture

### Core Folder

- `constant`: config variables to be used throughout the project
- `driver`: implementation of functions that connects to external datasources (API, localStorage, etc)
- `utils`: contains common functions that can be used throughout the proejct
  - **Note**: Unit tests should be written for each function defined in this folder to ensure the function works as intended, and is not degraded if a developer updates it

### Domain Layer

This layer is where we write the business logic of the application. This layer should be written before any other layer to describe the implementation of the requirements.
**Note**: This layer should NOT be changed unless:

- The business requirements has changed
- The original implmentation is not correct

Folder structure:

- `model`: describes the object definition, what fields it has, and its relationship with other models
- `repository`: defines what functions the repository implementation should have. The functions will be called by the usecase. The function definitions will NOT be implemented here. The implementation will be in the data layer.
- `usecase`: contains all the usecases that the application will have. Each usecase will have its own repository class from the `repository` folder.

### Data Layer

This layer is where we write the functions to retrieve data from vaious datasources.

Folder structure:

- `datasource`: contains datasource classes with functions to fetch data from various datasources. Each datasource class will have its own driver, which will be used to fetch the data.
- `repository`: contains the implementation of the repository class defined in the domain layer. Each repository class can receive a datasource class which it will use to fetch data from the intended datasource.
- `service`: contains functions that transform the data to fit the application's needs.

### View Layer

This layer is where we write our UI code.

Folder structure:

- `components`
- `ducks`
- `hooks`
- `pages`
- `templates`

### Dependency Injection

The `dependency` folder is where we define our dependencies that we will use throughout the project. This is where we map the repository implementations from the data layer to each usecases.

## Unit Testing

Unit tests should be written for each layer to ensure code quality, and to check for possible degration if the source code is updated in the future

```
yarn test
```

# Linking App Images Repository

_Linking App Images_ is a NodeJS project which provides an API in order to allow _Linking App Front_ users manage their photographs. Regarding technologies involved, the following list offer an application overview:

- NodeJS
- Javascript
- Express

## Authentication

Plain user/password login is the main authentication provider in this project. This credential is hosted in environment variables but it will be nice to have to implement JWT authentication or Single Sign On integration with other Linking App microservices.

## Required Variables

| Variable                              | Objective                               |
| ------------------------------------- | --------------------------------------- |
| LINKING_APP_IMAGES_SERVICE            | Public Service URL                      |
| LINKING_APP_IMAGES_SERVICE_LOCAL_PORT | Express Server Listen Port              |
| LINKING_APP_IMAGES_USER               | Admin username allowed to perform login |
| LINKING_APP_IMAGES_PASS               | Admin user password                     |

## Controllers

_Controller_ folder is dedicated to implement app logic required for it to function properly.

| Folder  | Objective                                                 |
| ------- | --------------------------------------------------------- |
| auth    | Authentication functions                                  |
| storage | Linking App Image Repository management related functions |

## Routes

There are implemented some express routes in order to provide images management service. The following table provides a routes overview regard to their path and main objetive:

| Path    | Method | Req                                               | Res                     | Objective                           |
| ------- | ------ | ------------------------------------------------- | ----------------------- | ----------------------------------- |
| /public | GET    | Image Static Route                                | Image                   | Access users' images                |
| /photos | POST   | Admin user credentials and Image Content (Base64) | New Image's Static Path | Upload users' images                |
|         | DELETE | Admin user credentials and Image's Static Path    | Confirmation message    | Delete users' images                |
| /health | GET    | N/A                                               | Sanity Check message    | Test express services health status |

## Available Scripts

In project root directory, it is possible to execute the following scripts:

### `npm start`

Runs the src/app.js file in order to run the application in both development adn production mode. It is important to bear in mind that nodeJS is execution engine:

```
"start": "node src/app.js"
```

### `npm test`

Runs the test files, included below, in order to run the application test.

- `*`.spec.js -> Unity Test

It is important to bear in mind that testing in this repository is implemented by Mocha.

```
"test": "mocha --timeout 10000 --recursive --exit"
```

## License

BSD

## Author Information

Asier Cidon

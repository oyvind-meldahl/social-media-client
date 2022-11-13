[![Automated E2E Testing](https://github.com/oyvind-meldahl/social-media-client/actions/workflows/e2e.yml/badge.svg)](https://github.com/oyvind-meldahl/social-media-client/actions/workflows/e2e.yml)

[![Automated Unit Testing](https://github.com/oyvind-meldahl/social-media-client/actions/workflows/unit.yml/badge.svg)](https://github.com/oyvind-meldahl/social-media-client/actions/workflows/unit.yml)

[![Deploy static content to Pages](https://github.com/oyvind-meldahl/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/oyvind-meldahl/social-media-client/actions/workflows/pages.yml)

# Workflow CA - Øyvind Meldahl

In this CA we are learning how to set up tests and tailor our working environment. The project is forked from the Noroff Social Media App project.

## Get started

Clone or fork the project and use the editor of your choice.

Initialize git in the project folder:

```
git init
```

Install dependencies

```
npm i
```

Build SASS and Bootstrap

```
npm run build
```

The site is setup to be viewed in Vite, to do so run:

```
npm run dev
```

## Testing

Implemented unit-tests:

- login.test.js
    - Tests successful login.
    - Tests unsuccessful login.
- logout.test.js
    - Test localstorage removing token when loggin out.
- create.test.js
    - Testing successful post creation.

Implemented cypress-tests:

- create.testing.cy.js
    - Testing creating new post the correct way.
    - Testing without title.
- logout.testing.cy.js
    - Testing using logout-button to log out.
- login.testing.cy.js
    - Testing login with correct information.
    - Testing bad email.
    - Testing bad password.

Both unit testing and E2E testing can be run in the terminal with one command:

```
npm run test
```

You may also choose to run only jest:

```
npm run test-unit
```

Or run only Cypress:

```
npm run test-e2e
```

To run cypress in the CLI:

```
npm run test-e2e-cli
```

## Dependencies

This project is using:

- Prettier
- Eslint
- Babel
- Jest
- Husky
- Cypress
- SASS

Project is configured to run the folling as pre-commit hooks:

- Prettier
- Eslint
- And will also check jest test-files.
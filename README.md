# Vonq form

Simple form app with validation and edit functionality.

# Setup
`yarn install` -> `yarn start`

## Notes
- No extra state management (i.e. Redux) as this is a small app  

- Polyfills are all imported (core-js) whereas in a producetion build only the required polyfills should be included  

## Tech
* CSS Modules package *babel-plugin-react-css-modules* (handles both global CSS / CSS modules)

* Formik for quick form implementation and easy validation

* immutability-helper for state updates

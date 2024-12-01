import 'babel-polyfill';
import { schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';

export function callApi(endpoint, schema) {
  return fetch(endpoint)
        .then(checkStatus)
        .then(parseToJSON)
        .then(json => {normalizeJSON(json, schema)})
        .then(result => {result})
        .catch(error => {error: error.message || 'ERROR'});
}

export function checkStatus(response) {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

export function parseToJSON(response) {
  return response.json();
}

export function normalizeJSON(json, schema) {
  const camelizedJson = camelizeKeys(json)
  return Object.assign({}, normalize(camelizedJson, schema));
}

export default () => {
  var login = "googl";
  console.log(callApi(`https://api.github.com/users/${login}`, userSchema));
}

const userSchema = new schema.Entity('users', {
    idAttribute: 'login'
})
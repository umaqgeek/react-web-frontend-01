import {
  BASE_URL
} from './Conn';

export const getData = function(endpoint, params, success, error) {
  fetch(BASE_URL+endpoint)
  .then(res => res.json())
  .then(success)
  .catch(error);
};

export const postData = function(endpoint, params, success, error) {
  fetch(BASE_URL+endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  .then(success)
  .catch(error);
};

export const putData = function(endpoint, params, success, error) {
  fetch(BASE_URL+endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  .then(success)
  .catch(error);
};

export const deleteData = function(endpoint, success, error) {
  fetch(BASE_URL+endpoint, {
    method: 'DELETE',
  })
  .then(success)
  .catch(error);
};

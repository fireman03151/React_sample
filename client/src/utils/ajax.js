import axios from 'axios';

const base = '/internal';

function get(path) {
  return axios.get(`${base}${path}`);
}

function post(path, body) {
  return axios.post(`${base}${path}`, body);
}

function put(path, body) {
  return axios.put(`${base}${path}`, body);
}

// function del(path) {
//   return axios.delete(`${base}${path}`);
// }

/** GET **/

export function getSessionUser() {
  return get('/user/get-session-user');
}

export function getShowCert(username, cert) {
  return get(`/certificate/showCert/${username}/${cert}`);
}

export function getUsernameExists(username) {
  return get(`/api/users/exists?username=${username}`);
}

/** POST **/

export function postReportUser(body) {
  return post('/user/report-user', body);
}

/** PUT **/

export function putUpdateMyAbout(values) {
  return put('/update-my-about', { ...values });
}

export function putUpdateMyUsername(username) {
  return put('/update-my-username', { username });
}

export function putUserAcceptsTerms(quincyEmails) {
  return put('/update-privacy-terms', { quincyEmails });
}

export function putUserUpdateEmail(email) {
  return put('/update-my-email', { email });
}

/** DELETE **/

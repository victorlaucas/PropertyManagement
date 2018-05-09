
import { 
  FETCH_NEWSLETTER_ARCHIVE,
  FETCH_NEWSLETTER_BY_ID,

  SELECT_REQUEST_TYPE,
  FETCH_SUPPORT_REQUESTS,
  FETCH_SUPPORT_REQUEST_BY_ID
} from './types';

import axios from 'axios';
import history from '../history';

const ROOT_URL = 'https://bottega-property-management.herokuapp.com';

export function signinUser({email, password}) {
  return function(dispatch) {
      axios.post(`${ROOT_URL}/signin`, { email, password} )
      .then(response => {

          localStorage.setItem('token', response.data.token)

          history.push('./newsletter');
      })
      .catch(error => {
          console.log(error);
      })
  }
}

//

export function fetchNewsletterArchive(callback) {
  return function(dispatch) {
      axios.get(`${ROOT_URL}/newsletterArchive`, {
          headers: { authorization: localStorage.getItem('token') }
      }) 
          .then(response => {
              dispatch({
                  type: FETCH_NEWSLETTER_ARCHIVE,
                  payload: response.data
              })
              if(callback) { callback() }
          })
  }
}

export function fetchNewsletterById(_id) {
  return (
      {
          type: FETCH_NEWSLETTER_BY_ID,
          payload: _id
      }
  )
}


//

export function saveNewsletterEdit({title, body}, _id, callback) {
  return function(dispatch) {
      axios.put(`${ROOT_URL}/newsletter/edit/${_id}`, {title, body}, {
          headers: { authorization: localStorage.getItem('token') }
      }) 
          .then(response => {
              dispatch(fetchNewsletterArchive(() => {
                  callback()
              }))
          })
  }
}

export function saveNewNewsletter({title, body}, callback) {
  return function(dispatch) {
      axios.post(`${ROOT_URL}/newsletter/add`, {title, body}, {
          headers: { authorization: localStorage.getItem('token') }
      }) 
          .then(response => {
              dispatch(fetchNewsletterArchive(() => {
                  callback()
              }))
          })
  }
}


//
//

export function selectRequestType(type) {
  return {
      type: SELECT_REQUEST_TYPE,
      payload: type
  }
}

export function fetchSupportRequests(callback) {
  return function(dispatch) {
      axios.get(`${ROOT_URL}/support-request`, {
          headers: { authorization: localStorage.getItem('token') }
      }) 
          .then(response => {
              dispatch({
                  type: FETCH_SUPPORT_REQUESTS,
                  payload: response.data
              })
              if(callback) { callback() }
          })
  }
}

export function fetchSupportRequestById(_id) {
  return (
      {
          type: FETCH_SUPPORT_REQUEST_BY_ID,
          payload: _id
      }
  )
}

export function saveSupportRequestEdit({title, body}, _id, callback) {
  return function(dispatch) {
      axios.put(`${ROOT_URL}/support-request/edit/${_id}`, {title, body}, {
          headers: { authorization: localStorage.getItem('token') }
      }) 
          .then(response => {
              dispatch(fetchSupportRequests(() => {
                  callback()
              }))
          })
  }
}
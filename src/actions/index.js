
import { FETCH_NEWSLETTER_ARCHIVE } from './types';

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

export function fetchNewsletterArchive() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/newsletterArchive`, {
            headers: { authorization: localStorage.getItem('token') }
        }) 
            .then(response => {
                dispatch({
                    type: FETCH_NEWSLETTER_ARCHIVE,
                    payload: response.data
                })
            })
    }
}

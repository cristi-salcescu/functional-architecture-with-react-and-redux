import axios from 'axios';
import {apiKey, getResults} from '../shared/api-tools';

function fetchMostPopular(){
    const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;
    return axios(url)
            .then(getResults);
}

function requestMostPopular(){
    const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;
    return { url };
}

export default {
    fetchMostPopular,
    requestMostPopular
};
import axios from 'axios';
import {apiKey, getResults} from '../shared/api-tools';

function requestCriticsPicks(){
    const url = `https://api.nytimes.com/svc/movies/v2/reviews/pick.json?api-key=${apiKey}`;
    return { url }
}

function fetchCriticsPicks(){
    const url = `https://api.nytimes.com/svc/movies/v2/reviews/pick.json?api-key=${apiKey}`;
    return axios(url)
            .then(getResults);
}

export default {
    requestCriticsPicks,
    fetchCriticsPicks
};
import axios from 'axios';
import { fetchStart, fetchSuccess, fetchFailure } from './actions';

function getResults(response){
    return (response && response.data)? response.data.results : response;
}

function fetch(request){
    return function(dispatch){
        dispatch(fetchStart())
        return axios(request)
        .then(getResults)
        .then(function success(data){
            dispatch(fetchSuccess());
            return data;
        })
        .catch(function handlerError(error){
            dispatch(fetchFailure(error));
            throw error;
        });
    }
}

export { fetch };
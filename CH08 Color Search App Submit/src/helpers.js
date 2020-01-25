import pipe from 'lodash/flow';

function getInputValue(e){
    return e.target.value;
}

function withValue(callback){
    return pipe(
        getInputValue,
        callback
    )
}

export { getInputValue, withValue };
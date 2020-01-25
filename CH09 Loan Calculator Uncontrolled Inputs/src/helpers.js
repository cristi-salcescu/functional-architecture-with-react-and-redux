function extractFormData(e){
    const formData = new FormData(e.target);
    const object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });

    return Object.freeze(object);
}

function preventDefault(e){
    e.preventDefault();
    return e
}

export {preventDefault, extractFormData};
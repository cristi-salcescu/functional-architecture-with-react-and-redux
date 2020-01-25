import api from "./api";
import * as actions from './actions';
import { fetch } from '../fetch/operations';

function fetchBookCategories(){
    return function(dispatch){
        dispatch(fetch(api.requestBookCategories()))
                .then(toCategories)
                .then(actions.setBookCategories)
                .then(dispatch);
    }
}

function fetchBooks(category){
    return function(dispatch){
        dispatch(fetch(api.requestBooks(category)))
                .then(toBooks)
                .then(actions.setBooks)
                .then(dispatch);
    }
}

//mappers
function toCategories(list){
    return list.map(toCategory)
}

function toCategory(dto){
    return {
        id: dto.list_name_encoded,
        name: dto.display_name
    }
}

function toBook(dto){
    return {
        isbn: dto.primary_isbn10,
        title: dto.title,
        author: dto.contributor
    }
}

function toBooks(dto){
    return {
        categoryName: dto.display_name,
        list: dto.books.map(toBook)
    }
}

export { fetchBooks, fetchBookCategories };
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import FetchStatus from '../fetch/FetchStatus';
import { fetchBooks } from './operations';

function Books({match, fetchBooks}){
    const {category} = match.params;

    useEffect(() => { 
        fetchBooks(category);
    },[category, fetchBooks]);

    return (
        <div>
            <Link to="/">Home</Link>
            <FetchStatus />
            <BookList />
        </div>
    )
}

export default connect(null, {fetchBooks})(Books);

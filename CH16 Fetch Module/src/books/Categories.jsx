import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withOnEnter from '../shared/withOnEnter';
import CategoryItem from './CategoryItem';
import FetchStatus from '../fetch/FetchStatus';
import {fetchBookCategories} from './operations';

function Categories({categories}){
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <h2>Categories</h2>
            <FetchStatus />
            <div>
                {categories.map(category => 
                    <CategoryItem 
                     category={category} 
                     key={category.id} />)}
            </div>
        </div>
    )
}

function mapState({books}){
    return {
        categories: books.categories
    }
}

export default compose(
    withOnEnter(() => fetchBookCategories),
    connect(mapState)
)(Categories);
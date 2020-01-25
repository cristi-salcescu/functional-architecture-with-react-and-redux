import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchMostPopularArticles } from './operations';
import withOnEnter from '../shared/withOnEnter';
import ArticleItem from './ArticleItem'

function Articles({articles}){
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <h2>Articles</h2>
            <div>
                {articles.map(article => 
                    <ArticleItem 
                     article={article} 
                     key={article.id} />)}
            </div>
        </div>
    )
}

function mapState({articles}){
    return {
        articles
    }
}

export default compose(
    withOnEnter(() => fetchMostPopularArticles),
    connect(mapState)
)(Articles);
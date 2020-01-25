import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import BookCategories from './books/Categories';
import Books from './books/Books';
import Articles from './articles/Articles';
import MovieReviews from './movieReviews/MovieReviews';

function AppRouter(){
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BookCategories} />
        <Route path="/books/:category/" component={Books} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/moviereviews" component={MovieReviews} />
      </Router>
    )
}

export default AppRouter;



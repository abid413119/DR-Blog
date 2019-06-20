import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './container/articleListView';
import ArticleDetail from './container/articleDetailView';

const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/:articleID' component={ArticleDetail} />
        </div>
    )
    
}
export default BaseRouter;
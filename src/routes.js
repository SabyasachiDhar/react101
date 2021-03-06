import React from 'react';
import {Route, IndexRoute} from 'react-router';

import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import App from './components/app';

const Greeting = () => {
    return(
        <div>
            Hey there!!
        </div>
    );
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex} />
        <Route path="greet" component={Greeting} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);
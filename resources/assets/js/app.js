require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render(
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route
                            path="/"
                            getComponent={(location, cb) => {
                                require.ensure(
                                    [],
                                    require => {
                                        cb(null, require('./pages/App').default);
                                    },
                                    'appChunk'
                                );
                            }}
                        >
                            <IndexRoute
                                    getComponent={(location, cb) => {
                                        require.ensure(
                                            [],
                                            require => {
                                                cb(
                                                    null,
                                                    require('./pages/HomePage').default
                                                );
                                            },
                                            'homePageChunk'
                                        );
                                    }}
                                />
                            <Route
                                path="/login"
                                getComponent={(location, cb) => {
                                    require.ensure(
                                        [],
                                        require => {
                                            cb(null, require('./pages/LoginPage').default);
                                        },
                                        'loginPageChunk'
                                    );
                                }}
                            />
                            <Route
                                path="/posts/share"
                                getComponent={(location, cb) => {
                                    require.ensure(
                                        [],
                                        require => {
                                            cb(null, require('./pages/CreatePostPage').default);
                                        },
                                        'createPostPageChunk'
                                    );
                                }}
                            />
                            <Route
                                path="/posts/:id"
                                getComponent={(location, cb) => {
                                    require.ensure(
                                        [],
                                        require => {
                                            cb(null, require('./pages/PostDetailPage').default);
                                        },
                                        'postDetailPageChunk'
                                    );
                                }}
                            />
            </Route>
        </Router>
    </MuiThemeProvider>,
        document.getElementById('app-container'));
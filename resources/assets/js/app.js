require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render(
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
    </Router>,
        document.getElementById('app-container'));
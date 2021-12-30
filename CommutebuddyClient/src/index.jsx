import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import { history, store } from './_helpers';
import { App } from './App';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <Provider store={store}>
    	
        <Router history={history}>
            <Switch>
              {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                <PrivateRoute exact path="/" component={App} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
	</Provider>,
    document.getElementById('app')
);


                        

/*
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route  path={URL_LOGIN} component={SignIn}/>
            <Route  path="/" component={RequireAuth(AppRoot)}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('container'),
  )
};

render(); */

import React from 'react';
import {Router,Route,browserHistory} from 'react-router-3';
import App from './App';
import Four0Four from './NotFound';

export default class Routes extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={App} />
                <Route path={'/todo-app-react/public/index.html'} component={App} />
                <Route path={'*'} component={Four0Four}/>
            </Router>
        );
    }
}
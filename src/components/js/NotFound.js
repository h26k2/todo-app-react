import React from 'react';
import {Link} from 'react-router-3';
import '../css/notFound.css';

export default class NotFound extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main-container">
                <div className="text-container">
                    <h3>oops! the page you're looking for doesn't exists!</h3>
                    <Link to='/'>move to app</Link>
                </div>
            </div>
        )
    }

    componentDidMount(){
        document.title = "Page Not Found!";
        document.head.setAttribute("data-page","404");
    }

    componentWillUnmount(){
        document.head.removeAttribute("data-page");
    }

}   
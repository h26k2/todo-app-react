import React from 'react';
import '../css/index.css'
import Header from './Header';
import Task from './Task';

export default class App extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="app container">
                <Header/>
                <Task/>
            </div>
        )
    }

    componentDidMount(){
        document.title = "React Todo App";
    }

}
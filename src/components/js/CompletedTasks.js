import React from 'react';

export default class CompletedTasks extends React.Component{
    
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render(){
        return this.renderDataAsList();
    }

    renderDataAsList(){
        
        let tasks = this.props.tasks;
        let updatedTasks = [];
        
        
        if(tasks.length < 1 ){
            updatedTasks.push(
                <li className="collection-item" key={0}>
                    You've not completed any task yet!
                </li>
            )
        }

        for(let i=0 ; i<tasks.length ; i++){
            updatedTasks.push(
            <li className="collection-item" key={i+1}>

                <span className="task-text">{tasks[i]}</span>
    
                <a className="btn-floating waves-effect waves-light right right" onClick={this.handleDelete}>
                    <i className="material-icons">delete</i>
                </a>

            </li>);
        }

        return updatedTasks;

    }

    handleDelete(e){
        let clickedTask = e.currentTarget.parentNode.getElementsByClassName("task-text")[0].innerText;
        this.props.onDelete(clickedTask,"completed")
    }

}
import React from 'react';

export default class CurrentTasks extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
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
                    You've no current task, please add a new task!
                </li>
            );

            return updatedTasks;
        }
        
        for(let i=0 ; i<tasks.length ; i++){
            updatedTasks.push(
            <li className="collection-item" key={i+1}>

                <label>
                    <input type="checkbox" className="filled-in"  onChange={this.handleChange} />
                     <span> </span>
                </label>
                
                <span className="task-text">{tasks[i]}</span>
    
                <a className="btn-floating waves-effect waves-light right" onClick={this.handleDelete}>
                    <i className="material-icons">delete</i>
                </a>

            </li>);
        }
        
        return updatedTasks;

    }


    handleChange(e){
        let clickedTask = e.currentTarget.parentNode.parentNode.getElementsByClassName("task-text")[0].innerText;
        this.props.onComplete(clickedTask);
    }

    handleDelete(e){
        let clickedTask = e.currentTarget.parentNode.getElementsByClassName("task-text")[0].innerText;
        this.props.onDelete(clickedTask,"current");
    }

}
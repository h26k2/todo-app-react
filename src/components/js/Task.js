import React from 'react';
import CurrentTasks from './CurrentTasks';
import CompletedTasks from './CompletedTasks';

export default class Task extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            currentTasks : [],
            completedTasks : [],
        }

        this.addToCompleted = this.addToCompleted.bind(this);
        this.deleteTask = this.deleteTask.bind(this);

    }

    render(){
        
        return(
            <div className="row default-padding">

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-field col l10 s12">
                        <input type="text" id="input-panel" ref="userInput"/>
                        <label htmlFor="input-panel">Enter Tasks that needs to be completed</label>
                    </div>
                    <div className="input-field col l2 s12 ">
                        <button type="submit" className="btn waves-effect waves-light align-btn">
                            Add Task
                        </button>
                    </div>
                </form>

                {/*Current Task Stuff*/}

                <div className="col s12">
                    <h5 className="flow-text status-heading">current tasks
                        <span className="new badge" data-badge-caption=" Tasks">
                            {this.state.currentTasks.length}
                        </span>
                    </h5>
                    <div className="divider divider-bottom-margin"></div>
                </div>

                <div className="col s12">
                    <ul className="collection">
                        <CurrentTasks tasks={this.state.currentTasks} onComplete={this.addToCompleted} onDelete={this.deleteTask} />
                    </ul>
                </div>
            
                {/*Completed Task Stuff*/}
                
                <div className="col s12">
                    <h5 className="flow-text status-heading">completed tasks
                        <span className="new badge" data-badge-caption=" Tasks">
                            {this.state.completedTasks.length}
                        </span>
                    </h5>
                    <div className="divider divider-bottom-margin"></div>
                </div>

                <div className="col s12">
                    <ul className="collection completed-task-collection">
                        <CompletedTasks tasks={this.state.completedTasks} onDelete={this.deleteTask} />
                    </ul>
                </div>



            </div>
        )
    }

    handleSubmit(event){
        event.preventDefault();

        let temp = this.state.currentTasks;
        temp.push(this.refs.userInput.value);
        this.refs.userInput.value = null;
        this.refs.userInput.focus();
        this.setState({
            currentTasks : temp
        });
    }

    addToCompleted(val){
        this.setState({
            currentTasks : this.getUpdatedArray(val,this.state.currentTasks,true)
        });
    }

    deleteTask(val,requestRecievedFrom){

        if(requestRecievedFrom == "current"){

            this.setState({
                currentTasks : this.getUpdatedArray(val,this.state.currentTasks,false)
            })
        }

        else if(requestRecievedFrom == "completed"){

            this.setState({
                completedTasks : this.getUpdatedArray(val,this.state.completedTasks,false)
            })
        }


    }


    getUpdatedArray(task,taskArray,bindingCheck){
        
        let updatedTask = taskArray.filter( item => {
            return item != task;
        });

        if(bindingCheck){

            let prevItems = this.state.completedTasks;
            prevItems.push(task);

            this.setState({
                completedTasks : prevItems
            });
        }

        return updatedTask

    }


}
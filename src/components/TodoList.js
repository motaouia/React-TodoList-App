import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddTodo from './AddTodo';

class TodoList extends React.Component{
    state = {
        todos: [
          { Id: '1', Title: 'Push your code to github', Status: 'Done' },
          { Id: '2', Title: 'Email to your manager', Status: 'Pending' }
        ]
     };

     deleteToDo = (todo) => {
        const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
        this.setState({
             todos: filteredItems
        });
    };

    editToDo = (x) => {
        this.setState(state => ({
             todos: state.todos.map(todo => {
               if (todo.Id === x.Id) {
                   return {
                         ...todo,
                         Status: todo.Status === "Done" ? "Pending" : "Done"
                   };
              } else {
                  return todo;
              }
          })
      }));
   };

   addToDo = (todo) => {
    this.setState({
        todos: [...this.state.todos, todo]
    });
};
    render(){
        return(<div>
           <AddTodo onAdd={this.addToDo}></AddTodo> 
            <h1>Todo List </h1>
            <table className="table">
                <thead>
                  <tr>
                      <td>Id</td>
                      <td>Title</td>
                      <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                    {this.state.todos.map(x => {
                        return (
                            <tr key="x.Id">
                                <td>{x.Id}</td>
                                <td>{x.Title}</td>
                                <td style={{ color: x.Status === "Done" ? "green" : "red" }}>{x.Status}</td>
                                <td>
                                    <button
                                     className="btn btn-primary"
                                     onClick={() => {this.deleteToDo(x)}}> 
                                        <span>
                                            <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                        </span>
                                    </button>
                                    <button
                                     className="btn btn-primary"
                                     onClick={()=>{this.editToDo(x)}}>
                                        <span>
                                            <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>);
    }
}

export default TodoList;
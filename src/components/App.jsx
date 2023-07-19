import React, {Component} from "react";
import ToDoList from './ToDoList/ToDoList';
import Form from "./ToDoList/Form/Form";

class App extends Component{
    state={

        todos:[
            {id:'id-1', text:'Разобрать логику', completed: false},
            {id:'id-2', text:'Выучить теорию', completed: true},
            {id:'id-3', text:'Практиковаться', completed: false}

        ],
    }
    deleteToDo=toDoId=>{
      this.setState(prevState=>({
        todos:prevState.todos.filter(todo=>todo.id!==toDoId)
      }))
    }
    formSubmitHandler=data=>{
      console.log(data)
    }

    render(){
        const{todos}=this.state;
        const completedTodos=todos.reduce(
          (acc, todo)=>(todo.completed ? acc+1 : acc),0
          );

        return(
            <>
            <div>
              <p>Общее количество:{todos.length}</p>
              <p>Количество выполненных:{completedTodos}</p>
              <p>Количество невыполненных</p>
            </div>
            <h1>Состояние компонента</h1>
            
            <ToDoList todos={todos} onDeletetodo={this.deleteToDo}/>
            <Form onSubmit={this.formSubmitHandler}/>
            </>
        )
    }
};
export default App

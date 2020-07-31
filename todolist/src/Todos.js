import React from 'react'

const Todos = ({ todos, deleteTodo }) => {


    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.key}>
                    <span >{todo.content}</span>
                    <a class="waves-effect waves-light btn-small" onClick={() => { deleteTodo(todo.id) }}>Delete Me!</a>
                </div>
            );
        })
    ) : (
            <p className="center"> You finished all of your work today </p >
        )
    return (
        <div className="todos collection" >
            {todoList}
        </div >
    );

}

export default Todos;
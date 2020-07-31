import React, { Component } from 'react'

class AddTodoForm extends Component {
    state = {
        content: ''
    }
    hancleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content !== '') {
            this.props.addTodo(this.state)
            this.setState({
                content: ''
            })
        } else {
            alert("You entered an empty job idiot!")
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Add a new Todo: </label>
                    <input type="text" onChange={this.hancleChange} value={this.state.content} />
                </form>
            </div>
        );
    }
}

export default AddTodoForm
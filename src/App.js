import React from 'react'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			item: '',
			todos: [],
		}
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	onSubmit = (event) => {
		event.preventDefault()
		const todos = this.state.todos.slice()
		todos.push({ task: this.state.item, completed: false, id: Date.now() })
		this.setState({ todos: todos, item: '' })
	}

	toggleCompleted = (id) => {
		let todos = this.state.todos.slice()
		todos = todos.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed
				return item
			} else {
				return item
			}
		})
		this.setState({
			todos: todos,
		})
	}

	clearCompleted = (event) => {
		event.preventDefault()
		let todos = this.state.todos.slice()
		todos = todos.filter((item) => !item.completed)
		this.setState({ todos })
	}

	render() {
		return (
			<div>
				<TodoList
					todos={this.state.todos}
					toggleCompleted={this.toggleCompleted}
				/>
				<TodoForm
					value={this.state.item}
					onChange={this.onChange}
					onSubmit={this.onSubmit}
					item={this.state.item}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		)
	}
}

export default App

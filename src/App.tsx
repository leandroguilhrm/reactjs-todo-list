import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { Tasks } from './components/Tasks/Tasks'

import { ITask } from './components/Task/Task'

import styles from './App.module.css'
import './global.css'

function App() {
	const defaultValue: ITask[] = []
	const [tasks, setTasks] = useState(defaultValue);

	function handleCreateTask(content: string) {
		const newTask: ITask = {
			id: uuidv4(),
			isDone: false, 
			content
		}
		setTasks([ newTask, ...tasks ])
	}

	function handleDeleteTask(id: string) {
		const newState = tasks.filter((task) => {
			return task.id !== id;
		})
		setTasks(newState)
	}

	function handleDoneTask(idTask: string) {
		const newState = tasks.map(({ id, isDone, ...rest }) => {
			return (
				id === idTask 
					? { id, isDone: !isDone, ...rest }
					: { id, isDone, ...rest }
			)
		})
		setTasks(newState)
	}

	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<NewTask onCreateTask={handleCreateTask} />
				<Tasks 
					taskList={tasks} 
					onDeleteTask={handleDeleteTask} 
					onDoneTask={handleDoneTask} 
				/>
			</div>
		</>
	)
}

export default App

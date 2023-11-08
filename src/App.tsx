import "./global.css"

import uuid from "react-uuid"
import { ChangeEvent, useState } from "react"

import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { List } from "./components/List"

export interface Tasks {
	id: string;
	checked: boolean;
	description: string;
}

function App() {
	const [tasks, setTasks] = useState<Tasks[]>([])
	const [taskToDoCounter, setTaskToDoCounter] = useState<number>(0)
	const [taskDoneCounter, setTaskDoneCounter] = useState<number>(0)

	function handleNewTask(task: string) {
		setTasks([...tasks, { id: uuid(), checked: false, description: task}])
		setTaskToDoCounter(taskToDoCounter + 1)
	}

	function handleTaskChange(event: ChangeEvent<HTMLInputElement>, taskId: string) {
		const updatedTasks = [...tasks];

		const taskToUpdate = updatedTasks.find((taskItem) => taskItem.id === taskId);

		if (taskToUpdate) {
			taskToUpdate.checked = event.target.checked;

			if (event.target.checked) {
				setTaskDoneCounter(taskDoneCounter + 1)
			} else {
				setTaskDoneCounter(taskDoneCounter - 1)
			}

			setTasks(updatedTasks);
		}

	}

	function handleDeletetask(taskId: string) {
		const updatedTasks = [...tasks];
		const indexToRemove = updatedTasks.findIndex((taskItem) => taskItem.id === taskId);
		updatedTasks.splice(indexToRemove, 1);
		setTasks(updatedTasks);
	}

	return (
		<div>
			<Header />
			<Form handleNewTask={handleNewTask} />
			<List 
				tasks={tasks} 
				handleDeletetask={handleDeletetask} 
				handleTaskChange={handleTaskChange}
				taskToDoCounter={taskToDoCounter}
				taskDoneCounter={taskDoneCounter}
			/>
		</div>
	)
}

export default App

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

	function handleNewTask(task: string) {
		setTasks([...tasks, { id: uuid(), checked: false, description: task}])
	}

	function handleTaskChange(event: ChangeEvent<HTMLInputElement>, taskId: string) {
		const updatedTasks = [...tasks];

		const taskToUpdate = updatedTasks.find((taskItem) => taskItem.id === taskId);

		if (taskToUpdate) {
			taskToUpdate.checked = event.target.checked;
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
			/>
		</div>
	)
}

export default App

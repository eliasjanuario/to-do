import "./global.css"

import { useState } from "react"

import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { List } from "./components/List"

export interface Tasks {
	checked: boolean;
	description: string;
}

function App() {
	const [tasks, setTasks] = useState<Tasks[]>([])

	function handleNewTask(task: string) {
		setTasks([...tasks, { checked: false, description: task}])
	}

	return (
		<div>
			<Header />
			<Form handleNewTask={handleNewTask} />
			<List tasks={tasks} />
		</div>
	)
}

export default App

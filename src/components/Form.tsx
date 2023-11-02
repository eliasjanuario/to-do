import { ChangeEvent, FormEvent, useState } from "react"

import styles from "./Form.module.css"

interface FormProps {
    handleNewTask: (task: string) => void
}

export function Form({ handleNewTask }: FormProps) {
    const [newTask, setNewTask] = useState("")

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        handleNewTask(newTask);
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("")
        setNewTask(event.target.value)
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.form}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                value={newTask} 
                onChange={handleNewTaskChange} 
            />

            <button type="submit">Criar</button>
        </form>
    )
}
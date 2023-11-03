import { ChangeEvent } from "react";
import { Trash } from "phosphor-react";

import { Tasks } from "../App"

import styles from "./List.module.css"

interface ListProps {
    tasks: Tasks[];
    handleDeletetask: (taskId: string) => void;
    handleTaskChange: (event: ChangeEvent<HTMLInputElement>, taskId: string) => void;
}

export function List({ tasks, handleDeletetask, handleTaskChange }: ListProps) {

    return (
        <div className={styles.listContainer}>
            <header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>
                <div>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </header>

            <section>
                {tasks.length === 0 && (
                    <div className={styles.taskDisclaimer}>
                        <h4>Você ainda não tem tarefas cadastradas</h4>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div> 
                )}

                {tasks.length > 0 && tasks.map((task, index) => (
                    <div key={index} className={styles.checkboxContainer}>
                        <input type="checkbox" name={`checkbox_${task.id}`} id={`checkbox_${task.id}`} onChange={(e) => handleTaskChange(e, task.id)} />
                        {task.checked ? (
                            <p className={styles.taskDone}>{task.description}</p>
                        ) : (
                            <p>{task.description}</p>
                        )}
                        <Trash onClick={() => handleDeletetask(task.id)} />
                    </div>
                ))}
            </section>
        </div>
    )
}
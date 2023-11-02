import { Tasks } from "../App"

import styles from "./List.module.css"

interface ListProps {
    tasks: Tasks[];
}

export function List({ tasks }: ListProps) {

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
                    <div>
                        <h4>Você ainda não tem tarefas cadastradas</h4>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div> 
                )}

                {tasks.length > 0 && tasks.map((task, index) => (
                    <div key={index}>
                        <input type="checkbox" name="" id="" />
                        <p>{task.description}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}
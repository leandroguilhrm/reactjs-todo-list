import { ClipboardText } from "phosphor-react"
import { Task, ITask } from "../Task/Task";
import { TaskInfo } from "../TaskInfo/TaskInfo"

import styles from './Tasks.module.css'

export interface ITasks {
    taskList: ITask[]
}

interface ITasksProps extends ITasks {
    onDeleteTask: (id: string) => void;
    onDoneTask: (id: string) => void;
}

export function Tasks({ taskList, onDeleteTask, onDoneTask }: ITasksProps) {

    const isThereTask = taskList.length > 0

    function handleDeleteTask(id: string) {
        onDeleteTask(id)
    }

    function handleDoneTask(id: string) {
        onDoneTask(id)
    }

    return (
        <div className={styles.tasks}>
            <TaskInfo taskList={taskList} />

            <section className={styles.taskList}>
                {isThereTask && taskList.map((task) => {
                    return (
                        <Task
                            id={task.id}
                            key={task.id}
                            isDone={task.isDone}
                            content={task.content}
                            onDeleteTask={handleDeleteTask}
                            onDoneTask={handleDoneTask}
                        />
                    )
                })}

                {!isThereTask && 
                    <div className={styles.emptyTaskList}>
                        <ClipboardText 
                            size={56}
                            weight="light"
                        />
                        
                        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                }
            </section>
        </div>
    )
}
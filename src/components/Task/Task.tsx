import { Circle, CheckCircle, Trash } from "phosphor-react"
import styles from './Task.module.css'

export interface ITask {
    id: string;
    isDone: boolean;
    content: string;
}

interface ITaskProps extends ITask {
    onDeleteTask: (id: string) => void;
    onDoneTask: (id: string) => void;
}

export function Task({ id, isDone, content, onDeleteTask, onDoneTask}: ITaskProps) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleDoneTask() {
        onDoneTask(id)
    }

    return (
        <div className={`${styles.task} ${isDone ? styles.taskDone : ''}`}>
            {isDone 
                ? <CheckCircle 
                    size={24} 
                    weight='fill'
                    className={styles.checkCircle}
                    onClick={handleDoneTask}
                />
                : <Circle 
                    size={24} 
                    weight='bold' 
                    className={styles.circle} 
                    onClick={handleDoneTask}
                />
            }

            <p>{content}</p>

            <Trash 
                onClick={handleDeleteTask}
                size={24} 
                className={styles.trash}
            />
        </div>
    )
}
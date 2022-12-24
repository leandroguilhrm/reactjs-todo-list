import { ITasks } from '../Tasks/Tasks'
import styles from './TaskInfo.module.css'

export function TaskInfo({ taskList }: ITasks) {
    const totalTasks = taskList.length;
    const totalCompletedTasks = taskList.filter((task) => {
        return task.isDone === true;
    }).length;

    return (
        <div className={styles.taskInfo}>
            <div className={styles.totalTasks}>
                Tarefas Criadas
                <span>{totalTasks}</span>
            </div>

            <div className={styles.totalCompletedTasks}>
                Concluídas
                <span>{`${totalCompletedTasks} de ${totalTasks}`}</span>
            </div>
        </div>
    )
}
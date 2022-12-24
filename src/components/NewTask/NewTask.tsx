import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './NewTask.module.css'

interface INewTask {
    onCreateTask: (content: string) => void
}

export function NewTask({ onCreateTask }: INewTask) {

    const [newTaskText, setNewTaskText] = useState('')

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        onCreateTask(newTaskText)
        setNewTaskText('')
    }

    return (
        <form className={styles.form} onSubmit={handleCreateTask}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewTaskChange}
                value={newTaskText}
                required
            />

            <button type="submit" disabled={newTaskText? false : true}>
                Criar
                <PlusCircle size={16} weight='bold' />
            </button>
        </form>
    )
}
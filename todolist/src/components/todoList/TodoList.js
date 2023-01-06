import React from 'react'

function TodoList({todo, setTodo}) {

    function deleteTodo(id) {
        console.log(`удаляем id= ${id}`)
    }

    return (
        <div>
            <h2>Список задач</h2>
            <div>
                {todo.map(target => (
                    <div key={target.id}>
                        <div>{target.title}</div>
                        <button onClick={ () => deleteTodo(target.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList;
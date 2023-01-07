import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

function TodoList({todo, setTodo}) {

const [editId, setEditId] = useState(null)
const [editValue, setEditValue] = useState('')

    //удалить цель
    function deleteTodo(id) {
        const newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    //изменить статус цели
    function changeStatus(id) {
        const newTodo = [...todo].map(item => {
            
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    //редактировать цель
    function editTodo(id) {
        const newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = editValue
            }
            return item
        })
        setTodo(newTodo)
        setEditId(null)
        setEditValue('')
    }


    return (
        <Row>
            <Col>
                <h2>Список задач</h2>
                <div>
                    {todo.map(target => (
                        <div key={target.id}>
                            <div>{target.title}</div>
                            {
                                editId == target.id ?
                                <div>
                                    <input value={editValue} onChange={ (e) => {setEditValue(e.target.value)} }></input>
                                    <button onClick={ () => {editTodo(target.id)} }>Применить</button>
                                </div> : 
                                <div>
                                    <button onClick={ () => deleteTodo(target.id)}>Удалить</button>
                                    <button onClick={ () => changeStatus(target.id)}>Изменить статус</button>
                                    <button onClick={ () => {
                                        setEditId(target.id)
                                        setEditValue(target.title)
                                    } }>Редактировать</button>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    )
}

export default TodoList;
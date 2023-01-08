import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
import tlCss from './TodoList.module.css'

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
                        <div key={target.id} className={tlCss.todo_row}>
                            <div><span className={tlCss.subtext}>таск: </span>{target.title}</div>
                            {
                                editId == target.id ?
                                <div className={tlCss.flex_center}>
                                    <input value={editValue} onChange={ (e) => {setEditValue(e.target.value)} }></input>
                                    <Button variant="success" size="sm" className={tlCss.btn_left_margin} onClick={ () => {editTodo(target.id)} }>Применить</Button>
                                </div> : 
                                <div>
                                    <Button variant="danger" size="sm" className={tlCss.btn_left_margin} onClick={ () => deleteTodo(target.id)}>Удалить</Button>
                                    <Button variant="secondary" size="sm" className={tlCss.btn_left_margin} onClick={ () => changeStatus(target.id)}>Изменить статус</Button>
                                    <Button variant="secondary" size="sm" className={tlCss.btn_left_margin} onClick={ () => {
                                        setEditId(target.id)
                                        setEditValue(target.title)
                                    } }>Редактировать</Button>
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
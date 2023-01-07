import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { v4 } from 'uuid'

function TodoAddingForm({todo, setTodo}) {

    const [value, setValue] = useState('')

    function addTodo() {
        setTodo([...todo, {
            id: v4(), 
            title: value, 
            status: false
        }])
        setValue('')
    }

    return (
        <Row>
            <Col>
                <h2>Добавление задачи</h2>
                <input value={value} onChange={ (e) => {setValue(e.target.value)} }></input>
                <button onClick={ () => {addTodo()} }>Добавить</button>
            </Col>
        </Row>

    )
}
export default TodoAddingForm
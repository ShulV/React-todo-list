import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { v4 } from 'uuid'
import tafCss from './TodoAddingForm.module.css'

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
                <div className={tafCss.flex_center}>
                    <input value={value} onChange={ (e) => {setValue(e.target.value)} }></input>
                    <Button variant="success" size="sm" className={tafCss.btn_left_margin} onClick={ () => {addTodo()} }>Добавить</Button>
                </div>
            </Col>
        </Row>

    )
}
export default TodoAddingForm
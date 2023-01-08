import React from 'react';
import { Row, Col } from 'react-bootstrap';
import hCss from './Header.module.css';
import classNames from 'classnames';

function Header() {
    return (
        <Row className={hCss.header_row} >
            <Col className={hCss.header_col} >
                <h1 className={hCss.header_heading}>Список задач</h1>
            </Col>
        </Row>
    )
}

export default Header
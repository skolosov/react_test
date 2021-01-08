import React from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import './index.scss';

export default class FilterGroup extends React.Component {
    render() {
        return (
            <ButtonGroup className='buttonGroup'>
                <Button variant="info">Все</Button>
                <Button variant="outline-secondary">Зачеркнутые</Button>
                <Button variant="outline-secondary">Астивные</Button>
            </ButtonGroup>
        )
    }
}
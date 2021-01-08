import React from "react";
import {ListGroup,ListGroupItem} from "react-bootstrap";
import {Button,Container,Row,Col} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt,faExclamation} from '@fortawesome/free-solid-svg-icons'

export default class List extends React.Component {
    constructor() {
        super();
        this.onLabelClick =  (e) => {
            console.log(e);
            console.log("done: " + this.props.todos.label);
        };
    }
    render() {
        const {todos} = this.props;

        return (
            <ListGroup as="ul">
                {
                    todos.map((todo,i)=>{
                        return (
                            <ListGroupItem as="li" action key={todo.id} style={{cursor:"pointer"}}>
                                <Container fluid>
                                    <Row>
                                        <Col className="d-flex align-items-center">
                                            <div onClick={this.onLabelClick} className="flex-grow-1">{todo.label}</div>
                                            <Button variant="outline-danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                                            <Button variant="outline-success" style={{paddingLeft:'1.5%',paddingRight:'1.5%',marginLeft:"8px"}}><FontAwesomeIcon icon={faExclamation}/></Button>
                                        </Col>
                                    </Row>
                                </Container>

                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup>
        );
    }
}
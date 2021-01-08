import React from "react";
import {Container,Col,Row} from "react-bootstrap";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import List from "../List";
import FilterGroup from "../FilterGroup";

const Home = () => {
    const todoData = [
        {id:"1", label:"Дело 1"},
        {id:"2", label:"Дело 2"},
        {id:"3", label:"Дело 3"},
        {id:"4", label:"Дело 4"},
        {id:"5", label:"Дело 5"},
    ];
    return (
        <Container>
            <Row className="text-center">
                <Col>
                    <AppHeader/>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col className="d-flex">
                    <SearchPanel/>
                    <FilterGroup/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <List todos={todoData}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
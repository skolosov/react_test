import React from "react";
import {Form} from "react-bootstrap";

const SearchPanel = ()=> {
    return (
            <Form.Group style={{margin:0}} className="flex-grow-1 mr-2">
                <Form.Control type="text" placeholder="Поиск"/>
            </Form.Group>
        // <input placeholder="Поиск"/>
    )
}

export default SearchPanel;
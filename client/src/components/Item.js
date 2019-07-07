import React from 'react';
import {Col, TextInput, Button} from 'react-materialize';

const Item = props => {

    return(<div>
        <Col s={3} />
        <Col s={3}>
            <TextInput onChange={props.changeLabel}  defaultValue={props.label} />
        </Col>
        <Col s={6}>
            <TextInput onChange={props.changeAmount}  defaultValue={props.amount ? String(props.amount) : null} />
            <Button onClick={props.delItem}>Delete</Button>
        </Col>
    </div>)
}

export default Item;
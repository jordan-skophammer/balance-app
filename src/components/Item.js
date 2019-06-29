import React from 'react';
import {Col, TextInput} from 'react-materialize';

const Item = props => {

    return(<div>
        <Col s={6}>
            <TextInput onChange={props.changeLabel}  defaultValue={props.label} />
        </Col>
        <Col s={6}>
            <TextInput onChange={props.changeAmount}  defaultValue={props.amount ? String(props.amount) : null} />
        </Col>
    </div>)
}

export default Item;
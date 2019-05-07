import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';

const LaborCards = (props) => {
    return (
        <Fragment>
                <Col md={{size:4}} lg={{ size: 2 }}>
                    <Card>
                        <h1>{props.title}</h1>
                        <p>{props.value}</p>
                        <p>As of: {props.date}</p>
                    </Card>
            </Col>
        </Fragment>
    )
}

export default LaborCards;
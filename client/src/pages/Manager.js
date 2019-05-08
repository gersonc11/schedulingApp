//  manager portal
// search fuse react for example

import React, { Component } from 'react';
import LaborCards from '../components/Manager/LaborCards';
import LaborTable from '../components/Manager/LaborTable'
import Navigation from '../components/Navbar/Navbar'
import { Col, Row } from 'reactstrap';

const styles = {
    nav: {
        position: 'absolute'
    },
    cards: {
        position: 'relative',
        marginTop: 100
    }
}
class ManagerPortal extends Component {
    render() {
        return (
            <div>
                    <Col lg={{ size: 12, offset: 4 }}>
                <Row>
                    <Navigation
                        style={styles.nav} />
                </Row>
                <Row>
                        <Row style={styles.cards}>
                            <LaborCards
                                title="Current Labor"
                                value="1250.36"
                                date="05/07/19" />
                            <LaborCards
                                title="Current Labor"
                                value="1250.36"
                                date="05/07/19" />
                            <LaborCards
                                title="Current Labor"
                                value="1250.36"
                                date="05/07/19" />
                        </Row>
                </Row>
                <Row>
                    <Col >
                        <LaborTable />
                    </Col>
                </Row>
                    </Col>
            </div>
        )
    }

}

export default ManagerPortal;
import React, { Component } from 'react';
import {
    Row, Col, Form,
    FormGroup, Label,
    Button
} from 'reactstrap';
import Input from './Input'
// import './App.css';

const styles = {
    formContainer: {
        border: 'solid 1px black',
        top: 200,
        height: 500,
        background: 'white',
        '@media (max-width: 414px)': {
            marginTop: 1000
        }

    },
    h2: {
        marginTop: 75
    },
    form: {
        maxWidth: '75%',
        margin: ' 10% auto'
    },
    button: {
        marginBottom: 15
    }
}

class LoginForm extends Component {
    render() {
        return (
            <Col md={{ size: 12 }} lg={{ size: 12 }}>
                <Row>
                    <Col md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} style={styles.formContainer}>
                        <h2 style={styles.h2}>Sign In</h2>
                        <Form style={styles.form}>
                            <Col>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="myemail@email.com"
                                        onChange={this.validateEmail}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                    />
                                </FormGroup>
                            </Col>
                            <Button style={styles.button}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        );
    }
};

export default LoginForm;
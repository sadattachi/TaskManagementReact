import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class TicketsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let token = localStorage.getItem("token");
        fetch("http://127.0.0.1:3000/tickets", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ data: data });
            });

    }
    render() {
        return (
            <Container className="mt-5">
                <Row className="d-flex justify-content-evenly">

                    {
                        this.state.data == null ? <></> :

                            this.state.data.map((ticket) =>
                                <Card className="mb-2" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{ticket.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{ticket.description}</Card.Subtitle>
                                        <Card.Text>
                                            <div>State: {ticket.state}</div>
                                            <div>Worker: {ticket.worker_name}</div>
                                            <div>Creator: {ticket.creator}</div>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            )
                    }
                </Row>
            </Container>
        );
    }
}

export default TicketsPage;
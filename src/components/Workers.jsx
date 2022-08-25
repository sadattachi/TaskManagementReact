import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class WorkersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let token = localStorage.getItem("token");
        fetch("http://127.0.0.1:3000/workers", {
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

                            this.state.data.map((worker) =>
                                <Card className="mb-2" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{worker.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{worker.role} Age: {worker.age}</Card.Subtitle>
                                        <Card.Text>
                                            Tickets count: {worker.tickets_count}
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

export default WorkersPage;
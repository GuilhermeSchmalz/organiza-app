import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const charts = {
    
    
}

function DashboardGrid() {

    return (
        <Container className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="mt-4">Dashboard</h1>
            <Row className="mt-4">
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default DashboardGrid;
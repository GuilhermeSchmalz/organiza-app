import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DashboardCard from '../DashboardCard/DashboardCard';
import "./style.css";

function DashboardGrid() {
    const cards = Array(4).fill(null).map((_, index) => (
        <Col key={index} xs={12} md={6} className="mb-4 d-flex justify-content-start">
            <DashboardCard />
        </Col>
    ));

    return (
        <Container className="full-screen-container">
            <div className="dashboard-content">
                <h1 className="mt-4 dashboard-title">Dashboard</h1>
                <div className="dashboard-grid-wrapper mt-4">
                    <Row className="d-flex justify-content-start">
                        {cards.slice(0, 2)}
                    </Row>
                    <Row className="d-flex justify-content-start">
                        {cards.slice(2, 4)}
                    </Row>
                </div>
            </div>
            <div className="mt-4"></div>
        </Container>
    );
}

export default DashboardGrid;

import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

//Col sizes (sm -> proporção (sempre 1 coluna) | md -> proporção (sm/ value_md) | lg -> proporção (sm/ value_lg))
const HomeScreen = () => {

    return (
        <>
            <h1>Available Vehicles</h1>
            <Container>
                <Row>
                    <Col sm={2} md={2} lg={2} xl={2}>
                        Car
                    </Col>
                    <Col sm={2} md={2} lg={2} xl={2}>
                        Commercial Car
                    </Col>
                    <Col sm={2} md={2} lg={2} xl={2}>
                        Prestige
                    </Col>
                    <Col sm={2} md={2} lg={2} xl={2}>
                        Motorcycle
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeScreen

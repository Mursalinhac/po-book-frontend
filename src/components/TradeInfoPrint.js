import {Col, Form, Row} from "react-bootstrap";

function TradeInPreview(TradeInfo) {
    return (
        <div style={{
            color: 'blue',
            border: '1px solid blue',
            padding: '2rem',
            position: "relative",
            width: '33.33%',
            left: 600,
            top: 600,
            fontSize: '0.6rem',
        }}>

            <Row className="mb-3" xs="auto">
                <Form.Group as={Row}>
                    <Form.Label as={Col}>Year</Form.Label>
                    <Col>{TradeInfo?.year}</Col>

                    <Form.Label as={Col}>Make</Form.Label>
                    <Col>{TradeInfo?.make}</Col>

                    <Form.Label as={Col}>Model</Form.Label>
                    <Col>{TradeInfo?.model}</Col>

                    <Form.Label as={Col}>Color</Form.Label>
                    <Col>{TradeInfo?.color}</Col>
                </Form.Group>
            </Row>

            <Row className="mb-3" xs="auto">
                <Form.Group as={Row}>
                    <Form.Label as={Col}>VIN</Form.Label>
                    <Col>{TradeInfo?.vin}</Col>

                    <Form.Label as={Col}>Miles</Form.Label>
                    <Col>{TradeInfo?.miles}</Col>

                    <Form.Label as={Col}>Trade Value</Form.Label>
                    <Col>{TradeInfo?.tradeValue}</Col>

                    <Form.Label>Balance Owed</Form.Label>
                    <Col>{TradeInfo?.balanceOwed}</Col>
                </Form.Group>
            </Row>

            <Row className="mb-3" xs="auto">
                <Form.Group as={Row}>
                    <Form.Label as={Col}>Net Trade</Form.Label>
                    <Col>{TradeInfo?.netTrade}</Col>

                    <Form.Label as={Col}>Account Number</Form.Label>
                    <Col>{TradeInfo?.accountNumber}</Col>

                    <Form.Label>Info From</Form.Label>
                    <Col>{TradeInfo?.infoFrom}</Col>

                    <Form.Label>Good Will</Form.Label>
                    <Col>{TradeInfo?.goodWill}</Col>
                </Form.Group>
            </Row>
        </div>
    );
}

export default TradeInPreview;
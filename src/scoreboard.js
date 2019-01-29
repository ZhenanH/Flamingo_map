import React from "react";
import { Row, Col, Card } from "antd";

export class Scoreboard extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Row gutter={8}>
          <Col md={6} xs={12}>
            <Card
              title="SENT"
              bordered={true}
              style={{
                textAlign: "center",
                width: "100%",

                display: "inline-block"
              }}
              headStyle={{
                textAlign: "center",
                textTransform: "uppercase",
                padding: "0",
                fontSize: "16px",
                color: "rgba(0,0,0,0.65)"
              }}
              bodyStyle={{
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              size="small"
            >
              <h1 style={{ color: "#04AAFF" }}>45,500</h1>
            </Card>
          </Col>

          <Col md={6} xs={12}>
            <Card
              title="SPEND"
              bordered={true}
              style={{
                textAlign: "center",
                width: "100%",

                display: "inline-block"
              }}
              headStyle={{
                textAlign: "center",
                textTransform: "uppercase",
                padding: "0",
                fontSize: "16px",
                color: "rgba(0,0,0,0.65)"
              }}
              bodyStyle={{
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              size="small"
            >
              <h1 style={{ color: "#99CC66" }}>$55,500</h1>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card
              title="RECIEVED"
              bordered={true}
              style={{
                textAlign: "center",
                width: "100%",

                display: "inline-block"
              }}
              headStyle={{
                textAlign: "center",
                textTransform: "uppercase",
                padding: "0",
                fontSize: "16px",
                color: "rgba(0,0,0,0.65)"
              }}
              bodyStyle={{
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              size="small"
            >
              <div>
                <h1 style={{ color: "#BB66CC" }}>81%</h1>
                <div>34,567</div>
              </div>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card
              title="STAT"
              bordered={true}
              style={{
                textAlign: "center",
                width: "100%",

                display: "inline-block"
              }}
              headStyle={{
                textAlign: "center",
                textTransform: "uppercase",
                padding: "0",
                fontSize: "16px",
                color: "rgba(0,0,0,0.65)"
              }}
              bodyStyle={{
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              size="small"
            >
              <h1>45,500</h1>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

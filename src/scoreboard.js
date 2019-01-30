import React from "react";
import { Row, Col, Card } from "antd";

export class Scoreboard extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Row gutter={8}>
          <Col lg={6} md={12} sm={12} xs={12} style={{ marginBottom: 8 }}>
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
                fontSize: "14px",
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
                <h1 style={{ color: "#04AAFF" }} className="bigstat">
                  45,500
                </h1>
                <span className="substat">4x6 Matte Postcards</span>
              </div>
            </Card>
          </Col>

          <Col lg={6} md={12} sm={12} xs={12} style={{ marginBottom: 8 }}>
            <Card
              title="DELIVERD"
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
                fontSize: "14px",
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
                <h1 style={{ color: "#0a4091" }} className="bigstat">
                  81%
                </h1>
                <span className="substat">36,885</span>
              </div>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} style={{ marginBottom: 8 }}>
            <Card
              title="CONFIRMED ROAS"
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
                fontSize: "14px",
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
                <h1 style={{ color: "#99CC66" }} className="bigstat">
                  1.47
                </h1>

                <span className="substat">$25,000 ÷ $17,000</span>
              </div>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} style={{ marginBottom: 8 }}>
            <Card
              title="Cost per conversion"
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
                fontSize: "14px",
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
                <h1 style={{ color: "#BB66CC" }} className="bigstat">
                  $60
                </h1>
                <span className="substat">$17,309 ÷ 285</span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

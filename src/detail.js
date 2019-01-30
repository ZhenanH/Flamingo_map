import React from "react";
import {
  Col,
  Row,
  Divider,
  Avatar,
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Tabs,
  Tag
} from "antd";
import "antd/dist/antd.css";
import "./index.css";

import { TableView } from "./tableView";
import { Reports } from "./reports";
import { Map } from "./map";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;
export class Detail extends React.Component {
  state = {
    selectedKey: "1",
    collapsed: false,
    showMenu: false
  };
  onMenuSelect = item => {
    this.setState({
      selectedKey: item.key,
      collapsed: this.state.showMenu ? true : false
    });
  };

  render() {
    return (
      <Content
        style={{
          padding: "2% 2% 0 2%",
          maxWidth: "1400px",
          margin: "auto",
          width: "100%"
        }}
      >
        <Content
          style={{
            margin: "0 0 0 0",
            background: "#fff"
          }}
        >
          <Row
            type="flex"
            align="middle"
            style={{ padding: "0 2% 0 2%", borderBottom: "1px solid #e8e8e8" }}
          >
            <Col lg={14} md={12} xs={14} sm={14}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0px"
                }}
              >
                <a onClick={this.props.goToDashboard}>
                  <Icon type="left" style={{ marginRight: 8 }} />
                </a>
                <h2 style={{ margin: "0 0 0 0px" }}>
                  Drop_name_whatever_eh_here{" "}
                </h2>
              </div>
            </Col>
            <Col lg={6} md={8} xs={0} sm={0}>
              <Tag color="blue">Postcard</Tag>
              <Tag color="blue">4x6</Tag>
              <Tag color="green">User 1</Tag>
              <Tag color="green">User 2</Tag>
            </Col>
            <Col lg={4} md={4} xs={10} sm={10} style={{ textAlign: "right" }}>
              <b>Mailed</b> 12/25/2018
            </Col>
          </Row>
        </Content>
        <Layout style={{ padding: "4px 0", background: "#fff" }}>
          <Content class="detail" style={{ padding: "0 24px", minHeight: 280 }}>
            <style>
              {`
                 .detail .ant-tabs-nav-scroll{
                   display:block;
                 }

                 .detail .ant-tabs-bar{
                   margin-bottom:16px;
                 }
                  `}
            </style>

            <Tabs size="large">
              <TabPane tab="Recent Activity" key="1">
                <Row gutter={48}>
                  <Col md={14} sm={24} xs={24}>
                    <h3>Lorem Ipsum</h3>
                    <Reports />
                  </Col>
                  <Col md={10} sm={24} xs={24}>
                    <Map />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Creatives" key="2">
                Creatives
              </TabPane>
              <TabPane tab="Transaction Match" key="3">
                Transaction Match
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Content>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";

import {
  version,
  Button,
  DatePicker,
  Card,
  Col,
  Row,
  Divider,
  Avatar,
  Table,
  Tooltip,
  Alert,
  Input,
  Popover,
  Tag,
  Collapse,
  Drawer
} from "antd";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";
import { Dashboard } from "./dashboard";
import { CreateNewCampaign } from "./createNewCampaign";
import "antd/dist/antd.css";
import "./index.css";

import { Layout, Menu, Breadcrumb, Icon, Tabs } from "antd";
import { Detail } from "./detail";
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const { Meta } = Card;
const Search = Input.Search;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];
const columns = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: status => {
      if (status == 1) {
        return (
          <Icon
            type="check-circle"
            theme="twoTone"
            twoToneColor="#52c41a"
            style={{ fontSize: 11 }}
          />
        );
      } else {
        return (
          <Icon
            type="stop"
            theme="twoTone"
            twoToneColor="#aa0000"
            style={{ fontSize: 11 }}
          />
        );
      }
    },
    align: "center"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Addr. 2",
    dataIndex: "address2",
    key: "address2"
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city"
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state"
  },
  {
    title: "Zip",
    dataIndex: "zip",
    key: "zip"
  },
  {
    title: "Mailed",
    dataIndex: "mailDate",
    key: "mailDate"
  },
  {
    title: "Arrived",
    dataIndex: "arrivalDate",
    key: "arrivalDate"
  },
  {
    title: <Icon type="qrcode" />,
    dataIndex: "qrscan",
    key: "qrscan",
    render: qrscan => {
      if (qrscan == 1) {
        return (
          <Tooltip placement="top" title="1/24/2019">
            <Icon type="check" />
          </Tooltip>
        );
      }
    }
  }
];

const gridStyle = {
  width: "50%",
  height: "80px",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    activeKey: "2",
    visible: false,
    showMenu: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Drawer
          title={
            <div
              className="logo"
              style={{ float: "none", margin: "6px 0 6px 0" }}
            />
          }
          destroyOnClose={true}
          placement={"top"}
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ padding: 0 }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ margin: 0, padding: 0, border: 0 }}
          >
            <Menu.Item key="1">
              <Icon type="mail" />
              Mail Drops
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="paper-clip" />
                  <span>Assets</span>
                </span>
              }
            >
              <Menu.Item key="9">
                <Icon type="ordered-list" />
                Lists
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="picture" />
                Creatives
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="4">
              <Icon type="book" />
              Docs
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="smile" />
              Chat Support
            </Menu.Item>
          </Menu>
        </Drawer>
        <Layout>
          <Header
            className="header"
            style={{ padding: 0, background: "white" }}
          >
            <div
              style={{
                padding: "0px 4%",
                maxWidth: "1400px",
                margin: "auto",
                width: "100%"
              }}
            >
              <div className="logo" />
              <Menu
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <div
                  style={{
                    float: "right",
                    marginLeft: 24,
                    display: this.state.showMenu ? "block" : "none",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <div style={{ verticalAlign: "middle" }}>
                    <Icon
                      type={this.state.collapsed ? "menu" : "menu"}
                      style={{ fontSize: 20 }}
                      onClick={() => {
                        this.setState({ visible: true });
                      }}
                    />
                  </div>
                </div>
                <div style={{ float: "right" }}>
                  <Avatar icon="user" />
                </div>
              </Menu>
            </div>
          </Header>

          <style>
            {`
                 .ant-tabs-nav-scroll{
                   display:none;
                 }

                 .ant-tabs-bar{
                   margin:0;
                 }
                  `}
          </style>
          <Tabs activeKey={this.state.activeKey} animated={false}>
            <TabPane tab="Tab 1" key="1">
              {" "}
              <Dashboard
                createNew={() => {
                  this.setState({ activeKey: "3" });
                }}
                goToDetail={() => {
                  this.setState({ activeKey: "2" });
                }}
                triggerMenu={(collapsed, type) => {
                  console.log(collapsed, type);
                  if (type === "responsive") {
                    this.setState({
                      showMenu: collapsed ? true : false
                      //collapsed: collapsed
                    });
                  }
                }}
              />
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              <Detail
                goToDashboard={() => {
                  this.setState({ activeKey: "1" });
                }}
              />
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              <CreateNewCampaign
                goToDashboard={() => {
                  this.setState({ activeKey: "1" });
                }}
              />
            </TabPane>
          </Tabs>

          <Footer style={{ textAlign: "center" }}>Footer!</Footer>
        </Layout>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

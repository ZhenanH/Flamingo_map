import React from "react";

import {
    Layout, Row, Col, Table, Upload,Collapse,Icon,message,Divider
} from "antd";

import {TableView} from "./tableView";

const { Header, Content, Footer, Sider } = Layout;
const Panel = Collapse.Panel;
const Dragger = Upload.Dragger;
const props = {
  name: "file",
  multiple: true,
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

export class TransactionMatch extends React.Component {
  state = {
    includeOffer: false,
    visible: false
  };

  
  render() {
    return (
      <Content
        style={{
          
        }}
      >
        
      <Row gutter={32}>
          <Col md={18}>
            <h3>How it works</h3>
            <Row gutter={16}>
              <Col md={12}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              
              </Col>
              <Col md ={12}>
               <img  src="./scoreboard.png" style={{width:"100%"}}/>
              </Col>
            </Row>
            <div class="code-box">
                <h3>File Format</h3>
                <pre>
                    <span>Customer ID, Order Amount, Order Date, Order ID</span>
                    <span>12315,$500,12/24/1987,7998</span>
                    <span>89072,$1500,12/26/1987,7999</span>
                    </pre>
            </div>
            <div>
              <h3>Match</h3>
                <TableView/>
            </div>
          </Col>
          <Col md={6}>
          <h3>Upload File</h3>
            <div style={{ background: "#fafafa", padding: 20,marginBottom:24 }}>
              <Dragger {...props} style={{ padding: 20 }}>
                <p className="ant-upload-drag-icon">
                  <Icon type="file-add" />
                </p>
                <p className="ant-upload-text">Click or drag to upload</p>
                <p className="ant-upload-hint">
                  Select and upload a CSV file that follows the format shown to
                  the left.
                </p>
              </Dragger>
            </div>

            <h3>FAQs</h3>
            <Divider style={{ marginBottom: 10 }} />
            <Collapse bordered={false}>
              <Panel header="The Question" key="1" />
              <Panel header="The Question" key="2" />
              <Panel header="The Question" key="3" />
            </Collapse>
          </Col>
      </Row>
       
      </Content>
    );
  }
}

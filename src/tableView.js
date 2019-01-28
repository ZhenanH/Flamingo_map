import React from "react";
import { Table, Tooltip, Icon } from "antd";

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

const data = [
  {
    status: 1,
    key: "1",
    name: "John Brown",
    address: "New York No. 1 Lake Park",
    address2: "#513",
    city: "Brooklyn",
    state: "NY",
    zip: "11231",

    mailDate: "1/15/2019",
    arrivalDate: "1/21/2019",
    qrscan: 1
  },
  {
    status: 0,
    key: "2",
    name: "Sam Smith",
    address: "123 Upper Road",
    address2: "",
    city: "Brooklyn",
    state: "NY",
    zip: "11231",
    mailDate: "-",
    arrivalDate: "-"
  }
];

export class TableView extends React.Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} size="middle" id="addresses" />
    );
  }
}

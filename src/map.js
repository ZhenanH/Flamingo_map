import React from "react";
import { Scoreboard } from "./scoreboard";
import { DatePicker } from "antd";
import { Bar } from "ant-design-pro/lib/Charts";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as am4maps from "@amcharts/amcharts4/maps";

am4core.useTheme(am4themes_animated);
const { RangePicker } = DatePicker;

export class Map extends React.Component {
  componentDidMount() {
    let chart = am4core.create("map", am4charts.XYChart);

    chart.paddingRight = 25;

    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: "name" + i,
        value: visits
      });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (
      <div>
        <Scoreboard />

        <div style={{ padding: 24, textAlign: "center" }}>
          <RangePicker size="small" />
        </div>
        <div style={{ marginBottom: 24 }}>
          <div id="map" style={{ width: "100%", height: "300px" }} />
        </div>
      </div>
    );
  }
}
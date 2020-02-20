//RENDER GRAPH FILE USING AMCHARTS

import React from 'react';
import { connect } from 'react-redux';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { rootState } from '../../store';
import { ChatByDate } from '../../store/chat/types';

interface ChartData {
    date: string,
    missed_chat_count: number,
    conversation_count: number,
    visitors_with_conversation_count: number
}

interface Props {
    chatOriginalData?: ChatByDate[],
    activeTab: string
}
am4core.useTheme(am4themes_animated);

class GraphTab extends React.Component<Props> {
    chart: any;

    getData = () => {
        const { chatOriginalData }  = this.props;
        console.log("in getData", chatOriginalData);
        let newChartData: ChartData[] = [];
            chatOriginalData?.map( (data: ChatByDate) => {     
                const temp: ChartData = {
                    date: data.date,
                    missed_chat_count: data.missed_chat_count,
                    conversation_count: data.conversation_count,
                    visitors_with_conversation_count: data.visitors_with_conversation_count
                }
                return newChartData = [...newChartData, temp];
            });
        return newChartData
    }

    renderGraph = () => {
        let chart = am4core.create("chartdiv", am4charts.XYChart);


        chart.paddingRight = 20;
        chart.data = this.getData();
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "date";
        categoryAxis.title.text = "Date";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Conversation Count";

        // Create series

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "conversation_count";
        series.dataFields.categoryX = "date";
        series.name = "Conversation Number";
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        // Do not try to stack on top of previous series
        // series2.stacked = true;

        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "visitors_with_conversation_count";
        series2.dataFields.categoryX = "date";
        series2.name = "Visitors Conversation Number";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";

        //LINE CHART - MISSED CHAT
        var series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "missed_chat_count";
        series3.stroke = am4core.color("yellow");
        series3.fill = am4core.color("yellow");
        series3.dataFields.categoryX = "date";
        series3.name = "Missed Chat";
        series3.tooltipText = "{name}: [bold]{valueY}[/]";
        series3.strokeWidth = 3;

        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        // Add legend
        chart.legend = new am4charts.Legend();
            // chart code
        this.chart = chart;
    }
    
    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
    }

    componentDidMount() {
        this.renderGraph();
    }

    componentDidUpdate(oldProps: Props) {
        if (oldProps !== this.props) {
            this.renderGraph();
        }
    }

    

    render() {
        return (
            <div>
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
            </div>
        );
    }
}

const mapStateToProps = (state: rootState) => {
    return {
        chatOriginalData: state.chat.chatSummary?.by_date
    }
}

export default connect(mapStateToProps, {})(GraphTab);
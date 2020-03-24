import React, { Component } from "react";
import {
  ComposedChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer
} from "recharts";
export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      dataUpdate: "",
      data: [
        // { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      ]
    };
  }
  componentDidMount = () => {
    const width = window.innerWidth > 0 ? window.innerWidth : Screen.width;
    this.setState({ width: width });
    this.getData();
  };

  getData = async () => {
    const totalInfo = await fetch("https://corona.lmao.ninja/all", {
      method: "GET"
    }).then(response => {
      return response.json();
    });

    this.setState({ dataUpdate: new Date(totalInfo.updated).toString() });
    const response = await fetch("https://corona.lmao.ninja/states", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ data: this.dataFilterFromrapidapi(response) });
  };
  dataFilterFromrapidapi = data => {
    let newData = [];
    data.map(e => {
      let newItem = {
        state: e.state,
        cases: e.cases,
        deaths: e.deaths,
        todayCases: e.todayCases
      };
      return newData.push(newItem);
    });

    return newData;
  };
  render() {
    return (
      <div className="container-fluid">
        <h1 className="center">Covid-19 Cases in USA</h1>
        <p>
          Last updated : {this.state.dataUpdate}
          <br></br>
          Data from https://www.worldometers.info/
        </p>
        <ResponsiveContainer width="95%" height={400}>
          <ComposedChart
            data={this.state.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="state" />
            <YAxis />

            <Legend
              verticalAlign="top"
              wrapperStyle={{
                lineHeight: "40px",
                textTransform: "capitalize"
              }}
            />

            <ReferenceLine y={0} stroke="#000" />
            <Brush
              startIndex={0}
              endIndex={10}
              dataKey="name"
              height={30}
              stroke="#53DB90"
            ></Brush>
            <Bar dataKey="todayCases" fill="#8884d8" />
            <Bar dataKey="cases" fill="#82ca9d" />
            <Tooltip
              cursor={{ stroke: "rgba(126, 88, 96, 0.2)", strokeWidth: 30 }}
            />
            <Area type="monotone" dataKey="deaths" fill="red" stroke="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;

import React, { Component } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      lastChecked: "",
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
    const response = await fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=USA",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_API_rapidapi_host,
          "x-rapidapi-key": process.env.REACT_APP_API_rapidapi_key
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      });

    console.log(response.data);
    this.setState({ lastChecked: response.data.lastChecked });
    this.setState({ data: this.dataFilterFromrapidapi(response.data) });
  };
  dataFilterFromrapidapi = data => {
    let newData = [];
    data.covid19Stats.map(e => {
      let newItem = {
        province: e.province,
        case: e.confirmed,
        deaths: e.deaths
      };
      return newData.push(newItem);
    });
    console.log(newData);
    return newData;
  };
  render() {
    return (
      <div className="container-fluid">
        <h1 className="center">Coronavirus Cases in USA</h1>
        <p>Updated : {this.state.lastChecked}</p>
        <ResponsiveContainer width="95%" height={400}>
          <BarChart
            data={this.state.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="province" />
            <YAxis />
            <Tooltip />
            <Legend
              verticalAlign="top"
              wrapperStyle={{
                lineHeight: "40px",
                textTransform: "capitalize"
              }}
            />
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="name" height={30} stroke="#8884d8" />
            <Bar dataKey="deaths" fill="red" />
            <Bar dataKey="case" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;

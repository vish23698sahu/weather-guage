import React from 'react'
import { Link } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from './DataAPI';
import { santacruzData } from './SantacruzAPI';
import { GoregaonAPI } from './GoregaonAPI';
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './ComparisonChart.css';

const ComparisionChart = () => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        },
    ])

    const handleSelect = (ranges) => {
        setState([ranges.selection]);
    };

    console.log("Range : ", state);

    return (
        <div>
            <h1>Comparision for Cities/Areas:</h1>

            <div className="date-picker">
                <h2>Pick a Range</h2>
                <DateRangePicker
                    ranges={state}
                    onChange={handleSelect}
                    months={2}
                    direction="horizontal"
                />
            </div>


            <div style={{ width: '100%', height: 600 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]} />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="Santacruz"
                            stroke="#8884d8"
                            fill="#d4d2f9"
                            fillOpacity={0.3}
                        />
                        <Area
                            type="monotone"
                            dataKey="Goregaon"
                            stroke="#9cf7a3"
                            fill="#c5f1c9"
                            fillOpacity={0.3}
                        />
                        <Area
                            type="monotone"
                            dataKey="Andheri"
                            stroke="#f0a475"
                            fill="#f4cbb2"
                            fillOpacity={0.3}
                        />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <br />
            <br />

            <h2>For Santacruz (pm1, pm2.5, and pm10 comparision):</h2>
            <div style={{ width: '70%', height: 500 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={santacruzData}
                        margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis ticks={[20, 40, 60, 80, 100, 120, 140, 160]} />
                        <Tooltip />
                        <defs>
                            <linearGradient id="pm1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorAndheri" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="rgb(244, 182, 194)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="rgb(200, 10, 10)" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <Area
                            id='pm1'
                            type="monotone"
                            dataKey="pm1"
                            stroke="#f58fc4"
                            fill="#f9c1de"
                            fillOpacity={0.3}
                        />
                        <Area
                            type="monotone"
                            dataKey="pm2.5"
                            stroke="#6573a8"
                            fill="#c6cff0"
                            fillOpacity={0.3}
                        />
                        <Area
                            type="monotone"
                            dataKey="pm10"
                            stroke="#430324"
                            fill="#5a3749"
                            fillOpacity={0.3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <h2>For Goregaon (pm1, pm2.5, and pm10 comparision):</h2>
            <div style={{ width: '70%', height: 500 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={GoregaonAPI}
                        margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis ticks={[20, 40, 60, 80, 100, 120, 140, 160]} />
                        <Tooltip />
                        <Area
                            id='pm1'
                            type="monotone"
                            dataKey="pm1"
                            stroke="#6aeae7"
                            fill="#c1f5f4"
                            fillOpacity={0.3}
                        />
                        <Area
                            type="monotone"
                            dataKey="pm2.5"
                            stroke="#63d643"
                            fill="#a9ed96"
                            fillOpacity={0.3}
                        />
                        <Area
                            type="monotone"
                            dataKey="pm10"
                            stroke="#e61b1b"
                            fill="#e68585"
                            fillOpacity={0.3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <Link to='/'>Go Back Home</Link>
        </div>
    )
}

export default ComparisionChart
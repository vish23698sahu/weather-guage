import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { windData } from './WindAPI';

const WindiestDays = () => {
    const [optionDay, setOptionDay] = useState('mon');
    const [weekly, setWeekly] = useState('prevW');

    const handleDropdownChange = (e) => {
        setOptionDay(e.target.value);
    }

    const handleDropdownChangeForWeek = (e) => {
        setWeekly(e.target.value);
    }

    return (
        <div>
            <h2>Wind Guage</h2>

            <div>
                <h4>Choose a day:</h4>
                <select onChange={handleDropdownChange} style={{ fontSize: '15px' }}>
                    <option value='mon'>Mon</option>
                    <option value='tue'>Tue</option>
                    <option value='wed'>Wed</option>
                    <option value='thur'>Thur</option>
                    <option value='fri'>Fri</option>
                    <option value='sat'>Sat</option>
                    <option value='sun'>Sun</option>
                </select>
            </div>

            <div style={{ width: '100%', height: 600 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={windData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey={optionDay}
                            stroke="#8884d8"
                            fill="#d4d2f9"
                            fillOpacity={0.3}
                        />

                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <h4>Weekly:</h4>
            <select onChange={handleDropdownChangeForWeek} style={{ fontSize: '15px' }}>
                <option value='prevW'>prev Week</option>
                <option value='thisW'>this Week</option>
            </select>

            <div style={{ width: '100%', height: 600 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={windData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey={weekly}
                            stroke="#8884d8"
                            fill="#d4d2f9"
                            fillOpacity={0.3}
                        />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <br />
            <br />

            <Link to='/' className='link' >Go Back Home</Link>
        </div>
    )
}

export default WindiestDays
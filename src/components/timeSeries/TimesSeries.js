import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../comparison/DataAPI'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const TimesSeries = () => {
    return (
        <div>
            <h2>Series of Comparison</h2>

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

            <Link to='/' className='link'>Go Back Home</Link>
        </div>
    )
}

export default TimesSeries
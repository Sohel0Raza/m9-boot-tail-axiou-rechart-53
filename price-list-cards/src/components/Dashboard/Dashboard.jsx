import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const studentMarks =[
      { id: 1, name: "John", math: 40, physics: 75, chemistry: 55 },
      { id: 2, name: "Mary", math: 80, physics: 75, chemistry: 85 },
      { id: 3, name: "Bob", math: 30, physics: 60, chemistry: 65 },
      { id: 4, name: "Alice", math: 95, physics: 40, chemistry: 90 },
      { id: 5, name: "David", math: 60, physics: 70, chemistry: 65 },
      { id: 6, name: "Sarah", math: 85, physics: 80, chemistry: 85 },
      { id: 7, name: "Peter", math: 35, physics: 55, chemistry: 60 },
      { id: 8, name: "Julia", math: 90, physics: 95, chemistry: 95 },
      { id: 9, name: "Tom", math: 40, physics: 60, chemistry: 55 },
      { id: 10, name: "Lucy", math: 85, physics: 30, chemistry: 45 },
    ];
    
    return (
        <div className='w-10/12 mx-auto'>
            <LineChart
                width={800}
                height={300}
                data={studentMarks}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Line stroke="#8884d8" dataKey="math"></Line>
                <Line stroke="#82ca9d" dataKey="physics"></Line>
                <Line dataKey="chemistry"></Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;
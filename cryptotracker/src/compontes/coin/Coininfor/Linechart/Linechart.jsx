import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BasicAreaChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        style={{ backgroundColor: 'var(--darkgrey)' }} // Dark background
      >
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--blue)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--blue)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />  {/* White grid lines */}
        <XAxis 
          dataKey="date" 
          tick={{ fill: 'var(--white)' }} 
          label={{ value: 'Date', position: 'insideBottomRight', offset: 0, fill: '#ffffff' }} 
        /> {/* White x-axis labels */}
        <YAxis 
          tick={{ fill: 'var(--white)' }} 
          label={{ value: 'Price (USD)', angle: -90, position: 'insideLeft', fill: '#ffffff' }} 
        /> {/* White y-axis labels */}
        <Tooltip />
        <Legend />
        
        <Area 
          type="monotone" 
          dataKey="price" 
          stroke="var(--blue)" 
          fillOpacity={1} 
          fill="url(#colorPrice)" 
        /> {/* Area chart with gradient */}
      </AreaChart>
    </ResponsiveContainer>
  );
}

'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { year: '2019', budget: 3.2, growth: 5.2 },
  { year: '2020', budget: 3.4, growth: 6.3 },
  { year: '2021', budget: 3.7, growth: 8.8 },
  { year: '2022', budget: 4.0, growth: 8.1 },
  { year: '2023', budget: 4.5, growth: 12.5 },
  { year: '2024', budget: 5.0, growth: 11.1 },
  { year: '2025', budget: 5.5, growth: 10.0 },
  { year: '2026', budget: 6.0, growth: 9.1 },
]

interface GrowthChartProps {
  title?: string
  description?: string
}

export function GrowthChart({ 
  title = 'Bangladesh Defense Budget Growth',
  description = 'Historical and projected defense spending (in billions USD)'
}: GrowthChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="year" 
              className="text-xs"
              stroke="rgb(var(--foreground))"
            />
            <YAxis 
              yAxisId="left"
              className="text-xs"
              stroke="rgb(var(--foreground))"
              label={{ value: 'Budget (Billions USD)', angle: -90, position: 'insideLeft' }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              className="text-xs"
              stroke="rgb(var(--foreground))"
              label={{ value: 'Growth Rate (%)', angle: 90, position: 'insideRight' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgb(var(--card))',
                border: '1px solid rgb(var(--border))',
                borderRadius: '6px',
              }}
              labelStyle={{ color: 'rgb(var(--foreground))' }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="budget"
              stroke="#1E40AF"
              strokeWidth={3}
              name="Defense Budget"
              dot={{ fill: '#1E40AF', r: 6 }}
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              stroke="#059669"
              strokeWidth={2}
              name="Growth Rate"
              strokeDasharray="5 5"
              dot={{ fill: '#059669', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-strategic-blue" />
            <span>Actual Data (2019-2023)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-strategic-blue opacity-50" />
            <span>Projected (2024-2026)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
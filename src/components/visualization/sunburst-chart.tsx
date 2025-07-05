'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { motion } from 'framer-motion'

interface SunburstData {
  name: string
  value: number
  children?: SunburstData[]
  color?: string
}

interface SunburstChartProps {
  data: SunburstData[]
  title?: string
  height?: number
}

const COLORS = ['#1E40AF', '#0284C7', '#059669', '#D97706', '#0F172A', '#475569']

export function SunburstChart({ data, title, height = 400 }: SunburstChartProps) {
  // Flatten data for outer ring
  const innerData = data
  const outerData = data.flatMap((item, index) => 
    item.children?.map(child => ({
      ...child,
      parentColor: item.color || COLORS[index % COLORS.length],
    })) || []
  )

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-strategic-blue">
            {payload[0].value}% of portfolio
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {title && (
        <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      )}
      
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={innerData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
          >
            {innerData.map((entry, index) => (
              <Cell 
                key={`inner-cell-${index}`} 
                fill={entry.color || COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
          
          <Pie
            data={outerData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={140}
            fill="#82ca9d"
          >
            {outerData.map((entry, index) => (
              <Cell 
                key={`outer-cell-${index}`} 
                fill={entry.parentColor} 
                fillOpacity={0.6}
              />
            ))}
          </Pie>
          
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {innerData.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.color || COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-trust-slate">{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
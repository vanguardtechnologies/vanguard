'use client'

import { 
  Radar, 
  RadarChart as RechartsRadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts'
import { motion } from 'framer-motion'

interface RadarData {
  category: string
  value: number
  fullMark: number
}

interface RadarChartProps {
  data: RadarData[]
  title?: string
  color?: string
  height?: number
}

export function RadarChart({ 
  data, 
  title, 
  color = '#1E40AF',
  height = 400 
}: RadarChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="font-semibold">{payload[0].payload.category}</p>
          <p className="text-strategic-blue">
            Score: {payload[0].value}/{payload[0].payload.fullMark}
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
        <RechartsRadarChart data={data}>
          <PolarGrid 
            gridType="polygon"
            radialLines={true}
          />
          <PolarAngleAxis 
            dataKey="category"
            tick={{ fontSize: 12 }}
            className="text-trust-slate"
          />
          <PolarRadiusAxis 
            angle={90}
            domain={[0, 100]}
            tick={{ fontSize: 10 }}
          />
          <Radar
            name="Score"
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Tooltip content={<CustomTooltip />} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
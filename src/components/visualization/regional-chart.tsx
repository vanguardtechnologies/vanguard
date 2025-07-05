'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { motion } from 'framer-motion'

interface RegionalData {
  country: string
  defenseSpend: number
  marketSize: number
  growthRate: number
}

interface RegionalChartProps {
  data: RegionalData[]
  title?: string
  height?: number
}

export function RegionalChart({ data, title, height = 400 }: RegionalChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="font-semibold mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ${(entry.value / 1000).toFixed(1)}B
              {entry.name === 'Growth Rate' && '%'}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {title && (
        <h3 className="text-xl font-bold mb-4">{title}</h3>
      )}
      
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="country" 
            tick={{ fontSize: 12 }}
            stroke="#475569"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            stroke="#475569"
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}B`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ fontSize: '14px' }}
            iconType="rect"
          />
          <Bar 
            dataKey="defenseSpend" 
            name="Defense Spending"
            fill="#1E40AF" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="marketSize" 
            name="Market Size"
            fill="#0284C7" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Growth Rate Indicators */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {data.map((item) => (
          <div key={item.country} className="text-center">
            <p className="text-sm text-trust-slate">{item.country}</p>
            <p className="text-lg font-semibold text-secure-green">
              +{item.growthRate}% YoY
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
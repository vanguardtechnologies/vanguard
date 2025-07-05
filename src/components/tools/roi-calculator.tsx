'use client'

import { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react'

interface ROIResults {
  totalRevenue: number
  totalCost: number
  netProfit: number
  roi: number
  paybackPeriod: number
}

export function ROICalculator() {
  const [inputs, setInputs] = useState({
    averageContractValue: 500000,
    contractsPerYear: 2,
    winRate: 0.3,
    marketEntryFee: 50000,
    annualOperatingCost: 100000,
    yearsToCalculate: 3,
  })
  
  const [showResults, setShowResults] = useState(false)

  const calculateROI = (): ROIResults => {
    const { 
      averageContractValue, 
      contractsPerYear, 
      winRate, 
      marketEntryFee, 
      annualOperatingCost, 
      yearsToCalculate 
    } = inputs

    const annualRevenue = averageContractValue * contractsPerYear * winRate
    const totalRevenue = annualRevenue * yearsToCalculate
    const totalCost = marketEntryFee + (annualOperatingCost * yearsToCalculate)
    const netProfit = totalRevenue - totalCost
    const roi = ((netProfit / totalCost) * 100)
    const paybackPeriod = totalCost / annualRevenue

    return {
      totalRevenue,
      totalCost,
      netProfit,
      roi,
      paybackPeriod,
    }
  }

  const handleCalculate = () => {
    setShowResults(true)
  }

  const results = calculateROI()

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-strategic-blue" />
            <h3 className="text-2xl font-bold">ROI Calculator</h3>
          </div>
          <p className="text-trust-slate">
            Estimate your return on investment for entering the Bangladesh defense market
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Average Contract Value ($)
                </label>
                <input
                  type="number"
                  value={inputs.averageContractValue}
                  onChange={(e) => setInputs({ ...inputs, averageContractValue: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Target Contracts Per Year
                </label>
                <input
                  type="number"
                  value={inputs.contractsPerYear}
                  onChange={(e) => setInputs({ ...inputs, contractsPerYear: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Expected Win Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.winRate * 100}
                  onChange={(e) => setInputs({ ...inputs, winRate: Number(e.target.value) / 100 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Market Entry Investment ($)
                </label>
                <input
                  type="number"
                  value={inputs.marketEntryFee}
                  onChange={(e) => setInputs({ ...inputs, marketEntryFee: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Annual Operating Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.annualOperatingCost}
                  onChange={(e) => setInputs({ ...inputs, annualOperatingCost: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Time Period (Years)
                </label>
                <select
                  value={inputs.yearsToCalculate}
                  onChange={(e) => setInputs({ ...inputs, yearsToCalculate: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                >
                  <option value={1}>1 Year</option>
                  <option value={3}>3 Years</option>
                  <option value={5}>5 Years</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button onClick={handleCalculate} className="w-full" size="lg">
              Calculate ROI
            </Button>
          </div>

          {/* Results */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 pt-8 border-t"
              >
                <h4 className="text-lg font-semibold mb-4">Projected Results</h4>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <DollarSign className="w-5 h-5 text-secure-green" />
                        <span className="text-sm text-trust-slate">Revenue</span>
                      </div>
                      <p className="text-2xl font-bold text-secure-green">
                        ${(results.totalRevenue / 1000000).toFixed(2)}M
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <TrendingUp className="w-5 h-5 text-strategic-blue" />
                        <span className="text-sm text-trust-slate">Net Profit</span>
                      </div>
                      <p className="text-2xl font-bold text-strategic-blue">
                        ${(results.netProfit / 1000000).toFixed(2)}M
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Calculator className="w-5 h-5 text-alert-amber" />
                        <span className="text-sm text-trust-slate">ROI</span>
                      </div>
                      <p className="text-2xl font-bold text-alert-amber">
                        {results.roi.toFixed(0)}%
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Clock className="w-5 h-5 text-sky-accent" />
                        <span className="text-sm text-trust-slate">Payback</span>
                      </div>
                      <p className="text-2xl font-bold text-sky-accent">
                        {results.paybackPeriod.toFixed(1)} years
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-trust-slate">
                    <strong>Note:</strong> These projections are based on industry averages and your inputs. 
                    Actual results may vary based on market conditions and execution effectiveness.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}
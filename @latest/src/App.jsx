import { useState } from 'react'
import { analyzeMetricsApi } from './services/api.js'

function App() {

  const [cycleTime, setCycleTime] = useState(0)
  const [bugRate, setBugRate] = useState("")
  const [deploymentFreq, setDeploymentFreq] = useState("")
  const [summary , setSummary] = useState("")

  const [insights, setInsights ] = useState([])
  const [suggestions, setSuggestions] = useState([])

  function handleAnalyze(){
    analyzeMetricsApi({cycleTime,bugRate,deploymentFreq})
    .then((res)=>{
      setInsights(res.insights)
      setSuggestions(res.suggestions)
      setSummary(res.summary)
    })
  }


  return (
    <>
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-6">Developer Productivity</h1>
        
        <div className="space-y-3 mb-6">
          <input type="text" placeholder="Enter bugRate" onChange={(e) => setBugRate(e.target.value)} className="w-full px-3 py-2 border rounded" />
          <input type="text" placeholder="Enter deploymentFreq" onChange={(e) => setDeploymentFreq(e.target.value)} className="w-full px-3 py-2 border rounded" />
          <input type="number" placeholder='enter cycleTime' onChange={(e) => setCycleTime(Number(e.target.value))} className="w-full px-3 py-2 border rounded" />
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded">
          <h2 className="text-lg font-semibold mb-2">Cycle Time: {cycleTime}</h2>
          <h3 className="mb-1">Bug Rate: {bugRate}</h3>
          <h3>Deployment Freq: {deploymentFreq}</h3>
        </div>
        
        <div className="mb-6">
          <p className="font-semibold mb-2">Insights:</p>
          <ul className="space-y-1 list-disc list-inside">
            {insights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Suggestions:</p>
          <ul className='space-y-1 list-disc list-inside bg-amber-100 p-3 rounded'>
            {suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Summary:</p>
          <ul className='space-y-1 list-disc list-inside bg-amber-100 p-3 rounded'>
            {summary}
          </ul>
        </div>

        <button
        onClick={handleAnalyze}
        disabled = {!cycleTime || !bugRate || !deploymentFreq}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Analyze
        </button>
      </div>

    </>
  )
}

export default App

import { analyzeMetrics } from "../utils/analyzeMetrics";

export function analyzeMetricsApi (data) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const result = analyzeMetrics(data)
            resolve(result)
            
        },500)

    })
}
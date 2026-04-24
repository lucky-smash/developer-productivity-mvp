export function analyzeMetrics({ cycleTime, bugRate, deploymentFreq }) {
    let insights = []
    let suggestions = []
    let summaryParts = []

    if (cycleTime > 5) {
        insights.push("Work is slow")
        suggestions.push("Break tasks into smaller parts")
        summaryParts.push("slow workflow")
    }

    if (bugRate.toLowerCase() === "high") {
        insights.push("Too many bugs")
        suggestions.push("Improve testing")
        summaryParts.push("error-prone code")
    }

    if (deploymentFreq.toLowerCase() === "low") {
        insights.push("Releases are slow")
        suggestions.push("Increase deployment frequency")
        summaryParts.push("infrequent releases")
    }

    let summary = 
        summaryParts.length > 0
        ? "Your development process is " + summaryParts.join(",") + "."  
        : "Your development process looks healthy. "

    return {insights,suggestions,summary}
}

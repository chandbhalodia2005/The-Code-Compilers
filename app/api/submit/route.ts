import { NextResponse } from "next/server"
import { getProblemById } from "@/lib/problems"

export async function POST(request: Request) {
  try {
    const { code, language, problemId, userId } = await request.json()

    if (!code || !language || !problemId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const problem = getProblemById(problemId)
    if (!problem) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 })
    }

    // Simulate submission processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock submission results
    const testCases = problem.testCases
    const results = testCases.map((testCase, index) => {
      // In a real application, you would execute the code in a sandbox
      // and compare the actual output with the expected output
      const passed = Math.random() > 0.2 // Randomly determine if test passed

      return {
        testCase: index + 1,
        input: JSON.stringify(testCase.input),
        expectedOutput: JSON.stringify(testCase.output),
        output: passed ? JSON.stringify(testCase.output) : "Incorrect output",
        passed,
      }
    })

    const allPassed = results.every((result) => result.passed)

    // Mock submission data
    const submission = {
      id: `sub_${Date.now()}`,
      problemId,
      userId: userId || "anonymous",
      language,
      status: allPassed ? "Accepted" : "Wrong Answer",
      runtime: `${Math.floor(Math.random() * 100) + 30}ms`,
      memory: `${(Math.random() * 10 + 35).toFixed(1)} MB`,
      submittedAt: new Date().toISOString(),
      results,
    }

    return NextResponse.json({
      success: true,
      submission,
      summary: {
        status: submission.status,
        runtime: submission.runtime,
        memory: submission.memory,
        testCasesPassed: `${results.filter((r) => r.passed).length}/${results.length}`,
      },
    })
  } catch (error) {
    console.error("Error submitting solution:", error)
    return NextResponse.json({ error: "Failed to submit solution" }, { status: 500 })
  }
}


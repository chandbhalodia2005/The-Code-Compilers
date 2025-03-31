import { getProblemById } from "@/lib/problems"
import { notFound } from "next/navigation"
import { CodeEditor } from "@/components/code-editor"

export default function ProblemPage({ params }: { params: { id: string } }) {
  const problem = getProblemById(params.id)

  if (!problem) {
    notFound()
  }

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{problem.title}</h1>
              <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
            </div>
            <p className="mt-2 text-muted-foreground">{problem.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Examples</h2>
            <div className="space-y-4">
              {problem.examples.map((example, index) => (
                <div key={index} className="rounded-md border p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Input:</p>
                      <pre className="mt-1 rounded-md bg-muted p-2 text-sm">{example.input}</pre>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Output:</p>
                      <pre className="mt-1 rounded-md bg-muted p-2 text-sm">{example.output}</pre>
                    </div>
                  </div>
                  {example.explanation && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Explanation:</p>
                      <p className="mt-1 text-sm text-muted-foreground">{example.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-medium">Constraints</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {problem.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <CodeEditor problem={problem} />
        </div>
      </div>
    </div>
  )
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "bg-green-100 text-green-800"
    case "medium":
      return "bg-yellow-100 text-yellow-800"
    case "hard":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}


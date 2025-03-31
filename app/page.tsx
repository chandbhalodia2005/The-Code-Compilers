import Link from "next/link"
import { problems } from "@/lib/problems"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">CodeChallenge</h1>
        <p className="text-muted-foreground max-w-[600px]">
          Improve your coding skills by solving programming challenges
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <Link key={problem.id} href={`/problems/${problem.id}`} className="block">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{problem.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {problem.description.substring(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
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


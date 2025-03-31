import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock leaderboard data
const leaderboardData = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 142,
    rank: 1,
    score: 3240,
  },
  {
    id: "2",
    name: "Jamie Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 137,
    rank: 2,
    score: 3120,
  },
  {
    id: "3",
    name: "Taylor Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 131,
    rank: 3,
    score: 2980,
  },
  {
    id: "4",
    name: "Morgan Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 128,
    rank: 4,
    score: 2850,
  },
  {
    id: "5",
    name: "Casey Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 124,
    rank: 5,
    score: 2760,
  },
  {
    id: "6",
    name: "Riley Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 119,
    rank: 6,
    score: 2650,
  },
  {
    id: "7",
    name: "Jordan Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 115,
    rank: 7,
    score: 2580,
  },
  {
    id: "8",
    name: "Avery Garcia",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 112,
    rank: 8,
    score: 2490,
  },
  {
    id: "9",
    name: "Quinn Martinez",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 108,
    rank: 9,
    score: 2410,
  },
  {
    id: "10",
    name: "Reese Robinson",
    avatar: "/placeholder.svg?height=40&width=40",
    problemsSolved: 105,
    rank: 10,
    score: 2350,
  },
]

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Leaderboard</h1>
        <p className="text-muted-foreground max-w-[600px]">Top performers ranked by problems solved and score</p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16 text-center">Rank</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="text-right">Problems Solved</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="text-center font-medium">{user.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{user.problemsSolved}</TableCell>
                <TableCell className="text-right">{user.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


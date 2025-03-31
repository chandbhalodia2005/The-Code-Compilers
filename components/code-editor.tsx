"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import type { Problem } from "@/lib/problems"
import { useAuth } from "@/lib/auth"

export function CodeEditor({ problem }: { problem: Problem }) {
  const [language, setLanguage] = useState<"javascript" | "python">("javascript")
  const [code, setCode] = useState(problem.starterCode[language])
  const [isRunning, setIsRunning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [output, setOutput] = useState<string | null>(null)
  const { toast } = useToast()
  const { user } = useAuth()

  const handleLanguageChange = (value: string) => {
    if (value === "javascript" || value === "python") {
      setLanguage(value)
      setCode(problem.starterCode[value])
      setOutput(null)
    }
  }

  const runCode = async () => {
    if (!code.trim()) {
      toast({
        title: "Error",
        description: "Please write some code before running.",
        variant: "destructive",
      })
      return
    }

    setIsRunning(true)
    setOutput(null)

    try {
      // Simulate code execution
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock execution result
      const results = problem.testCases.map((testCase, index) => {
        return {
          testCase: index + 1,
          input: JSON.stringify(testCase.input),
          expectedOutput: JSON.stringify(testCase.output),
          output: "Your code output will appear here",
          passed: false,
        }
      })

      setOutput(JSON.stringify(results, null, 2))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to run code. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsRunning(false)
    }
  }

  const submitCode = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit your solution.",
        variant: "destructive",
      })
      return
    }

    if (!code.trim()) {
      toast({
        title: "Error",
        description: "Please write some code before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setOutput(null)

    try {
      // Simulate code submission and evaluation
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock submission result - randomly pass or fail
      const passed = Math.random() > 0.5

      if (passed) {
        toast({
          title: "Success!",
          description: "All test cases passed. Great job!",
        })

        setOutput(
          JSON.stringify(
            {
              status: "Accepted",
              runtime: "45ms",
              memory: "42.1 MB",
              testCasesPassed: `${problem.testCases.length}/${problem.testCases.length}`,
            },
            null,
            2,
          ),
        )
      } else {
        toast({
          title: "Solution failed",
          description: "Some test cases failed. Please try again.",
          variant: "destructive",
        })

        setOutput(
          JSON.stringify(
            {
              status: "Wrong Answer",
              testCasesPassed: `${Math.floor(problem.testCases.length / 2)}/${problem.testCases.length}`,
              failedTestCase: {
                input: JSON.stringify(problem.testCases[0].input),
                expectedOutput: JSON.stringify(problem.testCases[0].output),
                yourOutput: "Incorrect output",
              },
            },
            null,
            2,
          ),
        )
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit code. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-md border">
      <Tabs defaultValue="javascript" onValueChange={handleLanguageChange}>
        <div className="flex items-center justify-between border-b px-4 py-2">
          <TabsList>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={runCode} disabled={isRunning || isSubmitting}>
              {isRunning ? "Running..." : "Run"}
            </Button>
            <Button size="sm" onClick={submitCode} disabled={isRunning || isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </div>

        <TabsContent value="javascript" className="p-0">
          <div className="relative min-h-[400px]">
            <textarea
              className="font-mono text-sm p-4 w-full h-[400px] resize-none bg-background focus:outline-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
            />
          </div>
        </TabsContent>

        <TabsContent value="python" className="p-0">
          <div className="relative min-h-[400px]">
            <textarea
              className="font-mono text-sm p-4 w-full h-[400px] resize-none bg-background focus:outline-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
            />
          </div>
        </TabsContent>
      </Tabs>

      {output && (
        <div className="border-t p-4">
          <h3 className="text-sm font-medium mb-2">Output:</h3>
          <pre className="bg-muted p-4 rounded-md text-xs overflow-auto max-h-[200px]">{output}</pre>
        </div>
      )}
    </div>
  )
}


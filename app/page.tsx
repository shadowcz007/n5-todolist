import { TaskItem } from '@/components/task-item'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const tasks = [
  {
    id: '1',
    title: 'Do Math Homework',
    time: '16:45',
    category: 'University',
    priority: 1
  },
  {
    id: '2',
    title: 'Tack out dogs',
    time: '18:20',
    category: 'Home',
    priority: 2
  },
  {
    id: '3',
    title: 'Business meeting with CEO',
    time: '08:15',
    category: 'Work',
    priority: 3
  }
] as const

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <div className="p-4 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Index</h1>
          <div className="w-10 h-10 rounded-full bg-muted" />
        </div>

        <div className="mb-6">
          <Input
            type="search"
            placeholder="Search for your task..."
            className="w-full bg-muted"
          />
        </div>

        <div className="space-y-2 mb-6">
          <Button variant="outline" size="sm">Today</Button>
          <Button variant="outline" size="sm">Completed</Button>
        </div>

        <div className="space-y-4">
          {tasks.map(task => (
            <TaskItem key={task.id} {...task} />
          ))}
        </div>
      </div>
    </main>
  )
}


import { Circle, CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from "@/lib/utils"

interface TaskItemProps {
  id: string
  title: string
  time: string
  category: 'University' | 'Home' | 'Work'
  priority: number
  completed?: boolean
  onToggle?: (id: string) => void
}

const categoryColors = {
  University: 'bg-blue-500',
  Home: 'bg-red-500',
  Work: 'bg-yellow-500'
}

export function TaskItem({
  id,
  title,
  time,
  category,
  priority,
  completed,
  onToggle
}: TaskItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
      <button
        onClick={() => onToggle?.(id)}
        className="text-muted-foreground hover:text-primary"
      >
        {completed ? (
          <CheckCircle className="h-5 w-5" />
        ) : (
          <Circle className="h-5 w-5" />
        )}
      </button>
      
      <div className="flex-1">
        <h3 className={cn(
          "font-medium",
          completed && "line-through text-muted-foreground"
        )}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">Today At {time}</p>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="secondary" className={categoryColors[category]}>
          {category}
        </Badge>
        <Badge variant="outline">{priority}</Badge>
      </div>
    </div>
  )
}


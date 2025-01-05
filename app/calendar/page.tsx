'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TaskItem } from '@/components/task-item'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const currentDate = 9

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(currentDate)
  
  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <div className="p-4 max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Calendar</h1>
          <div className="flex items-center justify-between mt-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div>
              <h2 className="font-medium">FEBRUARY</h2>
              <p className="text-sm text-muted-foreground">2022</p>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {days.map(day => (
            <div key={day} className="text-center text-sm font-medium">
              {day}
            </div>
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <Button
              key={i}
              variant={i + 6 === selectedDate ? 'default' : 'ghost'}
              className="aspect-square"
              onClick={() => setSelectedDate(i + 6)}
            >
              {i + 6}
            </Button>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          <Button className="flex-1">Today</Button>
          <Button variant="outline" className="flex-1">Completed</Button>
        </div>

        <div className="space-y-4">
          <TaskItem
            id="1"
            title="Do Math Homework"
            time="16:45"
            category="University"
            priority={1}
          />
        </div>
      </div>
    </main>
  )
}


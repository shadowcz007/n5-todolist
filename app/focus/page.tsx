'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function FocusPage() {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [time, setTime] = useState(0)

  const startTimer = () => {
    setIsTimerRunning(true)
    // In a real app, you'd implement the actual timer logic here
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Focus Mode</h1>
        
        <div className="bg-muted rounded-lg p-6 mb-6 text-center">
          <div className="text-6xl font-bold mb-4">
            {String(Math.floor(time / 60)).padStart(2, '0')}:
            {String(time % 60).padStart(2, '0')}
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            While your focus mode is on, all of your notifications will be off
          </p>
          <Button 
            onClick={startTimer}
            className="w-full"
            disabled={isTimerRunning}
          >
            Start Focusing
          </Button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Overview</h2>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>This Week</span>
            <span>4h 30m</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
              <div key={day} className="flex flex-col items-center">
                <Progress value={[30, 50, 80, 40, 70, 90, 20][index]} className="h-24 w-4" />
                <span className="text-xs mt-1">{day}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Applications</h2>
          <div className="space-y-2">
            {[
              { name: 'Instagram', icon: Instagram, time: '4h' },
              { name: 'Twitter', icon: Twitter, time: '3h' },
              { name: 'Facebook', icon: Facebook, time: '1h' },
            ].map((app) => (
              <div key={app.name} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <app.icon className="h-6 w-6" />
                  <span>{app.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">You spent {app.time} on {app.name} today</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}


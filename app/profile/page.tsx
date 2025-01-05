import { Button } from '@/components/ui/button'
import { LogOut, ChevronRight } from 'lucide-react'

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-muted mb-2" />
          <h2 className="text-xl font-semibold">Martha Hays</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">10</div>
            <div className="text-sm text-muted-foreground">Task left</div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm text-muted-foreground">Task done</div>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <h3 className="font-semibold mb-2">Settings</h3>
          {[
            'App Settings',
            'Change account name',
            'Change account password',
            'Change account Image',
          ].map((setting) => (
            <Button key={setting} variant="ghost" className="w-full justify-between">
              {setting}
              <ChevronRight className="h-4 w-4" />
            </Button>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold mb-2">Uptodo</h3>
          {[
            'About US',
            'FAQ',
            'Help & Feedback',
            'Support US',
          ].map((item) => (
            <Button key={item} variant="ghost" className="w-full justify-between">
              {item}
              <ChevronRight className="h-4 w-4" />
            </Button>
          ))}
        </div>

        <Button variant="destructive" className="w-full mt-6">
          <LogOut className="mr-2 h-4 w-4" /> Log out
        </Button>
      </div>
    </main>
  )
}


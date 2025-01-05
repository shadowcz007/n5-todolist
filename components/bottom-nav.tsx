'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calendar, Clock, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Index', icon: Home },
  { href: '/calendar', label: 'Calendar', icon: Calendar },
  { href: '/focus', label: 'Focus', icon: Clock },
  { href: '/profile', label: 'Profile', icon: User }
]

export function BottomNav() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center justify-center flex-1 h-full",
              pathname === href ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -top-6">
        <Link
          href="/new"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground"
        >
          <span className="text-2xl">+</span>
        </Link>
      </div>
    </nav>
  )
}


"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { ChevronDown, Heart } from "lucide-react"
import '../css/globals.css';
import logo from './Clinic Logo.png';
export function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <header className="w-full position:sticky top-0 z-50">
      {/* Emergency Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        If you are experiencing a medical emergency, please contact 911. Our next clinic will be on September 27, 2025.
      </div>

      {/* Main Header */}
      <div className="bg-primary/75 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src={logo} alt="Main" className="w-auto h-auto text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">BCS FREE HEALTH CLINIC</h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Home
              </Button>

              <DropdownMenu open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:text-primary flex items-center">
                    About Us
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Our Team</DropdownMenuItem>
                  <DropdownMenuItem>Our Mission</DropdownMenuItem>
                  <DropdownMenuItem>Our Partners</DropdownMenuItem>
                  <DropdownMenuItem>Reports</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" className="text-foreground hover:text-primary">
                Services
              </Button>

              <Button variant="ghost" className="text-foreground hover:text-primary">
                Get Involved
              </Button>

              <Button variant="ghost" className="text-foreground hover:text-primary">
                Symposium
              </Button>

              <Button variant="ghost" className="text-foreground hover:text-primary">
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

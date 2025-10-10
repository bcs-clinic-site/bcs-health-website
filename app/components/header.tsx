"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import '../css/globals.css';
import logo from '../home/Clinic Logo.png';
import { Link, useLocation } from "react-router";

export function Header() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("Home")
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false) 
  const [isInvolvedOpen, setIsInvolvedOpen] = useState(false) 
  const [isSynopOpen, setIsSynopOpen] = useState(false)

  // Updated to objects with .name and .path
  const aboutItems = [
    { name: "Our Team", path: "/about/team" },
    { name: "Our Providers", path: "/about/providers"},
    { name: "Our Partners", path: "/about/partners" },
    { name: "Reports", path: "/about/reports" },
  ]
  const servicesItems = [
    { name: "Monthly Appointments", path: "/services/appointments" },
    { name: "Bait ul Naeem", path: "/services/bait-ul-naeem" },
    { name: "Irshad Al-Aafiyah", path: "/services/irshad" },
    { name: "Immanah", path: "/services/immanah" },
    { name: "Schedule/News", path: "/services/schedule" },
    { name: "Feedback", path: "/services/feedback" },
  ]
  const involvedItems = [
    { name: "Volunteer", path: "/involved/volunteer" },
    { name: "Donate", path: "/involved/donate" },
    { name: "Outreach Events", path: "/involved/outreach" },
    { name: "Education Events", path: "/involved/education" },
  ]
  const synopItems = [
    { name: "Symposium Details", path: "/symposium/details" },
    { name: "Applications", path: "/symposium/applications" },
    { name: "Past Winners", path: "/symposium/winners" },
    { name: "Abstract Booklets", path: "/symposium/abstracts" },
    { name: "Symposium Reports", path: "/symposium/reports" },
    { name: "Gallery", path: "/symposium/gallery" },
  ]

  const isActive = (page: string, isDropdown = false): string => 
    location.pathname === page ? "text-[#dd73b5]" : isDropdown ? "text-primary" : "text-white"

  const isCategoryActive = (items: { name: string; path: string }[]): boolean => 
    items.some(item => location.pathname === item.path)

  return (
    <header className="w-full sticky top-0 z-50 bg-black">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap');
      </style>

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
                <img src={logo} alt="Main" className="w-auto h-auto" />
              </div>
              <div>
                <h1 className="text-3xl font-[Bebas_Neue] text-white">BCS FREE HEALTH CLINIC</h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Home */}
              <Button
                variant="ghost"
                className={`${isActive("/")} hover:bg-[#dd73b5]`}
              >
                <Link to="/">Home</Link>
              </Button>

              {/* About Us */}
              <DropdownMenu open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${isCategoryActive(aboutItems) || activePage === "About Us" ? "text-[#FF69B4]" : "text-white"} hover:bg-[#dd73b5] flex items-center`}
                  >
                    About Us
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {aboutItems.map(item => (
                    <DropdownMenuItem
                      key={item.name}
                      className={`dropdown-hover ${isActive(item.path, true)}`}
                      onClick={() => setIsAboutOpen(false)} 
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services */}
              <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${isCategoryActive(servicesItems) ? "text-[#FF69B4]" : "text-white"} hover:bg-[#dd73b5] flex items-center`}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {servicesItems.map(item => (
                    <DropdownMenuItem
                      key={item.name}
                      className={`dropdown-hover ${isActive(item.path, true)}`}
                      onClick={() => setIsServicesOpen(false)} 
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Get Involved */}
              <DropdownMenu open={isInvolvedOpen} onOpenChange={setIsInvolvedOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${isCategoryActive(involvedItems) ? "text-[#FF69B4]" : "text-white"} hover:bg-[#dd73b5] flex items-center`}
                  >
                    Get Involved
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {involvedItems.map(item => (
                    <DropdownMenuItem
                      key={item.name}
                      className={`dropdown-hover ${isActive(item.path, true)}`}
                      onClick={() => setIsInvolvedOpen(false)} 
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Symposium */}
              <DropdownMenu open={isSynopOpen} onOpenChange={setIsSynopOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${isCategoryActive(synopItems) ? "text-[#FF69B4]" : "text-white"} hover:bg-[#dd73b5] flex items-center`}
                  >
                    Symposium
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {synopItems.map(item => (
                    <DropdownMenuItem
                      key={item.name}
                      className={`dropdown-hover ${isActive(item.path, true)}`}
                      onClick={() => setIsSynopOpen(false)} 
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Contact Us */}
              <Button
                variant="ghost"
                className={`${isActive("/contact")} hover:bg-[#dd73b5]`}
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import "../css/globals.css"
import logo from "../images/home/Clinic Logo.png"
import { Link, useLocation } from "react-router"

export function Header() {
  const location = useLocation()
  const [activePage, setActivePage] = useState("Home")
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isInvolvedOpen, setIsInvolvedOpen] = useState(false)
  const [isSynopOpen, setIsSynopOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [dateText, setDateText] = useState("")

  // Updated to objects with .name and .path
  const aboutItems = [
    { name: "Our Team", path: "/about/team" },
    { name: "Our Providers", path: "/about/providers" },
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
    location.pathname === page ? "text-[#dd73b5]" : (isDropdown && !isMobileMenuOpen) ? "text-primary" : "text-white"

  const isCategoryActive = (items: { name: string; path: string }[]): boolean =>
    items.some((item) => location.pathname === item.path)

  useEffect(() => {
    fetch("/! Editable Content/clinic_date.txt")
      .then((res) => res.text())
      .then((text) => setDateText(text))
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header className="w-full sticky top-0 z-50 bg-black">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap');
      </style>

      {/* Emergency Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-xs sm:text-sm">
        <span className={`${dateText ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          If you are experiencing a medical emergency, please contact 911. Our next clinic will be on {dateText}.
        </span>
      </div>

      {/* Main Header */}
      <div className="bg-primary/75 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <img src={logo || "/placeholder.svg"} alt="Main" className="w-auto h-auto" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-[Bebas_Neue] text-white">BCS FREE HEALTH CLINIC</h1>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-[Bebas_Neue] text-white">BCS FREE HEALTH CLINIC</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Home */}
              <Button variant="ghost" className={`${isActive("/")} hover:bg-[#dd73b5] cursor-pointer`}>
                <Link to="/">Home</Link>
              </Button>

              {/* About Us */}
              <DropdownMenu open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${isCategoryActive(aboutItems) || activePage === "About Us" ? "text-[#FF69B4]" : "text-white"} hover:bg-[#dd73b5] flex items-center cursor-pointer`}
                  >
                    About Us
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {aboutItems.map((item) => (
                    <DropdownMenuItem asChild key={item.name} onClick={() => setIsAboutOpen(false)}>
                      <Link
                        to={item.path}
                        className={`w-full block px-2 py-1.5 ${isActive(item.path, true)} cursor-pointer`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services */}
              <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${isCategoryActive(servicesItems) ? "text-[#FF69B4]" : "text-white"} hover:bg-[#dd73b5] flex items-center cursor-pointer`}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {servicesItems.map((item) => (
                    <DropdownMenuItem asChild key={item.name} onClick={() => setIsServicesOpen(false)}>
                      <Link
                        to={item.path}
                        className={`w-full block px-2 py-1.5 ${isActive(item.path, true)} cursor-pointer`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Get Involved */}
              <DropdownMenu open={isInvolvedOpen} onOpenChange={setIsInvolvedOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${isCategoryActive(involvedItems) ? "text-[#FF69B4]" : "text-white"} hover:bg-[#dd73b5] flex items-center cursor-pointer`}
                  >
                    Get Involved
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {involvedItems.map((item) => (
                    <DropdownMenuItem asChild key={item.name} onClick={() => setIsInvolvedOpen(false)}>
                      <Link
                        to={item.path}
                        className={`w-full block px-2 py-1.5 ${isActive(item.path, true)} cursor-pointer`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Symposium */}
              <DropdownMenu open={isSynopOpen} onOpenChange={setIsSynopOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${isCategoryActive(synopItems) ? "text-[#FF69B4]" : "text-white"} hover:bg-[#dd73b5] flex items-center cursor-pointer`}
                  >
                    Symposium
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {synopItems.map((item) => (
                    <DropdownMenuItem asChild key={item.name} onClick={() => setIsSynopOpen(false)}>
                      <Link
                        to={item.path}
                        className={`w-full block px-2 py-1.5 ${isActive(item.path, true)} cursor-pointer`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Contact Us */}
              <Button variant="ghost" className={`${isActive("/contact")} hover:bg-[#dd73b5] cursor-pointer`}>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:bg-[#dd73b5] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu with Animation */}
          <div
            // This div controls the height transition for the slide-down effect
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <nav className="pb-4 space-y-2">
              <Link to="/" className={`block px-4 py-2 rounded-md ${isActive("/")} hover:bg-[#dd73b5] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 delay-100" : "opacity-0"}`}>
                Home
              </Link>

              {/* Mobile About Us */}
              <details className={`px-4 py-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 delay-150" : "opacity-0"}`}>
                <summary
                  className={`cursor-pointer font-semibold ${isCategoryActive(aboutItems) ? "text-[#FF69B4]" : "text-white"} hover:text-[#dd73b5]`}
                >
                  About Us
                </summary>
                <div className="ml-4 mt-2 space-y-1">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-3 py-1.5 rounded-md text-sm ${isActive(item.path, true)} hover:bg-[#dd73b5]`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Mobile Services */}
              <details className={`px-4 py-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 delay-200" : "opacity-0"}`}>
                <summary
                  className={`cursor-pointer font-semibold ${isCategoryActive(servicesItems) ? "text-[#FF69B4]" : "text-white"} hover:text-[#dd73b5]`}
                >
                  Services
                </summary>
                <div className="ml-4 mt-2 space-y-1">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-3 py-1.5 rounded-md text-sm ${isActive(item.path, true)} hover:bg-[#dd73b5]`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Mobile Get Involved */}
              <details className={`px-4 py-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 delay-250" : "opacity-0"}`}>
                <summary
                  className={`cursor-pointer font-semibold ${isCategoryActive(involvedItems) ? "text-[#FF69B4]" : "text-white"} hover:text-[#dd73b5]`}
                >
                  Get Involved
                </summary>
                <div className="ml-4 mt-2 space-y-1">
                  {involvedItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-3 py-1.5 rounded-md text-sm ${isActive(item.path, true)} hover:bg-[#dd73b5]`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Mobile Symposium */}
              <details className={`px-4 py-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 delay-300" : "opacity-0"}`}>
                <summary
                  className={`cursor-pointer font-semibold ${isCategoryActive(synopItems) ? "text-[#FF69B4]" : "text-white"} hover:text-[#dd73b5]`}
                >
                  Symposium
                </summary>
                <div className="ml-4 mt-2 space-y-1">
                  {synopItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-3 py-1.5 rounded-md text-sm ${isActive(item.path, true)} hover:bg-[#dd73b5]`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Mobile Contact Us */}
              <Link to="/contact" className={`block px-4 py-2 rounded-md ${isActive("/contact")} hover:bg-[#dd73b5] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 delay-350" : "opacity-0"}`}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
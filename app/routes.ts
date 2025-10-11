import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Home page

  // About pages
  { path: "about/team", file: "routes/about/team.tsx" },
  { path: "about/providers", file: "routes/about/providers.tsx" },
  { path: "about/partners", file: "routes/about/partners.tsx" },
  { path: "about/reports", file: "routes/about/reports.tsx" },

  // Services pages
  //{ path: "services/appointments", file: "routes/services/appointments.tsx" },
  //{ path: "services/bait-ul-naeem", file: "routes/services/bait-ul-naeem.tsx" },
  //{ path: "services/irshad", file: "routes/services/irshad.tsx" },
  //{ path: "services/immanah", file: "routes/services/immanah.tsx" },
  //{ path: "services/schedule", file: "routes/services/schedule.tsx" },
  //{ path: "services/feedback", file: "routes/services/feedback.tsx" },

  // Get Involved pages
  //{ path: "involved/volunteer", file: "routes/involved/volunteer.tsx" },
  //{ path: "involved/donate", file: "routes/involved/donate.tsx" },
  //{ path: "involved/outreach", file: "routes/involved/outreach.tsx" },
  //{ path: "involved/education", file: "routes/involved/education.tsx" },

  // Symposium pages
  
  { path: "symposium/details", file: "routes/symposium/details.tsx" },
  { path: "symposium/applications", file: "routes/symposium/applications.tsx" },
  { path: "symposium/winners", file: "routes/symposium/winners.tsx" },
  { path: "symposium/abstracts", file: "routes/symposium/abstracts.tsx" },
  { path: "symposium/reports", file: "routes/symposium/reports.tsx" },
  { path: "symposium/gallery", file: "routes/symposium/gallery.tsx" },

  // Contact page
  { path: "contact", file: "routes/contact.tsx" },
] satisfies RouteConfig;

import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Home page
  {
    path: "about/team",
    file: "routes/about/team.tsx",
  },
  {
    path: "about/providers",
    file: "routes/about/providers.tsx"
  },
  {
    path: "about/partners",
    file: "routes/about/partners.tsx"
  },
  {
    path: "about/reports",
    file: "routes/about/reports.tsx"
  }
] satisfies RouteConfig;
import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Home page
  {
    path: "about/team",
    file: "routes/about/team.tsx",
  },
] satisfies RouteConfig;
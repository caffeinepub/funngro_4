import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import CompanyPortal from "@/pages/CompanyPortal";
import TeenPortal from "@/pages/TeenPortal";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";

// Root layout component
function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.175 0 0)",
            border: "1px solid oklch(0.28 0 0)",
            color: "oklch(0.96 0 0)",
          },
        }}
      />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: RootLayout,
});

const teenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TeenPortal,
});

const companyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/companies",
  component: CompanyPortal,
});

const routeTree = rootRoute.addChildren([teenRoute, companyRoute]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

// Export for use in components
export { useRouterState };

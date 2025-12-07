import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Home } from "./pages/Home";
// import { Projects } from "./pages/Projects";
import { LearnMore } from "./pages/LearnMore";
import { NotFound } from "./pages/NotFound";

// lazy loading projects page so all js of the app isn't sent on page load
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
const Projects = lazy(() => import("./pages/Projects"));
import SkeletonProjects from "@/components/skeletons/SkeletonProjects";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route
            path="/projects"
            element={
              // anyone who has an error will be able to navigate to home page
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => navigate("/")}
              >
                <Suspense fallback={<SkeletonProjects />}>
                  <Projects />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route path="/learnmore" element={<LearnMore />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

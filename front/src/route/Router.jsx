import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TeamPage from "../pages/TeamPage";
import TimeSheetPage from "../pages/TimesheetPage";
import Container from "../layout/Container";
import SummaryPage from "../pages/SummaryPage";
import EditTeampage from "../components/EditTeamPage";
import ProjectPage from "../pages/ProjectPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/registerPage",
        element: <RegisterPage />,
    },
    {
        path: "/",
        element: <Container />,
        children: [
            {
                path: "/teamPage",
                element: <TeamPage />,
            },
            {
                path: "/TimesheetPage",
                element: <TimeSheetPage />,
            },
            {
                path: "/summaryPage",
                element: <SummaryPage />,
            },
            {
                path: "/editteampage",
                element: <EditTeampage />,
            },
            {
                path: "/ProjectPage",
                element: <ProjectPage />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}

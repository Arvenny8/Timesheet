import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TeamPage from "../pages/TeamPage";
import TimeSheetPage from "../pages/TimesheetPage";
import Container from "../layout/Container";
import SummaryPage from "../pages/SummaryPage";

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
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}

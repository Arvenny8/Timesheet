import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="h-16 bg-slate-800 flex justify-between">
                <div className="flex gap-10 items-center px-10 ">
                    <Link to="/teamPage">
                        <div className="font-semibold text-lg text-white">
                            Team
                        </div>
                    </Link>
                    <Link to="timesheetPage">
                        <div className="font-semibold text-lg text-white">
                            Timesheet
                        </div>
                    </Link>
                    {/* <Link to="SummaryPage">
                        <div className="font-semibold text-lg text-white">
                            Summary
                        </div>
                    </Link> */}
                    <Link to="ProjectPage">
                        <div className="font-semibold text-lg text-white">
                            Project
                        </div>
                    </Link>
                </div>
                <Link to="/">
                    <div className="px-10 py-5 flex text-lg items-center font-semibold text-white">
                        Logout
                    </div>
                </Link>
            </header>
        </>
    );
}

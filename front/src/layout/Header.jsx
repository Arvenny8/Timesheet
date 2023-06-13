import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="h-16 bg-slate-300 flex justify-between">
                <div className="flex gap-10 items-center px-10 ">
                    <Link to="/summaryPage">
                        <div className="font-semibold text-lg ">Summary</div>
                    </Link>
                    <Link to="/teamPage">
                        <div className="font-semibold text-lg ">Team</div>
                    </Link>
                    <Link to="timesheetPage">
                        <div className="font-semibold text-lg ">Timesheet</div>
                    </Link>
                </div>
                <div className="px-10 flex text-lg items-center font-semibold">
                    Logout
                </div>
            </header>
        </>
    );
}

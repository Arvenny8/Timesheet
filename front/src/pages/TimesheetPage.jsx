import InputBox from "../components/InputBox";
import {
    getPreviousFriday,
    getPreviousMonday,
    getPreviousThursday,
    getPreviousTueday,
    getPreviousWednesday,
} from "../util/datetime";

export default function TimesheetPage() {
    const Mon = getPreviousMonday();
    const Tue = getPreviousTueday();
    const Wed = getPreviousWednesday();
    const Thu = getPreviousThursday();
    const Fri = getPreviousFriday();
    return (
        <>
            <div className="h-screen bg-slate-600 ">
                <>
                    <div className="grid grid-cols-7 gap-5 text-center">
                        <div className="text-white font-semibold ">Project</div>
                        <div className="text-white font-semibold">
                            {Mon.toDateString()}
                        </div>
                        <div className="text-white font-semibold">
                            {Tue.toDateString()}
                        </div>
                        <div className="text-white font-semibold">
                            {Wed.toDateString()}
                        </div>
                        <div className="text-white font-semibold">
                            {Thu.toDateString()}
                        </div>
                        <div className="text-white font-semibold">
                            {Fri.toDateString()}
                        </div>
                        <div className="text-white font-semibold">TOTAL</div>
                        <InputBox />
                    </div>
                </>
            </div>
        </>
    );
}

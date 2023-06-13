import InputBox from "../components/InputBox";

export default function TimesheetPage() {
    return (
        <>
            <div className="grid grid-cols-7 gap-4 text-center bg-slate-100 ">
                <div>Project</div>
                <input type="date" />
                <input type="date" />
                <input type="date" />
                <input type="date" />
                <input type="date" />
                <div>TOTAL</div>
                <InputBox />
            </div>
        </>
    );
}

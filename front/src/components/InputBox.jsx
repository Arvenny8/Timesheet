import { useState } from "react";

const initial = {
    project: "",
    mon: "",
    tue: "",
    wed: "",
    thr: "",
    fri: "",
    total: "",
};
export default function InputBox() {
    const [project, setProject] = useState([initial]);
    // const [count, setCount] = useState("0");

    const hdlClick = () => {
        setProject([
            ...project,
            {
                project: "",
                mon: "",
                tue: "",
                wed: "",
                thr: "",
                fri: "",
                total: "",
            },
        ]);
    };

    const hdlChange = (e, idx) => {
        const clone = [...project];
        clone[idx][e.target.name] = e.target.value;
        console.log(clone);
        setProject(clone);
    };

    return (
        <>
            {project.map((el, index) => (
                <>
                    <input
                        placeholder="ProjectName"
                        value={el.project}
                        onChange={(e) => hdlChange(e, index)}
                        name="project"
                        className="rounded bg-slate-300 h-[24px] w-[200px]"
                    />
                    <input
                        placeholder="Monday WorkHrs"
                        value={el.mon}
                        name="mon"
                        onChange={(e) => hdlChange(e, index)}
                        type="number"
                        min="0"
                        max="10"
                        className="rounded bg-slate-300 h-[24px] w-[200px]"
                    />
                    <input
                        placeholder="Tueday WorkHrs"
                        value={el.tue}
                        name="tue"
                        onChange={(e) => hdlChange(e, index)}
                        type="number"
                        min="0"
                        max="10"
                        className="rounded bg-slate-300 h-[24px] w-[200px]"
                    />
                    <input
                        placeholder="Wednesday WorkHrs"
                        value={el.wed}
                        name="wed"
                        onChange={(e) => hdlChange(e, index)}
                        type="number"
                        min="0"
                        max="10"
                        className="rounded bg-slate-300 h-[24px] w-[200px]"
                    />
                    <input
                        placeholder="Thursday WorkHrs"
                        value={el.thr}
                        name="thr"
                        onChange={(e) => hdlChange(e, index)}
                        type="number"
                        min="0"
                        max="10"
                        className="rounded bg-slate-300 h-[24px] w-[200px]"
                    />
                    <input
                        placeholder="Friday WorkHrs"
                        value={el.fri}
                        name="fri"
                        onChange={(e) => hdlChange(e, index)}
                        type="number"
                        min="0"
                        max="10"
                        className="rounded bg-slate-300 h-[24px] w-[200px]"
                    />
                    <div className="text-white">0</div>
                </>
            ))}
            {/* <button onClick={hdlClick} className="text-white font-semibold">
                Add
            </button> */}
            <button className="text-white font-semibold">Submit</button>
        </>
    );
}

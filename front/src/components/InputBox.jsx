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
                    />
                    <input
                        placeholder="WorkHrs"
                        value={el.mon}
                        name="mon"
                        onChange={(e) => hdlChange(e, index)}
                    />
                    <input
                        placeholder="WorkHrs"
                        value={el.tue}
                        name="tue"
                        onChange={(e) => hdlChange(e, index)}
                    />
                    <input
                        placeholder="WorkHrs"
                        value={el.wed}
                        name="wed"
                        onChange={(e) => hdlChange(e, index)}
                    />
                    <input
                        placeholder="WorkHrs"
                        value={el.thr}
                        name="thr"
                        onChange={(e) => hdlChange(e, index)}
                    />
                    <input
                        placeholder="WorkHrs"
                        value={el.fri}
                        name="fri"
                        onChange={(e) => hdlChange(e, index)}
                    />
                    <div>{el.total}</div>
                </>
            ))}
            <button onClick={hdlClick}>Add</button>
        </>
    );
}

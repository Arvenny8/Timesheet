import TeamInput from "../components/TeamInput";

export default function TeamPage() {
    return (
        <div className="grid grid-cols-4 gap-4 bg-slate-400">
            <div className="flex justify-center text-xl font-semibold p-1">
                NAME
            </div>
            <div className="flex justify-center text-xl font-semibold p-1">
                EMAIL
            </div>
            <div className="flex justify-center text-xl font-semibold p-1">
                SALARY
            </div>
            <div className="flex justify-center text-xl font-semibold p-1">
                ROLE
            </div>
            <TeamInput />
        </div>
    );
}

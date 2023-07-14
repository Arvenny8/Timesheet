import TeamInput from "../components/TeamInput";

export default function TeamPage() {
    return (
        <div className="bg-slate-600 h-screen">
            <>
                <div className="grid grid-cols-5 gap-4 ">
                    <div className="flex justify-center text-xl font-semibold p-1 text-white">
                        NAME
                    </div>
                    <div className="flex justify-center text-xl font-semibold p-1 text-white">
                        EMAIL
                    </div>
                    <div className="flex justify-center text-xl font-semibold p-1 text-white">
                        SALARY
                    </div>
                    <div className="flex justify-center text-xl font-semibold p-1 text-white">
                        ROLE
                    </div>
                    <div className="flex justify-center text-xl  font-semibold p-1 text-white">
                        Update and Delete
                    </div>
                    <TeamInput />
                </div>
            </>
        </div>
    );
}

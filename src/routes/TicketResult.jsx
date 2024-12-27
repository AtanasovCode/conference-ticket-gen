import { useConfStore } from "../../useConfStore";

const TicketResult = () => {

    const {
        profilePhoto,
        fullName,
        email,
        githubUsername,
    } = useConfStore();

    return (
        <div className="min-h-dvh p-4 bg-neutral-900 py-12 flex flex-col items-center justify-start text-neutral-0 gap-20 gap-6">
            <div>{fullName}</div>
            <div>{email}</div>
            <div>{githubUsername}</div>
            <div>
                <img src={profilePhoto} alt="" className="w-16 h-16" />
            </div>
        </div>
    );
}

export default TicketResult;
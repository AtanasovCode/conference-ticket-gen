import { useConfStore } from "../../useConfStore";
import Ticket from "../components/Ticket";

import logo from '../assets/logo.svg';

const TicketResult = () => {
    const {
        profilePhoto,
        fullName,
        email,
        githubUsername,
    } = useConfStore();

    const nameParts = fullName.split("  ");

    return (
        <div className="min-h-dvh w-full flex flex-col items-center justify-start gap-20 z-50">
            <div className="flex flex-col items-center justify-center relative gap-12 w-full">
                <div className="">
                    <img src={logo} alt="logo" className="w-full" />
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
                    <div className="text-preset-1-mobile md:text-preset-1 font-extrabold">
                        Congrats, {nameParts.map((part, index) => (
                            <span key={index} className="bg-gradient-01 bg-clip-text text-transparent">
                                {part}
                            </span>
                        ))}! Your ticket is ready.
                    </div>
                    <p className="text-preset-4-mobile text-neutral-300 font-medium md:text-preset-4">
                        We've emailed your ticket to {email} and will send updates in the run up to the event.
                    </p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <Ticket />
            </div>
        </div>
    );
}

export default TicketResult;
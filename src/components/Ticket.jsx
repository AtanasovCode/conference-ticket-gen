import { useConfStore } from "../../useConfStore";
import logo from '../assets/images/logo-mark.svg';
import githubLogo from '../assets/images/icon-github.svg';
import ticketbg from '../assets/images/pattern-ticket.svg';

const Ticket = () => {

    const {
        fullName,
        githubUsername,
        profilePhoto
    } = useConfStore();

    return (
        <div className="relative w-full flex items-center justify-center max-w-[45rem] aspect-[600/280.4]">
            <img
                src={ticketbg}
                alt="ticket background"
                className="absolute w-full top-0 left-0"
            />
            <div className="w-full h-full flex flex-col items-start justify-around gap-8 p-4">
                <div className="flex items-center justify-start gap-4">
                    <img src={logo} alt="coding conf logo" />
                    <div className="flex flex-col items-start justify-center">
                        <div className="text-preset-3 md:text-preset-2">Coding Conf</div>
                        <p className="text-preset-6-mobile text-neutral-300 md:text-preset-6">
                            Jan 31, 2025 / Austin, TX
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center gap-4">
                    <div className="w-12 flex items-center justify-center overflow-hidden rounded-radius-12 md:w-14 lg:w-20">
                        <img
                            src={profilePhoto instanceof File ? URL.createObjectURL(profilePhoto) : profilePhoto}
                            alt="avatar photo"
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-around">
                        <div className="text-preset-4-mobile md:text-preset-3">
                            {fullName}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span>
                                <img src={githubLogo} alt="github logo" />
                            </span>
                            <span className="text-preset-6 text-neutral-300 md:text-preset-5">
                                @{githubUsername}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;

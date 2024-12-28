import { useConfStore } from "../../useConfStore";
import logo from '../assets/images/logo-mark.svg';
import githubLogo from '../assets/images/icon-github.svg';

const Ticket = () => {

    const {
        fullName,
        githubUsername,
        profilePhoto,
    } = useConfStore();

    return (
        <div className="w-full flex flex-col items-start justify-start relative p-6 gap-8
        bg-ticket bg-center bg-cover bg-no-repeat">
            <div className="flex items-center justify-start gap-4">
                <img src={logo} alt="coding conf logo" />
                <div className="flex flex-col items-start justify-center">
                    <div className="text-preset-3">Conding Conf</div>
                    <p className="text-preset-6-mobile text-neutral-300">Jan 31, 2025 / Austin, TX</p>
                </div>
            </div>
            <div className="flex items-start justify-center gap-4">
                <div className="w-16 flex items-center justify-center overflow-hidden rounded-radius-12">
                    <img src={profilePhoto} alt="avatar photo" className="w-full" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="text-preset-4-mobile">
                        {fullName}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span>
                            <img src={githubLogo} alt="github logo" />
                        </span>
                        <span className="text-preset-6 text-neutral-300">
                            @{githubUsername}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;
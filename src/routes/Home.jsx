import { useConfStore } from '../../useConfStore';
import { useNavigate } from 'react-router';
import squigglyLineTop from '../assets/images/pattern-squiggly-line-top.svg';

// Components
import Hero from "../components/Hero";
import Inputs from "../components/Inputs";

const Home = () => {

    const navigate = useNavigate();

    const {
        setProfilePhoto,
        setFullName,
        setEmail,
        setGithubUsername,
        setLoading,
    } = useConfStore();

    const generateExampleTicket = () => {
        setFullName("Jonatan Kristof");
        setEmail("jonatan@email.com");
        setGithubUsername("jonatankristof0101");
        setProfilePhoto("/src/assets/images/image-avatar.jpg");

        goToTicketPage();
    };

    const goToTicketPage = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/ticket");
        }, 1500);
    };

    return (
        <div className="min-h-dvh flex flex-col items-center justify-start text-neutral-0 gap-20">
            <Hero />
            <div className="flex flex-col items-center justify-center w-full lg:w-[60%] gap-10">
                <Inputs />
                <div className="w-full flex items-center justify-center">
                    <input
                        type="button"
                        value="Generate Ticket"
                        className="w-full rounded-radius-12 text-center cursor-pointer bg-orange-500 text-preset-5-extrabold font-extrabold text-neutral-900 p-6"
                    />
                </div>
                <div className="w-full flex items-center justify-center">
                    <input
                        type="button"
                        value="Generate Example Ticket"
                        className="w-full rounded-radius-12 text-center cursor-pointer bg-slate-800 border border-orange-500 text-preset-5-extrabold font-extrabold text-neutral-300 p-6"
                        onClick={() => {
                            generateExampleTicket();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
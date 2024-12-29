import { useConfStore } from "../../useConfStore";

import PhotoInput from "./PhotoInput";
import TextInput from "./TextInput";

const Inputs = () => {

    const {
        fullName,
        email,
        githubUsername,
        setFullName,
        setEmail,
        setGithubUsername,
    } = useConfStore();

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 z-50">
            <PhotoInput />
            <TextInput name="Full Name" value={fullName} updateValue={setFullName} />
            <TextInput name="Email Address" value={email} updateValue={setEmail} />
            <TextInput name="Github Username" value={githubUsername} updateValue={setGithubUsername} />
        </div>
    );
}

export default Inputs;
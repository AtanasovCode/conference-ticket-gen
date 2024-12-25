import { useConfStore } from "../../useConfStore";

import PhotoInput from "./PhotoInput";
import TextInput from "./TextInput";

const Inputs = () => {

    const {
        setFullName,
        setEmail,
        setGithubUsername,
    } = useConfStore();

    return (
        <div className="w-full flex flex-col items-center justify-center gap-12 lg:w-[65%]">
            <PhotoInput />
            <TextInput name="Full Name" updateValue={setFullName} />
            <TextInput name="Email Address" updateValue={setEmail} />
            <TextInput name="Github Username" updateValue={setGithubUsername} />
        </div>
    );
}

export default Inputs;
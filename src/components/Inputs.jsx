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

        // errors
        nameErr,
        photoErr,
        emailErr,
        invalidEmailErr,
        githubErr,
    } = useConfStore();

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 z-50">
            <PhotoInput
                err={photoErr}
                errMsg="Please upload a valid photo."
            />
            <TextInput
                name="Full Name"
                value={fullName}
                updateValue={setFullName}
                err={nameErr}
                errMsg="Full Name is required."
            />
            <TextInput
                name="Email Address"
                value={email}
                updateValue={setEmail}
                err={emailErr}
                invalidEmailErr={invalidEmailErr}
                errMsg="Please enter a valid email address."
            />
            <TextInput
                name="Github Username"
                value={githubUsername}
                updateValue={setGithubUsername}
                err={githubErr}
                errMsg="Please provide a valid GitHub username."
            />
        </div>
    );
}

export default Inputs;
import ErrorMessage from "./ErrorMessage";

const TextInput = ({
    name,
    value,
    updateValue,
    err,
    invalidEmailErr,
    errMsg,
}) => {

    const borderColor = err ? "border-orange-500" : "border-neutral-500";

    return (
        <div className="w-full flex flex-col items-start justify-center gap-4">
            <div className="text-preset-5">
                {name}
            </div>
            <div className="relative w-full">
                <input
                    type={name === "Email Address" ? "email" : "text"}
                    value={value}
                    onChange={(e) => { updateValue(e.currentTarget.value) }}
                    className={`w-full bg-faded-white rounded-radius-12 border ${borderColor} p-4`}
                />
                {err && <ErrorMessage message={errMsg} />}
                {invalidEmailErr && <ErrorMessage message={errMsg} />}
            </div>
        </div>
    );
}

export default TextInput;

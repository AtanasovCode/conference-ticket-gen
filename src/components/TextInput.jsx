

const TextInput = ({
    name,
    value,
    updateValue,
}) => {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-4">
            <div className="text-preset-5">
                {name}
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => {updateValue(e.currentTarget.value)}}
                className="w-full bg-faded-white rounded-radius-12 border border-neutral-500 p-4"
            />
        </div>
    );
}

export default TextInput;
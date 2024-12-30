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
            <div className="relative w-full focus-within:border-red-500 transition-transform">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => { updateValue(e.currentTarget.value) }}
                    className="w-full bg-faded-white rounded-radius-12 border border-neutral-500 p-4"
                />
            </div>
        </div>
    );
}

export default TextInput;

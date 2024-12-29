import LoadingDot from "./LoadingDot";


const Loading = () => {
    return (
        <div className="fixed w-dvw h-dvh bg-transparent-black z-[999999]
        inset-1/2 -translate-x-1/2 -translate-y-1/2
        flex flex-col items-center justify-center gap-14
        ">
            <div className="text-preset-4 font-extrabold">
                Loading...
            </div>
            <div className="flex items-center justify-center gap-4">
                <LoadingDot delay={-0.3} />
                <LoadingDot delay={-0.5} />
                <LoadingDot delay={-0.7} />
                <LoadingDot delay={-1} />
                <LoadingDot delay={-1.3} />
                <LoadingDot delay={-1.5} />
            </div>
        </div>
    );
}

export default Loading;
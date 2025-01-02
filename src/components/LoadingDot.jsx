const LoadingDot = ({ delay }) => {
    return (
        <div
            className="w-5 aspect-square bg-orange-500 rounded-full animate-dot-load"
            style={{ animationDelay: `${delay}s` }}
        ></div>
    );
};

export default LoadingDot;

const LoadingDot = ({ delay }) => {
    return (
        <div
            className="w-6 aspect-square bg-orange-500 rounded-full animate-dot-load"
            style={{ animationDelay: `${delay}s` }}
        ></div>
    );
};

export default LoadingDot;

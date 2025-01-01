import info from '../assets/images/icon-info-error.svg';

const ErrorMessage = ({ message }) => {
    return (
        <div className="flex items-center justify-start gap-2 text-neutral-300 mt-2">
            <span><img src={info} alt="info icon" className="w-5" /></span>
            <span className="text-preset-7 text-orange-500">
                {message}
            </span>
        </div>
    );
}

export default ErrorMessage;
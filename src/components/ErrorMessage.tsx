import type { FunctionComponent } from 'react';
import { MdOutlineErrorOutline } from "@lorenzobloedow/react-icons/md";
    
interface ErrorMessageProps {
    message?: string;
}
 
const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ message }) => {
    return (
        <div
        className="flex flex-col items-center gap-1"
        >
            <MdOutlineErrorOutline
            className="text-red-500 w-10 h-10"
            />
            <p
            className="text-xs text-center text-red-500"
            >
                {message || "Something went wrong, please try again later"}
            </p>
        </div>
    );
}
 
export default ErrorMessage;
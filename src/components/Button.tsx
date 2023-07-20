import type { FunctionComponent, ReactNode, PointerEvent } from "react";

interface ButtonProps {
    text: string;
    icon?: ReactNode;
    backgroundColor?: string;
    textColor?: string;
    shadow?: boolean;
    ghost?: boolean;
    classId?: string;
    className?: string;
    id?: string;
    onPointerUp?: (e?: PointerEvent<HTMLButtonElement>) => void;
}
 
const Button: FunctionComponent<ButtonProps> = ({
    text, icon, backgroundColor = "accent",
    textColor = "#FFFFFF", shadow, ghost,
    classId = "", className = "", id, onPointerUp
}) => {
    return (
        <button
        id={id}
        className={
            "h-8 rounded-md px-3 py-2 font-bold flex justify-center gap-3" + " " +
            "items-center text-xs tracking-wider text-white" + " " +
            ((ghost) ? "border-2 " : "") + " " +
            "transition-colors duration-500" + " " +
            "hover:outline hover:outline-2 hover:outline-white hover:!text-white" + " " +
            "md:text-sm md:h-10 md:px-5" + " " + classId + " " + className
        }
        style={{
            color: textColor,
            borderColor: backgroundColor,
            backgroundColor: ghost ? undefined : backgroundColor,
            filter: shadow ? "drop-shadow(3px 3px 2px var(--accent));" : ""
        }}
        onPointerUp={onPointerUp}
        >
            {icon} {text}
        </button>
    );
}
 
export default Button;
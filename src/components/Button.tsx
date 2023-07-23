import { FunctionComponent, ReactNode, PointerEvent, createElement } from "react";

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
    href?: string;
}
 
const Button: FunctionComponent<ButtonProps> = ({
    text, icon, backgroundColor = "accent",
    textColor = "#FFFFFF", shadow, ghost,
    classId = "", className = "", id, onPointerUp,
    href
}) => {
    const finalClassName = "h-8 rounded-md px-3 py-2 font-bold flex justify-center gap-3" + " " +
    "items-center text-xs tracking-wider text-white cursor-pointer" + " " +
    ((ghost) ? "border-2 " : "") + " " +
    "transition-colors duration-500" + " " +
    "hover:outline hover:outline-2 hover:outline-white hover:!text-white" + " " +
    "md:text-sm md:h-10 md:px-5" + " " + classId + " " + className
    
    return createElement(href ? "a" : "button", {
        id,
        className: finalClassName,
        style: {
            color: textColor,
            borderColor: backgroundColor,
            backgroundColor: ghost ? undefined : backgroundColor,
            filter: shadow ? "drop-shadow(3px 3px 2px var(--accent));" : ""
        },
        href,
        onPointerUp
    },
        <>
            {icon} {text}
        </>
    );
}
 
export default Button;
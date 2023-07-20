import type { FunctionComponent, ReactNode } from "react";
import { Tooltip } from "react-tooltip";    

interface TechTooltipProps {
    id: string;
    children?: ReactNode;
}
 
const TechTooltip: FunctionComponent<TechTooltipProps> = ({ id, children }) => {

    return (
        <Tooltip
        id={id}
        style={{
            borderRadius: "0.375rem",
            color: "var(--accent)",
            backgroundColor: "var(--secondary)"
        }}
        className="text-center"
        classNameArrow="rounded-sm"
        >
            {children}
        </Tooltip>
    );
}
 
export default TechTooltip;
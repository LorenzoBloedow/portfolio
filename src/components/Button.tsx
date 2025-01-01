import { FunctionComponent, ReactNode, PointerEvent } from "react";

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
	disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
	text,
	icon,
	backgroundColor = "accent",
	textColor = "#FFFFFF",
	shadow,
	ghost,
	classId = "",
	className = "",
	id,
	onPointerUp,
	href,
	disabled,
}) => {
	const finalClassName =
		"h-8 rounded-md py-2 font-bold flex justify-center gap-3 px-7" +
		" " +
		"items-center text-xs tracking-wider text-white cursor-pointer" +
		" " +
		(ghost ? "border-2 " : "") +
		" " +
		"transition-colors duration-500" +
		" " +
		"enabled:hover:outline enabled:hover:outline-1 enabled:hover:outline-white" +
		" " +
		"md:text-sm md:h-10" +
		" " +
		classId +
		" " +
		className +
		" " +
		"disabled:text-slate-500 disabled:cursor-not-allowed";

	return (
		<button
			id={id}
			className={finalClassName}
			style={{
				color: disabled ? "#868786" : textColor,
				borderColor: backgroundColor,
				backgroundColor: ghost
					? undefined
					: disabled
					? "#dedfe0"
					: backgroundColor,
				filter: shadow ? "drop-shadow(3px 3px 2px var(--accent));" : "",
			}}
			{...(href ? { onClick: () => window.open(href, "_blank") } : {})}
			onPointerUp={onPointerUp}
			disabled={disabled}
		>
			{icon} {text}
		</button>
	);
};

export default Button;

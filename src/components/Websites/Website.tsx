import type { FunctionComponent } from "react";
import { useState, cloneElement, Fragment } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { HiMiniEllipsisHorizontalCircle } from "@lorenzobloedow/react-icons/hi2";
import TechTooltip from "./TechTooltip";
import { AiOutlineMobile } from "@lorenzobloedow/react-icons/ai";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

interface WebsiteProps {
	name: string;
	imageSrc: string;
	priority?: "high" | "low";
	technologies: {
		icons: JSX.Element[];
		extra?: string[];
	};
	duration: string;
	href: {
		website: string;
		repo: string;
	};
	defunct?: boolean;
}

const Website: FunctionComponent<WebsiteProps> = ({
	name,
	imageSrc,
	priority,
	technologies,
	duration,
	href,
	defunct,
}) => {
	const [status, setStatus] = useState<"loading" | "error" | "success">(
		"loading"
	);

	const techIconsClassName =
		"w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 cursor-pointer transition-colors duration-150";
	const ellipsisId = name + "-tech-ellipsis";

	return (
		<div className="flex flex-col gap-3 items-center lg:items-start relative">
			<p
				className="text-[0.5rem] sm:text-[0.6rem] md:text-xs flex justify-center items-center gap-1 -mb-2
            md:-mb-1 lg:text-sm lg:mr-auto group"
			>
				<AiOutlineMobile className="group-hover:rotate-90 transition-transform duration-300" />{" "}
				Mobile-first design
			</p>

			<h4 className="text-xl lg:mb-5 font-bold text-center">
				{name}
				<span className="hidden lg:inline">.com</span>
			</h4>

			<div className="flex flex-col gap-3 items-center lg:flex-row-reverse lg:gap-8">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-1.5">
						<p className="hidden lg:block font-bold">
							Technologies
						</p>
						<div className="flex flex-wrap justify-center lg:justify-start gap-3 w-40 md:w-60 lg:w-80">
							{technologies.icons.map((icon: JSX.Element) => {
								const newIcon = cloneElement(icon, {
									className: `${
										icon.props?.className || ""
									} ${techIconsClassName}`,
								});
								return (
									<Fragment
										key={newIcon.props["data-tooltip-id"]}
									>
										{newIcon}
										<TechTooltip
											id={
												newIcon.props["data-tooltip-id"]
											}
										/>
									</Fragment>
								);
							})}
							{technologies?.extra && (
								<>
									<HiMiniEllipsisHorizontalCircle
										data-tooltip-id={ellipsisId}
										data-tooltip-html={technologies.extra.join(
											" <br /> "
										)}
										className={techIconsClassName}
									/>
									<TechTooltip id={ellipsisId} />
								</>
							)}
						</div>
					</div>
					<div className="hidden lg:flex flex-col">
						<p className="font-bold">Duration</p>
						<p>{duration}</p>
					</div>

					<span className="hidden lg:flex lg:flex-col lg:gap-4 w-52">
						<Button
							text={"Visit " + name}
							backgroundColor="#789ce7"
							textColor="var(--secondary)"
							href={href.website}
							disabled={defunct}
						/>
						<Button
							text={"Visit Repository"}
							backgroundColor="#789ce7"
							textColor="var(--secondary)"
							href={href.repo}
							disabled={!href.repo}
						/>
					</span>
				</div>
				<div
					className="lg:p-0 rounded-md flex
                flex-col items-center justify-center gap-2 mt-3 lg:mt-0"
				>
					<div
						className="h-20 sm:h-[8.44rem] flex justify-start
                    items-start rounded-md overflow-clip lg:h-64 w-72 lg:w-[30rem]"
					>
						<img
							className="w-full h-full"
							src={imageSrc}
							alt={`The homepage image for the ${name} website`}
							decoding="async"
							// @ts-expect-error experimental
							fetchpriority={priority || "auto"}
							onLoad={() => setStatus("success")}
							onError={() => setStatus("error")}
							style={{
								display:
									status === "success" ? "block" : "none",
							}}
						/>

						{status === "loading" && (
							<PropagateLoader
								color="var(--primary)"
								speedMultiplier={1.3}
								className="-ml-4 -mt-5"
							/>
						)}
						{status === "error" && (
							<ErrorMessage message="Something went wrong while attempting to load this image" />
						)}
					</div>
				</div>
			</div>
			<div className="lg:hidden mx-auto">
				<Button
					text={"Visit " + name}
					backgroundColor="#789ce7"
					textColor="var(--secondary)"
					className="w-40 md:w-56"
					href={href.website}
					disabled={defunct}
				/>
			</div>
		</div>
	);
};
 
export default Website;


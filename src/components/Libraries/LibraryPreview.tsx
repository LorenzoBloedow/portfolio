import type { FunctionComponent, ReactNode } from "react";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import ErrorMessage from "../ErrorMessage";
import type { Library } from "./Libraries";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { BsDownload, BsFileEarmark } from "@lorenzobloedow/react-icons/bs";
import { MdOutlinePublish } from "@lorenzobloedow/react-icons/md";
import { AiOutlineEdit } from "@lorenzobloedow/react-icons/ai";
import TechTooltip from "../Websites/TechTooltip";
import Button from "../Button";

function Container({ children }: { children: ReactNode }) {
	return (
		<div
			className="rounded-md p-3 flex
        flex-col md:p-4 overflow-y-auto overflow-x-auto minimalScrollbar
        w-48 sm:w-64 md:w-80 lg:w-[30rem] h-60"
		>
			{children}
		</div>
	);
}

type PackageData = {
	totalDownloads: number;
	readMe: string;
	latestVersion: number;
	fileCount: number;
	time: {
		created: string;
		modified: string;
	};
	repo: string;
};

interface LibraryPreviewProps {
	npmName: Library;
}

const LibraryPreview: FunctionComponent<LibraryPreviewProps> = ({
	npmName,
}) => {
	const [status, setStatus] = useState<"loading" | "success" | "error">(
		"loading"
	);
	const [packageData, setPackageData] = useState<PackageData | null>(null);

	useEffect(() => {
		setStatus("loading");
		fetch("https://registry.npmjs.com/" + npmName)
			.then((res) => res.json())
			.then((data) => {
				const createdDate = data.time.created.split("T")[0];
				const currentDate = new Date().toISOString().split("T")[0];
				fetch(
					`https://api.npmjs.org/downloads/point/${createdDate}:${currentDate}/${npmName}`
				)
					.then((res) => res.json())
					.then((downloadsData) => {
						const latestVersion = data["dist-tags"].latest;
						setPackageData({
							totalDownloads: downloadsData.downloads,
							readMe: data.readme,
							latestVersion,
							fileCount:
								data.versions[latestVersion].dist.fileCount,
							time: {
								created: data.time.created,
								modified: data.time.modified,
							},
							repo: data.homepage,
						});
						setStatus("success");
					})
					.catch(() => setStatus("error"));
			})
			.catch(() => setStatus("error"));
	}, [npmName]);

	if (status === "error") {
		return (
			<div className="flex flex-col gap-5 items-center">
				<div
					className="rounded-md p-3 flex flex-col gap-4 sm:p-4
                bg-blue-200 w-full md:w-80 lg:w-[30rem] h-36"
				/>
				<Container>
					<div className="mx-auto my-auto">
						<ErrorMessage
							message={`Something went wrong while trying to load the ${npmName} library`}
						/>
					</div>
				</Container>
			</div>
		);
	}

	if (status === "loading") {
		return (
			<div className="flex flex-col gap-5 items-center">
				<div
					className="rounded-md p-3 flex flex-col gap-4 sm:p-4
                bg-blue-200 w-full md:w-80 lg:w-[30rem] h-36"
				/>
				<Container>
					<div className="mx-auto my-auto">
						<PropagateLoader
							color="var(--primary)"
							speedMultiplier={1.3}
							className="-ml-2 -mt-5"
						/>
					</div>
				</Container>

				<Button text="placeholder" className="invisible" />
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-5 items-center">
			<div
				className="rounded-md p-3 flex flex-col gap-4 sm:p-4
            bg-blue-200 text-xs w-full md:w-80 lg:w-[30rem] h-36"
			>
				<p className="font-bold text-center text-sm md:text-base lg:text-lg">
					{npmName}
				</p>

				<div className="flex justify-between">
					<div className="flex flex-col gap-1.5">
						<div
							data-tooltip-id={npmName + "-downloads"}
							data-tooltip-content={"Total Downloads"}
							className="flex items-center gap-1.5 md:text-sm"
						>
							<BsDownload aria-label="Download icon" />
							{new Intl.NumberFormat("en", {
								compactDisplay: "short",
								notation: "compact",
							}).format(packageData!.totalDownloads)}
							<TechTooltip id={npmName + "-downloads"} />
						</div>

						<div
							data-tooltip-id={npmName + "-file-count"}
							data-tooltip-content={"Number Of Files"}
							className="flex items-center gap-1.5 md:text-sm"
						>
							<BsFileEarmark aria-label="Blank file icon" />
							{packageData!.fileCount}
							<TechTooltip id={npmName + "-file-count"} />
						</div>

						<p
							data-tooltip-id={npmName + "-current-version"}
							data-tooltip-content={"Current Version"}
							className="text-[0.65rem] md:text-xs"
						>
							{packageData?.latestVersion &&
								`v${packageData!.latestVersion}`}
						</p>
						<TechTooltip id={npmName + "-current-version"} />
					</div>

					<div className="flex flex-col gap-1.5">
						<div
							data-tooltip-id={npmName + "-time-created"}
							data-tooltip-content={"Created On"}
							className="flex items-center gap-1.5 md:text-sm"
						>
							<MdOutlinePublish aria-label="Upload icon" />
							{new Date(
								packageData!.time!.created
							).toLocaleDateString()}
							<TechTooltip id={npmName + "-time-created"} />
						</div>
						<div
							className="flex items-center gap-1.5 md:text-sm"
							data-tooltip-id={npmName + "-time-modified"}
							data-tooltip-content={"Last Updated On"}
						>
							<AiOutlineEdit aria-label="Edit icon" />
							{new Date(
								packageData!.time!.modified
							).toLocaleDateString()}
							<TechTooltip id={npmName + "-time-modified"} />
						</div>
					</div>
				</div>
			</div>

			<Container>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
					className="text-center mx-auto my-auto text-xs"
					components={{
						pre: ({ node, children, ...props }) => (
							<pre
								className="w-36 sm:w-44 md:w-56 overflow-x-auto rounded-md
                        mx-auto minimalScrollbar p-0.5 font-mono lg:w-96"
								{...props}
							>
								{children}
							</pre>
						),
						code: ({ node, children, ...props }) => (
							<code className="font-mono" {...props}>
								{children}
							</code>
						),
						h1: ({ node, children, ...props }) => (
							<h1 {...props} className="font-bold text-lg mt-2">
								{children}
							</h1>
						),
						h2: ({ node, children, ...props }) => (
							<h2 {...props} className="font-bold mt-2">
								{children}
							</h2>
						),
						h3: ({ node, children, ...props }) => (
							<h3 {...props} className="font-bold text-sm mt-2">
								{children}
							</h3>
						),
						p: ({ node, children, ...props }) => (
							<p {...props} className="font-bold text-xs">
								{children}
							</p>
						),
					}}
				>
					{packageData!.readMe}
				</ReactMarkdown>
			</Container>

			<Button
				text={"Visit Repository"}
				backgroundColor="#789ce7"
				textColor="var(--secondary)"
				className="w-full"
				href={packageData!.repo}
			/>
		</div>
	);
};
 
export default LibraryPreview;
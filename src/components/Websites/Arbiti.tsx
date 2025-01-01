import Website from "./Website";
import arbitiimage from "../../images/arbiti-home.webp";
import {
	SiNextdotjs,
	SiTypescript,
	SiReact,
	SiVercel,
	SiSentry,
	SiTailwindcss,
} from "@lorenzobloedow/react-icons/si";

function Arbiti() {
	return (
		<Website
			name="Arbiti"
			imageSrc={arbitiimage}
			technologies={{
				icons: [
					<SiNextdotjs
						className="hover:fill-black"
						data-tooltip-id="codeguided-next"
						data-tooltip-content="Next.js"
					/>,
					<SiReact
						className="hover:fill-[#76d5ec]"
						data-tooltip-id="codeguided-react"
						data-tooltip-content="React"
					/>,
					<SiTypescript
						className="hover:fill-[#1e87ff]"
						data-tooltip-id="codeguided-typescript"
						data-tooltip-content="TypeScript"
					/>,
					<SiTailwindcss
						className="hover:fill-[#76d5ec]"
						data-tooltip-id="codeguided-tailwindcss"
						data-tooltip-content="Tailwind CSS"
					/>,
					<SiSentry
						className="hover:fill-black"
						data-tooltip-id="codeguided-sentry"
						data-tooltip-content="Sentry"
					/>,
					<SiVercel
						className="hover:fill-black"
						data-tooltip-id="codeguided-vercel"
						data-tooltip-content="Vercel"
					/>,
				],
				extra: ["acorn", "escodegen", "ora"],
			}}
			priority="high"
			duration="2024 - Present"
			href={{
				website: "https://arbiti.com",
				repo: "https://github.com/LorenzoBloedow/Arbiti",
			}}
		/>
	);
}

export default Arbiti;

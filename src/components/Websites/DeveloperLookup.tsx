import Website from "./Website";
import developerLookupImage from "../../images/developerlookup-home.png";
import {
    SiNextdotjs, SiTypescript, SiReact, SiVercel, SiGithub,
    SiGreensock, SiTailwindcss, SiEslint, SiGooglemaps
} from "react-icons/si";

function DeveloperLookup() {
    return (
        <Website
        name="DeveloperLookup"
        imageSrc={developerLookupImage}
        priority="low"
        technologies={{
            icons: [
            <SiNextdotjs className="hover:fill-black" data-tooltip-id="developerlookup-next" data-tooltip-content="Next.js" />,
            <SiReact className="hover:fill-[#76d5ec]" data-tooltip-id="developerlookup-react" data-tooltip-content="React" />,
            <SiTypescript className="hover:fill-[#1e87ff]" data-tooltip-id="developerlookup-typescript" data-tooltip-content="TypeScript" />,
            <SiTailwindcss className="hover:fill-[#76d5ec]" data-tooltip-id="developerlookup-tailwindcss" data-tooltip-content="Tailwind CSS" />,
            <SiVercel className="hover:fill-black" data-tooltip-id="developerlookup-vercel" data-tooltip-content="Vercel" />,
            <SiGithub className="hover:fill-black" data-tooltip-id="developerlookup-octokit" data-tooltip-content="Octokit" />,
            <SiGreensock className="hover:fill-[#9cff62]" data-tooltip-id="developerlookup-greensock" data-tooltip-content="GSAP" />,
            <SiGooglemaps className="hover:fill-[#00b61e]" data-tooltip-id="developerlookup-gmap" data-tooltip-content="Google Maps API" />,
            <SiEslint className="hover:fill-[#422fee]" data-tooltip-id="developerlookup-eslint" data-tooltip-content="ESLint" />,
        ]
        }}
        duration="2022 - 2023"
        />
    );
}

export default DeveloperLookup;
import Website from "./Website";
import codeguidedImage from "../../images/codeguided-home.png";
import {
    SiNextdotjs, SiTypescript, SiReact, SiRedux, SiFirebase, SiVercel, SiSentry,
    SiGreensock, SiTailwindcss, SiStorybook, SiJest, SiPlaywright, SiNodedotjs,
    SiTypeform, SiEslint
} from "@lorenzobloedow/react-icons/si";

function CodeGuided() {
    return (
        <Website
        name="CodeGuided"
        imageSrc={codeguidedImage}
        technologies={{
            icons: [
            <SiNextdotjs className="hover:fill-black" data-tooltip-id="codeguided-next" data-tooltip-content="Next.js" />,
            <SiReact className="hover:fill-[#76d5ec]" data-tooltip-id="codeguided-react" data-tooltip-content="React" />,
            <SiRedux className="hover:fill-[#774bdb]" data-tooltip-id="codeguided-redux" data-tooltip-content="Redux" />,
            <SiTypescript className="hover:fill-[#1e87ff]" data-tooltip-id="codeguided-typescript" data-tooltip-content="TypeScript" />,
            <SiTailwindcss className="hover:fill-[#76d5ec]" data-tooltip-id="codeguided-tailwindcss" data-tooltip-content="Tailwind CSS" />,
            <SiStorybook className="hover:fill-[#ff5bbb]" data-tooltip-id="codeguided-storybook" data-tooltip-content="Storybook" />,
            <SiSentry className="hover:fill-black" data-tooltip-id="codeguided-sentry" data-tooltip-content="Sentry" />,
            <SiGreensock className="hover:fill-[#9cff62]" data-tooltip-id="codeguided-greensock" data-tooltip-content="GSAP" />,
            <SiFirebase className="hover:fill-[#ff833b]" data-tooltip-id="codeguided-firebase" data-tooltip-content="Firebase" />,
            <SiVercel className="hover:fill-black" data-tooltip-id="codeguided-vercel" data-tooltip-content="Vercel" />,
            <SiNodedotjs className="hover:fill-[#16610f]" data-tooltip-id="codeguided-nodejs" data-tooltip-content="Node.js" />,
            <SiJest className="hover:fill-[#411a3a]" data-tooltip-id="codeguided-jest" data-tooltip-content="Jest" />,
            <SiPlaywright className="hover:fill-[#25b119]" data-tooltip-id="codeguided-playwright" data-tooltip-content="Playwright" />,
            <SiTypeform className="hover:fill-[#704718]" data-tooltip-id="codeguided-typeform" data-tooltip-content="Typeform" />,
            <SiEslint className="hover:fill-[#422fee]" data-tooltip-id="codeguided-eslint" data-tooltip-content="ESLint" />
        ],
        extra: [
            "Google Analytics 4", "Mixpanel", "Recurly", "GrowthBook", "lottie-web",
            "Typed.js", "monaco-editor", "react-codemirror", "rehype-raw"
        ]
        }}
        priority="high"
        duration="2022 - 2023"
        href={{
            website: "https://codeguided.com",
            repo: "https://github.com/CodeGuided/codeguided"
        }}
        />
    );
}

export default CodeGuided;
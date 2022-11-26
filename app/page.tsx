import Link from "next/link";
import { FunctionComponent } from "react";
import DoneList from "../components/DoneList";
import TextBlock from "../components/TextBlock";
import { VscGithub } from "react-icons/vsc";

const NPMListItem = ({ text, link }: { text: string, link: string }) => {
    return (
        <li>
            <Link
            className="text-blue-500 hover:text-blue-600"
            href={link}
            >
                ★ {text}
            </Link>
        </li>
    )
}

const StyledContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    
    return (
        <div
        className="bg-slate-800 rounded-xl p-10 border-4 border-slate-300 flex flex-col items-center gap-10 h-full py-16"
        >
            {children}
        </div>
    );
}

interface PageProps {
    
}

const Page: FunctionComponent<PageProps> = () => {
    return (
        <div
        className="flex flex-col items-center justify-center gap-8 p-10 text-center lg:px-[20%]"
        >
            <h1
            className="text-9xl font-bold tracking-wide bg-white shadow-md shadow-black p-10 rounded-xl px-20"
            >
                Welcome! :)
            </h1>

            <div
            className="text-5xl text-slate-600 flex flex-col gap-10"
            >
                <TextBlock>
                    I'm Lorenzo and I've been programming for about 5 - 7 years now.
                </TextBlock>
                    

                <TextBlock
                >
                    I've done just about everything:
                </TextBlock>
                    
                
                <DoneList />

                <TextBlock>
                    and then finally, the thing I've been doing the longest: <span className="font-bold">Web development.</span>
                </TextBlock>

                <TextBlock>
                    I absolutely love anything related to web development but I'm especially a frontend aficionado!
                </TextBlock>

                <TextBlock>
                    I try to learn as many libraries and frameworks as possible and I always try to be up-to-date on anything
                    from the latest version of meta-frameworks like Next.js to industry-wide web standards such as responsive design.
                </TextBlock>

                <TextBlock>Here is just some of my work:</TextBlock>

                <StyledContainer>
                    <Link
                    className="text-blue-500 hover:text-blue-600 font-bold"
                    href="https://codeguided.com"
                    >
                        Educational website:
                    </Link>

                    <iframe
                    src="https://codeguided.com"
                    title="A website that teaches web development step by step"
                    height="800px"
                    width="100%"
                    />
                </StyledContainer>


                <StyledContainer>
                    <p
                    className="text-purple-400 font-bold"
                    >
                        NPM packages I've published (click to access):
                    </p>

                    <hr className="border-[1px] border-slate-300 w-[90%]" role="separator" />

                    <ul className="p-4 border-white rounded-xl text-blue-500 flex flex-col items-center gap-20 lg:gap-10">
                        <NPMListItem
                        text="Tailwind plugin"
                        link="https://www.npmjs.com/package/tailwind-shades-for-custom-colors"
                        />

                        <hr className="border-[1px] border-slate-300 w-[80%]" role="separator" />

                        <NPMListItem
                        text=" Extensive JavaScript Math library"
                        link="https://www.npmjs.com/package/bloatedmath"
                        />

                        <hr className="border-[1px] border-slate-300 w-[80%]" role="separator" />

                        <NPMListItem
                        text="Get a programming language's color"
                        link="https://www.npmjs.com/package/programming-colors"
                        />

                        <hr className="border-[1px] border-slate-300 w-[80%]" role="separator" />

                        <NPMListItem
                        text="Get the programming language of a file extension"
                        link="https://www.npmjs.com/package/detect-programming-language"
                        />

                        <hr className="border-[1px] border-slate-300 w-[80%]" role="separator" />

                        <NPMListItem
                        text="Get whether a calendar day has passed (not 24 hours)"
                        link="https://www.npmjs.com/package/is-consecutive-day"
                        />  

                    </ul>
                </StyledContainer>
                    
           

                <StyledContainer>
                    <p className="text-white font-bold">And finally, my GitHub profile:</p> 

                    <button
                    className="flex gap-6 items-center justify-center p-10 px-20 bg-slate-400 shadow-lg shadow-black text-black rounded-xl
                    hover:bg-slate-500 active:shadow-black active:shadow-inner w-[65%]
                    "
                    >
                        <VscGithub className="w-[20%] h-[20%]" />

                        <Link className="lg:text-6xl" target="_blank" href="https://github.com/LorenzoBloedow">Open profile</Link>
                    </button>
                </StyledContainer>

                <TextBlock>
                    <p>You can contact me through my email:</p>
                    <Link className="text-blue-500 hover:text-blue-600" href="mailto:lorenzobloedow@gmail.com">lorenzobloedow@gmail.com</Link>
                </TextBlock>

            </div>
        </div>
    );
}
 
export default Page;
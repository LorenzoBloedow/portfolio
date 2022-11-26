"use client";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface DoneListProps {
    
}

const ListItem = ({ children, className }: { children: any, className: string; }) => {
    const [toggle, setToggle] = useState(false);

    function crossListItem(e: React.TouchEvent<HTMLUListElement>) {
        setToggle(prev => !prev);

        if (toggle) {
            e.currentTarget.style.textDecoration = "line-through";
        } else {
            e.currentTarget.style.textDecoration = "";
        }
    }

    // @ts-ignore
    return <li onPointerUp={crossListItem} style={{ width: "100%" }} className={className}>{children}</li>
}

const DoneList: FunctionComponent<DoneListProps> = () => {
    const listRef = useRef(null);

    useEffect(() => {
        gsap.to(listRef.current, {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration: 2
        })
    }, []);

    return (
        <ul
        ref={listRef}
        style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
        className="flex flex-col gap-10 bg-slate-800 border-4 border-slate-300 rounded-xl p-16 px-20
        text-center items-center text-black"
        >
            <ListItem className="text-red-400 select-none">• Game development</ListItem>
            
            <hr className="border-[1px] border-slate-300 w-full" role="separator" />

            <ListItem className="text-green-400 select-none">• Writing python scripts to make my life easier</ListItem>

            <hr className="border-[1px] border-slate-300 w-full" role="separator" />

            <ListItem className="text-blue-400 select-none">• Programming C in embedded systems such as Arduino</ListItem>

            <hr className="border-[1px] border-slate-300 w-full" role="separator" />

            <ListItem className="text-purple-400 select-none" >• Writing NPM packages</ListItem>

            <hr className="border-[1px] border-slate-300 w-full" role="separator" />

            <ListItem className="text-yellow-400 select-none">• Messing around with Burp Suite and web security</ListItem>
        </ul>
    );
}
 
export default DoneList;
"use client";
import gsap from "gsap";
import { FunctionComponent, useEffect, useRef, useState } from "react";

interface LooseObject {
    [key: string]: any;
}

interface TextBlockProps {
    children: any;
    props?: LooseObject;
}
 
const TextBlock: FunctionComponent<TextBlockProps> = ({ children, props }) => {
    const [toggle, setToggle] = useState(false);

    const textRef = useRef(null);

    const tl = gsap.timeline({ paused: true });

    function toggleAnimation() {
        setToggle(prev => !prev);

        if (toggle) {
            gsap
            .set(textRef.current, {
                zIndex: 100
            })
            gsap
            .to(textRef.current, {
                transform: "scale(1.07)"
            })
        } else {
            gsap
            .to(textRef.current, {
                transform: "scale(1)"
            })
            gsap
            .set(textRef.current, {
                zIndex: 0
            })
        }
    }

    useEffect(() => {
        gsap.to(textRef.current, {
            translate: ("100vw")
        })
    }, [])

    return (
        <p
        onPointerUp={toggleAnimation}
        ref={textRef}
        className="bg-white rounded-xl p-6 shadow-black shadow-md -translate-x-[100vw]"
        >
            {children}
        </p>
    );
}
 
export default TextBlock;
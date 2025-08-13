"use client";
import {motion} from "motion/react";
import {useEffect, useState} from "react";

export default function ScrollCursor({sectionIndex}: {sectionIndex: number}) {
    const [visible, setVisible] = useState(false);
    const [pos, setPos] = useState({x: 0, y: 0});

    useEffect(() => {
        const area = document.getElementById("scroll-area");
        if (!area) return;

        const move = (e: MouseEvent) => setPos({x: e.clientX, y: e.clientY});
        const show = () => setVisible(true);
        const hide = () => setVisible(false);

        area.addEventListener("mousemove", move);
        area.addEventListener("mouseenter", show);
        area.addEventListener("mouseleave", hide);

        return () => {
            area.removeEventListener("mousemove", move);
            area.removeEventListener("mouseenter", show);
            area.removeEventListener("mouseleave", hide);
        };
    }, []);

    return (
        <motion.div
            className="circle-cursor"
            style={{
                top: 0,
                left: 0,
                transform: `translate(${pos.x - 30}px, ${pos.y - 30}px)`,
                opacity: visible ? 1 : 0,
            }}
            animate={{scale: visible ? 1 : 0.5}}
            transition={{type: "spring", stiffness: 300, damping: 20}}
        >
            {sectionIndex + 1}
        </motion.div>
    );
}

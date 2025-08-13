import {motion, MotionValue} from "motion/react";

type CursorProps = {
    springX: MotionValue;
    springY: MotionValue;
    viewBtnX: MotionValue;
    viewBtnY: MotionValue;
    dotColor: string;
    borderColor: string;
};

const Cursor = ({springX, springY, viewBtnX, viewBtnY, dotColor, borderColor}: CursorProps) => {
    return (
        <div className="hidden lg:block">
            <motion.span
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.3, ease: "easeOut"}}
                style={{
                    left: springX,
                    top: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className={`absolute z-40 size-1.5 ${dotColor} rounded-full pointer-events-none`}
            />

            <motion.div
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.6, ease: "easeInOut", delay: 0.2}}
                style={{
                    left: viewBtnX,
                    top: viewBtnY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className={`absolute z-40 size-12 ${borderColor} border rounded-full pointer-events-none`}
            />
        </div>
    );
};

export default Cursor;

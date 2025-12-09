import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Explore My Work";

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 4500); // Total loading time

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark text-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent animate-spin-slow" />
            </div>

            <div className="z-10 flex flex-col items-center">
                {/* Animated Text with Staggered Reveal */}
                <motion.div
                    className="mb-10 text-5xl md:text-7xl font-bold font-sans tracking-tighter"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    {fullText.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Stylish Progress Bar */}
                <div className="w-80 md:w-96 h-1 bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-purple-500 to-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                    />
                    {/* Glowing Head */}
                    <motion.div
                        className="absolute top-0 h-full w-20 bg-white/50 blur-md"
                        initial={{ left: "-20%" }}
                        animate={{ left: "120%" }}
                        transition={{ duration: 3.5, ease: "easeInOut", repeat: 0 }}
                    />
                </div>

                {/* Percentage Counter */}
                <PercentageCounter />
            </div>
        </motion.div>
    );
};

const PercentageCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                return 100;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="mt-4 text-xl font-mono text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            {count}%
        </motion.div>
    );
};

export default LoadingScreen;

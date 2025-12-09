import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const DEFAULT_FAQ = [
    {
        match: /^(hi|hello|hey|greetings|good morning|good afternoon|good evening)$/i,
        answer:
            "Hello! 👋 I'm Dotz, your interactive assistant. I can tell you about skills, projects, experience, tech stack, and much more! What would you like to know?",
    },
    {
        match: /skill|stack|tech|technology|technologies|languages|frameworks/i,
        answer:
            "🚀 Tech Stack:\n\n💻 Frontend: React.js, HTML5, CSS3, Tailwind CSS, JavaScript, API Integration\n⚙️ Backend: Node.js, Express.js\n🗄️ Database: MongoDB, Firebase, SQL\n📱 Mobile: Android Development (Java), API Integration\n☁️ Cloud & Tools: Git, GitHub, Render, AWS, Jenkins, Jira, Vibe coding\n🔧 Other: IoT Integration, REST APIs, Payment Integration (Razorpay)\n\nI'm proficient in full-stack MERN development and building real-world applications!",
    },
    {
        match: /project|projects|work|portfolio work/i,
        answer:
            "📂 My Key Projects:\n\n1️⃣ HomeWave - IoT smart home automation\n2️⃣ BiteUp - MERN food delivery platform\n3️⃣ E-Vocal - Text-to-speech Android app\n4️⃣ Calculator App - Multipurpose calculator\n5️⃣ Quick Notes - Chrome extension\n6️⃣ Emotion Reader - AI Chrome extension\n7️⃣ Retro-Games - Classic Android games\n\nWant details? Ask 'Tell me about Quick Notes' or 'What is Retro Games?'",
    },
    {
        match: /experience|about you|profile|summary|who are you/i,
        answer:
            "👨‍💻 About Me:\n\nI'm a passionate full-stack developer focused on building real-world applications that solve actual problems. I specialize in:\n\n✅ End-to-end web development (MERN stack)\n✅ Mobile app development (Android/Java)\n✅ IoT integration and smart systems\n✅ Performance optimization\n✅ Creating smooth, intuitive user experiences\n\nI love turning ideas into functional, scalable applications!",
    },
    {
        match: /prd|portfolio details|detail|overview/i,
        answer:
            "📋 Portfolio Overview:\n\nThis portfolio showcases my journey as a developer! You'll find:\n\n🎯 Skills & Technologies\n💼 Featured Projects\n🏆 Achievements & Certifications\n📧 Contact Information\n\nI'm Dotz - ask me anything! Try:\n• 'What are your skills?'\n• 'Tell me about BiteUp'\n• 'What technologies do you use?'\n• 'Show me your projects'",
    },
    {
        match: /contact|email|reach|get in touch|hire/i,
        answer:
            "📧 Let's Connect!\n\nYou can reach me at:\n📬 vigneshwaranm210@gmail.com\n� Avinashi, Tiruppur, India\n\nOr connect via:\n• LinkedIn\n• GitHub\n• Instagram\n\nScroll down to the contact form to send me a message directly!",
    },
    {
        match: /education|degree|study|college|university/i,
        answer:
            "🎓 I'm continuously learning and improving my skills through hands-on projects and staying updated with the latest technologies. My practical experience includes building production-ready applications and solving real-world problems!",
    },
];

function getBotReply(input, extraFaq = []) {
    const text = input.toLowerCase().trim();
    const allFaq = [...extraFaq, ...DEFAULT_FAQ];

    // Check FAQ patterns first
    for (const item of allFaq) {
        if (item.match.test(text)) return item.answer;
    }

    // Detailed project-specific answers
    if (text.includes("homewave") || text.includes("home wave")) {
        return "🏠 HomeWave - IoT Smart Home Automation:\n\n✨ Features:\n• Control home appliances via WiFi\n• Real-time status monitoring\n• Mobile app interface (Android)\n• Firebase/SQL database integration\n• User-friendly dashboard\n\n🛠️ Tech: IoT, Android, Firebase, SQL\n\nThis project demonstrates my ability to integrate hardware with software for practical smart home solutions!";
    }

    if (text.includes("biteup") || text.includes("bite up")) {
        return "🍔 BiteUp - MERN Food Delivery Platform:\n\n✨ Features:\n• Real-time order tracking\n• Payment integration (Razorpay)\n• Live map tracking (Geoapify + React Leaflet)\n• User & restaurant dashboards\n• Production deployment on Render\n\n🛠️ Tech: MongoDB, Express, React, Node.js, Razorpay, Geoapify\n\nA complete end-to-end food delivery solution with modern features!";
    }

    if (text.includes("e-vocal") || text.includes("evocal") || text.includes("vocal")) {
        return "🗣️ E-Vocal - Text-to-Speech & Speech-to-Text App:\n\n✨ Features:\n• Convert text to natural speech\n• Convert speech to text\n• Multiple language support\n• User-friendly Android interface\n\n🛠️ Tech: Android (Java/Kotlin), Speech APIs\n\nThis app showcases my mobile development skills and API integration expertise!";
    }

    if (text.includes("calculator")) {
        return "🔢 Multipurpose Calculator App:\n\n✨ Features:\n• Available on Google Play Store\n• Multiple calculation modes\n• Clean, intuitive interface\n• Optimized performance\n\n🛠️ Tech: Android Development (Java)\n\nA practical utility app demonstrating my ability to create polished, user-ready applications!";
    }

    if (text.includes("quick notes") || text.includes("quicknotes")) {
        return "📝 Quick Notes - Chrome Extension:\n\n✨ Features:\n• Instant browser note-taking\n• Auto-save functionality\n• Keyboard shortcuts\n• Distraction-free UI\n\n🛠️ Tech: JavaScript, HTML, CSS, Chrome API\n\nA productivity tool designed for efficiency and ease of use!";
    }

    if (text.includes("emotion reader") || text.includes("emotionreader")) {
        return "😊 Emotion Reader - AI Extension:\n\n✨ Features:\n• Real-time text sentiment analysis\n• Identifies emotional tone\n• Instant visual feedback\n• Browser integration\n\n🛠️ Tech: JavaScript, AI Integration, Chrome API\n\nShowcases the integration of AI capabilities into everyday browsing!";
    }

    if (text.includes("retro") || text.includes("game")) {
        return "🎮 Retro-Games Collection:\n\n✨ Games:\n• Tic Tac Toe\n• Snake Game\n• Brick Breaker\n• Tetris\n\n🛠️ Tech: Java, Android Studio, Game Logic\n\nA nostalgic collection reinvented with modern coding practices!";
    }

    if (text.includes("frontend") || text.includes("front-end") || text.includes("ui") || text.includes("design")) {
        return "🎨 Frontend Skills:\n\n• React.js - Building dynamic, responsive UIs\n• HTML5 & CSS3 - Semantic, accessible markup\n• Tailwind CSS - Modern, utility-first styling\n• JavaScript (ES6+) - Interactive functionality\n• API Integration - Seamless data fetching\n• Framer Motion - Smooth animations\n\nI focus on creating beautiful, performant user interfaces!";
    }

    if (text.includes("backend") || text.includes("back-end") || text.includes("server") || text.includes("api")) {
        return "⚙️ Backend Skills:\n\n• Node.js & Express.js - RESTful API development\n• MongoDB - NoSQL database design\n• Firebase - Real-time data & authentication\n• SQL - Relational database management\n• API Integration - Third-party services\n• Authentication & Security\n\nI build scalable, secure backend systems!";
    }

    if (text.includes("mobile") || text.includes("android") || text.includes("app development")) {
        return "📱 Mobile Development:\n\n• Android Development (Java)\n• Published apps on Play Store\n• Material Design principles\n• API Integration\n• Local & cloud databases\n• Performance optimization\n\nI create native Android apps with great UX!";
    }

    if (text.includes("github") || text.includes("code") || text.includes("repository")) {
        return "💻 Check out my code on GitHub! You'll find various projects showcasing my development skills, automated tests, and clean code practices. Look for the GitHub link in the contact section!";
    }

    if (text.includes("help") || text.includes("what can you do") || text.includes("commands")) {
        return "🤖 I’m Dotz! Here’s what I can help you with:\n\n• Skills & Technologies\n• Project details (HomeWave, BiteUp, E-Vocal, Calculator)\n• Frontend/Backend expertise\n• Mobile development\n• Contact information\n• Portfolio overview\n\nJust ask me anything about the portfolio! Try questions like:\n• 'What are your skills?'\n• 'Tell me about BiteUp'\n• 'What's your tech stack?'\n• 'Show me your projects'";
    }

    if (text.includes("thank") || text.includes("thanks") || text.includes("awesome") || text.includes("great")) {
        return "You're welcome! 😊 Feel free to ask me anything else about me. I'm here to help!";
    }

    // Default response with helpful suggestions
    return "🤔 I'm not quite sure about that. Try asking me about:\n\n• Skills & Tech Stack\n• Projects (HomeWave, BiteUp, E-Vocal)\n• Frontend/Backend development\n• Mobile apps\n• Contact information\n\nOr just say 'help' to see what I can do!";
}

const RobotAssistant = ({ faq = [] }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: "Hey! I'm Dotz 🤖",
        },
    ]);
    const [input, setInput] = useState("");
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const robotRef = React.useRef(null);

    // Track cursor for eye movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Calculate eye position based on cursor
    const getEyePosition = () => {
        if (!robotRef.current) return { x: 0, y: 0 };

        const robotRect = robotRef.current.getBoundingClientRect();
        const robotCenterX = robotRect.left + robotRect.width / 2;
        const robotCenterY = robotRect.top + robotRect.height / 2;

        const deltaX = cursorPos.x - robotCenterX;
        const deltaY = cursorPos.y - robotCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 100, 3);

        return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
        };
    };

    const eyePos = getEyePosition();

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMessage = { from: "user", text: trimmed };
        const reply = getBotReply(trimmed, faq);
        const botMessage = { from: "bot", text: reply };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-40">
            {/* Robot fixed in bottom-right */}
            <motion.div
                className="pointer-events-auto fixed bottom-6 right-6"
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    y: [0, -8, 0],
                }}
                transition={{
                    scale: { type: "spring", stiffness: 150, damping: 12, delay: 0.5 },
                    opacity: { duration: 0.5, delay: 0.5 },
                    rotate: { type: "spring", stiffness: 100, damping: 10, delay: 0.5 },
                    y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 },
                }}
            >
                {/* Glowing ring effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-75 blur-md"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                />

                <button
                    ref={robotRef}
                    onClick={() => setIsChatOpen((prev) => !prev)}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 border-2 border-white/20 shadow-2xl flex items-center justify-center overflow-visible hover:scale-110 transition-all duration-300 hover:shadow-purple-500/50"
                >
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-cyan-400/30 blur-sm" />

                    {/* Robot head */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 flex flex-col items-center justify-center border border-purple-400/30">
                        {/* Antenna */}
                        <motion.div
                            className="absolute -top-4 h-4 w-1 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full"
                            animate={{
                                scaleY: [1, 1.1, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                            }}
                        />
                        <motion.div
                            className="absolute -top-5 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-400/50"
                            animate={{
                                scale: [1, 1.3, 1],
                                boxShadow: [
                                    "0 0 10px rgba(34, 211, 238, 0.5)",
                                    "0 0 20px rgba(168, 85, 247, 0.8)",
                                    "0 0 10px rgba(34, 211, 238, 0.5)",
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                            }}
                        />

                        {/* Eyes */}
                        <div className="flex gap-3 mb-1">
                            <motion.div
                                className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center border border-cyan-500/30"
                                animate={{
                                    y: [0, -2, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.2,
                                    delay: 0.1,
                                }}
                            >
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                                    animate={{
                                        x: eyePos.x,
                                        y: eyePos.y,
                                        boxShadow: [
                                            "0 0 5px rgba(34, 211, 238, 0.5)",
                                            "0 0 15px rgba(34, 211, 238, 0.9)",
                                            "0 0 5px rgba(34, 211, 238, 0.5)",
                                        ],
                                    }}
                                    transition={{
                                        x: { type: "spring", stiffness: 100, damping: 10 },
                                        y: { type: "spring", stiffness: 100, damping: 10 },
                                        boxShadow: { repeat: Infinity, duration: 2 },
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center border border-cyan-500/30"
                                animate={{
                                    y: [0, -2, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.2,
                                    delay: 0.4,
                                }}
                            >
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                                    animate={{
                                        x: eyePos.x,
                                        y: eyePos.y,
                                        boxShadow: [
                                            "0 0 5px rgba(34, 211, 238, 0.5)",
                                            "0 0 15px rgba(34, 211, 238, 0.9)",
                                            "0 0 5px rgba(34, 211, 238, 0.5)",
                                        ],
                                    }}
                                    transition={{
                                        x: { type: "spring", stiffness: 100, damping: 10 },
                                        y: { type: "spring", stiffness: 100, damping: 10 },
                                        boxShadow: { repeat: Infinity, duration: 2, delay: 0.3 },
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Mouth */}
                        <motion.div
                            className="w-10 h-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                            animate={{
                                width: [32, 38, 32],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.6,
                            }}
                        />
                    </div>

                    {/* Chat icon badge */}
                    <motion.div
                        className="absolute -right-1 -bottom-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-1 shadow-lg shadow-cyan-400/50"
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut",
                        }}
                    >
                        <MessageCircle className="w-4 h-4 text-white" />
                    </motion.div>
                </button>
            </motion.div>

            {/* Chat window */}
            {isChatOpen && (
                <motion.div
                    className="pointer-events-auto fixed bottom-28 right-6 w-80 h-96 max-w-[90vw] rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-md flex flex-col overflow-hidden"
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 150, damping: 18 }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-purple-500/30 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-900/50">
                        <div className="flex items-center gap-2">
                            <motion.div
                                className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold shadow-lg shadow-cyan-400/30"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 10,
                                    ease: "linear",
                                }}
                            >
                                🤖
                            </motion.div>
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    Dotz
                                </p>
                                <p className="text-[11px] text-cyan-300">
                                    Ask anything about me
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsChatOpen(false)}
                            className="p-1 rounded-full hover:bg-purple-500/20 text-slate-300 hover:text-white transition"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
                        {messages.map((m, idx) => (
                            <div
                                key={idx}
                                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-3 py-2 ${m.from === "user"
                                        ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white rounded-br-sm shadow-lg shadow-cyan-400/20"
                                        : "bg-gradient-to-br from-slate-800 to-slate-900 text-slate-50 rounded-bl-sm border border-purple-500/20"
                                        }`}
                                >
                                    {m.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="border-t border-slate-700 px-3 py-2 flex items-center gap-2">
                        <textarea
                            rows={1}
                            className="flex-1 bg-slate-900/80 rounded-xl px-3 py-1 text-xs text-slate-50 resize-none outline-none focus:ring-1 focus:ring-emerald-400/60"
                            placeholder="Ask about my skills, projects, or say hi to Dotz..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            onClick={handleSend}
                            className="p-2 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-40 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50"
                            disabled={!input.trim()}
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default RobotAssistant;

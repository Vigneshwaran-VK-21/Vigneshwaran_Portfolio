import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ParticleField from '../components/ParticleField';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Smartphone, TrendingUp, Code, Database, Server, PenTool, Download, Wrench, Mail, MapPin, Send, Github, Linkedin, Instagram, Youtube, Globe, Puzzle } from 'lucide-react';

import biteUp from '../assets/BiteUp.png';
import homeWave from '../assets/Home Wave.png';
import eVocal from '../assets/E-vocal.jpg';
import calculator from '../assets/Calcultor.png';
import quickNotes from '../assets/Quick Notes.png';
import emotionReader from '../assets/Emotion Reader.png';
import retroGames from '../assets/Retro games.jpg';
import profilePhoto from '../assets/profile photo.png';
import javaIcon from '../assets/Java.svg';
import pythonIcon from '../assets/Python.svg';
import reactIcon from '../assets/React 1.svg';
import nodeIcon from '../assets/Node.js.svg';
import mongoIcon from '../assets/MongoDB.svg';
import htmlIcon from '../assets/HTML5.svg';
import cIcon from '../assets/C.svg';
import cssIcon from '../assets/CSS3.svg';

const Home = () => {
    const skills = [
        {
            category: 'Frontend',
            icon: <Code size={24} />,
            items: ['React', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript', 'Framer Motion', 'API Integration'],
        },
        {
            category: 'Backend',
            icon: <Server size={24} />,
            items: ['Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Firebase', 'API Integration'],
        },
        {
            category: 'Mobile App',
            icon: <Smartphone size={24} />,
            items: ['Android (Java)', 'React Native', 'Firebase', 'SQL', 'API Integration'],
        },
        {
            category: 'Tools & Others',
            icon: <PenTool size={24} />,
            items: ['Git/GitHub', 'Android Studio', 'Jenkins', 'AWS', 'Vibe coding', 'Jira', 'Cloudinary'],
        },
    ];

    const projects = [
        {
            title: 'BiteUp',
            description: 'A full-stack food delivery website featuring real-time chat, live order tracking, and Razorpay payment integration.',
            tech: ['MERN Stack', 'Socket.IO', 'Razorpay', 'Tailwind CSS'],
            github: 'https://github.com/Vigneshwaran-VK-21/BiteUp.git',
            live: 'https://biteup-1.onrender.com',
            image: biteUp,
        },
        {
            title: 'HomeWave',
            description: 'IoT-based home automation app allowing users to control appliances via WiFi using Firebase as the backend.',
            tech: ['Android', 'Java', 'Firebase', 'IoT', 'ESP8266', 'Android Studio'],
            github: 'https://github.com/Vigneshwaran-VK-21/Home-Wave.git',
            image: homeWave,
        },
        {
            title: 'E-Vocal',
            description: 'An innovative app for text-to-speech and speech-to-text conversion, designed to assist with accessibility.',
            tech: ['Android', 'Functional Block', 'Realtime voice', 'Text to speech'],
            live: 'https://play.google.com/store/apps/details?id=appinventor.ai_vickyking0251.E_vocal&pcampaignid=web_share',
            image: eVocal,
        },
        {
            title: 'Calculator',
            description: 'A versatile calculator app published on the Play Store, featuring standard, scientific, and unit conversion modes.',
            tech: ['Android', 'functional block', 'Search Engine', 'Translator', 'Age', 'BMI'],
            live: 'https://play.google.com/store/apps/details?id=appinventor.ai_developmentapps228.CALCULATER&pcampaignid=web_share',
            image: calculator,
        },
        {
            title: 'Quick Notes',
            description: 'Lightweight Chrome extension for instant note-taking in the browser, with auto-save, keyboard shortcuts, and a distraction-free UI for capturing ideas on the go.',
            tech: ['Chrome Extension', 'JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/Vigneshwaran-VK-21/Quick-Notes.git',
            image: quickNotes,
        },
        {
            title: 'Emotion Reader',
            description: 'AI-powered Chrome extension that analyzes on-screen text and highlights the overall emotion and sentiment in real time, helping users quickly understand content tone.',
            tech: ['Chrome Extension', 'JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/Vigneshwaran-VK-21/Emotion-Reader.git',
            image: emotionReader,
        },
        {
            title: 'Retro-Games',
            description: 'Step into the nostalgic world of classic gaming! This project features refreshed versions of timeless favorites including Tic Tac Toe, Snake Game, Brick Breaker, and Tetris — all brought to life through modern programming techniques.',
            tech: ['Java', 'Android', 'Game Development', 'Android Studio'],
            live: 'https://play.google.com/store/apps/details?id=com.game.retrogames&pli=1',
            image: retroGames,
        },
    ];

    const services = [
        {
            title: 'Android Development',
            description: 'Custom Android and Web application development tailored to your business needs. From concept to deployment, I handle it all.',
            icon: <Code size={40} className="text-primary" />,
            features: ['Native Android Apps', 'MERN Stack Web Apps', 'UI/UX Design', 'API Integration'],
        },
        {
            title: 'Web Development',
            description: 'Custom and scalable web solutions tailored for your business needs. From responsive websites to dynamic full-stack applications.',
            icon: <Globe size={40} className="text-secondary" />,
            features: ['Responsive UI/UX Design', 'Frontend & Backend Development', 'API Integration', 'MERN Stack Development'],
        },
        {
            title: 'Chrome Extension Development',
            description: 'Professional Chrome extension development to enhance browser functionality and boost productivity. From simple tools to complex automation solutions.',
            icon: <Puzzle size={40} className="text-accent" />,
            features: ['Custom Browser Extensions', 'API Integration', 'Content Script Development'],
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS configuration missing');
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Vigneshwaran M',
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email me directly.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen">
            <Hero />

            {/* About Section */}
            <section id="about" className="py-20 relative overflow-hidden">
                <ParticleField />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
                        </h2>

                        {/* Profile Photo - Ultra Enhanced */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                            className="mb-12 flex justify-center relative"
                        >
                            {/* Floating Programming Language Icons */}
                            {/* Java - Top Left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 0.4 },
                                    scale: { duration: 0.5, delay: 0.4 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 10, 0]
                                }}
                                whileHover={{ scale: 1.2, rotate: 15 }}
                                className="absolute -top-16 left-8 md:left-12 w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/50 cursor-pointer z-10 p-2"
                            >
                                <img src={javaIcon} alt="Java" className="w-full h-full object-contain" />
                            </motion.div>

                            {/* Python - Top Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 0.5 },
                                    scale: { duration: 0.5, delay: 0.5 },
                                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                    rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                                }}
                                animate={{
                                    y: [0, -12, 0],
                                    rotate: [0, -8, 0]
                                }}
                                whileHover={{ scale: 1.2, rotate: -15 }}
                                className="absolute -top-12 right-12 md:right-16 w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 cursor-pointer z-10 p-2"
                            >
                                <img src={pythonIcon} alt="Python" className="w-full h-full object-contain" />
                            </motion.div>

                            {/* React - Right Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 0.6 },
                                    scale: { duration: 0.5, delay: 0.6 },
                                    x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                animate={{
                                    x: [0, 10, 0],
                                    y: [0, -8, 0]
                                }}
                                whileHover={{ scale: 1.2 }}
                                className="absolute right-0 top-1/4 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 cursor-pointer z-10 p-2"
                            >
                                <img
                                    src={reactIcon}
                                    alt="React"
                                    className="w-full h-full object-contain animate-spin-slow"
                                />
                            </motion.div>

                            {/* Node.js - Bottom Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 0.7 },
                                    scale: { duration: 0.5, delay: 0.7 },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                                }}
                                animate={{
                                    y: [0, 12, 0],
                                    rotate: [0, -12, 0]
                                }}
                                whileHover={{ scale: 1.2, rotate: 20 }}
                                className="absolute -bottom-8 right-8 md:right-16 w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/50 cursor-pointer z-10 p-2"
                            >
                                <img src={nodeIcon} alt="Node.js" className="w-full h-full object-contain" />
                            </motion.div>

                            {/* MongoDB - Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 0.8 },
                                    scale: { duration: 0.5, delay: 0.8 },
                                    y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                                    rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                                }}
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, 8, 0]
                                }}
                                whileHover={{ scale: 1.2, rotate: -20 }}
                                className="absolute -bottom-12 left-4 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg shadow-green-600/50 cursor-pointer z-10 p-2"
                            >
                                <img src={mongoIcon} alt="MongoDB" className="w-full h-full object-contain" />
                            </motion.div>

                            {/* HTML - Left Side Top */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                animate={{
                                    x: [0, -10, 0],
                                    y: [0, -10, 0]
                                }}
                                whileHover={{ scale: 1.2 }}
                                className="absolute left-0 top-1/4 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50 cursor-pointer z-10 p-2"
                            >
                                <img src={htmlIcon} alt="HTML5" className="w-full h-full object-contain" />
                            </motion.div>

                            {/* C Language - Left Side Bottom */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                animate={{
                                    x: [0, -8, 0],
                                    rotate: [0, 15, 0]
                                }}
                                whileHover={{ scale: 1.2, rotate: -25 }}
                                className="absolute left-4 bottom-1/4 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-blue-600/50 cursor-pointer z-10 p-2"
                            >
                                <img src={cIcon} alt="C" className="w-full h-full object-contain" />
                            </motion.div>

                            {/* CSS - Right Side Bottom */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 1.1 },
                                    scale: { duration: 0.5, delay: 1.1 },
                                    y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 3 },
                                    rotate: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 3 }
                                }}
                                animate={{
                                    y: [0, -18, 0],
                                    rotate: [0, -10, 0]
                                }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="absolute right-4 bottom-1/4 w-16 h-16 md:w-18 md:h-18 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 cursor-pointer z-10 p-2"
                            >
                                <img src={cssIcon} alt="CSS3" className="w-full h-full object-contain" />
                            </motion.div>

                            {/* Floating Decorative Elements */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl opacity-20 blur-xl"
                            />
                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl"
                            />
                            <motion.div
                                animate={{
                                    x: [-10, 10, -10],
                                    y: [-5, 5, -5]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full opacity-15 blur-xl"
                            />

                            <div className="relative group">
                                {/* Animated Gradient Rings - Multiple Layers */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-6 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 rounded-full blur-lg opacity-50"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-500 rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                                />
                                <motion.div
                                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-sm opacity-40"
                                />

                                {/* Profile Image Container with Enhanced Design */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotateZ: 3 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative"
                                >
                                    <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/50">
                                        {/* Profile Photo */}
                                        <img
                                            src={profilePhoto}
                                            alt="Vigneshwaran M - Profile Photo"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />

                                        {/* Multi-layer Gradient Overlay for artistic effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-yellow-500/20 mix-blend-overlay" />
                                        <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/15 via-transparent to-blue-500/15 mix-blend-screen" />

                                        {/* Animated Gradient Overlay */}
                                        <motion.div
                                            animate={{
                                                background: [
                                                    'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
                                                    'linear-gradient(90deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                                                    'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))',
                                                    'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
                                                ]
                                            }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0"
                                        />

                                        {/* Shine Effect */}
                                        <motion.div
                                            animate={{
                                                x: ['-100%', '200%']
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                        />
                                    </div>
                                </motion.div>

                                {/* Sparkle Effects - Enhanced */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute top-4 right-8 w-4 h-4 bg-yellow-400 rounded-full blur-sm shadow-lg shadow-yellow-400/50"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                    className="absolute bottom-12 left-8 w-3 h-3 bg-cyan-400 rounded-full blur-sm shadow-lg shadow-cyan-400/50"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [0.3, 0.9, 0.3]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                    className="absolute top-1/2 right-4 w-2 h-2 bg-pink-400 rounded-full blur-sm shadow-lg shadow-pink-400/50"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.6, 1],
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }}
                                    className="absolute top-8 left-12 w-3 h-3 bg-purple-400 rounded-full blur-sm shadow-lg shadow-purple-400/50"
                                />
                            </div>
                        </motion.div>

                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Driven Full Stack Developer with a strong foundation in software development and a background in Electrical and Electronics Engineering. Skilled in using modern programming languages and frameworks to build efficient, scalable web applications. Highly adaptable, detail-oriented, and passionate about solving real-world problems through innovative technology solutions. Dedicated to contributing effectively in dynamic environments and consistently exceeding project goals.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/VIGNESHWARAN_M_CV.pdf"
                                download="VIGNESHWARAN_M_CV.pdf"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105"
                            >
                                <Download size={20} /> Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className="text-blue-400 mb-4">{skill.icon}</div>
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{skill.category}</h3>
                                <ul className="space-y-2">
                                    {skill.items.map((item, idx) => (
                                        <li key={idx} className="text-gray-300 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Projects Section */}
            < section id="projects" className="py-20 bg-gradient-to-b from-dark via-blue-950/10 to-dark relative overflow-hidden" >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Here are some of the projects I've worked on, ranging from web applications and mobile apps.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                                onClick={setSelectedProject}
                            />
                        ))}
                    </div>

                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                </div>
            </section >

            {/* Services Section */}
            < section id="services" className="py-20 relative overflow-hidden" >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            My <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            I offer a range of services to help businesses and individuals succeed in the digital world.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:border-pink-500/50 transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">{service.title}</h3>
                                <p className="text-gray-300 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Contact Section */}
            < section id="contact" className="py-20 bg-gradient-to-b from-dark via-cyan-950/10 to-dark relative overflow-hidden" >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Contact <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Have a project in mind or want to discuss a collaboration? Feel free to reach out!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Email</h3>
                                        <a href="mailto:vigneshwaranm210@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                            vigneshwaranm210@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg text-secondary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Location</h3>
                                        <p className="text-gray-400">Avinashi,Tiruppur,India</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
                            <div className="flex gap-4">
                                <a href="https://github.com/Vigneshwaran-VK-21" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/vigneshwaran-m-095412226/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://www.instagram.com/atman._.vicky__official/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
                        >
                            <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white transition-colors resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 border border-green-500/50 text-green-300' : 'bg-red-500/20 border border-red-500/50 text-red-300'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'} <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;

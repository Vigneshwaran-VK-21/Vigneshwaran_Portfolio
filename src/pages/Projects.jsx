import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';
import { useState } from 'react';

import biteUp from '../assets/BiteUp.png';
import homeWave from '../assets/Home Wave.png';
import eVocal from '../assets/E-vocal.jpg';
import calculator from '../assets/Calcultor.png';
import quickNotes from '../assets/Quick Notes.png';
import emotionReader from '../assets/Emotion Reader.png';
import retroGames from '../assets/Retro games.jpg';

const Projects = () => {
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

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    My <span className="text-primary">Projects</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
    );
};

export default Projects;

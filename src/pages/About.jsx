import { motion } from 'framer-motion';
import { Download, Code, Database, Smartphone, Server, PenTool } from 'lucide-react';

const About = () => {
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

    return (
        <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    About <span className="text-primary">Me</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Driven Full Stack Developer with a strong foundation in software development and a background in Electrical and Electronics Engineering. Skilled in using modern programming languages and frameworks to build efficient, scalable web applications. Highly adaptable, detail-oriented, and passionate about solving real-world problems through innovative technology solutions. Dedicated to contributing effectively in dynamic environments and consistently exceeding project goals.
                </p>

                <div className="mt-8">
                    <a
                        href="/path-to-cv.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-colors"
                    >
                        <Download size={20} /> Download CV
                    </a>
                </div>
            </motion.div>

            {/* Skills Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                    >
                        <div className="text-primary mb-4">{skill.icon}</div>
                        <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                        <ul className="space-y-2">
                            {skill.items.map((item, idx) => (
                                <li key={idx} className="text-gray-400 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default About;

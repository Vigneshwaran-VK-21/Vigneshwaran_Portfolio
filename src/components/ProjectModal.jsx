import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-2xl bg-gray-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
                >


                    {/* Scrollable Content Container */}
                    <div className="overflow-y-auto custom-scrollbar flex-1 relative">
                        {/* Hero Image Section */}
                        <div className="relative h-48 md:h-64 shrink-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2"
                                >
                                    {project.title}
                                </motion.h2>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Main Info */}
                                <div className="md:col-span-2 space-y-6">
                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                                            Project Overview
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {project.description}
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-primary">
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-primary/50 transition-colors flex items-center gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Sidebar Actions */}
                                <div className="space-y-6">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                                        <h3 className="text-lg font-semibold text-white mb-4">Links & Resources</h3>

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all group"
                                            >
                                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                                                <span>View Code</span>
                                            </a>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all shadow-lg shadow-purple-500/25 group"
                                            >
                                                <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}

                                        {!project.github && !project.live && (
                                            <div className="text-center text-gray-400 py-2 text-sm italic">
                                                Private Project / In Progress
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <style jsx="true">{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: rgba(255, 255, 255, 0.05);
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(255, 255, 255, 0.2);
                    }
                `}</style>

                {/* Close Button - Fixed relative to modal, placed last for z-index */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-[60] p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10 cursor-pointer"
                >
                    <X size={24} />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;

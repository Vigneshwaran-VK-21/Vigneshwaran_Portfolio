import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
            onClick={() => onClick(project)}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group shadow-lg hover:shadow-purple-500/30 cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 bg-gray-900">
                {project.image ? (
                    <>
                        {/* Blurred Background for ambiance */}
                        <div className="absolute inset-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover blur-xl opacity-60 scale-110 group-hover:scale-125 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                        </div>
                        {/* Main Image - Contained */}
                        <div className="absolute inset-0 flex items-center justify-center p-3">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-auto max-w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl rounded-lg border border-white/10 shadow-black/50"
                                loading="lazy"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                            {project.title} Preview
                        </div>
                    </>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-all hover:scale-110"
                        >
                            <Github size={16} /> Code
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-400 transition-all hover:scale-110"
                        >
                            <ExternalLink size={16} className="text-blue-400" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { name: 'Home', path: '/', section: null },
        { name: 'About', path: '/', section: 'about' },
        { name: 'Projects', path: '/', section: 'projects' },
        { name: 'Services', path: '/', section: 'services' },
        { name: 'Contact', path: '/', section: 'contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                if (link.section) {
                    scrollToSection(link.section);
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else {
            if (link.section) {
                scrollToSection(link.section);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-dark/80 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/src/assets/vk-8.png" alt="VK Logo" className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-300" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.section ? `#${link.section}` : '#'}
                                onClick={(e) => handleNavClick(e, link)}
                                className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 text-gray-300 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/Vigneshwaran-VK-21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/vigneshwaran-m-095412226/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.section ? `#${link.section}` : '#'}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

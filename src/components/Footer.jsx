import { Github, Linkedin, Mail, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Vigneshwaran M
                        </h3>
                        <p className="text-gray-400 mt-2">Building Connected Experiences</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Vigneshwaran-VK-21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/vigneshwaran-m-095412226/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="vigneshwaranm210@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                        <a href="https://www.instagram.com/atman._.vicky__official/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Vigneshwaran M. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

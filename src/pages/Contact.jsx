import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                console.error('EmailJS configuration missing. Please check your .env file.');
                setStatus({
                    type: 'error',
                    message: 'Contact form configuration error. Please try again later.'
                });
                setIsLoading(false);
                return;
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Vigneshwaran M', // Your name
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
        <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Contact <span className="text-primary">Me</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Have a project in mind or want to discuss a collaboration? Feel free to reach out!
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
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
                                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sending...' : 'Send Message'} <Send size={20} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

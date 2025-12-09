import { motion } from 'framer-motion';
import { Code, Globe, Puzzle } from 'lucide-react';

const Services = () => {
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
        }

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
                    My <span className="text-primary">Services</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    I offer a range of services to help businesses and individuals succeed in the digital world.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                    >
                        <div className="mb-6">{service.icon}</div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-400 mb-6">{service.description}</p>
                        <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;

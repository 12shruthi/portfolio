import React, { useState, useEffect } from 'react';

function Nav() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
            let currentSection = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_30px_rgb(0,0,0,0.05)] py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">

                {/* Logo / Home Link */}
                <a href="#home" className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter hover:text-blue-600 transition-colors duration-300 relative group">
                    Shruthi<span className="text-blue-600">.</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeSection === link.id ? 'text-white bg-blue-600 shadow-md transform -translate-y-0.5' : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button with Animation state */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu Dropdown */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="py-2 px-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 ${activeSection === link.id ? 'text-white bg-blue-600 shadow-sm' : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Nav;

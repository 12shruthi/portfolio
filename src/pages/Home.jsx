import React from 'react';

function Home() {
    return (
        <section id="home" className="min-h-[90vh] flex items-center justify-center py-20 relative overflow-hidden">
            {/* Professional subtle background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60 animate-float -z-10 mix-blend-multiply"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-100 rounded-full blur-[120px] opacity-40 animate-float-delayed -z-10 mix-blend-multiply"></div>

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay -z-10 pointer-events-none"></div>

            <div className="w-full max-w-4xl mx-auto text-center px-4 relative z-10">
                <div className="space-y-8 flex flex-col items-center">

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.1] opacity-0 animate-fade-in-up">
                        Hi, I'm <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Shruthi Vishalakshi R
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100 font-medium">
                        Aspiring to secure a position in a reputed organization where I can continuously learn new skills, enhance my knowledge, and utilize my potential to contribute to organizational growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto pt-6 opacity-0 animate-fade-in-up delay-200">
                        <a href="#projects" className="bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                            View My Work
                        </a>
                        <a href="#contact" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold py-4 px-10 rounded-full shadow-sm transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1 hover:border-blue-200">
                            Let's Connect
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;

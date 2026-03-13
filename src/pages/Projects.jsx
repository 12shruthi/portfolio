import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

function Projects() {
    const projects = [
        {
            title: 'Medical Insurance Cost Prediction',
            desc: 'Developed a machine learning model to predict medical insurance charges based on demographic and lifestyle factors using regression algorithms such as Linear Regression, Decision Tree, and Random Forest. The project involved data analysis, model evaluation, and implementation using Python and Scikit-learn.',
            tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Regression'],
            icon: (
                <svg className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="projects" className="py-24 max-w-6xl mx-auto px-4">
            <RevealOnScroll className="mb-16 flex items-center gap-6 justify-center">
                <div className="h-px bg-slate-200 flex-1 hidden md:block"></div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Projects</h2>
                <div className="h-px bg-slate-200 flex-1 hidden md:block"></div>
            </RevealOnScroll>

            <div className="space-y-16">
                {projects.map((proj, idx) => (
                    <RevealOnScroll key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                        {/* Project Block */}
                        <div className="w-full lg:w-1/2 aspect-video bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center p-8 relative group overflow-hidden transition-all duration-300">
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                                <a href="https://github.com/12shruthi" target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-slate-800">
                                    View on GitHub
                                </a>
                            </div>
                            {proj.icon}
                        </div>

                        {/* Project Info */}
                        <div className="w-full lg:w-1/2 space-y-6 lg:px-8">
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">{proj.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">{proj.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {proj.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-lg text-sm font-bold shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}

export default Projects;

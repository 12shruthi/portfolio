import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

function About() {
    return (
        <section id="about" className="py-24 border-t border-slate-200/60 mt-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto px-4 md:px-6">

                {/* About Info */}
                <RevealOnScroll className="space-y-6 md:space-y-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">About Me</h2>

                    <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                        I am aspiring to secure a position in a reputed organization where I can continuously learn new skills, enhance my knowledge, and utilize my potential to contribute to the organization's growth.
                    </p>

                    <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                        <h3 className="text-blue-600 font-bold text-base md:text-lg mb-2 md:mb-4 flex items-center gap-2">
                            Personal Details
                        </h3>
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <p className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">Born</p>
                                <p className="text-slate-800 text-sm md:text-base font-medium">04-10-2004</p>
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">Languages</p>
                                <p className="text-slate-800 text-sm md:text-base font-medium">Tamil, English</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">Location</p>
                                <p className="text-slate-800 text-sm md:text-base font-medium">Ramasamy Nagar, Puliakulam, Coimbatore 641045</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Personal Interests</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {['Videography', 'Editing', 'Dance Performances', 'Drawing'].map((interest, i) => (
                                <span key={i} className="px-3 md:px-5 py-1.5 md:py-2 bg-slate-100 text-slate-700 rounded-full text-xs md:text-sm font-semibold">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Skills List */}
                <RevealOnScroll delay={200} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-slate-100">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8 text-slate-900">Skills Stack</h3>

                    <div className="space-y-8 md:space-y-10">
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-slate-800 mb-4 md:mb-5 flex items-center gap-3">
                                Technical Skills
                            </h4>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {['C', 'Java', 'SQL', 'Python', 'Scikit-learn', 'HTML', 'CSS', 'JavaScript'].map(skill => (
                                    <span key={skill} className="bg-blue-50 text-blue-700 px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold border border-blue-100">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 md:pt-8 border-t border-slate-100">
                            <h4 className="text-base md:text-lg font-bold text-slate-800 mb-4 md:mb-5 flex items-center gap-3">
                                Soft Skills
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {[
                                    'Strong Communication',
                                    'Critical Thinking',
                                    'Adaptability',
                                    'Teamwork'
                                ].map(skill => (
                                    <div key={skill} className="flex items-center gap-2 md:gap-3 bg-slate-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-slate-100">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 shrink-0 bg-blue-500 rounded-full"></div>
                                        <span className="text-slate-700 text-xs md:text-sm font-bold">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </RevealOnScroll>
            </div>
        </section>
    );
}

export default About;

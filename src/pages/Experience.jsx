import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

function Experience() {
    const experiences = [
        {
            role: 'Project Intern',
            company: 'Cyber Vault Innovations',
            date: 'Nov 2024 - Mar 2025',
            desc: 'Worked on the project "Medical Insurance Prediction Using Machine Learning". Analyzed demographic and lifestyle data and developed regression-based machine learning models using Python and Scikit-learn. Gained practical exposure to real-world data analysis and model development.'
        },
        {
            role: 'Industrial Exposure Trainee',
            company: 'Adroit Dies and Moulds Pvt. Ltd.',
            date: 'April 2024 - May 2024',
            desc: 'Industrial Exposure Training (IET). Successfully completed the program and received the IET completion certificate by developing a static website using HTML, CSS, and JavaScript.'
        }
    ];

    return (
        <section id="experience" className="py-20 md:py-24 max-w-6xl mx-auto px-4 md:px-6">
            <RevealOnScroll className="mb-10 md:mb-16 flex items-center gap-6 justify-center">
                <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Internships</h2>
                <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {experiences.map((exp, idx) => (
                    <RevealOnScroll key={idx} delay={idx * 150} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                        <span className="inline-block px-3 md:px-4 py-1.5 bg-slate-50 text-slate-600 border border-slate-200 text-xs md:text-sm font-bold rounded-full mb-4 md:mb-6 shadow-sm">{exp.date}</span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 md:mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">{exp.role}</h3>
                        <p className="text-blue-600 font-bold mb-4 md:mb-6 text-xs md:text-sm tracking-wide uppercase">{exp.company}</p>
                        <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                            {exp.desc}
                        </p>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}

export default Experience;

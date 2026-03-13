import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

function Education() {
    const education = [
        {
            degree: 'Master of Computer Application',
            school: 'Kumaraguru College of Technology, Coimbatore',
            date: '2025 - 2027',
            desc: 'Currently pursuing MCA focusing on advanced computer applications and software development.'
        },
        {
            degree: 'Bachelor of Science in AI and ML',
            school: 'Sri Krishna Arts and Science College, Coimbatore',
            date: '2022 - 2025',
            desc: 'CGPA 7.6. Studied fundamental concepts of Artificial Intelligence and Machine Learning.'
        },
        {
            degree: 'HSC',
            school: 'ALG Matriculation Higher Secondary School',
            date: '2022',
            desc: 'CGPA 8.2. Completed Higher Secondary Certificate.'
        },
        {
            degree: 'SSLC',
            school: 'ALG Matriculation Higher Secondary School',
            date: '2020',
            desc: 'CGPA 7.6. Completed Secondary School Leaving Certificate.'
        }
    ];

    return (
        <section id="education" className="py-24 max-w-5xl mx-auto px-4">
            <RevealOnScroll className="mb-12 flex items-center gap-6 justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Education</h2>
                <div className="h-px bg-slate-200 flex-1"></div>
            </RevealOnScroll>

            <div className="space-y-6">
                {education.map((edu, idx) => (
                    <RevealOnScroll key={idx} delay={idx * 100} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center justify-between group">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{edu.degree}</h3>
                            <p className="text-blue-600 font-bold text-sm tracking-wide uppercase mb-3">{edu.school}</p>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl font-medium">
                                {edu.desc}
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center gap-4">
                            <div className="h-px w-8 bg-slate-200 hidden md:block"></div>
                            <span className="px-5 py-2.5 bg-slate-50 text-slate-700 border border-slate-200 font-bold rounded-full text-sm shadow-sm whitespace-nowrap">
                                {edu.date}
                            </span>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}

export default Education;

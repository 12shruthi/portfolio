import React from 'react';

function Certificates() {
    const certs = [
        { title: 'Machine Learning', issuer: 'Oracle', color: 'text-red-600', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { title: 'Data Science', issuer: 'IBM', color: 'text-blue-600', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Programming in Java', issuer: 'NPTEL', color: 'text-indigo-600', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
        { title: 'Cloud Essentials', issuer: 'AWS', color: 'text-orange-600', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
        { title: 'ML Specialization', issuer: 'Coursera', color: 'text-sky-600', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
    ];

    return (
        <section id="certificates" className="py-20 md:py-24 max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Certifications</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg font-medium">Highlighting professional achievements from global leaders in technology.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {certs.map((cert, idx) => (
                    <div key={idx} className="relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                        <div className="h-full bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl flex flex-col items-center text-center transform group-hover:-translate-y-2 transition-all duration-300">

                            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2 leading-snug">{cert.title}</h3>

                            <div className={`text-lg font-black tracking-widest uppercase transition-colors duration-300 mb-6 ${cert.color}`}>
                                {cert.issuer}
                            </div>

                            <div className="mt-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 group-hover:bg-slate-100 group-hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cert.icon} />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;

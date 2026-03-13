import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import RevealOnScroll from '../components/RevealOnScroll';

function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Fetch EmailJS credentials from Vite environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    form.current.reset();

                    // Clear the success message after 5 seconds
                    setTimeout(() => setSubmitStatus(null), 5000);
                },
                (error) => {
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                    console.error('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact" className="py-16 md:py-24 max-w-5xl mx-auto px-4">
            <RevealOnScroll>
                <div className="bg-white rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-16 border border-slate-200 shadow-sm relative overflow-hidden">

                    <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16">

                        {/* Contact Info - Hidden on strictly Mobile screens */}
                        <div className="hidden md:block space-y-6 md:space-y-8">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 md:mb-4">Get in Touch</h2>
                                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                                    I'm actively looking for new opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <a href="mailto:shruthivishalakshi1@gmail.com" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <span className="font-semibold text-sm sm:text-base md:text-lg break-all">shruthivishalakshi1@gmail.com</span>
                                </a>

                                <a href="https://www.linkedin.com/in/shruthi-vishalakshi-r-92550528a/?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </div>
                                    <span className="font-semibold text-sm sm:text-base md:text-lg">LinkedIn Profile</span>
                                </a>

                                <a href="https://github.com/12shruthi" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </div>
                                    <span className="font-semibold text-sm sm:text-base md:text-lg">GitHub Profile</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-[1.5rem] border border-slate-200">

                            {/* Make it clear it's a contact form on mobile since the title is hidden */}
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6 md:hidden">Get in Touch</h2>

                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label htmlFor="user_name" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                                    <input type="text" name="user_name" id="user_name" placeholder="Shruhi" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 bg-white shadow-sm text-sm sm:text-base" required disabled={isSubmitting} />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                                    <input type="email" name="user_email" id="user_email" placeholder="Shruthi@example.com" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 bg-white shadow-sm text-sm sm:text-base" required disabled={isSubmitting} />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                                    <textarea name="message" id="message" rows="4" placeholder="How can we help you?" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 resize-none bg-white shadow-sm text-sm sm:text-base" required disabled={isSubmitting}></textarea>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium">
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium">
                                        Failed to send message. Please try again later or contact me directly via email.
                                    </div>
                                )}

                                <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold py-3 sm:py-3.5 px-6 rounded-lg sm:rounded-xl transition-all shadow-sm text-sm sm:text-base flex justify-center items-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Contact;

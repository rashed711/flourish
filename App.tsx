
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  MapPin
} from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import { 
  SERVICES, 
  WHY_US, 
  PROJECTS 
} from './constants';

const HERO_IMAGES = [
  'https://i.pinimg.com/736x/dc/cd/c6/dccdc6dda9362699135def83fb4cf0ec.jpg',
  'https://i.pinimg.com/736x/75/b1/b8/75b1b8519b47c96ef1a5746c345d4d55.jpg',
  'https://i.pinimg.com/1200x/ba/60/27/ba6027d1ddfa96036dbc5a403cfe5c82.jpg'
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Who We Are', id: 'about' },
    { name: 'What We Do', id: 'services' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-inter selection:bg-emerald-200 selection:text-emerald-900">
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center cursor-pointer group z-[101]" onClick={() => scrollToSection('home')}>
            <div className="bg-emerald-700 p-1.5 md:p-2 rounded transform group-hover:rotate-12 transition-transform duration-300 mr-2 md:mr-3">
              <span className="text-white font-bold text-lg md:text-xl tracking-tighter">F</span>
            </div>
            <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-slate-900' : 'text-white'}`}>
              Flourish <span className="text-emerald-500 font-light hidden sm:inline">Landscaping</span>
            </span>
          </div>

          <div className="hidden lg:flex space-x-8 xl:space-x-10 items-center">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className={`text-[10px] xl:text-xs uppercase tracking-[0.2em] font-bold transition-all hover:text-emerald-500 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all hover:after:w-full ${isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'}`}>
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="bg-emerald-600 text-white px-6 xl:px-8 py-2.5 rounded-full text-[10px] xl:text-xs uppercase tracking-widest font-bold hover:bg-emerald-700 transition-all shadow-lg active:scale-95">
              Contact Us
            </button>
          </div>

          <button className={`lg:hidden z-[101] p-2 transition-colors ${isScrolled || isMenuOpen ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`fixed inset-0 bg-white z-[100] lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-full flex flex-col justify-center items-center px-6 space-y-6 sm:space-y-8">
            {navLinks.map((link, idx) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className={`text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 hover:text-emerald-600 transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${idx * 50}ms` }}>
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="bg-emerald-600 text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-black shadow-xl mt-4">
              Start Your Project
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-950">
        {HERO_IMAGES.map((img, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${currentHeroIndex === idx ? 'opacity-50 scale-100' : 'opacity-0 scale-110'}`} style={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        ))}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-white pt-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Building Green, <br />
              <span className="text-emerald-500 italic font-serif font-light">Living Clean</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mb-8 md:mb-12 text-slate-200/90 max-w-2xl font-light leading-relaxed">
              Designing, constructing, and maintaining sustainable outdoor environments that elevate the standard of modern living.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto bg-emerald-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-black hover:bg-emerald-700 transition-all shadow-xl flex items-center justify-center group">
                Contact Us <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('about')} className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-black hover:bg-white/20 transition-all">
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 md:w-40 h-24 md:h-40 bg-emerald-50 rounded-full blur-3xl opacity-60 -z-10"></div>
              <img src="https://i.pinimg.com/1200x/13/e1/de/13e1de1144cf5f2099f09ef0e6bf24e1.jpg" alt="Professional Landscape Construction" className="rounded-2xl md:rounded-[40px] shadow-2xl w-full object-cover h-[350px] sm:h-[450px] md:h-[550px]" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">About Flourish</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight tracking-tight">We’re more than a company — we’re a movement.</h2>
              <p className="text-slate-600 text-sm md:text-lg font-light leading-relaxed">
                At Flourish, we specialize in landscape design and construction, pest control, and full maintenance services. 
                Our team combines creativity and technical expertise to deliver excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Core Solutions" subtitle="Integrated services designed for large-scale outdoor environments." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-2xl md:rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <div className="mb-6 inline-block p-4 md:p-5 bg-emerald-50 rounded-xl md:rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 md:w-10 md:h-10" })}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <div className="h-0.5 w-12 bg-emerald-600 group-hover:w-full transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white/5 p-8 rounded-[30px] border border-white/10 group hover:bg-emerald-600 transition-all">
              <Phone className="mx-auto mb-6 text-emerald-400 group-hover:text-white" size={40} />
              <a href="tel:+2001063588888" className="text-xl font-bold tracking-tight block">(+20) 010 635 88888</a>
            </div>
            <div className="bg-white/5 p-8 rounded-[30px] border border-white/10 group hover:bg-emerald-600 transition-all">
              <Mail className="mx-auto mb-6 text-emerald-400 group-hover:text-white" size={40} />
              <a href="mailto:info@flourish-landscaping.com" className="text-xl font-bold tracking-tight block">info@flourish-landscaping.com</a>
            </div>
            <div className="bg-white/5 p-8 rounded-[30px] border border-white/10 group hover:bg-emerald-600 transition-all">
              <Globe className="mx-auto mb-6 text-emerald-400 group-hover:text-white" size={40} />
              <span className="text-xl font-bold tracking-tight block">Cairo, Egypt</span>
            </div>
          </div>
          <p className="mt-20 opacity-40 text-[10px] tracking-widest uppercase">&copy; {new Date().getFullYear()} Flourish Landscaping. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default App;

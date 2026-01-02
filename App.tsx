
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, Mail, ArrowRight, 
  Instagram, Facebook, Linkedin, 
  ChevronRight, MapPin, Clock, Award,
  Sparkles, MousePointer2, CheckCircle2
} from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import { SERVICES, CLIENTS, WHY_US, CORE_VALUES } from './constants';

// رابط الشعار المحدث
const flourishLogo = 'https://www2.0zz0.com/2025/12/23/19/181773322.png';

const HERO_IMAGES = [
  'https://i.pinimg.com/736x/dc/cd/c6/dccdc6dda9362699135def83fb4cf0ec.jpg',
  'https://i.pinimg.com/736x/75/b1/b8/75b1b8519b47c96ef1a5746c345d4d55.jpg',
  'https://i.pinimg.com/1200x/ba/60/27/ba6027d1ddfa96036dbc5a403cfe5c82.jpg'
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeValueTab, setActiveValueTab] = useState(0); // 'Integrity' by default
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    const heroTimer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      clearInterval(heroTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* Interactive Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-0 -left-10 w-64 h-64 md:w-96 md:h-96 bg-emerald-100/40 rounded-full blur-3xl animate-blob"
          style={{ transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)` }}
        />
        <div 
          className="absolute bottom-0 -right-10 w-72 h-72 md:w-[30rem] md:h-[30rem] bg-teal-100/40 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-2xl shadow-xl py-2 md:py-3' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
            <img 
              src={flourishLogo} 
              alt="Flourish Landscaping Logo" 
              className={`h-10 md:h-14 lg:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105 rounded-xl md:rounded-2xl ${!isScrolled ? 'drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)]' : ''}`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/200x80?text=Flourish";
              }}
            />
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            {['About', 'Services'].map((name) => (
              <button 
                key={name} 
                onClick={() => scrollToSection(name.toLowerCase())}
                className={`text-[10px] uppercase tracking-[0.25em] font-black transition-all hover:text-emerald-600 relative group ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                {name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-emerald-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-emerald-600 text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-black overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <span className="relative z-10">Consult Now</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          <button className={`lg:hidden p-2 transition-transform active:scale-90 ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950 z-[90] lg:hidden transition-all duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)] ${isMenuOpen ? 'clip-path-open' : 'clip-path-closed'}`}
        style={{ clipPath: isMenuOpen ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)' }}>
        <div className="h-full flex flex-col justify-center items-center space-y-8 p-6 text-center">
          <img src={flourishLogo} alt="Logo" className="h-20 w-auto mb-4 bg-white/10 p-3 rounded-2xl backdrop-blur-md" />
          {['Home', 'About', 'Services'].map((item, idx) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} 
              className={`text-3xl font-bold text-white hover:text-emerald-400 transition-all tracking-tighter transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className={`text-3xl font-bold text-emerald-400 hover:text-white transition-all tracking-tighter transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `400ms` }}
          >
            Consult Now
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        {HERO_IMAGES.map((img, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-[3000ms] ${currentHeroIndex === idx ? 'opacity-80' : 'opacity-0'}`}>
            <div className="w-full h-full bg-cover bg-center animate-kenburns" style={{ backgroundImage: `url('${img}')` }} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/90" />
        
        <div className="container mx-auto px-4 lg:px-12 z-10">
          <div className="max-w-4xl reveal reveal-up active">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-[2px] bg-emerald-500"></div>
              <span className="text-emerald-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">Sustainable Excellence</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-white leading-[0.95] mb-8 tracking-tighter">
              Build <span className="text-emerald-500">Green</span> <br />
              <span className="font-serif italic font-light text-slate-100/90">Live Clean</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-xl font-light mb-10 leading-relaxed border-l-2 border-emerald-500/40 pl-6">
              Engineering luxury outdoor environments where modern architecture and natural beauty coexist in perfect harmony.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('contact')} className="group relative bg-emerald-600 text-white px-8 py-4 rounded-full text-[11px] uppercase tracking-widest font-black hover:bg-white hover:text-emerald-950 transition-all flex items-center shadow-2xl">
                Start Your Project <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden md:flex items-center space-x-4 opacity-40 text-white">
           <MousePointer2 size={16} className="animate-bounce" />
           <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover More</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal reveal-left relative">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-xl group">
                <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-10"></div>
                <img src="https://i.pinimg.com/1200x/13/e1/de/13e1de1144cf5f2099f09ef0e6bf24e1.jpg" alt="About Flourish" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-emerald-600 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl hidden sm:block reveal reveal-rotate active delay-500">
                <Sparkles size={40} className="text-white/40 mb-4 animate-spin-slow" />
                <p className="text-white font-black text-2xl md:text-4xl leading-none mb-1">15+ <span className="text-lg font-light">Years</span></p>
                <p className="text-emerald-100 text-[9px] uppercase tracking-[0.3em] font-bold">Industry Leadership</p>
              </div>
            </div>
            
            <div className="reveal reveal-right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-black tracking-[0.3em] uppercase text-[10px] mb-8">Who We Are</span>
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                We're more than a company <br /> <span className="text-emerald-600">we're a movement.</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
                At Flourish, we specialize in landscape design and construction, pest control, and full maintenance services. <br />

We create beautiful outdoor spaces, protect them from pests, build durable landscape structures, and ensure their long-term care and sustainability.<br />

Our team combines creativity, technical expertise, and passion for excellence to deliver tailored solutions for every project, making every space truly flourish.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 stagger-container">
                {WHY_US.map((item, i) => (
                  <div key={i} className="reveal reveal-up flex flex-col group" style={{ "--stagger-index": i } as React.CSSProperties}>
                    <div className="text-emerald-600 mb-4 transform group-hover:scale-110 transition-all bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                       {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 lg:py-32 bg-slate-50/50 relative z-10 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="reveal reveal-up text-center mb-16">
            <SectionHeader title="Our Expertise" subtitle="Comprehensive outdoor solutions tailored for residential and large-scale corporate developments." />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-container">
            {SERVICES.map((s, idx) => (
              <div 
                key={idx} 
                className="reveal reveal-up bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700 group hover:-translate-y-4 relative overflow-hidden" 
                style={{ "--stagger-index": idx } as React.CSSProperties}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-[4] transition-transform duration-1000 -z-0 opacity-50"></div>
                <div className="relative z-10">
                  <div className="mb-8 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-[-8deg]">
                    {React.cloneElement(s.icon as React.ReactElement<any>, { size: 30 })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base font-light mb-8 leading-relaxed">Modern engineering meets precision design in every aspect of our maintenance and construction services.</p>
                  <div className="flex items-center text-emerald-600 text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
                    Learn More <ChevronRight size={14} className="ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-24 lg:py-40 bg-white relative z-10">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="reveal reveal-up max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 mb-10 md:mb-16 tracking-tighter">What We Believe</h2>
            
            {/* Value Tabs - Optimized for Mobile (Shows 2 and partial 3rd) */}
            <div className="flex flex-nowrap md:grid md:grid-cols-5 gap-3 md:gap-6 mb-12 md:mb-20 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar">
              {CORE_VALUES.map((val, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveValueTab(idx)}
                  className={`flex-shrink-0 w-[42%] md:w-full snap-start relative py-4 md:py-10 px-3 rounded-xl md:rounded-3xl transition-all duration-500 text-center overflow-hidden border-2 flex flex-col items-center justify-center ${activeValueTab === idx ? 'bg-emerald-950 border-emerald-950 text-white scale-105 shadow-2xl' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-emerald-200 hover:bg-emerald-50/50'}`}
                >
                   <div className={`w-6 md:w-8 h-[2px] md:h-[3px] mb-3 md:mb-4 transition-colors ${activeValueTab === idx ? 'bg-emerald-400' : 'bg-slate-300'}`}></div>
                   <span className={`text-[10px] md:text-sm uppercase tracking-widest font-black ${activeValueTab === idx ? 'opacity-100' : 'opacity-60'}`}>
                    {val.title}
                   </span>
                </button>
              ))}
            </div>

            {/* Principles List - Dynamic Content based on Active Tab */}
            <div className="grid lg:grid-cols-1 gap-6 md:gap-8 mt-4 max-w-4xl border-t border-slate-100 pt-10 md:pt-16 min-h-[250px] md:min-h-[300px]">
               {CORE_VALUES[activeValueTab].principles.map((princ, idx) => (
                 <div 
                   key={`${activeValueTab}-${idx}`} 
                   className="reveal reveal-up flex items-start group active" 
                   style={{ "--stagger-index": idx } as React.CSSProperties}
                 >
                    <div className="mr-4 md:mr-6 mt-1 text-emerald-600 transition-transform group-hover:scale-125">
                      <CheckCircle2 size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                       <h4 className="text-base md:text-xl font-black text-slate-900 mb-1">
                         <span className="text-emerald-700">{princ.title}:</span> <span className="font-light text-slate-600">{princ.description}</span>
                       </h4>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Enhanced Logos */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h5 className="text-slate-300 text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black mb-16 md:mb-24">Global Partnerships</h5>
          <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-24 gap-y-12 md:gap-y-20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            {CLIENTS.map((logo, idx) => (
              <div key={idx} className="reveal reveal-scale group" style={{ "--stagger-index": idx } as React.CSSProperties}>
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  className="h-14 md:h-28 lg:h-32 w-auto object-contain transform hover:scale-110 active:scale-95 transition-all duration-700 drop-shadow-sm hover:drop-shadow-xl" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-40 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-400/5 rounded-full blur-[160px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="reveal reveal-up">
              <span className="text-emerald-400 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Project Inquiry</span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-16 tracking-tighter leading-[0.9]">
                Make it <br /> <span className="font-serif italic font-light text-emerald-400">Extraordinary.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left mt-20">
              <div className="reveal reveal-left bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden shadow-2xl">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-all">
                  <Phone size={28} className="text-white" />
                </div>
                <p className="text-emerald-400 text-[9px] uppercase tracking-widest font-black mb-2 opacity-60">Call Direct</p>
                <h3 className="text-2xl md:text-xl lg:text-[1.65rem] font-bold tracking-tight leading-tight">+2 010 635 88888</h3>
              </div>

              <div className="reveal reveal-right bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden shadow-2xl">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-all">
                  <Mail size={28} className="text-white" />
                </div>
                <p className="text-emerald-400 text-[9px] uppercase tracking-widest font-black mb-2 opacity-60">Email Desk</p>
                <h3 className="text-xl md:text-lg lg:text-[1.45rem] font-bold tracking-tight leading-tight break-all">info@flourish-landscaping.com</h3>
              </div>
            </div>

            <div className="reveal reveal-up mt-24">
               <div className="flex justify-center space-x-10 mb-12">
                  {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="group relative w-16 h-16 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-emerald-500">
                      <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      <Icon size={22} className="relative z-10 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
               </div>
               <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 text-[9px] uppercase tracking-[0.5em] font-bold text-white/30">
                  <p>&copy; {new Date().getFullYear()} Flourish Landscaping Group</p>
                  <a href="https://enjaz.app" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 hover:text-emerald-400">Enjaz Smart Solutions</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

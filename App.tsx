
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

const SOCIAL_LINKS = [
  { icon: Instagram, url: '#' },
  { icon: Facebook, url: '#' },
  { icon: Linkedin, url: 'https://www.linkedin.com/company/flourishlandscaping' }
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
    
    // سرعة التبديل (3.5 ثانية لجعلها أسرع وأكثر حيوية)
    const heroTimer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);

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

  // مضاعفة قائمة العملاء لضمان استمرارية الحركة في الشريط
  const marqueeClients = [...CLIENTS, ...CLIENTS];

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
            {/* تعديل الحجم: موبايل (h-16)، تابلت (h-20)، كمبيوتر (h-24) - تصغير الكمبيوتر قليلاً كما طُلِب */}
            <img 
              src={flourishLogo} 
              alt="Flourish Landscaping Logo" 
              className={`h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105 rounded-xl md:rounded-2xl ${!isScrolled ? 'drop-shadow-[0_4px_20px_rgba(255,255,255,0.5)]' : ''}`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/300x120?text=Flourish";
              }}
            />
          </div>

          <div className="hidden lg:flex space-x-10 items-center">
            {['About', 'Services'].map((name) => (
              <button 
                key={name} 
                onClick={() => scrollToSection(name.toLowerCase())}
                className={`text-[10px] uppercase tracking-[0.3em] font-black transition-all hover:text-emerald-600 relative group ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                {name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-emerald-600 text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-widest font-black overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              <span className="relative z-10">Contact Now</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          <button className={`lg:hidden p-2 transition-transform active:scale-90 ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950 z-[90] lg:hidden transition-all duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)] ${isMenuOpen ? 'clip-path-open' : 'clip-path-closed'}`}
        style={{ clipPath: isMenuOpen ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)' }}>
        <div className="h-full flex flex-col justify-center items-center space-y-10 p-6 text-center">
          <img src={flourishLogo} alt="Logo" className="h-32 w-auto mb-6 bg-white/10 p-4 rounded-3xl backdrop-blur-md" />
          {['Home', 'About', 'Services'].map((item, idx) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} 
              className={`text-4xl font-bold text-white hover:text-emerald-400 transition-all tracking-tighter transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className={`text-4xl font-bold text-emerald-400 hover:text-white transition-all tracking-tighter transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `400ms` }}
          >
            Consult Now
          </button>
        </div>
      </div>

      {/* Hero Section - Cinematic Professional Transitions */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        {HERO_IMAGES.map((img, idx) => (
          <div 
            key={idx} 
            className={`absolute inset-0 transition-all duration-[1000ms] cubic-bezier(0.645, 0.045, 0.355, 1) ${currentHeroIndex === idx ? 'opacity-90 scale-100' : 'opacity-0 scale-105'}`}
          >
            <div className="w-full h-full bg-cover bg-center animate-kenburns" style={{ backgroundImage: `url('${img}')` }} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90" />
        
        <div className="container mx-auto px-4 lg:px-12 z-10">
          <div className="max-w-4xl reveal reveal-up active">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-16 h-[2px] bg-emerald-500"></div>
              <span className="text-emerald-400 text-[10px] md:text-xs uppercase tracking-[0.5em] font-black">Sustainable Excellence</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.85] mb-10 tracking-tighter">
              Build <span className="text-emerald-500">Green</span> <br />
              <span className="font-serif italic font-light text-slate-100/90">Live Clean</span>
            </h1>
            <p className="text-base md:text-lg lg:text-2xl text-slate-300 max-w-2xl font-light mb-12 leading-relaxed border-l-4 border-emerald-500/40 pl-8">
              Engineering luxury outdoor environments where modern architecture and natural beauty coexist in perfect harmony.
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={() => scrollToSection('contact')} className="group relative bg-emerald-600 text-white px-10 py-5 rounded-full text-[12px] uppercase tracking-widest font-black hover:bg-white hover:text-emerald-950 transition-all flex items-center shadow-2xl">
                Start Your Project <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden md:flex items-center space-x-6 opacity-40 text-white">
           <MousePointer2 size={20} className="animate-bounce" />
           <span className="text-[11px] uppercase tracking-[0.4em] font-bold">Discover More</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-40 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="reveal reveal-left relative">
              <div className="relative z-10 overflow-hidden rounded-[3rem] md:rounded-[5rem] shadow-2xl group">
                <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-10"></div>
                <img src="https://i.pinimg.com/1200x/1d/3e/29/1d3e29928edf94b90ffb543eeece45de.jpg" alt="About Flourish" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-8 -right-6 md:-bottom-12 md:-right-12 bg-emerald-600 p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] shadow-2xl hidden sm:block reveal reveal-rotate active delay-500 z-20">
                <Sparkles size={48} className="text-white/40 mb-6 animate-spin-slow" />
                <p className="text-white font-black text-3xl md:text-5xl leading-none mb-2">15+ <span className="text-xl font-light">Years</span></p>
                <p className="text-emerald-100 text-[10px] uppercase tracking-[0.4em] font-bold">Industry Leadership</p>
              </div>
            </div>
            
            <div className="reveal reveal-right">
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-50 text-emerald-600 font-black tracking-[0.4em] uppercase text-[11px] mb-10">Who We Are</span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-10 tracking-tighter leading-tight">
                We're more than a company <br /> <span className="text-emerald-600">we're a movement.</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                At Flourish, we specialize in landscape design and construction, pest control, and full maintenance services. <br /><br />

We create beautiful outdoor spaces, protect them from pests, build durable landscape structures, and ensure their long-term care and sustainability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 stagger-container">
                {WHY_US.map((item, i) => (
                  <div key={i} className="reveal reveal-up flex flex-col group" style={{ "--stagger-index": i } as React.CSSProperties}>
                    <div className="text-emerald-600 mb-6 transform group-hover:scale-110 transition-all bg-emerald-50 w-16 h-16 rounded-3xl flex items-center justify-center">
                       {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 lg:py-40 bg-slate-50/50 relative z-10 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="reveal reveal-up text-center mb-20">
            <SectionHeader title="Our Expertise" subtitle="Comprehensive outdoor solutions tailored for residential and large-scale corporate developments." />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 stagger-container">
            {SERVICES.map((s, idx) => (
              <div 
                key={idx} 
                className="reveal reveal-up bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 group hover:-translate-y-5 relative overflow-hidden" 
                style={{ "--stagger-index": idx } as React.CSSProperties}
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-50 rounded-full group-hover:scale-[5] transition-transform duration-1000 -z-0 opacity-50"></div>
                <div className="relative z-10">
                  <div className="mb-10 w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-[-10deg]">
                    {React.cloneElement(s.icon as React.ReactElement<any>, { size: 36 })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">{s.title}</h3>
                  <p className="text-slate-500 text-base md:text-lg font-light mb-10 leading-relaxed">Modern engineering meets precision design in every aspect of our maintenance and construction services.</p>
                  <div className="flex items-center text-emerald-600 text-[11px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 translate-x-[-15px] group-hover:translate-x-0 transition-all">
                    Learn More <ChevronRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-24 lg:py-48 bg-white relative z-10">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="reveal reveal-up max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-950 mb-12 md:mb-20 tracking-tighter">What We Believe</h2>
            
            <div className="flex flex-nowrap md:grid md:grid-cols-5 gap-4 md:gap-8 mb-16 md:mb-24 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar">
              {CORE_VALUES.map((val, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveValueTab(idx)}
                  className={`flex-shrink-0 w-[45%] md:w-full snap-start relative py-6 md:py-12 px-4 rounded-2xl md:rounded-[2.5rem] transition-all duration-500 text-center overflow-hidden border-2 flex flex-col items-center justify-center ${activeValueTab === idx ? 'bg-emerald-950 border-emerald-950 text-white scale-105 shadow-2xl' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-emerald-200 hover:bg-emerald-50/50'}`}
                >
                   <div className={`w-8 md:w-10 h-[3px] md:h-[4px] mb-4 md:mb-6 transition-colors ${activeValueTab === idx ? 'bg-emerald-400' : 'bg-slate-300'}`}></div>
                   <span className={`text-[11px] md:text-base uppercase tracking-widest font-black ${activeValueTab === idx ? 'opacity-100' : 'opacity-60'}`}>
                    {val.title}
                   </span>
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-1 gap-8 md:gap-12 mt-6 max-w-5xl border-t border-slate-100 pt-12 md:pt-20 min-h-[300px] md:min-h-[400px]">
               {CORE_VALUES[activeValueTab].principles.map((princ, idx) => (
                 <div 
                   key={`${activeValueTab}-${idx}`} 
                   className="reveal reveal-up flex items-start group active" 
                   style={{ "--stagger-index": idx } as React.CSSProperties}
                 >
                    <div className="mr-6 md:mr-8 mt-1 text-emerald-600 transition-transform group-hover:scale-125">
                      <CheckCircle2 size={24} className="md:w-8 md:h-8" />
                    </div>
                    <div>
                       <h4 className="text-lg md:text-2xl font-black text-slate-900 mb-2">
                         <span className="text-emerald-700">{princ.title}:</span> <span className="font-light text-slate-600">{princ.description}</span>
                       </h4>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Infinite Horizontal Scroll & Massive Full Color Logos */}
      <section className="py-24 md:py-48 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        {/* Gradients on sides for professional look */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center mb-20 md:mb-32">
          <h5 className="text-slate-300 text-[12px] md:text-[16px] uppercase tracking-[0.7em] font-black">Trusted Partnerships</h5>
        </div>

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {marqueeClients.map((logo, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 mx-12 md:mx-24 group relative"
              >
                {/* Logo with Soft Glow on Hover */}
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  className="h-28 sm:h-36 md:h-48 lg:h-56 w-auto object-contain transition-all duration-700 group-hover:scale-110 pointer-events-auto" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-48 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-400/5 rounded-full blur-[200px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="reveal reveal-up">
              <span className="text-emerald-400 font-black tracking-[0.8em] uppercase text-[11px] mb-12 block">Project Inquiry</span>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-20 tracking-tighter leading-[0.85]">
                Make it <br /> <span className="font-serif italic font-light text-emerald-400">Extraordinary.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-left mt-24">
              <div className="reveal reveal-left bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden shadow-2xl">
                <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mb-10 shadow-lg transform group-hover:scale-110 transition-all">
                  <Phone size={32} className="text-white" />
                </div>
                <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-black mb-3 opacity-60">Call Direct</p>
                <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold tracking-tight leading-tight">+2 010 635 88888</h3>
              </div>

              <div className="reveal reveal-right bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden shadow-2xl">
                <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mb-10 shadow-lg transform group-hover:scale-110 transition-all">
                  <Mail size={32} className="text-white" />
                </div>
                <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-black mb-3 opacity-60">Email Desk</p>
                <h3 className="text-2xl md:text-xl lg:text-3xl font-bold tracking-tight leading-tight break-all">info@flourish-landscaping.com</h3>
              </div>
            </div>

            <div className="reveal reveal-up mt-32">
               <div className="flex justify-center space-x-12 mb-16">
                  {SOCIAL_LINKS.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      target={social.url !== '#' ? "_blank" : undefined} 
                      rel="noopener noreferrer" 
                      className="group relative w-20 h-20 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-emerald-500"
                    >
                      <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      <social.icon size={28} className="relative z-10 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
               </div>
               <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 text-[10px] uppercase tracking-[0.6em] font-bold text-white/30">
                  <p>&copy; {new Date().getFullYear()} Flourish Landscaping Group</p>
                  <a href="https://enjaz.app" target="_blank" rel="noopener noreferrer" className="mt-6 md:mt-0 hover:text-emerald-400 transition-colors">Enjaz Smart Solutions</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

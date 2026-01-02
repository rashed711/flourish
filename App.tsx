
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
  { icon: Facebook, url: 'https://www.facebook.com/share/1K2kVbQjwb/' },
  { icon: Linkedin, url: 'https://www.linkedin.com/company/flourishlandscaping' }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeValueTab, setActiveValueTab] = useState(0); 
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
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
      const offset = window.innerWidth < 768 ? 70 : 80;
      window.scrollTo({ top: element.offsetTop - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/98 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-5 lg:px-12 flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
            <img 
              src={flourishLogo} 
              alt="Flourish Landscaping Logo" 
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105 rounded-xl ${!isScrolled ? 'drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)]' : ''}`}
            />
          </div>

          <div className="hidden lg:flex space-x-10 items-center">
            {['About', 'Services'].map((name) => (
              <button 
                key={name} 
                onClick={() => scrollToSection(name.toLowerCase())}
                className={`text-[11px] uppercase tracking-[0.3em] font-black transition-all hover:text-emerald-600 relative group ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                {name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-emerald-600 text-white px-8 py-3.5 rounded-full text-[11px] uppercase tracking-widest font-black overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              <span className="relative z-10">Contact Now</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          <button className={`lg:hidden p-2.5 rounded-xl transition-all active:scale-90 ${isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10 backdrop-blur-sm'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-950 z-[90] lg:hidden transition-all duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)] ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-emerald-900/10 backdrop-blur-3xl transition-transform duration-1000 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}></div>
        <div className="h-full flex flex-col justify-center items-center space-y-10 p-6 text-center relative z-10">
          <img src={flourishLogo} alt="Logo" className="h-28 w-auto mb-6 bg-white/5 p-4 rounded-3xl backdrop-blur-md border border-white/10" />
          {['Home', 'About', 'Services'].map((item, idx) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} 
              className={`text-4xl font-bold text-white hover:text-emerald-400 transition-all tracking-tighter transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className={`text-4xl font-bold text-emerald-400 border-t border-white/10 pt-8 w-full max-w-xs hover:text-white transition-all tracking-tighter transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `450ms` }}
          >
            Consult Now
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] md:h-screen flex items-center overflow-hidden bg-slate-950">
        {HERO_IMAGES.map((img, idx) => (
          <div 
            key={idx} 
            className={`absolute inset-0 transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) ${currentHeroIndex === idx ? 'opacity-60 scale-100' : 'opacity-0 scale-105'}`}
          >
            <div className="w-full h-full bg-cover bg-center animate-kenburns" style={{ backgroundImage: `url('${img}')` }} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950" />
        
        <div className="container mx-auto px-6 lg:px-12 z-10 pt-16 md:pt-20">
          <div className="max-w-4xl reveal reveal-up active">
            <div className="flex items-center space-x-3 mb-5 md:mb-8">
              <div className="w-8 md:w-16 h-[2px] bg-emerald-500"></div>
              <span className="text-emerald-400 text-[9px] md:text-xs uppercase tracking-[0.4em] font-black">Sustainable Excellence</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[1.05] md:leading-[0.85] mb-6 md:mb-10 tracking-tighter">
              Build <span className="text-emerald-500">Green</span> <br className="hidden sm:block" />
              <span className="font-serif italic font-light text-slate-100/90">Live Clean</span>
            </h1>
            <p className="text-base md:text-lg lg:text-2xl text-slate-300 max-w-2xl font-light mb-10 md:mb-12 leading-relaxed border-l-2 md:border-l-4 border-emerald-500/40 pl-5 md:pl-8">
              Engineering luxury outdoor environments where modern architecture and natural beauty coexist in perfect harmony.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('contact')} className="group w-full sm:w-auto relative bg-emerald-600 text-white px-8 py-4.5 rounded-full text-[11px] md:text-[12px] uppercase tracking-widest font-black hover:bg-white hover:text-emerald-950 transition-all flex items-center justify-center shadow-2xl">
                Start Your Project <ArrowRight className="ml-3 md:ml-4 group-hover:translate-x-2 transition-transform duration-500" size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-4 opacity-40 text-white">
           <MousePointer2 size={16} className="animate-bounce" />
           <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Discover More</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 md:gap-32 items-center">
            <div className="reveal reveal-left relative">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] md:rounded-[5rem] shadow-xl group">
                <img src="https://i.pinimg.com/1200x/1d/3e/29/1d3e29928edf94b90ffb543eeece45de.jpg" alt="About Flourish" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <div className="absolute -bottom-4 -right-2 md:-bottom-12 md:-right-12 bg-emerald-600 p-6 md:p-14 rounded-[2rem] md:rounded-[4rem] shadow-2xl reveal reveal-rotate active delay-500 z-20">
                <p className="text-white font-black text-2xl md:text-5xl leading-none mb-1 md:mb-2">15+ <span className="text-sm md:text-xl font-light">Years</span></p>
                <p className="text-emerald-100 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">Industry Leadership</p>
              </div>
            </div>
            
            <div className="reveal reveal-right pt-6 md:pt-0">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-black tracking-[0.3em] uppercase text-[10px] md:text-[11px] mb-6 md:mb-10">Who We Are</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 md:mb-10 tracking-tighter leading-[1.1]">
                We're more than <br className="hidden md:block" /> <span className="text-emerald-600">a movement.</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-12">
                At Flourish, we specialize in landscape design and construction, pest control, and maintenance services. We create beautiful outdoor spaces and ensure their long-term care and sustainability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 stagger-container">
                {WHY_US.map((item, i) => (
                  <div key={i} className="reveal reveal-up flex flex-col group" style={{ "--stagger-index": i } as React.CSSProperties}>
                    <div className="text-emerald-600 mb-5 md:mb-6 transform group-hover:scale-110 transition-all bg-emerald-50 w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center">
                       {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 md:py-32 bg-slate-50/50 relative z-10 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader 
            title="Our Expertise" 
            subtitle="Comprehensive outdoor solutions tailored for residential and large-scale corporate developments." 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 stagger-container mt-12 md:mt-20">
            {SERVICES.map((s, idx) => (
              <div 
                key={idx} 
                className="reveal reveal-up bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden" 
                style={{ "--stagger-index": idx } as React.CSSProperties}
              >
                <div className="relative z-10">
                  <div className="mb-8 md:mb-10 w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-[-5deg]">
                    {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-5">{s.title}</h3>
                  <p className="text-slate-500 text-base md:text-lg font-light mb-8 md:mb-10 leading-relaxed">Precision design in every aspect of our maintenance and construction services.</p>
                  <div className="flex items-center text-emerald-600 text-[11px] uppercase tracking-widest font-black opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all">
                    Explore Details <ChevronRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-40 bg-white relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="reveal reveal-up max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold text-slate-950 mb-12 md:mb-16 tracking-tighter text-center md:text-left">What We Believe</h2>
            
            {/* عرض التبويبات - تم تعديل العرض للموبايل ليكون 42% (2.3 تبويبة في العرض) */}
            <div className="flex flex-nowrap md:grid md:grid-cols-5 gap-3 md:gap-6 mb-12 md:mb-20 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar scroll-px-6">
              {CORE_VALUES.map((val, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveValueTab(idx)}
                  className={`flex-shrink-0 w-[42%] md:w-full snap-start relative py-5 md:py-8 px-4 rounded-2xl md:rounded-[2rem] transition-all duration-500 text-center border-2 flex flex-col items-center justify-center ${activeValueTab === idx ? 'bg-emerald-950 border-emerald-950 text-white scale-[1.03] shadow-xl' : 'bg-slate-50 border-slate-100 text-slate-400'}`}
                >
                   <div className={`w-8 md:w-10 h-[2px] md:h-[3px] mb-3 md:mb-5 transition-colors ${activeValueTab === idx ? 'bg-emerald-400' : 'bg-slate-300'}`}></div>
                   <span className="text-[10px] md:text-sm uppercase tracking-widest font-black">
                    {val.title}
                   </span>
                </button>
              ))}
            </div>

            {/* Principles */}
            <div className="grid gap-6 md:gap-8 mt-6 max-w-5xl border-t border-slate-100 pt-10 md:pt-16">
               {CORE_VALUES[activeValueTab].principles.map((princ, idx) => (
                 <div 
                   key={`${activeValueTab}-${idx}`} 
                   className="reveal reveal-up flex items-start active" 
                   style={{ "--stagger-index": idx } as React.CSSProperties}
                 >
                    <div className="mr-5 md:mr-8 mt-1.5 text-emerald-600 flex-shrink-0">
                      <CheckCircle2 size={22} className="md:w-8 md:h-8" />
                    </div>
                    <div>
                       <h4 className="text-lg md:text-2xl font-black text-slate-900 mb-1 leading-tight md:leading-snug">
                         <span className="text-emerald-700">{princ.title}:</span> <span className="font-light text-slate-600">{princ.description}</span>
                       </h4>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-20 md:py-40 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 md:w-80 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-80 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center mb-12 md:mb-24">
          <h5 className="text-slate-400 text-[10px] md:text-[14px] uppercase tracking-[0.5em] font-black">Trusted Partnerships</h5>
        </div>

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center py-6">
            {marqueeClients.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 mx-8 md:mx-20 group">
                <img 
                  src={logo} 
                  alt="Partner" 
                  className="h-20 sm:h-28 md:h-44 lg:h-56 w-auto object-contain transition-all duration-500 group-hover:scale-110 pointer-events-auto" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-40 bg-emerald-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="reveal reveal-up">
              <span className="text-emerald-400 font-black tracking-[0.6em] uppercase text-[10px] md:text-[11px] mb-8 block">Project Inquiry</span>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-14 md:mb-20 tracking-tighter leading-[1.1] md:leading-[0.9]">
                Make it <br /> <span className="font-serif italic font-light text-emerald-400">Extraordinary.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left mt-16 md:mt-24">
              <div className="reveal reveal-left bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group shadow-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mb-8 md:mb-10 shadow-lg">
                  <Phone size={28} className="text-white md:w-8 md:h-8" />
                </div>
                <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-black mb-2 opacity-60">Call Direct</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">+2 010 635 88888</h3>
              </div>

              <div className="reveal reveal-right bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group shadow-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mb-8 md:mb-10 shadow-lg">
                  <Mail size={28} className="text-white md:w-8 md:h-8" />
                </div>
                <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-black mb-2 opacity-60">Email Desk</p>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tight break-all">info@flourish-landscaping.com</h3>
              </div>
            </div>

            <div className="reveal reveal-up mt-24 md:mt-32">
               <div className="flex justify-center space-x-10 md:space-x-12 mb-14 md:mb-16">
                  {SOCIAL_LINKS.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-emerald-600 hover:border-emerald-600 hover:scale-110 active:scale-95 shadow-lg"
                    >
                      <social.icon size={26} className="md:w-7 md:h-7" />
                    </a>
                  ))}
               </div>
               <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 text-center gap-6">
                  <p>&copy; {new Date().getFullYear()} Flourish Landscaping Group</p>
                  <a href="https://enjaz.app" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors py-2">Enjaz Smart Solutions</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

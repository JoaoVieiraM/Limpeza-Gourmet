
import React, { useState, useEffect } from 'react';

// --- Components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-brandBlue/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-5 md:py-8'}`}>
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-white text-lg md:text-2xl font-semibold tracking-widest font-heading uppercase">
            LIMPEZA <span className="text-brandGold">GOURMET</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white hover:text-brandGold transition-colors duration-300 text-[11px] font-semibold uppercase tracking-[0.25em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            onClick={(e) => handleLinkClick(e, '#contato')}
            className="bg-brandGold text-white border border-brandGold hover:bg-white hover:text-brandBlue hover:border-white px-7 py-2.5 rounded-sm transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            ORÇAMENTO
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white text-2xl p-2 z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir Menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 w-full h-screen bg-brandBlue z-40 flex flex-col justify-center items-center px-6 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-lg font-light uppercase tracking-[0.3em] hover:text-brandGold transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-brandGold text-white px-10 py-4 rounded-sm font-bold uppercase tracking-[0.3em] shadow-lg"
            onClick={(e) => handleLinkClick(e, '#contato')}
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const parallaxOffset = scrollY * 0.4;

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden scroll-mt-0">
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center transition-transform duration-100 ease-out" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80')`,
          transform: `translateY(${parallaxOffset}px)`
        }}
      >
        <div className="absolute inset-0 bg-brandBlue/75"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10 text-center fade-in-load">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tighter">
            Limpeza Pós-Obra e <br className="hidden md:block"/> Facilities de <span className="text-brandGold font-medium italic text-shadow">Alto Padrão</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-10 md:mb-12 font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
            A excelência técnica inspirada nos rigorosos padrões internacionais para os ambientes mais exclusivos do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4 md:px-0">
            <a 
              href="#contato" 
              onClick={(e) => handleHeroScroll(e, '#contato')}
              className="bg-brandGold hover:bg-white hover:text-brandBlue text-white px-8 md:px-12 py-4 md:py-5 rounded-sm text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 shadow-2xl"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="#servicos" 
              onClick={(e) => handleHeroScroll(e, '#servicos')}
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 md:px-12 py-4 md:py-5 rounded-sm text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 backdrop-blur-sm"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden md:block">
        <i className="fa-solid fa-chevron-down text-xl"></i>
      </div>
    </section>
  );
};

const Diferenciais: React.FC = () => {
  const items = [
    { icon: 'fa-globe', title: 'Técnica Internacional', desc: 'Metodologia baseada nos padrões de Bermudas e Reino Unido.' },
    { icon: 'fa-gem', title: 'Acabamento Fino', desc: 'Tratamento especializado para mármores, metais e tecidos nobres.' },
    { icon: 'fa-user-tie', title: 'Gestão Executiva', desc: 'Supervisão técnica constante com foco em discrição e qualidade.' },
    { icon: 'fa-shield-halved', title: 'Segurança & Sigilo', desc: 'Processos rigorosos para garantir total proteção ao seu patrimônio.' }
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {items.map((item, idx) => (
            <div key={idx} className="text-center group transition-all duration-500 hover:transform hover:-translate-y-1">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-6 md:mb-8 transition-transform duration-500 group-hover:scale-110">
                <i className={`fa-solid ${item.icon} text-3xl text-brandGold/80`}></i>
              </div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-brandBlue mb-3 md:mb-4 uppercase tracking-[0.2em]">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Servicos: React.FC = () => {
  const servicos = [
    { title: 'Pós-Obra Premium', desc: 'Remoção minuciosa de resíduos finos com neutralização de pH e proteção de superfícies.', icon: 'fa-building-circle-check' },
    { title: 'Facilities Corporativo', desc: 'Manutenção de alto nível para escritórios que demandam imagem impecável.', icon: 'fa-briefcase', featured: true },
    { title: 'Tratamento de Nobres', desc: 'Limpeza e revitalização profunda de estofados, tapetes e materiais delicados.', icon: 'fa-couch' }
  ];

  return (
    <section id="servicos" className="bg-offWhite py-20 md:py-32 px-6 md:px-8 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-24 px-4">
          <h4 className="text-brandGold font-semibold tracking-[0.3em] md:tracking-[0.4em] mb-4 uppercase text-[9px] md:text-[10px]">Especialidades</h4>
          <h2 className="text-3xl md:text-5xl font-semibold text-brandBlue mb-6 tracking-tight">Soluções de Engenharia em Limpeza</h2>
          <div className="w-16 h-[2px] bg-brandGold/40 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {servicos.map((s, idx) => (
            <div 
              key={idx} 
              className={`p-8 md:p-12 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) rounded-sm flex flex-col items-center text-center group
                ${s.featured 
                  ? 'bg-brandBlue text-white shadow-2xl md:scale-105 z-10 hover:-translate-y-3 hover:rotate-[0.5deg]' 
                  : 'bg-white border border-gray-100 hover:border-brandGold hover:shadow-2xl hover:-translate-y-3 hover:rotate-[0.5deg] shadow-sm'}
              `}
            >
              <div className="mb-8 md:mb-10 transition-transform duration-500 group-hover:scale-110">
                <i className={`fa-solid ${s.icon} text-3xl ${s.featured ? 'text-brandGold' : 'text-brandGold/60'}`}></i>
              </div>
              <h3 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 tracking-tight transition-colors duration-500 ${s.featured ? 'text-white' : 'text-brandBlue group-hover:text-brandGold'}`}>{s.title}</h3>
              <p className={`text-sm font-light leading-loose mb-8 md:mb-10 transition-opacity duration-500 ${s.featured ? 'text-white/70' : 'text-gray-500 group-hover:text-gray-700'}`}>{s.desc}</p>
              <div className="mt-auto">
                <a 
                  href="https://wa.me/5511917477832" 
                  className={`inline-block font-bold text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase transition-all duration-500 border-b pb-1 ${s.featured ? 'text-brandGold border-brandGold hover:text-white hover:border-white' : 'text-gray-400 border-transparent hover:text-brandGold hover:border-brandGold'}`}
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          <div className="lg:w-1/2">
            <h4 className="text-brandGold font-semibold tracking-[0.4em] mb-4 md:mb-6 uppercase text-[10px]">O Legado</h4>
            <h2 className="text-3xl md:text-6xl font-semibold text-brandBlue mb-6 md:mb-10 leading-[1.2] md:leading-[1.1] tracking-tighter">O rigor britânico em solo brasileiro</h2>
            <div className="space-y-6 md:space-y-8 text-gray-500 text-base md:text-lg font-light leading-relaxed">
              <p>Fundada com base na experiência internacional em Bermudas, a Limpeza Gourmet trouxe para o Brasil uma nova visão de facilities.</p>
              <p>Entendemos que um ambiente de luxo não exige apenas "limpeza", mas sim conservação preventiva e o uso correto da química de materiais.</p>
              <div className="pt-4 md:pt-6">
                <p className="border-l-2 border-brandGold pl-6 md:pl-8 text-brandBlue font-medium italic text-lg md:text-xl leading-relaxed">"Tratamos cada projeto como uma obra de arte, onde a limpeza é o acabamento final."</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80" alt="Detalhamento Gourmet" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3s]" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-48 md:h-48 bg-brandGold/5 -z-0 rounded-full"></div>
            <div className="absolute top-1/2 right-0 w-16 md:w-32 h-[1px] bg-brandGold/40 -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    { quote: "A precisão da equipe Limpeza Gourmet é algo raro no Brasil. Eles entendem de materiais e tratam a obra com o cuidado de um curador.", author: "Arquiteta Ana Cláudia", role: "Design de Interiores Premium" },
    { quote: "Não é apenas limpeza, é gestão de patrimônio. A discrição e o resultado final são incomparáveis no mercado corporativo.", author: "Dr. Marcelo Lins", role: "CEO - Investment Group" }
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="bg-brandBlue py-20 md:py-32 px-6 md:px-8 overflow-hidden scroll-mt-20 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 md:mb-12 opacity-30">
          <i className="fa-solid fa-quote-left text-4xl md:text-5xl text-brandGold"></i>
        </div>
        <div className="relative min-h-[180px] md:min-h-[200px]">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <p className="text-lg md:text-3xl font-light italic leading-relaxed mb-8 md:mb-10 px-4">"{t.quote}"</p>
              <h4 className="text-brandGold font-bold text-[11px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1 md:mb-2">{t.author}</h4>
              <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">{t.role}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mt-12 md:mt-16">
          {testimonials.map((_, idx) => (
            <button key={idx} aria-label={`Ir para depoimento ${idx + 1}`} onClick={() => setActiveIndex(idx)} className={`w-8 md:w-12 h-[2px] transition-all duration-500 ${idx === activeIndex ? 'bg-brandGold' : 'bg-white/10 hover:bg-white/30'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      alert('Sua solicitação premium foi enviada. Nossa consultoria entrará em contato em breve.');
      setFormStatus('idle');
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-offWhite px-6 md:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-2/5 bg-brandBlue p-10 md:p-16 text-white flex flex-col justify-center">
            <h4 className="text-brandGold font-semibold tracking-[0.4em] mb-4 md:mb-6 uppercase text-[10px]">Atendimento</h4>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 tracking-tight leading-tight">Solicite sua Consultoria</h2>
            <div className="space-y-8 md:space-y-10">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="text-brandGold text-lg md:text-xl"><i className="fa-solid fa-phone-volume"></i></div>
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">WhatsApp Executive</p>
                  <p className="font-medium text-base md:text-lg tracking-wide">(11) 91747-7832</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="text-brandGold text-lg md:text-xl"><i className="fa-solid fa-envelope-open-text"></i></div>
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">E-mail Corporativo</p>
                  <p className="font-medium text-base md:text-lg tracking-wide break-all">contato@limpezagourmet.com.br</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 p-8 md:p-16">
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="border-b border-gray-200 py-1 md:py-2">
                  <label className="block text-[9px] md:text-[10px] font-bold text-brandBlue mb-2 uppercase tracking-[0.2em]">Nome Completo</label>
                  <input required type="text" className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-gray-600 font-light px-0 py-1" placeholder="Digite seu nome" />
                </div>
                <div className="border-b border-gray-200 py-1 md:py-2">
                  <label className="block text-[9px] md:text-[10px] font-bold text-brandBlue mb-2 uppercase tracking-[0.2em]">WhatsApp</label>
                  <input required type="tel" className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-gray-600 font-light px-0 py-1" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="border-b border-gray-200 py-1 md:py-2">
                <label className="block text-[9px] md:text-[10px] font-bold text-brandBlue mb-2 uppercase tracking-[0.2em]">Serviço de Interesse</label>
                <select className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-gray-600 font-light px-0 py-1 appearance-none">
                  <option>Pós-Obra Premium</option>
                  <option>Facilities Corporativo</option>
                  <option>Limpeza Técnica de Nobres</option>
                </select>
              </div>
              <div className="border-b border-gray-200 py-1 md:py-2">
                <label className="block text-[9px] md:text-[10px] font-bold text-brandBlue mb-2 uppercase tracking-[0.2em]">Detalhes da Necessidade</label>
                <textarea rows={3} className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-gray-600 font-light px-0 py-1" placeholder="Descreva brevemente seu projeto..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full bg-brandBlue text-white font-bold py-4 md:py-5 rounded-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] hover:bg-brandGold transition-all duration-500 shadow-xl active:scale-[0.98]"
              >
                {formStatus === 'sending' ? 'Enviando Protocolo...' : 'Enviar Solicitação Premium'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandBlue text-white pt-16 md:pt-24 pb-10 md:pb-12 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-1 text-center md:text-left">
            <span className="text-xl font-semibold tracking-widest font-heading mb-6 md:mb-8 block uppercase">
              LIMPEZA <span className="text-brandGold">GOURMET</span>
            </span>
            <p className="text-white/40 leading-loose text-sm font-light mb-8 md:mb-10">
              Elevando a conservação patrimonial ao nível da arte, com técnica britânica e execução premium.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://instagram.com/limpezagourmet_premium" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-brandGold transition-colors duration-300"><i className="fa-brands fa-instagram text-lg"></i></a>
              <a href="https://facebook.com/limpezagourmetoficial" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-brandGold transition-colors duration-300"><i className="fa-brands fa-facebook-f text-lg"></i></a>
              <a href="https://linkedin.com/company/limpezagourmet" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-brandGold transition-colors duration-300"><i className="fa-brands fa-linkedin-in text-lg"></i></a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 md:mb-8 text-[11px] uppercase tracking-[0.3em]">Navegação</h4>
            <ul className="space-y-4 md:space-y-5 text-white/50 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em]">
              <li><a href="#home" className="hover:text-brandGold transition-colors">Home</a></li>
              <li><a href="#servicos" className="hover:text-brandGold transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-brandGold transition-colors">Experiência</a></li>
              <li><a href="#contato" className="hover:text-brandGold transition-colors text-brandGold">Orçamento</a></li>
            </ul>
          </div>
          <div className="hidden sm:block text-center md:text-left">
            <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Divisões</h4>
            <ul className="space-y-5 text-white/50 text-[10px] md:text-[11px] font-medium tracking-[0.1em]">
              <li>Residencial High-End</li>
              <li>Corporate & Facilities</li>
              <li>Pós-Obra de Engenharia</li>
              <li>Revitalização de Materiais</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 md:mb-8 text-[11px] uppercase tracking-[0.3em]">Presença</h4>
            <ul className="space-y-5 md:space-y-6 text-white/50 text-sm font-light">
              <li className="flex flex-col md:flex-row items-center md:items-start">
                <i className="fa-solid fa-location-dot mb-2 md:mt-1 md:mr-4 text-brandGold/50"></i>
                <span className="leading-relaxed text-xs md:text-sm">São Paulo, ABCD, Alphaville <br className="hidden md:block"/> e Litoral Premium.</span>
              </li>
              <li className="flex flex-col md:flex-row items-center">
                <i className="fa-solid fa-shield-check mb-2 md:mr-4 text-brandGold/50"></i>
                <span className="text-xs md:text-sm">Atendimento Sob Agendamento</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
          <p className="text-white/20 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">© {new Date().getFullYear()} Limpeza Gourmet | Technical Excellence.</p>
          <p className="text-white/20 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">Bermuda Standard Methodology</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 group flex items-center">
      {/* Tooltip Refinado */}
      <span className="hidden md:block mr-4 bg-brandBlue text-white text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-2.5 rounded-sm shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap border border-brandGold/20 translate-x-4 group-hover:translate-x-0">
        Fale Conosco
      </span>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511917477832" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-500 relative overflow-hidden"
        aria-label="Fale conosco no WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-2xl relative z-10"></i>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </a>
    </div>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Servicos />
        <Sobre />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

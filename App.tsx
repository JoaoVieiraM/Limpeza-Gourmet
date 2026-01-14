
import React, { useState, useEffect } from 'react';

// --- Header Component ---

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
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-4' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Typography-only Logo Area */}
        <div className="flex items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex flex-col group leading-none">
            <span className={`text-xl md:text-2xl font-bold tracking-[0.25em] font-heading uppercase transition-colors duration-500 ${isScrolled ? 'text-brandBlue' : 'text-white'}`}>
              LIMPEZA <span className="text-brandGold transition-colors duration-500 group-hover:text-brandGold/80">GOURMET</span>
            </span>
            <span className={`text-[8px] md:text-[9px] tracking-[0.6em] uppercase mt-2 font-medium transition-opacity duration-500 ${isScrolled ? 'text-brandBlue/50' : 'text-white/50'}`}>
              Premium Excellence
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`transition-colors duration-300 text-[10px] font-bold uppercase tracking-[0.3em] ${isScrolled ? 'text-brandBlue hover:text-brandGold' : 'text-white hover:text-brandGold'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            onClick={(e) => handleLinkClick(e, '#contato')}
            className={`px-8 py-3 rounded-sm transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.3em] border ${isScrolled ? 'bg-brandBlue text-white border-brandBlue hover:bg-brandGold hover:border-brandGold' : 'bg-brandGold text-white border-brandGold hover:bg-white hover:text-brandBlue hover:border-white'}`}
          >
            ORÇAMENTO
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden text-2xl p-2 z-50 focus:outline-none transition-colors duration-500 ${isScrolled ? 'text-brandBlue' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 w-full h-screen bg-brandBlue z-40 flex flex-col justify-center items-center px-6 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col space-y-10 text-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white text-xl font-light uppercase tracking-[0.4em] hover:text-brandGold transition-colors" onClick={(e) => handleLinkClick(e, link.href)}>
              {link.name}
            </a>
          ))}
          <a href="#contato" className="bg-brandGold text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.3em] shadow-2xl" onClick={(e) => handleLinkClick(e, '#contato')}>
            CONSULTORIA PREMIUM
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="absolute inset-0 bg-brandBlue/75"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10 text-center fade-in-load">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 md:mb-8 leading-tight tracking-tighter">
          Excelência em <br/> <span className="text-brandGold italic font-medium">Pós-Obra</span> de Luxo
        </h1>
        <p className="text-base md:text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto tracking-wide">
          A técnica internacional aplicada aos empreendimentos mais exclusivos. Onde o detalhe impecável é a nossa assinatura.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#contato" className="bg-brandGold hover:bg-white hover:text-brandBlue text-white px-12 py-5 rounded-sm text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl">
            Agendar Visita Técnica
          </a>
          <a href="#servicos" className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-12 py-5 rounded-sm text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 backdrop-blur-sm">
            Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

const Diferenciais: React.FC = () => {
  const items = [
    { icon: 'fa-earth-americas', title: 'Técnica Internacional', desc: 'Metodologia Bermuda & UK.' },
    { icon: 'fa-microscope', title: 'Química Avançada', desc: 'Neutralização técnica de resíduos.' },
    { icon: 'fa-user-check', title: 'Staff Treinado', desc: 'Discrição, postura e eficiência.' },
    { icon: 'fa-star', title: 'Acabamento Fino', desc: 'Cuidado total com materiais nobres.' }
  ];
  return (
    <section className="bg-white py-20 border-b border-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="text-center group">
              <i className={`fa-solid ${item.icon} text-2xl text-brandGold mb-6 transition-transform group-hover:scale-110`}></i>
              <h3 className="text-[11px] font-bold text-brandBlue uppercase tracking-[0.2em] mb-2">{item.title}</h3>
              <p className="text-gray-400 text-xs font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Servicos: React.FC = () => {
  const servicos = [
    { title: 'Pós-Obra Premium', desc: 'Remoção minuciosa de poeira técnica e resíduos de construção com proteção de superfícies.', icon: 'fa-building-shield' },
    { title: 'Facilities Executive', desc: 'Gestão de limpeza de alto nível para residências de luxo e escritórios corporativos.', icon: 'fa-hand-sparkles', featured: true },
    { title: 'Revitalização Nobre', desc: 'Tratamento especializado para mármores, metais, estofados e tecidos delicados.', icon: 'fa-gem' }
  ];
  return (
    <section id="servicos" className="bg-offWhite py-24 md:py-32 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h4 className="text-brandGold font-bold tracking-[0.4em] mb-4 uppercase text-[10px]">Divisões de Especialidade</h4>
          <h2 className="text-3xl md:text-5xl font-semibold text-brandBlue tracking-tight">Soluções Gourmet de Limpeza</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {servicos.map((s, idx) => (
            <div key={idx} className={`p-12 transition-all duration-500 rounded-sm text-center border group ${s.featured ? 'bg-brandBlue text-white border-brandBlue shadow-2xl md:scale-105 z-10' : 'bg-white border-gray-100 hover:border-brandGold hover:shadow-xl'}`}>
              <i className={`fa-solid ${s.icon} text-3xl mb-10 ${s.featured ? 'text-brandGold' : 'text-brandGold/60'}`}></i>
              <h3 className="text-xl font-semibold mb-6">{s.title}</h3>
              <p className={`text-sm font-light leading-relaxed mb-10 ${s.featured ? 'text-white/70' : 'text-gray-500'}`}>{s.desc}</p>
              <a href="https://wa.me/5511917477832" className={`text-[10px] font-bold uppercase tracking-[0.2em] border-b pb-1 ${s.featured ? 'text-brandGold border-brandGold hover:text-white hover:border-white' : 'text-brandBlue border-transparent hover:text-brandGold hover:border-brandGold'}`}>Consultar Portfolio</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-brandBlue py-24 px-6 text-white text-center">
      <div className="container mx-auto max-w-3xl">
        <i className="fa-solid fa-quote-left text-brandGold/40 text-4xl mb-10"></i>
        <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-10">
          "A Limpeza Gourmet trouxe um nível de detalhismo que eu só havia visto no exterior. O cuidado com os metais e pedras nobres é o diferencial que meus clientes exigem."
        </p>
        <h4 className="text-brandGold font-bold uppercase tracking-[0.3em] text-xs">Arquiteta Patrícia Lira</h4>
        <span className="text-white/30 text-[9px] uppercase tracking-widest mt-2 block">Interior Luxury Design</span>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-white px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-brandGold font-bold tracking-[0.4em] mb-6 uppercase text-[10px]">Contato Direto</h4>
            <h2 className="text-4xl font-semibold text-brandBlue mb-8 tracking-tight">Fale com nossa Gestão Técnica</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-12">Estamos prontos para realizar uma visita diagnóstica e apresentar um plano de conservação exclusivo para o seu ambiente.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-offWhite flex items-center justify-center rounded-full text-brandGold shadow-sm"><i className="fa-brands fa-whatsapp text-xl"></i></div>
                <div><span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">WhatsApp Executive</span><span className="text-brandBlue font-semibold text-lg">(11) 91747-7832</span></div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-offWhite flex items-center justify-center rounded-full text-brandGold shadow-sm"><i className="fa-solid fa-envelope text-xl"></i></div>
                <div><span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Canal Corporativo</span><span className="text-brandBlue font-semibold text-lg">contato@limpezagourmet.com.br</span></div>
              </div>
            </div>
          </div>
          <form className="bg-offWhite p-8 md:p-12 rounded-sm shadow-xl space-y-6">
            <input type="text" placeholder="Nome do Cliente / Empresa" className="w-full bg-white p-4 text-sm border-none focus:ring-1 focus:ring-brandGold outline-none" required />
            <input type="tel" placeholder="WhatsApp para Contato" className="w-full bg-white p-4 text-sm border-none focus:ring-1 focus:ring-brandGold outline-none" required />
            <select className="w-full bg-white p-4 text-sm border-none focus:ring-1 focus:ring-brandGold outline-none appearance-none cursor-pointer">
              <option>Limpeza Pós-Obra de Luxo</option>
              <option>Gestão de Facilities Premium</option>
              <option>Revitalização de Materiais Nobres</option>
            </select>
            <textarea placeholder="Fale brevemente sobre o seu projeto (Metragem, localização...)" rows={4} className="w-full bg-white p-4 text-sm border-none focus:ring-1 focus:ring-brandGold outline-none"></textarea>
            <button className="w-full bg-brandBlue text-white font-bold py-5 uppercase tracking-[0.25em] text-[11px] hover:bg-brandGold transition-all duration-500 shadow-lg active:scale-95">Solicitar Proposta</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandBlue text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 border-b border-white/5 pb-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-[0.25em] font-heading uppercase">
                LIMPEZA <span className="text-brandGold">GOURMET</span>
              </span>
              <span className="text-[9px] tracking-[0.6em] uppercase mt-2 font-medium text-white/50">
                Premium Excellence
              </span>
            </div>
            <p className="mt-8 text-white/40 text-sm font-light max-w-xs leading-loose">Especialistas em conservação e higienização para ambientes que exigem perfeição absoluta.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="#home" className="hover:text-brandGold transition-colors">Home</a>
            <a href="#servicos" className="hover:text-brandGold transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-brandGold transition-colors">A Marca</a>
            <a href="#contato" className="text-brandGold border border-brandGold px-5 py-2 hover:bg-brandGold hover:text-brandBlue transition-all">Orçamento</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/20 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Limpeza Gourmet | Technical Excellence.</p>
          <p>São Paulo • Litoral • Interior Premium</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Servicos />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      {/* Botão flutuante WhatsApp */}
      <a href="https://wa.me/5511917477832" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 overflow-hidden group">
        <i className="fa-brands fa-whatsapp text-3xl relative z-10"></i>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </a>
    </div>
  );
}

export default App;

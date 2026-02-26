
import React, { useState, useEffect } from 'react';
import logoImg from './assets/logodourada1.png';
import depoimento1 from './assets/f624ac3b-75dc-4363-a56b-7c3d6c8c811c.jpeg';
import depoimento2 from './assets/894d1e5d-fd9b-4092-9441-7932c9bcb513.jpeg';
import depoimento3 from './assets/8faf523d-cb53-4378-8e2a-54e2409e0eaf.jpeg';
import depoimento4 from './assets/b7accc48-39c9-414c-a323-fcfdc9634235.jpeg';
import depoimento6 from './assets/646b75eb-3532-4c64-b73f-69d3c0ac22ba.jpeg';
import depoimento7 from './assets/2cc01667-5924-4bcb-8dab-c976ee03f2f1.jpeg';
import depoimento8 from './assets/cceae847-3f2d-4f83-92ba-49c8bb06d434.jpeg';
import depoimento9 from './assets/3571c971-06e5-45eb-a761-676c85730c06.jpeg';
import depoimento10 from './assets/20f5de30-6ba7-4094-a491-932fac949ccc.jpeg';
import depoimento11 from './assets/3f4359d0-56c2-4b83-800c-33b99eea6695.jpeg';
import sobrenosImg from './assets/sobrenos.jpg';

// Produtos Estofados
import zbacImg from './assets/ZBAC.jpg';
import antessofaazulImg from './assets/antessofaazul.jpeg';
import depoissofaazulImg from './assets/depoissofaazul.jpeg';
import antessofabegeImg from './assets/antessofabege.jpeg';
import depoissofabegeImg from './assets/depoissofabege.jpeg';
import floatImg from './assets/FLOAT.jpg';
import pluriImg from './assets/pluri.jpg';
import oxy4dImg from './assets/oxy4d.jpg';

// Portfolio images
import fotoobra17 from './assets/fotoobra17.jpeg';
import fotoobra18 from './assets/fotoobra18.jpeg';
import fotoobra19 from './assets/fotoobra19.jpeg';
import fotoobra20 from './assets/fotoobra20.jpeg';
import fotoobra21 from './assets/fotoobra21.jpeg';

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
    { name: 'Estofados', href: '#estofados' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/limpezagourmetposobra', icon: 'fa-instagram' },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1GhVuz8Aas/', icon: 'fa-facebook' },
    { name: 'YouTube', href: 'https://www.youtube.com/@LimpezaGourmet', icon: 'fa-youtube' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@limpezagourmet', icon: 'fa-tiktok' }
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
        {/* Logo Area */}
        <div className="flex items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center group leading-none">
            <img
              src={logoImg}
              alt="Limpeza Gourmet Logo"
              className="h-32 md:h-52 w-auto mr-4 -my-4 md:-my-8"
            />
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold tracking-[0.25em] font-heading uppercase transition-colors duration-500 ${isScrolled ? 'text-brandBlue' : 'text-white'}`}>
                LIMPEZA <span className="text-brandGold transition-colors duration-500 group-hover:text-brandGold/80">GOURMET</span>
              </span>
              <span className={`text-[8px] md:text-[9px] tracking-[0.6em] uppercase mt-2 font-medium transition-opacity duration-500 ${isScrolled ? 'text-brandBlue/50' : 'text-white/50'}`}>
                Premium Excellence
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`transition-colors duration-300 text-[9px] 2xl:text-[10px] font-bold uppercase tracking-[0.2em] 2xl:tracking-[0.3em] whitespace-nowrap ${isScrolled ? 'text-brandBlue hover:text-brandGold' : 'text-white hover:text-brandGold'}`}
            >
              {link.name}
            </a>
          ))}
          {/* Social Icons */}
          <div className={`flex items-center space-x-3 pl-4 border-l ${isScrolled ? 'border-brandBlue/20' : 'border-white/20'}`}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`text-sm transition-all duration-300 hover:scale-110 ${isScrolled ? 'text-brandBlue hover:text-brandGold' : 'text-white hover:text-brandGold'}`}
              >
                <i className={`fa-brands ${social.icon}`}></i>
              </a>
            ))}
          </div>
          <a
            href="#contato"
            onClick={(e) => handleLinkClick(e, '#contato')}
            className={`px-5 2xl:px-8 py-3 rounded-sm transition-all duration-500 text-[9px] 2xl:text-[10px] font-bold uppercase tracking-[0.2em] 2xl:tracking-[0.3em] border whitespace-nowrap ${isScrolled ? 'bg-brandBlue text-white border-brandBlue hover:bg-brandGold hover:border-brandGold' : 'bg-brandGold text-white border-brandGold hover:bg-white hover:text-brandBlue hover:border-white'}`}
          >
            ORÇAMENTO
          </a>
        </nav>

        {/* Mobile/Tablet Toggle */}
        <button
          className={`xl:hidden text-2xl p-3 min-w-[44px] min-h-[44px] z-50 focus:outline-none transition-colors duration-500 ${isScrolled ? 'text-brandBlue' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`xl:hidden fixed inset-0 w-full h-screen bg-brandBlue z-40 flex flex-col justify-center items-center px-6 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col space-y-10 text-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white text-xl font-light uppercase tracking-[0.4em] hover:text-brandGold transition-colors" onClick={(e) => handleLinkClick(e, link.href)}>
              {link.name}
            </a>
          ))}
          <a href="#contato" className="bg-brandGold text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.3em] shadow-2xl" onClick={(e) => handleLinkClick(e, '#contato')}>
            CONSULTORIA PREMIUM
          </a>
          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-8 pt-6 border-t border-white/20">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-white text-2xl hover:text-brandGold transition-colors duration-300"
              >
                <i className={`fa-brands ${social.icon}`}></i>
              </a>
            ))}
          </div>
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
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 md:mb-8 leading-tight tracking-tighter break-words">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="text-center group">
              <i className={`fa-solid ${item.icon} text-2xl text-brandGold mb-6 transition-transform group-hover:scale-110`}></i>
              <h3 className="text-xs sm:text-[11px] font-bold text-brandBlue uppercase tracking-[0.2em] mb-2">{item.title}</h3>
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
    { title: 'Facilities Executive', desc: 'Gestão de limpeza de alto nível para residências de luxo e escritórios corporativos.', icon: 'fa-hand-sparkles' },
    { title: 'Pós-Obra Premium', desc: 'Remoção minuciosa de poeira técnica e resíduos de construção com proteção de superfícies.', icon: 'fa-building-shield', featured: true },
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

// Portfolio Items Data
const portfolioItems = [
  { id: 1, title: 'Pós-Obra 17', image: fotoobra17, category: 'Pós-Obra', type: 'depois' as const },
  { id: 2, title: 'Pós-Obra 18', image: fotoobra18, category: 'Pós-Obra', type: 'depois' as const },
  { id: 3, title: 'Pós-Obra 19', image: fotoobra19, category: 'Pós-Obra', type: 'depois' as const },
  { id: 4, title: 'Pós-Obra 20', image: fotoobra20, category: 'Pós-Obra', type: 'depois' as const },
  { id: 5, title: 'Pós-Obra 21', image: fotoobra21, category: 'Pós-Obra', type: 'depois' as const },
];

const EstofadosSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Avaliação', desc: 'Diagnóstico do tipo de estofado e nível de sujidade para definir o tratamento ideal.' },
    { num: '02', title: 'Extração', desc: 'Extratora profissional remove poeira e partículas soltas do tecido em profundidade.' },
    { num: '03', title: 'Aplicação', desc: 'Produtos Easytech e Spartan aplicados com precisão para eliminar manchas e odores.' },
    { num: '04', title: 'Limpeza', desc: 'Máquinas de vapor e escovas especializadas atuam em todo o tecido com segurança.' },
    { num: '05', title: 'Finalização', desc: 'Pré-secagem e finalizador neutralizante para aroma agradável e proteção duradoura.' }
  ];

  const products = [
    {
      name: 'ZBAC',
      tag: 'Bactericida Alvejante',
      desc: 'Alveja e restaura a cor natural do tecido, eliminando bactérias na origem.',
      img: zbacImg,
    },
    {
      name: 'FLOAT',
      tag: 'Flotador Universal · pH 9',
      desc: 'Solta sujidades pesadas do tecido para facilitar a extração completa.',
      img: floatImg,
    },
    {
      name: 'PLURI',
      tag: 'Multilimpador Concentrado',
      desc: 'Concentrado potente para limpeza profunda em diversas superfícies.',
      img: pluriImg,
    },
    {
      name: 'OXY-4D',
      tag: 'Limpador Ácido · pH 4',
      desc: 'Remoção de manchas pesadas e persistentes com alta eficácia.',
      img: oxy4dImg,
    }
  ];

  return (
    <section id="estofados" className="bg-offWhite py-24 md:py-32 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-20">
          <h4 className="text-brandGold font-bold tracking-[0.4em] mb-4 uppercase text-[10px]">
            Higienização Especializada
          </h4>
          <h2 className="text-3xl md:text-5xl font-semibold text-brandBlue tracking-tight mb-6">
            Seus Estofados Merecem<br />
            <span className="text-brandGold italic font-medium">Tratamento Gourmet</span>
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Utilizamos apenas produtos profissionais Easytech e Spartan — os mesmos usados nos melhores hotéis e residências de alto padrão. Sofás, poltronas, cadeiras, colchões e car seats.
          </p>
        </div>

        {/* 5-Step Process */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-50 p-8 md:p-12 mb-16">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-brandGold mb-10">
            Processo Certificado em 5 Etapas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group relative">
                {/* Connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-5 left-[60%] w-full h-[1px] bg-brandGold/20"></div>
                )}
                <div className="relative z-10 w-10 h-10 rounded-full bg-brandGold/10 border border-brandGold/40 flex items-center justify-center mb-4 group-hover:bg-brandGold/20 transition-colors duration-300">
                  <span className="text-brandGold font-bold text-[10px] tracking-widest">{step.num}</span>
                </div>
                <h3 className="text-brandBlue font-bold text-[10px] uppercase tracking-[0.15em] mb-2">{step.title}</h3>
                <p className="text-gray-400 text-[11px] font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Showcase */}
        <div className="mb-16">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-brandGold mb-10">
            Arsenal Profissional Exclusivo
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-default"
              >
                {/* Imagem editorial */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradiente overlay brandBlue */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brandBlue/95 via-brandBlue/30 to-transparent"></div>
                  {/* Conteúdo sobre a imagem */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <span className="text-brandGold text-[8px] font-bold uppercase tracking-[0.2em] block mb-1">
                      {product.tag}
                    </span>
                    <h3 className="text-white font-black text-lg md:text-xl tracking-widest leading-tight mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/70 text-[10px] font-light leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                      {product.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Antes & Depois */}
        <div className="mb-16">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-brandGold mb-3">
            Transformações Reais
          </p>
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-brandBlue tracking-tight mb-10">
            Resultados que <span className="text-brandGold italic font-medium">Falam por Si</span>
          </h3>

          <div className="space-y-4 md:space-y-5">
            {/* Par 1: Sofá Azul */}
            <div>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="relative overflow-hidden rounded-sm group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={antessofaazulImg}
                      alt="Sofá azul antes da higienização"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                    Antes
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-sm group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={depoissofaazulImg}
                      alt="Sofá azul depois da higienização"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-brandGold text-brandBlue text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                    Depois
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-400 text-[10px] uppercase tracking-[0.3em] mt-3 font-light">
                Sofá Retrátil · Veludo Azul
              </p>
            </div>

            {/* Par 2: Sofá Bege */}
            <div>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="relative overflow-hidden rounded-sm group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={antessofabegeImg}
                      alt="Sofá bege antes da higienização"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                    Antes
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-sm group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={depoissofabegeImg}
                      alt="Sofá bege depois da higienização"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-brandGold text-brandBlue text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                    Depois
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-400 text-[10px] uppercase tracking-[0.3em] mt-3 font-light">
                Sofá · Suede Bege
              </p>
            </div>
          </div>
        </div>

        {/* Conversion CTA Block */}
        <div className="bg-brandBlue rounded-sm p-10 md:p-16 text-center">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-4">
            Resposta Imediata
          </p>
          <h3 className="text-2xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Agende sua Higienização <span className="text-brandGold italic">Hoje</span>
          </h3>
          <p className="text-white/50 font-light mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            Orçamento sem compromisso para sofás, poltronas, cadeiras e colchões.<br />
            <span className="text-brandGold/80">Atendemos São Paulo, Litoral e Interior Premium.</span>
          </p>
          <a
            href="https://wa.me/5511917477832?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20higienização%20de%20estofados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb358] text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.25em] text-[11px] transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95"
            onClick={() => (window as any).gtag?.('event', 'conversion', { send_to: 'AW-17970399970/I06jCM3fgf8bEOKV-vhC' })}
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            Solicitar Higienização
          </a>
          <p className="text-white/20 text-[9px] uppercase tracking-widest mt-8">
            Produtos 100% Profissionais · Easytech & Spartan · Sem Danos ao Tecido
          </p>
        </div>

      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section id="portfolio" className="bg-white py-24 md:py-32 px-6 scroll-mt-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-brandGold font-bold tracking-[0.4em] mb-4 uppercase text-[10px]">
            Nosso Trabalho
          </h4>
          <h2 className="text-3xl md:text-5xl font-semibold text-brandBlue tracking-tight mb-6">
            Portfólio
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos realizados com excelência e atenção aos mínimos detalhes.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Seta Anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-brandGold hover:text-brandBlue transition-colors duration-300"
            aria-label="Anterior"
          >
            <i className="fa-solid fa-chevron-left text-2xl md:text-3xl"></i>
          </button>

          {/* Container do Slide */}
          <div className="overflow-hidden mx-8 md:mx-0">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Badge Antes/Depois */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider ${item.type === 'antes' ? 'bg-gray-600 text-white' : 'bg-brandGold text-brandBlue'}`}>
                      {item.type === 'antes' ? 'Antes' : 'Depois'}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                      <span className="text-brandGold text-xs uppercase tracking-[0.2em]">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seta Próximo */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-brandGold hover:text-brandBlue transition-colors duration-300"
            aria-label="Próximo"
          >
            <i className="fa-solid fa-chevron-right text-2xl md:text-3xl"></i>
          </button>
        </div>

        {/* Indicadores (dots) */}
        <div className="flex justify-center gap-2 mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-brandGold' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          {currentIndex + 1} / {portfolioItems.length}
        </div>
      </div>
    </section>
  );
};

const AboutUs: React.FC = () => {
  return (
    <section id="sobrenos" className="py-24 md:py-32 bg-offWhite px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Imagem à Esquerda */}
          <div className="relative">
            <img
              src={sobrenosImg}
              alt="Sobre Nós - British & Bermuda Standard"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Conteúdo à Direita */}
          <div>
            <h4 className="text-brandGold font-bold tracking-[0.4em] mb-6 uppercase text-[10px]">
              BRITISH & BERMUDA STANDARD
            </h4>
            <h2 className="text-3xl md:text-5xl font-semibold text-brandBlue mb-8 tracking-tight">
              Metodologia que Redefine a Pureza.
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-8">
              Utilizamos o padrão de excelência de Bermudas e do Reino Unido, onde a limpeza não é apenas remover sujeira, mas preservar o valor do seu imóvel. Nossos consultores são treinados para identificar as necessidades específicas de cada material.
            </p>

            {/* Lista de benefícios */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-check text-brandGold mt-1"></i>
                <span className="text-gray-500 font-light">Auditoria pós-limpeza em todos os cômodos.</span>
              </li>
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-check text-brandGold mt-1"></i>
                <span className="text-gray-500 font-light">Produtos biodegradáveis de padrão europeu.</span>
              </li>
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-check text-brandGold mt-1"></i>
                <span className="text-gray-500 font-light">Equipe uniformizada e treinada em etiqueta corporativa.</span>
              </li>
            </ul>

            {/* Box de Garantia */}
            <div className="bg-brandGold/10 border-l-4 border-brandGold p-6 mb-8">
              <span className="text-brandBlue font-bold uppercase tracking-[0.2em] text-sm">
                100% GARANTIA DE SATISFAÇÃO
              </span>
            </div>

            {/* CTA Button */}
            <a
              href="#contato"
              className="bg-brandBlue hover:bg-brandGold text-white px-8 py-4 rounded-sm text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-lg inline-block"
            >
              Saber Mais Sobre a Técnica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Certificacoes: React.FC = () => {
  const membros = [
    {
      nome: 'Monique Carvalho',
      horas: '51h',
      certs: 7,
      cursos: [
        { nome: 'Higienização de Carpetes e Estofados', parceiro: 'Spartan do Brasil' },
        { nome: 'Higienização e Impermeabilização de Estofados e Tecidos', parceiro: 'G&S Home Solution' },
        { nome: 'Técnicas Avançadas: Colchão, Carpetes e Tapetes', parceiro: 'Spartan do Brasil' },
        { nome: 'Pós Obra: Vidros, Porcelanato e Pedras', parceiro: 'Bellinzoni' },
        { nome: 'Limpeza, Polimento e Revitalização de ACM e Vidro', parceiro: 'Bellinzoni' },
        { nome: 'Precificação e Planejamento de Metas', parceiro: 'Loja do Profissional' },
        { nome: 'Química Prática na Limpeza Profissional', parceiro: 'Spartan do Brasil' },
      ]
    },
    {
      nome: 'Jessica Figueiredo',
      horas: '55h',
      certs: 7,
      cursos: [
        { nome: 'Higienização de Carpetes e Estofados', parceiro: 'Spartan do Brasil' },
        { nome: 'Higienização e Impermeabilização de Estofados e Tecidos', parceiro: 'G&S Home Solution' },
        { nome: 'Técnicas Avançadas: Colchão, Carpetes e Tapetes', parceiro: 'Spartan do Brasil' },
        { nome: 'Pós Obra: Vidros, Porcelanato e Pedras', parceiro: 'Bellinzoni' },
        { nome: 'Higienização de Estofados', parceiro: 'Clean Couch' },
        { nome: 'Limpeza e Tratamento de Pisos: Madeira, Vinílicos e Laminados', parceiro: 'Bona Brasil' },
        { nome: 'Química Prática na Limpeza Profissional', parceiro: 'Spartan do Brasil' },
      ]
    }
  ];

  const parceiros = ['Spartan do Brasil', 'Bellinzoni', 'Bona Brasil', 'G&S Home Solution', 'Clean Couch'];

  return (
    <section id="certificacoes" className="bg-white py-24 md:py-32 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-brandGold font-bold tracking-[0.4em] mb-4 uppercase text-[10px]">
            Equipe Certificada
          </h4>
          <h2 className="text-3xl md:text-5xl font-semibold text-brandBlue tracking-tight mb-6">
            Técnica com <span className="text-brandGold italic font-medium">Comprovação Formal</span>
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Mais de 100 horas de treinamento com as maiores marcas do mercado profissional de limpeza. Membro certificado da ABRALIMP.
          </p>
        </div>

        {/* Números de impacto */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 text-center">
          <div className="border-r border-gray-100 pr-4">
            <p className="text-4xl md:text-6xl font-bold text-brandBlue tracking-tighter mb-1">
              100<span className="text-brandGold">+</span>
            </p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-400 font-light">Horas de Treino</p>
          </div>
          <div className="border-r border-gray-100 pr-4">
            <p className="text-4xl md:text-6xl font-bold text-brandBlue tracking-tighter mb-1">
              14<span className="text-brandGold">+</span>
            </p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-400 font-light">Certificações</p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-bold text-brandBlue tracking-tighter mb-1">
              5<span className="text-brandGold">*</span>
            </p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-400 font-light">Marcas Parceiras</p>
          </div>
        </div>

        {/* ABRALIMP */}
        <div className="bg-brandGold/10 border border-brandGold/30 rounded-sm p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16">
          <div className="w-14 h-14 bg-brandGold/20 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-award text-brandGold text-2xl"></i>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-brandBlue font-bold uppercase tracking-[0.25em] text-sm mb-1">Membro ABRALIMP</p>
            <p className="text-gray-500 text-xs font-light leading-relaxed">
              Associação Brasileira do Mercado de Limpeza Profissional — o principal selo de referência do setor no Brasil.
            </p>
          </div>
        </div>

        {/* Perfis dos membros */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {membros.map((m, idx) => (
            <div key={idx} className="border border-gray-100 rounded-sm p-8 hover:border-brandGold/30 hover:shadow-xl transition-all duration-500">
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-50">
                <div>
                  <h3 className="text-brandBlue font-bold text-base md:text-lg tracking-tight">{m.nome}</h3>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-brandGold font-bold mt-1">
                    {m.horas} · {m.certs} Certificações
                  </p>
                </div>
                <div className="w-11 h-11 bg-brandGold/10 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                  <i className="fa-solid fa-certificate text-brandGold"></i>
                </div>
              </div>
              <ul className="space-y-3">
                {m.cursos.map((c, cidx) => (
                  <li key={cidx} className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-brandGold text-[10px] mt-[3px] flex-shrink-0"></i>
                    <div>
                      <p className="text-gray-600 text-xs font-medium leading-snug">{c.nome}</p>
                      <p className="text-gray-400 text-[10px] font-light">{c.parceiro}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marcas certificadoras */}
        <div className="border-t border-gray-50 pt-12">
          <p className="text-center text-[9px] font-bold uppercase tracking-[0.5em] text-gray-300 mb-8">
            Certificado por
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {parceiros.map((p, idx) => (
              <span
                key={idx}
                className="border border-gray-200 text-gray-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] px-4 md:px-6 py-3 rounded-sm hover:border-brandGold hover:text-brandGold transition-all duration-300 cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialImages = [
    depoimento1, depoimento2, depoimento3, depoimento4,
    depoimento6, depoimento7, depoimento8,
    depoimento9, depoimento10, depoimento11
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  return (
    <section id="depoimentos" className="bg-brandBlue py-24 px-6 text-white">
      <div className="container mx-auto max-w-3xl text-center mb-16">
        <i className="fa-solid fa-quote-left text-brandGold/40 text-2xl md:text-4xl mb-10"></i>
        <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-10">
          "A Limpeza Gourmet trouxe um nível de detalhismo que eu só havia visto no exterior. O cuidado com os metais e pedras nobres é o diferencial que meus clientes exigem."
        </p>
        <h4 className="text-brandGold font-bold uppercase tracking-[0.3em] text-xs">Arquiteta Patrícia Lira</h4>
        <span className="text-white/30 text-[9px] uppercase tracking-widest mt-2 block">Interior Luxury Design</span>
      </div>

      <div className="container mx-auto max-w-4xl">
        <h3 className="text-center text-brandGold font-bold uppercase tracking-[0.3em] text-xs mb-10">Feedback dos nossos clientes</h3>
        <div className="relative flex items-center">
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 z-10 w-10 h-10 flex items-center justify-center text-brandGold hover:text-white transition-colors duration-300"
          >
            <i className="fa-solid fa-chevron-left text-2xl"></i>
          </button>

          <div className="overflow-hidden mx-4 md:mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialImages.map((img, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <img
                    src={img}
                    alt={`Depoimento de cliente ${index + 1}`}
                    className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 z-10 w-10 h-10 flex items-center justify-center text-brandGold hover:text-white transition-colors duration-300"
          >
            <i className="fa-solid fa-chevron-right text-2xl"></i>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonialImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-brandGold' : 'bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: 'Higienização de Estofados',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${formData.nome}.
Telefone: ${formData.telefone}
Serviço de interesse: ${formData.servico}
Mensagem: ${formData.mensagem}`;

    // Event snippet for Contato conversion page
    (window as any).gtag('event', 'conversion', {'send_to': 'AW-17970399970/I06jCM3fgf8bEOKV-vhC'});

    const url = `https://wa.me/5511917477832?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

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
          <form onSubmit={handleSubmit} className="bg-offWhite p-6 md:p-12 rounded-sm shadow-xl space-y-6">
            <input
              type="text"
              placeholder="Nome do Cliente / Empresa"
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              className="w-full bg-white p-4 text-sm border-none focus:ring-1 focus:ring-brandGold outline-none"
              required
            />
            <input
              type="tel"
              placeholder="WhatsApp para Contato"
              value={formData.telefone}
              onChange={(e) => setFormData({...formData, telefone: e.target.value})}
              className="w-full bg-white p-4 text-sm border-none focus:ring-1 focus:ring-brandGold outline-none"
              required
            />
            <select
              value={formData.servico}
              onChange={(e) => setFormData({...formData, servico: e.target.value})}
              className="w-full bg-white p-4 text-sm border-none focus:ring-1 focus:ring-brandGold outline-none appearance-none cursor-pointer"
            >
              <option>Higienização de Estofados</option>
              <option>Limpeza Pós-Obra de Luxo</option>
              <option>Gestão de Facilities Premium</option>
              <option>Revitalização de Materiais Nobres</option>
            </select>
            <textarea
              placeholder="Fale brevemente sobre o seu projeto (Metragem, localização...)"
              rows={4}
              value={formData.mensagem}
              onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              className="w-full bg-white p-4 text-sm border-none focus:ring-1 focus:ring-brandGold outline-none"
            ></textarea>
            <button type="submit" className="w-full bg-brandBlue text-white font-bold py-5 uppercase tracking-[0.25em] text-[11px] hover:bg-brandGold transition-all duration-500 shadow-lg active:scale-95">Solicitar Proposta</button>
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
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Limpeza Gourmet Logo"
                className="h-20 md:h-32 w-auto mr-4"
              />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-[0.25em] font-heading uppercase">
                  LIMPEZA <span className="text-brandGold">GOURMET</span>
                </span>
                <span className="text-[9px] tracking-[0.6em] uppercase mt-2 font-medium text-white/50">
                  Premium Excellence
                </span>
              </div>
            </div>
            <p className="mt-8 text-white/40 text-sm font-light max-w-xs leading-loose">Especialistas em conservação e higienização para ambientes que exigem perfeição absoluta.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] items-center">
            <a href="#home" className="hover:text-brandGold transition-colors">Home</a>
            <a href="#servicos" className="hover:text-brandGold transition-colors">Serviços</a>
            <a href="#contato" className="text-brandGold border border-brandGold px-5 py-2 hover:bg-brandGold hover:text-brandBlue transition-all">Orçamento</a>
            <a href="https://www.instagram.com/limpezagourmetposobra?igsh=MWFqaTRnNmJwZHJyZA==" target="_blank" rel="noopener noreferrer" className="hover:text-brandGold transition-colors">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a href="https://www.facebook.com/share/1GhVuz8Aas/" target="_blank" rel="noopener noreferrer" className="hover:text-brandGold transition-colors">
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>
            <a href="https://www.youtube.com/@LimpezaGourmet#bottom-sheet" target="_blank" rel="noopener noreferrer" className="hover:text-brandGold transition-colors">
              <i className="fa-brands fa-youtube text-xl"></i>
            </a>
            <a href="https://www.tiktok.com/@limpezagourmet?_r=1&_t=ZS-939cXFulqvA" target="_blank" rel="noopener noreferrer" className="hover:text-brandGold transition-colors">
              <i className="fa-brands fa-tiktok text-xl"></i>
            </a>
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
        <EstofadosSection />
        <Portfolio />
        <AboutUs />
        <Certificacoes />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      {/* Botão flutuante WhatsApp */}
      <a href="https://wa.me/5511917477832" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-5 md:bottom-8 md:right-8 bg-[#25D366] text-white w-16 h-16 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 overflow-hidden group">
        <i className="fa-brands fa-whatsapp text-4xl md:text-3xl relative z-10"></i>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </a>
    </div>
  );
}

export default App;

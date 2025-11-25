import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Instagram, 
  Clock, 
  Award, 
  Shield, 
  Users, 
  Paintbrush, 
  Home as HomeIcon, 
  Droplets, 
  Wrench,
  CheckCircle2,
  Star,
  Menu,
  X,
  MessageCircle,
  Target,
  Eye,
  Heart,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ffa7b5a8ad7ef33bca024b/1054911ed_lirapintura.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const NavButton = ({ item, label }: { item: string, label: string }) => (
    <button
      onClick={() => scrollToSection(item)}
      className="text-gray-300 hover:text-white font-medium transition-colors capitalize text-sm tracking-wide relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-400 transition-all group-hover:w-full duration-300"></span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden text-gray-100">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-sky-700/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5551997577051?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20gratuito."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group cursor-pointer"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale conosco
        </span>
      </a>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled || mobileMenuOpen
            ? 'bg-gray-950/90 backdrop-blur-md shadow-xl border-b border-white/10 py-3' 
            : 'bg-transparent py-5 border-b border-transparent shadow-none'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20 overflow-hidden p-1.5 transition-transform hover:rotate-3">
                <img 
                  src={LOGO_URL} 
                  alt="Lira Pintura Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white tracking-tight leading-none">Lira Pintura</h1>
                <p className="text-xs text-brand-400 font-medium tracking-wide uppercase">Porto Alegre</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <NavButton item="sobre" label="Sobre" />
              <NavButton item="servicos" label="Serviços" />
              <NavButton item="portfolio" label="Portfólio" />
              <NavButton item="contato" label="Contato" />
              <a href="tel:5199757051" className="group">
                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-2 transition-all active:scale-95 backdrop-blur-md">
                  <Phone className="w-4 h-4 text-brand-400 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium text-sm">(51) 99757-7051</span>
                </button>
              </a>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 overflow-hidden bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <nav className="flex flex-col p-4">
                  {['sobre', 'servicos', 'portfolio', 'contato'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-gray-300 hover:text-white hover:bg-white/5 font-medium transition-colors capitalize text-left py-3 px-4 rounded-xl"
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center z-10 relative">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-500/30 blur-3xl rounded-full group-hover:bg-brand-400/40 transition-colors duration-500"></div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-white to-gray-200 rounded-full p-6 shadow-2xl border-[6px] border-white/10 backdrop-blur-sm">
                  <img 
                    src={LOGO_URL} 
                    alt="Lira Pintura Logo" 
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-block">
                <span className="px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                  10 anos de excelência
                </span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                Pintura de <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">Alto Padrão</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                Reformas completas, construção a seco e hidráulica em <strong className="text-white font-semibold">Porto Alegre</strong>.
                Especialistas em transformar espaços com acabamento fino e precisão técnica.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a 
                  href="https://wa.me/5551997577051?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20gratuito." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-950 font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Orçamento Gratuito
                  </button>
                </a>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border border-white/20 font-semibold text-lg px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Ver Portfólio
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
            >
              {[
                { icon: Award, label: '10+', sublabel: 'Anos de Experiência' },
                { icon: Users, label: '4', sublabel: 'Especialistas' },
                { icon: Clock, label: '24h', sublabel: 'Atendimento' },
                { icon: Shield, label: '100%', sublabel: 'Garantia Técnica' }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-brand-500/30 transition-all hover:bg-gray-800/40 group">
                  <stat.icon className="w-8 h-8 text-brand-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-3xl font-bold text-white mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-400 font-medium">{stat.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative py-24 bg-gray-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-gray-900/30 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="text-center mb-16 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">Sobre a Lira Pintura</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Nossa história é construída com tinta, dedicação e profissionalismo. 
                Atuamos em Porto Alegre entregando não apenas reformas, mas tranquilidade e valorização para seu patrimônio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-800/30 rounded-3xl p-8 border border-white/5 hover:border-brand-500/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <Paintbrush className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Gabriel Lira</h3>
                    <p className="text-brand-400 text-sm font-semibold uppercase tracking-wide">Fundador</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Com 10 anos de experiência prática, Gabriel lidera cada projeto garantindo que o padrão de qualidade Lira Pintura seja respeitado em cada metro quadrado.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-800/30 rounded-3xl p-8 border border-white/5 hover:border-brand-500/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Nossa Equipe</h3>
                    <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide">Especialistas</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Contamos com 4 profissionais fixos altamente qualificados, treinados nas melhores técnicas de aplicação e comportamento em obra.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Atendimento 24h', desc: 'Disponibilidade total para emergências hidráulicas e prazos curtos.', color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { title: 'Laudo Técnico', desc: 'Segurança garantida com engenheiro parceiro certificado para ARTs.', color: 'text-green-400', bg: 'bg-green-400/10' },
                { title: 'Construção a Seco', desc: 'Agilidade e limpeza com especialistas em Drywall e Steel Frame.', color: 'text-orange-400', bg: 'bg-orange-400/10' },
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl p-6 border border-white/5 ${item.bg}`}>
                  <CheckCircle2 className={`w-8 h-8 ${item.color} mb-4`} />
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Nossa Filosofia</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 font-serif">Nossos Pilares</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Target, 
                title: 'Missão', 
                text: 'Entregar soluções em pintura e reforma com excelência técnica, organização impecável e compromisso absoluto com o cliente.',
                accent: 'text-red-400'
              },
              { 
                icon: Eye, 
                title: 'Visão', 
                text: 'Ser referência em Porto Alegre como a empresa mais confiável e inovadora em acabamentos de alto padrão.',
                accent: 'text-brand-400'
              },
              { 
                icon: Heart, 
                title: 'Valores', 
                text: 'Qualidade, transparência, pontualidade, segurança, sustentabilidade e respeito ao próximo.',
                accent: 'text-pink-400'
              }
            ].map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all shadow-2xl group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.accent}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-900 relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Especialidades</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 font-serif">O Que Fazemos de Melhor</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Paintbrush,
                title: 'Pintura',
                desc: 'Acabamento fino e técnicas avançadas.',
                items: ['Pintura de alto padrão', 'Pintura predial e residencial', 'Texturas e efeitos decorativos', 'Tratamento de trincas e fissuras'],
                gradient: 'from-blue-500 to-cyan-400'
              },
              {
                icon: HomeIcon,
                title: 'Reformas e Drywall',
                desc: 'Transformação completa do ambiente.',
                items: ['Revestimentos cerâmicos', 'Forros e divisórias em Drywall', 'Estruturas em Steel Frame', 'Sancas e nichos iluminados'],
                gradient: 'from-purple-500 to-pink-400'
              },
              {
                icon: Droplets,
                title: 'Impermeabilização',
                desc: 'Proteção contra umidade e infiltrações.',
                items: ['Mantas asfálticas', 'Argamassas poliméricas', 'Membranas de poliuretano', 'Soluções para lajes e piscinas'],
                gradient: 'from-emerald-500 to-teal-400'
              },
              {
                icon: Wrench,
                title: 'Hidráulica',
                desc: 'Soluções definitivas para encanamento.',
                items: ['Instalação de água quente e fria', 'Tubulação PEX e Cobre', 'Manutenção e reparos', 'Projetos hidráulicos residenciais'],
                gradient: 'from-orange-500 to-yellow-400'
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all group overflow-hidden relative"
              >
                {/* Gradient Border on hover */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Galeria</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 font-serif">Projetos Recentes</h2>
            </div>
            <a 
              href="https://instagram.com/lirapintura" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all group"
            >
              <Instagram className="w-5 h-5" />
              <span>Ver mais no Instagram</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Sala de Estar Minimalista', category: 'Pintura', img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80' },
              { title: 'Área Gourmet', category: 'Revestimento', img: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80' },
              { title: 'Fachada Residencial', category: 'Pintura Externa', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80' },
              { title: 'Impermeabilização de Terraço', category: 'Técnico', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80' },
              { title: 'Iluminação em Drywall', category: 'Gesso', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80' },
              { title: 'Estrutura Steel Frame', category: 'Construção', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-400 text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">O Que Dizem Nossos Clientes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-10 rounded-3xl border border-white/5 relative"
            >
              <div className="absolute top-8 right-8 opacity-10">
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-400 text-brand-400" />
                ))}
              </div>
              <p className="text-gray-200 text-lg mb-6 italic leading-relaxed">
                "Serviço impecável, entrega no prazo e acabamento perfeito. 
                A equipe da Lira Pintura transformou completamente minha casa! O cuidado com a limpeza pós-obra foi um diferencial."
              </p>
              <div>
                <p className="text-white font-bold">Ricardo M.</p>
                <p className="text-gray-500 text-sm">Cliente Residencial</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-10 rounded-3xl border border-white/5 relative"
            >
              <div className="absolute top-8 right-8 opacity-10">
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-400 text-brand-400" />
                ))}
              </div>
              <p className="text-gray-200 text-lg mb-6 italic leading-relaxed">
                "Equipe extremamente organizada e o laudo técnico nos deu total segurança. 
                Para quem busca seriedade e cumprimento de normas em condomínios, é a melhor opção."
              </p>
              <div>
                <p className="text-white font-bold">Fernanda S.</p>
                <p className="text-gray-500 text-sm">Síndica Profissional</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-gray-950 pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-10 md:p-20 border border-white/10 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-500/10 blur-[100px] pointer-events-none"></div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif">
              Vamos transformar seu espaço?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Entre em contato agora mesmo para um orçamento detalhado e sem compromisso. 
              Atendemos em toda Porto Alegre e região metropolitana.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://wa.me/5551997577051?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20gratuito." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Chamar no WhatsApp
                </button>
              </a>
              <a href="tel:5199757051" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-lg px-10 py-5 rounded-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 backdrop-blur-md">
                  <Phone className="w-6 h-6" />
                  (51) 99757-7051
                </button>
              </a>
            </div>

            <div className="mt-12 flex justify-center gap-8">
              <a href="https://instagram.com/lirapintura" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Atendimento 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                  <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white">Lira Pintura</h3>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Referência em pintura de alto padrão, reformas e hidráulica em Porto Alegre. 
                Mais de uma década de experiência transformando sonhos em realidade.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Links Rápidos</h4>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection('sobre')} className="text-gray-400 hover:text-brand-400 transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-gray-400 hover:text-brand-400 transition-colors">Nossos Serviços</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-brand-400 transition-colors">Portfólio</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-gray-400 hover:text-brand-400 transition-colors">Contato</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-400 mt-0.5" />
                  <span>(51) 99757-7051</span>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-brand-400 mt-0.5" />
                  <span>@lirapintura</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-400 mt-0.5" />
                  <span>Plantão 24 Horas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Lira Pintura. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
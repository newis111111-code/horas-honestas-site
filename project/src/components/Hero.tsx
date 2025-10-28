export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Remodelações e Pinturas com <span className="text-[#0094E8]">Qualidade e Honestidade</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Serviços profissionais para casas, apartamentos e empresas.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#0094E8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0080cc] transition-colors shadow-lg"
          >
            Pedir Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}

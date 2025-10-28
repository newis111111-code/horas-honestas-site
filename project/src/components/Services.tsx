import { Paintbrush, Home, Wrench, Building2, Hammer, Layers } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Pinturas Interiores e Exteriores',
    description: 'Pinturas de alta qualidade para interiores e fachadas, com acabamento profissional e durabilidade garantida.'
  },
  {
    icon: Home,
    title: 'Remodelação de Cozinhas e Casas de Banho',
    description: 'Transformamos os seus espaços com designs modernos e funcionais, cuidando de cada detalhe.'
  },
  {
    icon: Layers,
    title: 'Aplicação de Pladur e Tetos Falsos',
    description: 'Criação de divisórias, tetos falsos e soluções em pladur para otimizar e modernizar os seus espaços.'
  },
  {
    icon: Wrench,
    title: 'Reparações Domésticas em Geral',
    description: 'Pequenas e médias reparações para manter a sua casa sempre em perfeitas condições.'
  },
  {
    icon: Building2,
    title: 'Tratamento e Renovação de Fachadas',
    description: 'Recuperação, limpeza e pintura de fachadas para dar nova vida ao exterior do seu imóvel.'
  },
  {
    icon: Hammer,
    title: 'Serviços de Construção Leve',
    description: 'Acabamentos, remodelações e serviços de construção para projetos residenciais e comerciais.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Serviços</h2>
          <div className="w-20 h-1 bg-[#0094E8] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades de remodelação e pintura
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#0094E8] bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-[#0094E8]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

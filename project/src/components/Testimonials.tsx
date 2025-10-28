import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Lisboa',
    text: 'Excelente trabalho na remodelação da minha cozinha. A equipa foi profissional, pontual e o resultado superou as minhas expectativas. Recomendo sem dúvida!'
  },
  {
    name: 'João Santos',
    location: 'Porto',
    text: 'Contratei a Horas Honestas para pintar a fachada do prédio. Trabalho impecável, preço justo e cumpriram os prazos. Muito satisfeito com o serviço.'
  },
  {
    name: 'Ana Costa',
    location: 'Braga',
    text: 'Fizeram a remodelação completa da casa de banho. Atenção aos detalhes, honestidade e qualidade do início ao fim. Voltarei a trabalhar com eles!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Dizem os Nossos Clientes</h2>
          <div className="w-20 h-1 bg-[#0094E8] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

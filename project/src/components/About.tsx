import { Award, Clock, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
          <div className="w-20 h-1 bg-[#0094E8] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <span className="font-semibold text-[#0094E8]">Horas Honestas</span> é uma empresa especializada em remodelações e pinturas que se orgulha de entregar trabalhos de excelência com total transparência e compromisso.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A nossa equipa é formada por profissionais experientes que trabalham com atenção aos detalhes, respeitando prazos e oferecendo preços justos. Cada projeto é tratado com o mesmo cuidado, seja uma simples pintura ou uma remodelação completa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Acreditamos que a honestidade e a qualidade devem andar de mãos dadas. Por isso, acompanhamos pessoalmente cada etapa do trabalho, garantindo a sua total satisfação.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <Award className="text-[#0094E8] flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Qualidade Garantida</h3>
                <p className="text-gray-700">Utilizamos materiais de primeira linha e técnicas profissionais em todos os nossos projetos.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <Clock className="text-[#0094E8] flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Compromisso com Prazos</h3>
                <p className="text-gray-700">Respeitamos o seu tempo e cumprimos rigorosamente os prazos estabelecidos.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <Users className="text-[#0094E8] flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Acompanhamento Personalizado</h3>
                <p className="text-gray-700">Cada cliente recebe atenção dedicada e soluções adaptadas às suas necessidades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

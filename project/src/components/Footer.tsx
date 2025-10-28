import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/LOGO.jpg"
              alt="Horas Honestas Logo"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400">
              Remodelações e Pinturas com Qualidade e Honestidade
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Pinturas Interiores e Exteriores</li>
              <li>Remodelação de Cozinhas</li>
              <li>Aplicação de Pladur</li>
              <li>Reparações Domésticas</li>
              <li>Tratamento de Fachadas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Siga-nos</h4>
            <a
              href="https://www.instagram.com/horashonestas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#0094E8] text-white px-6 py-3 rounded-lg hover:bg-[#0080cc] transition-colors"
            >
              <Instagram size={24} />
              <span className="font-medium">@horashonestas</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Horas Honestas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

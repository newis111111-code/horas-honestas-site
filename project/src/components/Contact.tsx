import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contacto</h2>
          <div className="w-20 h-1 bg-[#0094E8] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicite o seu orçamento gratuito. Respondemos no mesmo dia!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contacto</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Phone className="text-[#0094E8] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Telemóvel</p>
                  <p className="text-gray-700">+351 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-[#0094E8] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-700">info@horashonestas.pt</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-[#0094E8] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Área de Atuação</p>
                  <p className="text-gray-700">Lisboa e Grande Lisboa</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0094E8] bg-opacity-10 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Porquê escolher-nos?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-[#0094E8] mr-2 flex-shrink-0" size={20} />
                  Orçamentos gratuitos e sem compromisso
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0094E8] mr-2 flex-shrink-0" size={20} />
                  Resposta rápida no mesmo dia
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0094E8] mr-2 flex-shrink-0" size={20} />
                  Preços justos e transparentes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0094E8] mr-2 flex-shrink-0" size={20} />
                  Trabalho de qualidade garantida
                </li>
              </ul>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold text-green-700 mb-2">Mensagem Enviada!</h3>
                <p className="text-green-600">Obrigado pelo seu contacto. Responderemos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0094E8] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">
                    Telemóvel *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0094E8] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0094E8] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0094E8] focus:border-transparent outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0094E8] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#0080cc] transition-colors shadow-lg"
                >
                  Solicitar Orçamento
                </button>

                <p className="text-center text-gray-600 text-sm italic">
                  Respondemos no mesmo dia
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

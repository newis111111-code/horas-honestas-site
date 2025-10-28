const projects = [
  {
    image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Remodelação de Sala'
  },
  {
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Pintura de Fachada'
  },
  {
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Remodelação de Cozinha'
  },
  {
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Casa de Banho Moderna'
  },
  {
    image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Teto Falso em Pladur'
  },
  {
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Pintura Interior'
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Projetos</h2>
          <div className="w-20 h-1 bg-[#0094E8] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja alguns dos trabalhos que realizámos com dedicação e profissionalismo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https:/www.instagram.com/horashonestas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#0094E8] font-semibold text-lg hover:text-[#0080cc] transition-colors"
          >
            Ver mais projetos no Instagram
            <svg className="ml-2" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

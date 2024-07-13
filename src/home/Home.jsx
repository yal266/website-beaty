import React from "react";

const Home = () => {

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:columns-2">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-medium text-gray-800 leading-tight mb-4 lg:mb-6">
                Browse & <br class="hidden lg:inline" /> Select E-Books
              </h1>
              <p className="text-gray-600 mb-4 lg:mb-6">
                La Biblioteca de la Universidad Nacional del Santa, a través de
                esta Web, pone a disposición de los lectores, el catálogo de una
                colección de más de 35.000 libros, 4.000 títulos de revistas
                científicas y diversos ejemplares de otros documentos, como
                microfilms, vídeos, partituras, mapas, CD-ROMs. Asimismo, ofrece
                la posibilidad de consultar numerosos documentos en formato
                electrónico, desde sumarios de importantes revistas cientificas
                hasta el texto completo de estas publicaciones.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg"
              >
                Explore Now
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

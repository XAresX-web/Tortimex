import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Tortimex",
  description:
    "Consulta los términos y condiciones de uso del sitio web de Tortimex, productor de tortillas, masa y totopos en Jalisco, México.",
  keywords: [
    "Tortimex",
    "Términos y Condiciones",
    "Productos de maíz",
    "Tortillas Jalisco",
    "Masa de maíz",
    "Totopos",
  ],
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <header>
          <h1 className="text-4xl font-bold mb-4">
            Términos y Condiciones – Tortimex
          </h1>
          <p className="text-slate-600">
            Última actualización: {new Date().getFullYear()}
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            1. Aceptación de los términos
          </h2>
          <p>
            El acceso y uso del sitio web de Tortimex implica la aceptación
            plena y sin reservas de los presentes Términos y Condiciones. Si no
            estás de acuerdo con alguna parte de estos términos, deberás
            abstenerte de utilizar este sitio.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Objeto del sitio web</h2>
          <p>
            Este sitio tiene como finalidad proporcionar información sobre los
            productos de maíz elaborados por Tortimex, incluyendo tortillas,
            masa y totopos, así como facilitar el contacto comercial y la
            solicitud de cotizaciones.
          </p>
          <p>
            La información publicada es de carácter informativo y puede ser
            modificada sin previo aviso.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Uso adecuado del sitio</h2>
          <p>
            El usuario se compromete a utilizar el sitio de manera lícita y
            respetuosa, evitando:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Realizar actividades ilícitas o fraudulentas.</li>
            <li>Intentar vulnerar la seguridad del sitio.</li>
            <li>Utilizar la información con fines no autorizados.</li>
            <li>Introducir virus o cualquier código malicioso.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Propiedad intelectual</h2>
          <p>
            Todo el contenido del sitio web, incluyendo textos, imágenes,
            logotipos, diseño, estructura y elementos gráficos, es propiedad de
            Tortimex o cuenta con las licencias correspondientes.
          </p>
          <p>
            Queda prohibida su reproducción total o parcial sin autorización
            expresa y por escrito.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            5. Cotizaciones y relación comercial
          </h2>
          <p>
            Las solicitudes enviadas a través del formulario o WhatsApp no
            constituyen una obligación contractual inmediata.
          </p>
          <p>
            Cualquier relación comercial estará sujeta a acuerdos específicos,
            disponibilidad de producto y condiciones pactadas entre las partes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            6. Limitación de responsabilidad
          </h2>
          <p>
            Tortimex no garantiza que el sitio esté libre de errores o
            interrupciones, aunque se realizan esfuerzos razonables para
            mantenerlo actualizado y operativo.
          </p>
          <p>
            No nos hacemos responsables por daños derivados del uso indebido del
            sitio o por fallas externas fuera de nuestro control.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Enlaces a terceros</h2>
          <p>
            El sitio puede contener enlaces a plataformas externas como
            servicios de mensajería o correo electrónico. Tortimex no es
            responsable de las políticas ni del contenido de dichos sitios.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Modificaciones</h2>
          <p>
            Tortimex se reserva el derecho de modificar los presentes términos
            en cualquier momento. Las actualizaciones serán publicadas en esta
            misma sección.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Legislación aplicable</h2>
          <p>
            Estos términos se rigen por las leyes vigentes en México. Cualquier
            controversia será sometida a los tribunales competentes del Estado
            de Jalisco.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Contacto</h2>
          <p>Jalisco, México</p>
          <p>+52 33 3905 7440</p>
          <p>contacto.tortimex@gmail.com</p>
        </section>
      </div>
    </main>
  );
}

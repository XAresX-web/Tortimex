export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <header>
          <h1 className="text-4xl font-bold mb-4">
            Aviso de Privacidad – Tortimex
          </h1>
          <p className="text-slate-600">
            Última actualización: {new Date().getFullYear()}
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            1. Identidad y domicilio del responsable
          </h2>
          <p>
            Tortimex, con domicilio en Jalisco, México, es responsable del
            tratamiento de los datos personales que nos proporciones a través de
            nuestro sitio web y medios digitales.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            2. Datos personales que recopilamos
          </h2>
          <p>
            A través de nuestro formulario de contacto y canales digitales,
            podemos recopilar los siguientes datos:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nombre completo</li>
            <li>Nombre de empresa o negocio</li>
            <li>Correo electrónico</li>
            <li>Número telefónico</li>
            <li>Información relacionada con tu solicitud o mensaje</li>
          </ul>
          <p>No recopilamos datos personales sensibles.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            3. Finalidades del tratamiento
          </h2>
          <p>Tus datos serán utilizados para:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Dar respuesta a solicitudes de información o cotización</li>
            <li>Contactarte vía teléfono, correo electrónico o WhatsApp</li>
            <li>
              Enviarte información comercial relacionada con nuestros productos
            </li>
            <li>Brindar seguimiento a prospectos y clientes</li>
            <li>Mejorar nuestros servicios y atención</li>
          </ul>
          <p>
            En caso de lanzar productos tecnológicos como TortiSoft, los datos
            podrán utilizarse para notificar sobre disponibilidad,
            actualizaciones o listas de espera.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Transferencia de datos</h2>
          <p>Tortimex no vende ni comercializa tus datos personales.</p>
          <p>Tus datos podrán ser compartidos únicamente con:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Plataformas de mensajería como WhatsApp cuando el usuario decide
              enviar información mediante redirección.
            </li>
            <li>
              Servicios de correo electrónico necesarios para responder
              solicitudes.
            </li>
            <li>
              Proveedores tecnológicos que soportan el funcionamiento del sitio
              web.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Uso de WhatsApp</h2>
          <p>
            Cuando utilizas nuestro formulario y eliges enviar tu mensaje
            mediante WhatsApp:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              El mensaje es procesado bajo las políticas de privacidad de
              WhatsApp.
            </li>
            <li>
              Tortimex no almacena automáticamente el contenido del mensaje en
              servidores propios (salvo que se implemente un sistema adicional
              en el futuro).
            </li>
          </ul>
          <p>
            Te recomendamos revisar las políticas de privacidad de WhatsApp
            antes de enviar información.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            6. Seguridad de la información
          </h2>
          <p>
            Implementamos medidas administrativas y técnicas razonables para
            proteger tu información contra acceso no autorizado, alteración o
            divulgación indebida.
          </p>
          <p>Sin embargo, ningún sistema en internet es 100% infalible.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Derechos ARCO</h2>
          <p>
            De conformidad con la Ley Federal de Protección de Datos Personales
            en Posesión de los Particulares (México), tienes derecho a:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Acceder a tus datos personales</li>
            <li>Rectificarlos</li>
            <li>Cancelarlos</li>
            <li>Oponerte a su uso</li>
          </ul>
          <p>Para ejercer estos derechos puedes enviar una solicitud a:</p>
          <p className="font-semibold">contacto.tortimex@gmail.com</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Uso de cookies</h2>
          <p>
            Nuestro sitio puede utilizar cookies técnicas para mejorar la
            experiencia del usuario.
          </p>
          <p>
            No utilizamos cookies para vender información ni para publicidad
            invasiva.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            9. Cambios al aviso de privacidad
          </h2>
          <p>
            Tortimex se reserva el derecho de modificar el presente aviso para
            adaptarlo a cambios legislativos o mejoras en nuestros servicios.
          </p>
          <p>
            Las modificaciones serán publicadas en esta misma sección del sitio
            web.
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

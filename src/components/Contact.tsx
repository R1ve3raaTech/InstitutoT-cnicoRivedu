import WhatsAppChooser from "./WhatsAppChooser";

const contacts = [
  { label: "WhatsApp 6011-8430", href: "https://wa.me/50660118430" },
  { label: "WhatsApp 7263-4928", href: "https://wa.me/50672634928" },
];

export default function Contact() {
  return (
    <section className="section section--contact" id="contacto">
      <div className="container contact-box">
        <div className="contact-box__copy">
          <p className="eyebrow eyebrow--light"><span /> Contacto</p>
          <h2>¿Necesita información sobre un curso?</h2>
          <p>Escríbanos para consultar horarios, disponibilidad y detalles de inscripción.</p>
        </div>
        <div className="contact-box__actions">
          {contacts.map((contact) => (
            <a className="contact-link" href={contact.href} key={contact.href} target="_blank" rel="noopener noreferrer">
              <span>{contact.label}</span><span aria-hidden="true">↗</span>
            </a>
          ))}
          <a className="contact-email" href="mailto:direccionrivedu@gmail.com">direccionrivedu@gmail.com</a>
          <WhatsAppChooser label="Consultar por WhatsApp" variant="quiet" message="Hola, me gustaría recibir información sobre los cursos del Instituto Técnico Rivedu." />
        </div>
      </div>
    </section>
  );
}

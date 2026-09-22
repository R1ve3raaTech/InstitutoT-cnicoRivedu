import WhatsAppChooser from "./WhatsAppChooser";
import { whatsappContacts } from "../data/contact";

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
          {whatsappContacts.map((contact) => (
            <a className="contact-link" href={`https://wa.me/${contact.number}`} key={contact.number} target="_blank" rel="noopener noreferrer">
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

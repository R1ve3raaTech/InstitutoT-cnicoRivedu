import CopyButton from "./CopyButton";
import { paymentDetails } from "../data/contact";
import AnimatedContent from "./AnimatedContent";

export default function PaymentMethods() {
  return (
    <section className="section section--payments" id="medios-pago">
      <AnimatedContent className="container">
        <div className="payments-heading">
          <div>
            <p className="eyebrow"><span /> Medios de pago</p>
            <h2>Medios de pago.</h2>
          </div>
          <p>Puede realizar sus pagos mediante SINPE Móvil o transferencia bancaria. Consulte con el instituto los detalles correspondientes a su inscripción.</p>
        </div>

        <div className="payment-grid">
          <article className="payment-card payment-card--sinpe">
            <p className="payment-card__label">SINPE Móvil</p>
            <h3>Pago por SINPE Móvil</h3>
            <div className="payment-field payment-field--featured">
              <span>Número</span>
              <strong>{paymentDetails.sinpeDisplay}</strong>
              <CopyButton value={paymentDetails.sinpeValue} label="Copiar número" />
            </div>
          </article>

          <article className="payment-card payment-card--bank">
            <p className="payment-card__label">Transferencia bancaria</p>
            <h3>{paymentDetails.bank}</h3>
            <dl className="payment-fields">
              <div className="payment-field">
                <dt>Nombre del titular</dt>
                <dd>{paymentDetails.accountHolder}</dd>
              </div>
              <div className="payment-field">
                <dt>Cédula jurídica</dt>
                <dd>{paymentDetails.legalId}</dd>
              </div>
              <div className="payment-field">
                <dt>IBAN</dt>
                <dd>{paymentDetails.ibanDisplay}</dd>
                <CopyButton value={paymentDetails.ibanValue} label="Copiar IBAN" />
              </div>
              <div className="payment-field">
                <dt>Cuenta</dt>
                <dd>{paymentDetails.accountDisplay}</dd>
                <CopyButton value={paymentDetails.accountDisplay} label="Copiar cuenta" />
              </div>
            </dl>
          </article>
        </div>

        <p className="payment-note">Antes de realizar el pago, confirme con el instituto el monto y los detalles de su inscripción.</p>
      </AnimatedContent>
    </section>
  );
}

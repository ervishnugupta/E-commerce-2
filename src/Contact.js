import styled from "styled-components";

const Contact = () => {
  
  return <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14231.762041040292!2d75.89045165000002!3d26.90538304999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db75b141ec5e3%3A0xd48ba3dcae11227f!2sJamdoli%2C%20Jaipur%2C%20Rajasthan%20302031!5e0!3m2!1sen!2sin!4v1737789217725!5m2!1sen!2sin" width="100%" height="400" style={{border : 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mldgdopk" method="POST" className="contact-inputs">
          <input type="text"  placeholder="username" name="username" required autoComplete="off" />
          <input type="email" name="email" placeholder="Enter your email" required autoComplete="off"/>

          <textarea name="message" required autoComplete="off" rows='10' cols="30" placeholder="Enter your message"></textarea>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


export default Contact;

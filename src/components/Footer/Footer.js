import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <img src="/images/facebook.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <img src="/images/twitter.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <img src="/images/instagram.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="logo" />
      </section>
      <section className="credits">
        <p>
          Developed by <br /> <a href="https://alura.com.br">Alura</a> and{" "}
          <a href="https://www.github.com/RickHPotter">RickHPotter</a>.
        </p>
      </section>
    </footer>
  );
};

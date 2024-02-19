import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="fb.com" target="_blank">
              <img src="/img/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="tw.com" target="_blank">
              <img src="/img/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="ig.com" target="_blank">
              <img src="/img/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/img/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;

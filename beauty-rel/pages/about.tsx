import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
  <title>About</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0"
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
  <link
    rel="stylesheet"
    type="text/css"
    href="//fonts.googleapis.com/css?family=DM+Sans:400,400i,500,500i,700,700i&display=swap"
  />
  <link rel="stylesheet" href="css/bootstrap.css" />
  <link rel="stylesheet" href="css/fonts.css" />
  <link rel="stylesheet" href="css/style.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        ".ie-panel{display: none;background: #212121;padding: 10px 0;box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3);clear: both;text-align:center;position: relative;z-index: 1;} html.ie-10 .ie-panel, html.lt-ie-10 .ie-panel {display: block;}"
    }}
  />
</Head>
  <header className="section page-header">
    {/*RD Navbar*/}
    <div className="rd-navbar-wrap">
      <nav
        className="rd-navbar rd-navbar-classic"
        data-layout="rd-navbar-fixed"
        data-sm-layout="rd-navbar-fixed"
        data-md-layout="rd-navbar-fixed"
        data-md-device-layout="rd-navbar-fixed"
        data-lg-layout="rd-navbar-static"
        data-lg-device-layout="rd-navbar-static"
        data-xl-layout="rd-navbar-static"
        data-xl-device-layout="rd-navbar-static"
        data-lg-stick-up-offset="46px"
        data-xl-stick-up-offset="46px"
        data-xxl-stick-up-offset="46px"
        data-lg-stick-up="true"
        data-xl-stick-up="true"
        data-xxl-stick-up="true"
      >
        <div className="rd-navbar-main-outer">
          <div className="rd-navbar-main">
            {/*RD Navbar Panel*/}
            <div className="rd-navbar-panel">
              {/*RD Navbar Toggle*/}
              <button
                className="rd-navbar-toggle"
                data-rd-navbar-toggle=".rd-navbar-nav-wrap"
              >
                <span />
              </button>
              {/*RD Navbar Brand*/}
              <div className="rd-navbar-brand">
                {/*Brand*/}
                <a className="brand" href="index.html">
                  <img
                    className="brand-logo-dark"
                    src="images/logo-default-428x112.png"
                    alt=""
                    width={214}
                    height={56}
                  />
                  <img
                    className="brand-logo-light"
                    src="images/logo-inverse-430x112.png"
                    alt=""
                    width={215}
                    height={56}
                  />
                </a>
              </div>
            </div>
            <div className="rd-navbar-main-element">
              <div className="rd-navbar-nav-wrap">
                <ul className="rd-navbar-nav">
                  <li className="rd-nav-item">
                    <a className="rd-nav-link" href="index.html">
                      Início
                    </a>
                  </li>
                  <li className="rd-nav-item active">
                    <a className="rd-nav-link" href="about.html">
                      Sobre
                    </a>
                  </li>
                  <li className="rd-nav-item">
                    <a className="rd-nav-link" href="contact.html">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rd-nav-item">
              <div className="btn-wrap">
                <a className="button button-secondary button-sm" href="#">
                  Acessar App
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div className="section section-lg bg-secondary">
    <div className="container">
      <div className="text-center">
        <h1>Sobre nós</h1>
        <div className="subtitle-2">Bem vindo ao Beautyrel</div>
      </div>
    </div>
  </div>
  <div className="section section-lg bg-default">
    <div className="container">
      <div className="about-wrap">
        <div className="subtitle">Beautyrel para seu salão</div>
        <div className="row row-sm-30">
          <div className="col-lg-6">
            <h2 className="title">
              Entregamos a melhor solução <br className="br-none" /> para o seu
              salão
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="text-wrap-about mt-md-3 mt-sm-3">
              <p className="big">
                No Beautyrel, nosso objetivo é transformar a maneira como você
                gerencia e agenda seus serviços de beleza. Sabemos que a gestão
                eficiente de um salão de beleza envolve muitas tarefas, desde o
                agendamento de clientes até a gestão de equipe e estoque. Nosso
                aplicativo foi desenvolvido para simplificar e otimizar todas
                essas operações, permitindo que você se concentre no que
                realmente importa: proporcionar uma experiência excepcional aos
                seus clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="row row-sm-30">
          <div className="col-lg-12 mt-lg-3">
            <a
              className="video-cover"
              style={{
                backgroundImage: 'url("images/video-prev-1050x591.jpg")'
              }}
              data-lightgallery="item"
              href="https://www.youtube.com/watch?v=NxPbcuUZcL0"
            >
              <span className="icon mdi mdi-play-circle-outline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="section footer-classic context-dark">
    <div className="container wide">
      <div className="list-wrapper">
        <div className="row row-sm-30">
          <div className="col-sm-4 col-md-4 col-lg-3">
            <p>Aplicativo</p>
            <ul className="list">
              <li>
                <a href="#" data-waypoint-to="#">
                  Acessar App
                </a>
              </li>
              <li>
                <a href="personalize.html" data-waypoint-to="#">
                  Solicitar personalização
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-3">
            <p>Beautyrel</p>
            <ul className="list">
              <li>
                <a href="about.html" data-waypoint-to="#">
                  Sobre
                </a>
              </li>
              <li>
                <a href="contact.html" data-waypoint-to="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-3">
            <p>Ajuda</p>
            <ul className="list">
              <li>
                <a href="terms.html" data-waypoint-to="#">
                  Termos
                </a>
              </li>
              <li>
                <a href="privacy-policy.html" data-waypoint-to="#">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-3">
            <img
              src="images/footer-1-280x156.jpg"
              alt=""
              width={280}
              height={156}
            />
            <p>Beautyrel</p>
            <div className="date"> Desde Janeiro de 2024</div>
          </div>
        </div>
      </div>
      <div className="row row-sm-30">
        <div className="col-lg-6">
          <div className="group-md group-middle">
            <p className="rights">
              <span>©&nbsp; </span>
              <span className="copyright-year" />
              <span>&nbsp;</span>
              <span>Beautyrel</span>
              <span>.&nbsp;</span>
              <a href="privacy-policy.html">Política de Privacidade</a>
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-lg-right">
            <ul className="group-xl group-middle">
              <li>
                <a
                  className="icon icon-default icon-sm mdi mdi-android"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-default icon-sm mdi mdi-apple"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-default icon-sm mdi mdi-instagram"
                  href="#"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

        <Script src="js/core.min.js"></Script>
        <Script src="js/script.js"></Script>
      </>

  );
}

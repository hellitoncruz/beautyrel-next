import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
          <title>Privacy Policy</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
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
                  <Image
                    className="brand-logo-dark"
                    src="/images/logo-default-428x112.png"
                    alt=""
                    width={214}
                    height={56}
                  />
                  <Image
                    className="brand-logo-light"
                    src="/images/logo-inverse-430x112.png"
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
                  <li className="rd-nav-item">
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
  {/* Breadcrumbs*/}
  <section
    className="breadcrumbs-custom bg-secondary"
    data-preset='{"title":"Breadcrumbs","category":"header","reload":false,"id":"breadcrumbs"}'
  >
    <div className="container">
      <h2 className="breadcrumbs-custom-title">Termos</h2>
      <ul className="breadcrumbs-custom-path">
        <li>
          <a href="index.html">Início</a>
        </li>
        <li className="active">Termos</li>
      </ul>
    </div>
  </section>
  {/*Privacy Policy*/}
  <section className="section section-md bg-default">
    <div className="container">
      <h2>Termos de Serviço</h2>
      {/*Terms list*/}
      <dl className="list-terms">
        <dt className="heading-4">Aceitação dos Termos</dt>
        <dd>
          Ao acessar e usar o aplicativo Beautyrel, você concorda em estar
          vinculado por estes Termos de Serviço. Se você não concorda com algum
          dos termos, então você não deve usar o aplicativo.
        </dd>
        <dt className="heading-4">Uso do Serviço</dt>
        <dd>
          O aplicativo Beautyrel fornece uma plataforma para agendar serviços de
          beleza, massagens, barbearias e afins. Você é responsável por manter a
          confidencialidade de sua conta e senha e por todas as atividades que
          ocorrem sob sua conta.
        </dd>
        <dt className="heading-4">Mudanças no Serviço e Termos</dt>
        <dd>
          Reservamo-nos o direito de modificar ou descontinuar, temporariamente
          ou permanentemente, o serviço com ou sem aviso prévio. Também
          reservamos o direito de alterar estes Termos de Serviço a qualquer
          momento e seu uso contínuo do aplicativo será considerado como sua
          aceitação de tais mudanças.
        </dd>
        <dt className="heading-4">Direitos Autorais e Marcas Registradas</dt>
        <dd>
          O conteúdo, gráficos, design, compilação, tradução e outros assuntos
          relacionados ao aplicativo Beautyrel são protegidos por direitos
          autorais e não podem ser copiados, duplicados ou usados, na íntegra ou
          em parte, sem a permissão expressa por escrito de nossa empresa.
        </dd>
        <dt className="heading-4">Isenções de Responsabilidade</dt>
        <dd>
          O aplicativo é fornecido 'como está'. Não garantimos que o serviço
          será ininterrupto ou livre de erros. Não somos responsáveis por danos
          ou perdas resultantes do uso do serviço.
        </dd>
        <dt className="heading-4">Contato</dt>
        <dd>
          Para questões ou preocupações sobre os Termos de Serviço, entre em
          contato conosco via{" "}
          <a className="privacy-link" href="mailto:#">
            contato@beautyrel.com.br
          </a>
        </dd>
        <dt className="heading-4">Última atualização</dt>
        <dd>26 de junho de 2024</dd>
      </dl>
    </div>
  </section>
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
            <Image
              src="/images/footer-1-280x156.jpg"
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

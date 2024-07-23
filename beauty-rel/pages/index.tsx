import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
          <title>Home</title>
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
                          <li className="rd-nav-item active">
                            <a className="rd-nav-link" href="index.html">
                              Inicio
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
          {/*Main bunner*/}
          <div className="section section-main-bunner context-dark" id="home">
            <div
              className="main-bunner-img bg-overlay-1"
              style={{
                backgroundImage: 'url("/images/slide-01.jpg")',
                backgroundSize: "cover"
              }}
            />
            <div className="main-bunner-inner">
              <div className="container wide">
                <div className="row justify-content-left">
                  <div className="col-lg-5">
                    <h1 data-caption-animate="fadeInUp" data-caption-delay={100}>
                      Aplicativo para seu Salão de Beleza
                    </h1>
                    <p
                      className="lead text-custom-blue"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={250}
                    >
                      Descubra a maneira mais fácil e eficiente de gerenciar seu salão
                      de beleza com nosso aplicativo. Agende serviços, gerencie
                      clientes e otimize seu negócio, tudo em um só lugar!
                    </p>
                    <div className="btn-wrap">
                      <div className="group-xxl group-middle">
                        <a
                          className="button button-primary button-md button-round-2"
                          href="#"
                          data-caption-animate="fadeInUp"
                          data-caption-delay={450}
                        >
                          {" "}
                          Acessar App
                        </a>
                        <a
                          className="button button-white button-md button-round-2"
                          href="personalize.html"
                          data-caption-animate="fadeInUp"
                          data-caption-delay={450}
                        >
                          Personalizar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        {/* Choose Your Massage*/}
        
        
        
        <div className="section section section-lg bg-default">
          <div className="container wide">
            {/*.divider*/}
            <div className="text-center">
              <div className="subtitle">Não apenas para um salão de beleza</div>
              <h2 className="title">Confira</h2>
            </div>
            <div className="row row-60">
              <div className="col-xs-10 col-md-6 col-lg-4">
                <article className="box-minimal">
                  <div className="box-minimal-icon">
                    <Image
                      src="/images/icon-1-44x44.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                  </div>
                  <h4 className="box-minimal-title">Unhas</h4>
                  <div className="box-minimal-text">
                    <p>
                      Explore estilos inovadores e tendências de design de unhas para
                      destacar sua beleza e personalidade.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <article className="box-minimal">
                  <div className="box-minimal-icon">
                    <Image
                      src="/images/icon-2-44x44.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                  </div>
                  <h4 className="box-minimal-title">Maquiagem</h4>
                  <div className="box-minimal-text">
                    <p>
                      Realce sua beleza natural com técnicas e produtos de maquiagem
                      de qualidade, perfeitos para qualquer ocasião.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <article className="box-minimal">
                  <div className="box-minimal-icon">
                    <Image
                      src="/images/icon-3-44x44.png"
                      alt=""
                      width={44}
                      height={44}
                    />
                  </div>
                  <h4 className="box-minimal-title">Massagens</h4>
                  <div className="box-minimal-text">
                    <p>
                      Relaxe e rejuvenesça com nossas massagens terapêuticas,
                      projetadas para aliviar o estresse e melhorar o bem-estar.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/*FAQ*/}
        <div className="section section section-xl">
          <div className="container wide">
            <div className="row row-md-80 row-sm-50">
              <div className="col-sm-12 col-lg-4">
                <div className="subtitle">
                  Perguntas <br className="br-none" />
                  Frequentes
                </div>
              </div>
              <div className="col-sm-12 col-lg-8">
                <div
                  className="card-group-custom"
                  id="accordion1"
                  role="tablist"
                  aria-multiselectable="false"
                >
                  {/*Bootstrap card*/}
                  <article className="card card-custom card-group-custom card-corporate">
                    <div className="card-heading" role="tab">
                      <div className="card-title">
                        <a
                          className="collapsed"
                          id="accordion1-card-head-alasxtaj"
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#accordion1-card-body-xlhnxvuc"
                          aria-controls="accordion1-card-body-xlhnxvuc"
                          aria-expanded="false"
                          role="button"
                        >
                          Vocês fazem o Beautyrel personalizado para meu salão?
                        </a>
                      </div>
                    </div>
                    <div
                      className="card-collapse collapse"
                      id="accordion1-card-body-xlhnxvuc"
                      aria-labelledby="accordion1-card-head-alasxtaj"
                      data-parent="#accordion1"
                      role="tabpanel"
                    >
                      <div className="card-body">
                        <p>
                          Sim, personalizamos o aplicativo Beautyrel com o nome e
                          logotipo do seu salão, e o disponibilizamos na Google Play e
                          na Apple Store.
                        </p>
                      </div>
                    </div>
                  </article>
                  {/*Bootstrap card*/}
                  <article className="card card-custom card-group-custom card-corporate">
                    <div className="card-heading" role="tab">
                      <div className="card-title">
                        <a
                          className="collapsed"
                          id="accordion1-card-head-qtsmcpyn"
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#accordion1-card-body-yhmsmbvt"
                          aria-controls="accordion1-card-body-yhmsmbvt"
                          aria-expanded="false"
                          role="button"
                        >
                          Qual o custo ao usar o aplicativo Beautyrel?
                        </a>
                      </div>
                    </div>
                    <div
                      className="card-collapse collapse"
                      id="accordion1-card-body-yhmsmbvt"
                      aria-labelledby="accordion1-card-head-qtsmcpyn"
                      data-parent="#accordion1"
                      role="tabpanel"
                    >
                      <div className="card-body">
                        <p>
                          O aplicativo é gratuito para uso individual do profissional.
                          Para mais de um profissional e para permitir que os clientes
                          realizem agendamentos, você deverá escolher uma de nossas
                          assinaturas que melhor se adeque às suas necessidades.
                        </p>
                      </div>
                    </div>
                  </article>
                  {/*Bootstrap card*/}
                  <article className="card card-custom card-group-custom card-corporate">
                    <div className="card-heading" role="tab">
                      <div className="card-title">
                        <a
                          className="collapsed"
                          id="accordion1-card-head-shlfwmgn"
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#accordion1-card-body-cqwdacur"
                          aria-controls="accordion1-card-body-cqwdacur"
                          aria-expanded="false"
                          role="button"
                        >
                          Meus clientes podem agendar usando o Beautyrel?
                        </a>
                      </div>
                    </div>
                    <div
                      className="card-collapse collapse"
                      id="accordion1-card-body-cqwdacur"
                      aria-labelledby="accordion1-card-head-shlfwmgn"
                      data-parent="#accordion1"
                      role="tabpanel"
                    >
                      <div className="card-body">
                        <p>
                          Sim, o aplicativo Beautyrel permite que tanto salões quanto
                          clientes criem cadastros, oferecendo interfaces distintas
                          para profissionais e clientes. No entanto, a opção de
                          permitir agendamentos pelos clientes é facultativa e pode
                          ser configurada pelo salão de beleza.
                        </p>
                      </div>
                    </div>
                  </article>
                  {/*Bootstrap card*/}
                  <article className="card card-custom card-group-custom card-corporate">
                    <div className="card-heading" role="tab">
                      <div className="card-title">
                        <a
                          className="collapsed"
                          id="accordion1-card-head-axgjvlha"
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#accordion1-card-body-axwynooc"
                          aria-controls="accordion1-card-body-axwynooc"
                          aria-expanded="false"
                          role="button"
                        >
                          Como posso usar o aplicativo?
                        </a>
                      </div>
                    </div>
                    <div
                      className="card-collapse collapse"
                      id="accordion1-card-body-axwynooc"
                      aria-labelledby="accordion1-card-head-axgjvlha"
                      data-parent="#accordion1"
                      role="tabpanel"
                    >
                      <div className="card-body">
                        <p>
                          Você pode usar o aplicativo móvel Beautyrel, disponível na
                          Google Play e na Apple Store — basta procurar por
                          'Beautyrel'. Além disso, este site oferece acesso exclusivo
                          para salões de beleza. Para acessar, clique em 'Acessar App'
                          no canto superior direito da página inicial.
                        </p>
                      </div>
                    </div>
                  </article>
                  {/*Bootstrap card*/}
                  <article className="card card-custom card-group-custom card-corporate">
                    <div className="card-heading" role="tab">
                      <div className="card-title">
                        <a
                          className="collapsed"
                          id="accordion1-card-head-eqiypqcb"
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#accordion1-card-body-xxrtkqtu"
                          aria-controls="accordion1-card-body-xxrtkqtu"
                          aria-expanded="false"
                          role="button"
                        >
                          Se eu usar o Beautyrel personalizado, o que muda para mim no
                          aplicativo web?
                        </a>
                      </div>
                    </div>
                    <div
                      className="card-collapse collapse"
                      id="accordion1-card-body-xxrtkqtu"
                      aria-labelledby="accordion1-card-head-eqiypqcb"
                      data-parent="#accordion1"
                      role="tabpanel"
                    >
                      <div className="card-body">
                        <p>
                          Nada muda: o aplicativo web é usado exclusivamente pelo
                          salão de beleza, enquanto o aplicativo personalizado é
                          utilizado pelos clientes para agendar serviços e também para
                          a gestão do salão de beleza.
                        </p>
                      </div>
                    </div>
                  </article>
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

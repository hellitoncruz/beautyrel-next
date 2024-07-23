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
      <h2 className="breadcrumbs-custom-title">Política de Privacidade</h2>
      <ul className="breadcrumbs-custom-path">
        <li>
          <a href="index.html">Início</a>
        </li>
        <li className="active">Política de Privacidade</li>
      </ul>
    </div>
  </section>
  {/*Privacy Policy*/}
  <section className="section section-md bg-default">
    <div className="container">
      <h2>Política de Privacidade</h2>
      {/*Terms list*/}
      <dl className="list-terms">
        <dt className="heading-4">Informações Gerais</dt>
        <dd>
          Bem-vindo à nossa página de Política de Privacidade! Ao utilizar os
          serviços do nosso aplicativo de agendamento, você confia em nós com
          suas informações. Esta Política de Privacidade tem como objetivo
          ajudá-lo a entender quais dados coletamos, por que os coletamos e o
          que fazemos com eles. Quando você compartilha informações conosco,
          podemos melhorar ainda mais nossos serviços para você. Por exemplo,
          podemos mostrar resultados de busca mais relevantes, ajudar você a se
          conectar com outras pessoas ou facilitar o compartilhamento de
          informações. Ao utilizar nossos serviços, queremos que você saiba como
          estamos usando suas informações e as maneiras pelas quais você pode
          proteger sua privacidade. Isto é importante, então esperamos que você
          dedique um tempo para ler atentamente. Lembre-se de que você pode
          encontrar controles para gerenciar suas informações e proteger sua
          privacidade e segurança. Tentamos manter tudo o mais simples possível.
        </dd>
        <dt className="heading-4">
          Direito de Acesso, Correção e Exclusão de Dados e de Oposição ao
          Processamento de Dados
        </dt>
        <dd>
          Nossos clientes têm o direito de acessar, corrigir e excluir dados
          pessoais relacionados a eles, e de se opor ao processamento desses
          dados, a qualquer momento, enviando uma solicitação por escrito. A
          empresa faz todo o possível para adotar precauções adequadas para
          proteger a segurança e a privacidade dos dados pessoais e evitar que
          eles sejam alterados, corrompidos, destruídos ou acessados por
          terceiros não autorizados. No entanto, a empresa não controla todos os
          riscos relacionados ao uso da Internet e, portanto, alerta os usuários
          do site sobre os potenciais riscos envolvidos no funcionamento e uso
          da Internet. O site pode incluir links para outros sites ou outras
          fontes da Internet. Como a empresa não pode controlar esses sites e
          fontes externas, não pode ser responsabilizada pela provisão ou
          exibição desses sites e fontes externas, nem pode ser responsabilizada
          pelo conteúdo, publicidade, produtos, serviços ou qualquer outro
          material disponível nesses sites ou fontes externas.
        </dd>
        <dt className="heading-4">Gestão de Dados Pessoais</dt>
        <dd>
          Você pode visualizar ou editar seus dados pessoais online para muitos
          dos nossos serviços. Você também pode fazer escolhas sobre a nossa
          coleta e uso dos seus dados. A forma como você pode acessar ou
          controlar seus dados pessoais dependerá de quais serviços você
          utiliza. Você pode optar por receber ou não comunicações promocionais
          do nosso aplicativo por e-mail, SMS, correio físico e telefone. Se
          você receber e-mails ou mensagens SMS promocionais de nós e quiser
          optar por não recebê-los, pode fazer isso seguindo as instruções na
          mensagem. Você também pode fazer escolhas sobre o recebimento de
          e-mails promocionais, chamadas telefônicas e correio postal, visitando
          e acessando o Gerenciador de Comunicações Promocionais da Empresa, que
          permite atualizar informações de contato, gerenciar preferências de
          contato, optar por não receber assinaturas de e-mails e escolher se
          deseja compartilhar suas informações de contato com nossos parceiros.
          Essas escolhas não se aplicam às comunicações de serviço obrigatórias
          que fazem parte de certos serviços do aplicativo.
        </dd>
        <dt className="heading-4">Informações que Coletamos</dt>
        <dd>
          Nosso aplicativo coleta dados para operar de forma eficaz e fornecer a
          você as melhores experiências com nossos serviços. Você fornece alguns
          desses dados diretamente, como quando cria uma conta pessoal. Obtemos
          alguns deles registrando como você interage com nossos serviços, por
          exemplo, usando tecnologias como cookies, recebendo relatórios de
          erros ou dados de uso do software em seu dispositivo. Também obtemos
          dados de terceiros (incluindo outras empresas). Por exemplo,
          complementamos os dados que coletamos comprando dados demográficos de
          outras empresas. Também usamos serviços de outras empresas para nos
          ajudar a determinar um local com base no seu endereço IP a fim de
          personalizar determinados serviços para a sua localização. Os dados
          que coletamos dependem dos serviços e recursos que você utiliza.
        </dd>
        <dt className="heading-4">Como Usamos Suas Informações</dt>
        <dd>
          Nosso aplicativo usa os dados que coletamos para três propósitos
          básicos: operar nosso negócio e fornecer (incluindo melhorar e
          personalizar) os serviços que oferecemos, enviar comunicações,
          incluindo comunicações promocionais, e exibir publicidade. Ao realizar
          esses propósitos, combinamos dados que coletamos por meio dos diversos
          serviços do aplicativo que você utiliza para proporcionar uma
          experiência mais contínua, consistente e personalizada. No entanto,
          para aumentar a privacidade, incorporamos proteções tecnológicas e
          processuais projetadas para evitar certas combinações de dados. Por
          exemplo, armazenamos dados que coletamos de você quando você não está
          autenticado (não está logado) separadamente de qualquer informação da
          conta que o identifique diretamente, como seu nome, endereço de e-mail
          ou número de telefone.
        </dd>
        <dt className="heading-4">Compartilhamento de Suas Informações</dt>
        <dd>
          Compartilhamos seus dados pessoais com seu consentimento ou conforme
          necessário para concluir qualquer transação ou fornecer qualquer
          serviço que você tenha solicitado ou autorizado. Por exemplo,
          compartilhamos seu conteúdo com terceiros quando você nos diz para
          fazer isso. Quando você fornece dados de pagamento para fazer uma
          compra, compartilharemos os dados de pagamento com bancos e outras
          entidades que processam transações de pagamento ou fornecem outros
          serviços financeiros, bem como para prevenção de fraudes e redução de
          risco de crédito. Além disso, compartilhamos dados pessoais entre
          nossas afiliadas e subsidiárias controladas. Também compartilhamos
          dados pessoais com fornecedores ou agentes que trabalham em nosso nome
          para os fins descritos nesta declaração. Por exemplo, empresas que
          contratamos para fornecer suporte ao cliente ou ajudar a proteger e
          assegurar nossos sistemas e serviços podem precisar acessar dados
          pessoais para fornecer essas funções. Nesses casos, essas empresas
          devem seguir nossos requisitos de privacidade e segurança de dados e
          não estão autorizadas a usar os dados pessoais que recebem de nós para
          qualquer outro propósito. Podemos também divulgar dados pessoais como
          parte de uma transação corporativa, como uma fusão ou venda de ativos.
        </dd>
        <dt className="heading-4">Como Usamos Suas Informações</dt>
        <dd>
          Se você tiver qualquer dúvida ou solicitação relacionada à
          privacidade, entre em contato conosco pelo e-mail:{" "}
          <a className="privacy-link" href="mailto:#">
            contato@beautyrel.com.br
          </a>
        </dd>
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

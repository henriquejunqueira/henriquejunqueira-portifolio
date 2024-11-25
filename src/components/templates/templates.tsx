import styleTemplates from './templates.module.css';
import apiCarrosNode from './imgProjetos/apiCarrosNode.png';
import codigoAgil from './imgProjetos/codigoAgil.png';
import dslist from './imgProjetos/dslist.png';
import myPomodoro from './imgProjetos/myPomodoro.png';
import spotifyClone from './imgProjetos/spotifyClone.png';
import verificadorSenha from './imgProjetos/verificadorSenha.png';
import myLPReact from './imgProjetos/myLPReact.png';

const templates = () => {
  return (
    <div className='container' id={styleTemplates.caixa}>
      <div className='row'>
        <div className='col-md-12'>
          <h2>Alguns dos projetos desenvolvidos</h2>

          <div className={styleTemplates.templates}>
            <div className={styleTemplates.caixaImg}>
              <img src={apiCarrosNode} alt='' />
              <p>API desenvolvida utilizando Node.js e MySQL</p>
              <p>
                O código fonte pode ser acessado através do link:{' '}
                <a
                  target='_blank'
                  href='https://github.com/henriquejunqueira/apiCarro'
                >
                  API Carro
                </a>
              </p>
            </div>
          </div>

          <div className={styleTemplates.templates}>
            <div className={styleTemplates.caixaImg}>
              <img src={codigoAgil} alt='' />
              <p>
                Projeto desenvolvido durante o curso de Desenvolvimento Full
                Stack Júnior utilizando HTML, CSS e JavaScript
              </p>
              <p>
                O código fonte pode ser acessado através do link:{' '}
                <a
                  target='_blank'
                  href='https://github.com/henriquejunqueira/codigo_agil'
                >
                  Código Ágil
                </a>
              </p>
              <p>
                O deploy do projeto pode ser visto no link{' '}
                <a
                  target='_blank'
                  href='https://henriquejunqueira.github.io/codigo_agil/'
                >
                  Deploy Código Ágil
                </a>
              </p>
            </div>
          </div>

          <div className={styleTemplates.templates}>
            <div className={styleTemplates.caixaImg}>
              <img src={dslist} alt='' />
              <p>
                Projeto desenvolvido no Intensivão Java Spring da DevSuperior
              </p>
              <p>
                O código fonte pode ser acessado através do link:{' '}
                <a
                  target='_blank'
                  href='https://github.com/henriquejunqueira/dslist'
                >
                  Dslist
                </a>
              </p>
            </div>
          </div>

          <div className={styleTemplates.templates}>
            <div className={styleTemplates.caixaImg}>
              <img src={myPomodoro} alt='' />
              <p>Projeto desenvolvido com HTML, CSS e JavaScript</p>
              <p>
                O código fonte pode ser acessado através do link:{' '}
                <a
                  target='_blank'
                  href='https://github.com/henriquejunqueira/my-pomodoro'
                >
                  My Pomodoro
                </a>
              </p>
              <p>
                O deploy do projeto pode ser visto no link{' '}
                <a
                  target='_blank'
                  href='https://henriquejunqueira.github.io/my-pomodoro/'
                >
                  Deploy My Pomodoro
                </a>
              </p>
            </div>
          </div>

          <div className={styleTemplates.templates}>
            <div className={styleTemplates.caixaImg}>
              <img src={spotifyClone} alt='' />
              <p>Projeto desenvolvido com HTML, CSS e JavaScript</p>
              <p>
                O código fonte pode ser acessado através do link:{' '}
                <a
                  target='_blank'
                  href='https://github.com/henriquejunqueira/spotify-clone'
                >
                  Spotify Clone
                </a>
              </p>
              <p>
                O deploy do projeto pode ser visto no link{' '}
                <a
                  target='_blank'
                  href='https://henriquejunqueira.github.io/spotify-clone/'
                >
                  Deploy Spotify Clone
                </a>
              </p>
            </div>
          </div>

          <div className={styleTemplates.templates}>
            <div className={styleTemplates.caixaImg}>
              <img src={verificadorSenha} alt='' />
              <p>Projeto desenvolvido com HTML, CSS e JavaScript</p>
              <p>
                O código fonte pode ser acessado através do link:{' '}
                <a
                  target='_blank'
                  href='https://github.com/henriquejunqueira/verificador-de-forca-de-senha'
                >
                  Verificador de Força de Senha
                </a>
              </p>
              <p>
                O deploy do projeto pode ser visto no link{' '}
                <a
                  target='_blank'
                  href='https://henriquejunqueira.github.io/verificador-de-forca-de-senha/'
                >
                  Deploy Verificador de Força de Senha
                </a>
              </p>
            </div>
          </div>

          <div className={styleTemplates.templates}>
            <div className={styleTemplates.caixaImg}>
              <img src={myLPReact} alt='' />
              <p>Projeto desenvolvido com React</p>
              <p>
                O código fonte pode ser acessado através do link:{' '}
                <a
                  target='_blank'
                  href='https://github.com/henriquejunqueira/my_lp_react'
                >
                  My LP React
                </a>
              </p>
              <p>
                O deploy do projeto pode ser visto no link{' '}
                <a target='_blank' href='https://my-lp-react.vercel.app/'>
                  Deploy My LP React
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default templates;

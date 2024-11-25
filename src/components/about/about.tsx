import styleAbout from './about.module.css';
import perfil from '../../assets/perfil.jpg';

const about = () => {
  return (
    <div className='container' id={styleAbout.caixa}>
      <div className='row'>
        <div className='col-md-2'>
          <img
            className={styleAbout.imgPerfil}
            src={perfil}
            alt='Minha foto de perfil'
          />
        </div>
        <div className='col-md-10'>
          <div className={styleAbout.sessao}>
            <h2>Henrique de Abreu Junqueira</h2>
            <h4>
              Analista de Sistemas | Desenvolvedor Web FullStack Tecnologias:
              JavaScript, TypeScript, React, NodeJS e Java
            </h4>
          </div>
          <div className={styleAbout.sessaoDetalhes}>
            <p>
              Sou um profissional dedicado e apaixonado por tecnologia, com
              experiência prática em desenvolvimento de software e soluções web.
              Minha jornada começou lá em 2014 com a linguagem Java e aos poucos
              evoluiu para o desenvolvimento de sistemas e desenvolvimento
              completo de aplicações modernas, sempre buscando criar valor por
              meio de sistemas bem planejados e interfaces amigáveis.
            </p>

            <h4>Experiência em Destaque:</h4>
            <ul>
              <li>
                Silvas’s Artesanatos (2024): Correções e melhorias em sistemas
                com PHP e JavaScript.
              </li>
              <li>
                Nexe Digital (2023 - 2024): Desenvolvimento de sites, integração
                de automações e otimização de produtos digitais.
              </li>
              <li>
                AR2 Informática (2020 - 2023): Segurança de redes, virtualização
                com Proxmox e desenvolvimento do LabManager para gerenciar OS's.
              </li>
            </ul>
            <p>
              Além disso, finalizei recentemente um e-commerce completo como
              projeto final do curso de Desenvolvimento FullStack pela +praTI e
              Codifica Edu. Confira o repositório no GitHub: Projeto Final -
              E-commerce
            </p>

            <h4>Idiomas</h4>
            <ul>
              <li>Português (nativo)</li>
              <li>Inglês (intermediário)</li>
              <li>Iniciando estudos em Japonês e Mandarim</li>
            </ul>

            <h4>Minhas redes</h4>
            <ul>
              <li>
                GitHub:{' '}
                <a target='_blank' href='https://github.com/henriquejunqueira'>
                  henriquejunqueira
                </a>
              </li>
              <li>
                LinkedIn:{' '}
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/henrique-abreu-junqueira/'
                >
                  henrique-abreu-junqueira
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

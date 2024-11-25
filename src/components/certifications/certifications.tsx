import styleCertifications from './certifications.module.css';
import certificado from '../../assets/certificado.png';

const certifications = () => {
  return (
    <div className='container' id={styleCertifications.caixa}>
      <div className='row'>
        <img
          className={styleCertifications.imgCertificado}
          src={certificado}
          alt='Imagem de um capelo de formatura e um diploma'
        />
        <div className='col-md-10'>
          <h2>Certificações em Destaque</h2>

          <div className={styleCertifications.detalhes}>
            <p>
              Análise e Desenvolvimento de Sistemas - 2022 - Trancado no momento
            </p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>
              Desenvolvimento FullStack - +praTI e Codifica Edu (Abril a
              Novembro de 2024)
            </p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>Lógica de Programação Básica com JavaScript - Ada Tech (2024)</p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>Front-end em React - Ada Tech (2024)</p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>Git e Versionamento - Ada Tech (2024)</p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>Intensivão de JavaScript - Hashtag Programação (2024)</p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>NLW Expert Trilha de Java - Rocketseat (2024)</p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>
              Linguagem de Programação Python Básico - Fundação Bradesco (2024)
            </p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>
              Crie um site simples usando HTML, CSS e JavaScript - Fundação
              Bradesco (2024)
            </p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>Fundamentos de Programação - TIC em Trilhas / PUCRS (2024)</p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>Introdução à Plataforma Java - DIO (2024)</p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>Programador Front-end: Introdução - DevMedia (2023)</p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>
              Introdução ao Sistema Operacional Linux - Prof. Diego Mariano
              (2022)
            </p>
          </div>

          <div className={styleCertifications.detalhes}>
            <p>
              Curso Técnico de Informática - Centro de Educação Profissional de
              Caxambu (2018)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default certifications;

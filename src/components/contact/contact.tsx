import styleContato from './contact.module.css';
import contato from '../../assets/contato.png';

const contact = () => {
  return (
    <div className='container' id={styleContato.caixa}>
      <div className='row'>
        <div className='col-md-2'>
          <img
            className={styleContato.imgContato}
            src={contato}
            alt='Imagem de um ícone de contatos'
          />
        </div>
        <div className='col-md-10'>
          <h2>Entre em Contato</h2>
          <p>
            Se você busca um profissional qualificado e apaixonado por
            desenvolvimento para colaborar em projetos, envie uma mensagem:
          </p>
          <div className={styleContato.card}>
            <i className='bi bi-whatsapp'></i>
            <a
              target='_blank'
              href='+55 24 98132-4182https://api.whatsapp.com/send?phone=5524981324182'
            >
              +55 24 98132-4182
            </a>
          </div>

          <div className={styleContato.card}>
            <i className='bi bi-envelope-at-fill'></i>
            <a target='_blank' href='mailto:henriquejunqueira94@gmail.com'>
              henriquejunqueira94@gmail.com
            </a>
          </div>

          <div className={styleContato.card}>
            <i className='bi bi-linkedin'></i>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/henrique-abreu-junqueira/'
            >
              henrique-abreu-junqueira
            </a>
          </div>

          <div className={styleContato.card}>
            <i className='bi bi-github'></i>
            <a target='_blank' href='https://github.com/henriquejunqueira'>
              henriquejunqueira
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

import { Link } from "react-scroll"

const Footer = () => {

    return (

        <div className="footer">
    
        <div className="input-group">
          
            <div className="service__content--card">
                <div className="box">
                    <div className="text">Suscribete a mis Actualizaciones</div>
                  
                </div>
               <a className="link__home" href="https://www.getrevue.co/profile/gerardojao?via=twitter-card&client=DesktopWeb&element=publication-card"
                target="_blank" title="Suscríbete al boletín de 💻 PROGRAMAR después de los 40's💻"rel="noopener noreferrer">Suscribete Ahora!</a>    
            </div>
         
        </div>
        
      <div className="rrss">
            <a title="Twitter" href="https://twitter.com/gerardojao"
            target="_blank">
                <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>

            <a title="LinkedIn" href="https://linkedin.com/in/gerardojao" target="_blank">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a title="Youtube" href="https://www.youtube.com/user/gerardojavierao/videos" target="_blank">
                <i className="fab fa-youtube" aria-hidden="true"></i>
            </a>
           
            <a title="Instagram" href="https://www.instagram.com/gerardojao_dev/"
                target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
        </div>  

        <div className="copyright">Created by  <a target="_blank" href="https://gerardojao.ga">Gerardo Arrieta</a> </div>

       
    </div>

    );
};

export default Footer;
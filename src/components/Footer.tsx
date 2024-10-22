import footerLogo from '../assets/images/logo-footer.png';
import facebookLogo from '../assets/images/facebook-icon.svg';
import instagramLogo from '../assets/images/instagram-icon.svg';
import linkedinLogo from '../assets/images/linkedin-icon.svg';
import xLogo from '../assets/images/x-icon.svg';
import youtubeLogo from '../assets/images/youtube-icon.svg';

const Footer = () => {
  return (
    <footer className="bg-blue-600 md:h-[290px] text-white md:px-40 py-10 flex flex-col justify-center text-center items-center">
      <img
        src={footerLogo}
        alt="Ícone de rodapé da SoftOwn"
        className="mb-4 w-1/3 lg:h-1/2 lg:w-auto"
      />
      <p className="mb-6 text-xl">
        <strong className="font-extrabold">© SoftOwn 2024.</strong> Todos os direitos reservados.
      </p>
      {/* Social Media */}
      <div className="flex flex-row justify-center space-x-6">
        {/* Facebook */}
        <a href="#facebook" aria-label="Facebook da SoftOwn">
          <img
            src={facebookLogo}
            alt="Ícone do Facebook"
            className="hover:opacity-80 transition-opacity"
          />
        </a>
        {/* Instagram */}
        <a href="#instagram" aria-label="Instagram da SoftOwn">
          <img
            src={instagramLogo}
            alt="Ícone do Instagram"
            className="hover:opacity-80 transition-opacity"
          />
        </a>
        {/* LinkedIn */}
        <a href="#linkedin" aria-label="LinkedIn da SoftOwn">
          <img
            src={linkedinLogo}
            alt="Ícone do LinkedIn"
            className="hover:opacity-80 transition-opacity"
          />
        </a>
        {/* X (Twitter) */}
        <a href="#x" aria-label="X da SoftOwn">
          <img src={xLogo} alt="Ícone do X" className="hover:opacity-80 transition-opacity" />
        </a>
        {/* YouTube */}
        <a href="#youtube" aria-label="YouTube da SoftOwn">
          <img
            src={youtubeLogo}
            alt="Ícone do YouTube"
            className="hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

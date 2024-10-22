import Button from './Button';
import Section from './Section';
import Text from './Text';

import whatsAppIcon from '../assets/images/whatsapp-icon.svg';

type WhatsAppBannerProps = {
  backgroundTint?: 'bg-white' | 'bg-secondary' | string;
  text: string | null;
  subText: string | null;
};

const WhatsAppBanner: React.FC<WhatsAppBannerProps> = ({ backgroundTint, text, subText }) => {
  return (
    <Section backgroundTint={backgroundTint} style="flex items-center justify-center" height={350}>
      <div className="flex flex-col items-center">
        <Text.H1 style="text-blue-600">{text}</Text.H1>
        <Text.P style="text-gray-600 text-lg py-2 font-light">{subText}</Text.P>
        <Button theme="tertiary" style="font-semibold flex items-center my-4">
          Fale com nosso time de vendas
          <img
            className="inline px-1 pb-1 align-middle"
            src={whatsAppIcon}
            alt="Ícone do WhatsApp"
          />
        </Button>
      </div>
    </Section>
  );
};

export default WhatsAppBanner;

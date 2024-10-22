import Text from '../../components/Text';
import BulletPoint from '../../components/BulletPoint';
import whiteDecorationImage from '../../assets/images/fifth-decoration.png';
import illustration from '../../assets/images/illustration.png';

const IllustrationSection: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0 lg:pl-24 lg:h-[500px] bg-blue-600">
      {/* Left Side - Text Section */}
      <div className="lg:w-1/3 pl-10">
        {/* Title */}
        <Text.P style="text-white !font-bold py-2 text-lg !text-left">
          Elimine todos papéis do seu escritório.
        </Text.P>

        {/* Bullet Points */}
        <BulletPoint
          color="white"
          title="Agilidade nos processos:"
          description="Como a digitalização acelera a busca e o compartilhamento de informações."
        />
        <BulletPoint
          color="white"
          title="Automatização de tarefas:"
          description="Redução do trabalho manual com a digitalização de documentos e assinatura eletrônica."
        />
        <BulletPoint
          color="white"
          title="Melhoria na colaboração:"
          description="Facilidade para equipes trabalharem em conjunto em documentos digitais, independentemente da localização."
        />
      </div>

      {/* Right Side - Images Section */}
      <div className="hidden lg:flex lg:w-2/3 relative justify-center lg:h-full items-center">
        {/* White Decoration - Positioned Below and Full Height */}
        <img
          src={whiteDecorationImage}
          alt="White Decoration"
          className="absolute top-0 right-0 h-full z-0 object-cover"
        />
        {/* Illustration Image - Vertically Centered */}
        <img src={illustration} alt="Illustration" className="z-10 object-center -ml-32" />
      </div>
    </section>
  );
};

export default IllustrationSection;

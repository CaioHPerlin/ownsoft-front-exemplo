import Section from '../../components/Section';
import Text from '../../components/Text';
import BulletPoint from '../../components/BulletPoint';
import secondScreenshot from '../../assets/images/second.png';
import Image from '../../components/Image';

const SchedulingSection: React.FC = () => {
  return (
    <Section
      dotPlacement={['bl']}
      backgroundTint="bg-secondary"
      blueDots={true}
      height={600}
      style="flex items-center"
    >
      <div className="flex flex-col md:flex-row gap-5 md:flex-nowrap">
        <Image className="md:w-3/5" src={secondScreenshot} alt="Captura de tela do agendamento" />
        <div className="md:w-2/5 pt-4">
          <Text.P style="text-blue-500 !font-bold py-2 text-lg !text-left">
            Agenda e prontuário de seus pacientes.
          </Text.P>
          <p className="text-left text-black font-light text-sm mb-2">
            Explica pro Product Owner que o módulo de recursão paralela corrigiu o bug do JSON
            compilado a partir de proto-buffers.
          </p>
          <BulletPoint
            title="Transparência total:"
            description="A equipe de suporte precisa saber que a compilação final do programa complexificou o merge no parse retroativo do DOM.."
          />
          <BulletPoint
            title="Colaboração eficiente:"
            description="Dado o fluxo de dados atual, o módulo de recursão paralela causou a race condition do polimorfismo aplicado nas classes.."
          />
        </div>
      </div>
    </Section>
  );
};

export default SchedulingSection;

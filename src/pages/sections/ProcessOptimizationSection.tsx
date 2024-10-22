import Section from '../../components/Section';
import Text from '../../components/Text';
import BulletPoint from '../../components/BulletPoint';
import secondScreenshot from '../../assets/images/second.png';
import Image from '../../components/Image';

const ProcessOtimizationSection: React.FC = () => {
  return (
    <Section
      dotPlacement={['bl']}
      backgroundTint="bg-secondary"
      blueDots={true}
      height={600}
      style="flex items-center"
    >
      <div className="flex flex-col md:flex-row gap-5 md:flex-nowrap">
        <Image
          className="md:w-3/5"
          src={secondScreenshot}
          alt="Captura de tela da otimização de processos"
        />
        <div className="md:w-2/5 pt-4">
          <Text.P style="text-blue-500 !font-bold py-2 text-lg !text-left">
            Foco na otimização de processos
          </Text.P>
          <BulletPoint
            title="Organize seus casos:"
            description="Tenha todos os seus processos em um só lugar, com informações completas e atualizadas."
          />
          <BulletPoint
            title="Automatize tarefas:"
            description="Elimine tarefas repetitivas e ganhe mais tempo para atender seus clientes."
          />
          <BulletPoint
            title="Melhore a comunicação:"
            description="Facilite a comunicação com seus clientes e equipe, agilizando o processo."
          />
          <BulletPoint
            title="Gere relatórios personalizados:"
            description="Tenha insights valiosos sobre o desempenho do seu escritório."
          />
        </div>
      </div>
    </Section>
  );
};

export default ProcessOtimizationSection;

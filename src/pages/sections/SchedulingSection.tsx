import Section from '../../components/Section';
import Text from '../../components/Text';
import BulletPoint from '../../components/BulletPoint';
import secondScreenshot from '../../assets/images/third.png';

const SchedulingSection: React.FC = () => {
  return (
    <Section
      dotPlacement={['bl']}
      backgroundTint="bg-secondary"
      blueDots={true}
      height={600}
      verticalAlign="items-center"
    >
      <div className="flex gap-5 flex-nowrap">
        <img className="w-3/5" src={secondScreenshot} alt="Captura de tela do manejo de tarefas" />
        <div className="w-2/5 pt-4">
          <Text.P style="text-blue-500 !font-bold py-2 text-lg !text-left">
            Agenda e prontuário de seus pacientes.
          </Text.P>
          <p className="!text-left text-black font-light text-sm">
            Explica pro Product Owner que o módulo de recursão paralela corrigiu o bug do JSON
            compilado a partir de proto-buffers.
          </p>
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

export default SchedulingSection;

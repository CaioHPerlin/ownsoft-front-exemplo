import Section from '../../components/Section';
import Text from '../../components/Text';
import BulletPoint from '../../components/BulletPoint';
import thirdScreenshot from '../../assets/images/third.png';

const DataSecuritySection: React.FC = () => {
  return (
    <Section dotPlacement={['tr']} blueDots={true} height={600} verticalAlign="items-center">
      <div className="flex gap-5 flex-nowrap">
        <div className="w-2/5 pt-4">
          <Text.P style="text-blue-500 !font-bold py-2 text-lg !text-left">
            Proteja seus dados e garanta a conformidade com as normas jurídicas.
          </Text.P>
          <BulletPoint
            title="Segurança de dados:"
            description="Proteja os dados dos seus clientes com as mais modernas tecnologias de segurança."
          />
          <BulletPoint
            title="Conformidade legal:"
            description="Garanta que seu escritório esteja em conformidade com as normas e regulamentações."
          />
          <BulletPoint
            title="Auditoria:"
            description="Gere relatórios detalhados para acompanhar o cumprimento das normas e regulamentações."
          />
          <BulletPoint
            title="Backup:"
            description="Tenha a garantia de que seus dados estão seguros com nosso sistema de backup."
          />
        </div>
        <img className="w-3/5" src={thirdScreenshot} alt="Captura de tela do manejo de tarefas" />
      </div>
    </Section>
  );
};

export default DataSecuritySection;

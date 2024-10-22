import Button from './Button';
import checkIcon from '../assets/images/check-icon.svg';
import starIcon from '../assets/images/star-icon.svg';
import Plan from '../types/Plan';

type PlanCardProps = {
  plan: Plan;
  onClick: () => void;
  selected?: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({ plan, onClick, selected }) => {
  return (
    <div className="relative flex flex-col justify-center text-center border-gray-200 border-2 p-4 md:py-8 rounded-lg">
      {selected && (
        <div className="absolute w-max -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 font-light py-1 px-4 rounded text-sm">
          <img src={starIcon} alt="Ícone de estrela" className="inline mr-1" />
          Plano mais contratado
        </div>
      )}
      <h1 className="text-blue-500 text-lg font-semibold">{plan.title}</h1>
      <h2 className="text-sm font-light text-black">{plan.description}</h2>
      <div className="flex-1 justify-center items-center text-black py-6">
        <strong className="font-extrabold text-5xl text-blue-500">R${plan.cost}</strong> /mês
      </div>
      <div className="flex flex-col items-start text-black px-4 pb-8">
        {plan.bulletPoints &&
          plan.bulletPoints.map((bp, index) => (
            <div key={index} className="flex items-center">
              <img
                src={checkIcon}
                style={{
                  filter:
                    'invert(56%) sepia(97%) saturate(340%) hue-rotate(117deg) brightness(90%) contrast(87%)',
                }}
                alt="Ícone de check"
              />
              <span className="ml-2 text-left text-sm text-gray-600">{bp}</span>
            </div>
          ))}
      </div>
      <Button onClick={onClick} theme="tertiary">
        Selecionar este plano
      </Button>
    </div>
  );
};

export default PlanCard;

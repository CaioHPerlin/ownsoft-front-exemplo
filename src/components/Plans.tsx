import PlanCard from './PlanCard';
import Plan from '../types/Plan';

const plans: Plan[] = [
  {
    title: 'Inicial',
    description: `Lorem ipsum dolor sit amet,
consectetur adipiscing praesent.`,
    cost: 30,
    bulletPoints: [
      'Lorem ipsum sit consectetur.',
      'Praesent luctus facilisis.',
      'Aenean lobortis velit a suscipit.',
      'Nulla consequat sem sit amet.',
    ],
  },
  {
    title: 'Intermediário',
    description: `Lorem ipsum dolor sit amet,
consectetur adipiscing praesent.`,
    cost: 100,
    bulletPoints: [
      'Lorem ipsum sit consectetur.',
      'Praesent luctus facilisis.',
      'Aenean lobortis velit a suscipit.',
      'Nulla consequat sem sit amet.',
    ],
  },
  {
    title: 'Completo',
    description: `Lorem ipsum dolor sit amet,
consectetur adipiscing praesent.`,
    cost: 300,
    bulletPoints: [
      'Lorem ipsum sit consectetur.',
      'Praesent luctus facilisis.',
      'Aenean lobortis velit a suscipit.',
      'Nulla consequat sem sit amet.',
    ],
  },
];

const Plans = () => {
  return (
    <main className="flex w-full items-center justify-between pt-8 gap-4">
      <PlanCard plan={plans[0]} onClick={() => console.log('plano', plans[0].title)} />
      <PlanCard plan={plans[1]} onClick={() => console.log('plano', plans[0].title)} selected />
      <PlanCard plan={plans[2]} onClick={() => console.log('plano', plans[0].title)} />
    </main>
  );
};

export default Plans;

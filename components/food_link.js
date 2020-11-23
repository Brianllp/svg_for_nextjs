import Link from 'next/link';

const FoodLink = props => (
  <li>
    <Link href="/food/[id]" as={`/food/${props.food.id}`}>
      <a>{props.food.title}</a>
    </Link>
  </li>
);

export default FoodLink

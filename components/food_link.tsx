import Link from 'next/link';

const FoodLink = props => (
  <Link href="/food/[id]" as={`/food/${props.food.id}`}>
    <a>{props.food.title}</a>
  </Link>
);

export default FoodLink

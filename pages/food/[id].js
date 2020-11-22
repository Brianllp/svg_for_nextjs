import { useRouter } from 'next/router';
import foods_data from '../../database/foods';


const renderFoodName = (id) => {
  for(const target of foods_data) {
    if (target.id == id )
      return (
        target.title
      );
  }
};

const Content = () => {
  const router = useRouter();

  return (
    <>
      <h1>{renderFoodName(router.query.id)}</h1>
      <p>ryouri</p>
    </>
  );
};

const Foods = () => (
  <Content />
);

export default Foods;
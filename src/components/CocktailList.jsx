import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
  console.log(drinks);
  return (
    <div>
      {drinks.map((drink) => {
        return <CocktailCard key={drink.idDrink} />;
      })}
    </div>
  );
};

export default CocktailList;

import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <Wrapper>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.section`
  background-color: peachpuff;
`;

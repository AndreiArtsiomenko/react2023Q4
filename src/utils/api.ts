import { LoaderFunction } from 'react-router-dom';

const getPeople = async (search: string) => {
  const url = 'https://swapi.dev/api/people/?search=';
  const response = await fetch(`${url}${search}&page=${1}`);
  const data = await response.json();
  return data.results;
};

const getPerson: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://swapi.dev/api/people/${params.id}`);
  const data = await response.json();
  return data;
};

export { getPeople, getPerson };

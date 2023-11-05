import { LoaderFunction } from 'react-router-dom';

const getPeople = async (search?: string, page: string = '1') => {
  const url = 'https://swapi.dev/api/people/?search=';
  const response = await fetch(`${url}${search}&page=${page}`);
  const data = await response.json();
  return data;
};

const getPerson: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://swapi.dev/api/people/${params.id}`);
  const data = await response.json();
  return data;
};

export { getPeople, getPerson };

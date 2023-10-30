export default async function getData(search: string) {
  const url = 'https://swapi.dev/api/people/?search=';
  const response = await fetch(`${url}${search}&page=${1}`);
  const data = await response.json();
  return data.results;
}

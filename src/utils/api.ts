export default async function getData(search: string) {
  const url = 'https://swapi.dev/api/people/?search=';
  const searchValue = search.trim();
  const response = await fetch(`${url}${searchValue}&page=${1}`);
  const data = await response.json();
  return data.results;
}

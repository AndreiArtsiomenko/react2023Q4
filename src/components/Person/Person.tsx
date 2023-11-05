import { useLoaderData, Link } from 'react-router-dom';
import { PeopleType } from '../../types/types';
import style from './Person.module.css';

export default function Person() {
  const person = useLoaderData() as PeopleType;
  return (
    <div className={style.container}>
      <div className={style.container__inform}>
        <h2>{person.name}</h2>
        <p>Birth year: {person.birth_year}</p>
        <p>Gender: {person.gender}</p>
        <p>Mass: {person.mass}kg</p>
        <p>Height: {person.height}</p>
        <p>Eye color: {person.eye_color}</p>
      </div>
      <Link to="/">
        <button>Close</button>
      </Link>
    </div>
  );
}

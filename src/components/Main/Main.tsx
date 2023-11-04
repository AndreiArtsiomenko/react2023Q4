import style from './Main.module.css';
import { PeopleType } from '../../types/types';
import CardPerson from '../CardPerson/CardPerson';

export default function Main({ people }: { people: PeopleType[] }) {
  return (
    <main className={style.main}>
      {people.length ? (
        <div className={style.people}>
          {people.map((person) => (
            <CardPerson person={person} key={person.name} />
          ))}
        </div>
      ) : (
        <h2>Not Found</h2>
      )}
    </main>
  );
}

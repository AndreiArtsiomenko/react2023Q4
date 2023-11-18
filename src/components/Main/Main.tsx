import style from './Main.module.css';
import { Link, Outlet } from 'react-router-dom';
import { PeopleType } from '../../types/types';
import CardPerson from '../CardPerson/CardPerson';
import Pagination from '../Pagination/Pagination';
import { useContext } from 'react';
import { Context } from '../../Context';

interface Props {
  setPeople: React.Dispatch<React.SetStateAction<PeopleType[]>>;
  countPeople: string;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Main({ setPeople, countPeople, currentPage, setCurrentPage }: Props) {
  const { people } = useContext(Context);
  return (
    <main className={style.main}>
      {people.length ? (
        <div className={style.container}>
          <div className={style.people}>
            {people.map((person) => {
              const id = person.url ? person.url.split('/')[5] : '';
              return (
                <Link to={`people/${id.toString()}`} key={person.name}>
                  <CardPerson person={person} />
                </Link>
              );
            })}
          </div>
          <Pagination
            countPeople={countPeople}
            setPeople={setPeople}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <h2>Not Found</h2>
      )}
      <div className={style.details}>
        <Outlet />
      </div>
    </main>
  );
}

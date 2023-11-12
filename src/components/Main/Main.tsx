import style from './Main.module.css';
import { Link, Outlet, useNavigation, useOutletContext } from 'react-router-dom';
import { PeopleType } from '../../types/types';
import CardPerson from '../CardPerson/CardPerson';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';

type OutletParams = [
  PeopleType[],
  React.Dispatch<React.SetStateAction<PeopleType[]>>,
  string,
  string,
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

export default function Main() {
  const [people, setPeople, countPeople, valueSearch, currentPage, setCurrentPage] =
    useOutletContext<OutletParams>();
  const navigation = useNavigation();
  return (
    <main className={style.main}>
      {people.length ? (
        <div className={style.container}>
          <div className={style.people}>
            {people.map((person) => {
              const id = person.url.split('/')[5];
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
            valueSearch={valueSearch}
          />
        </div>
      ) : (
        <h2>Not Found</h2>
      )}
      <div className={style.details}>
        {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      </div>
    </main>
  );
}

import { getPeople } from '../../utils/api';
import { PeopleType } from '../../types/types';
import style from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

interface Props {
  countPeople: string;
  setPeople: React.Dispatch<React.SetStateAction<PeopleType[]>>;
}

function Pagination({ countPeople, setPeople }: Props) {
  const sumPages = Math.ceil(+countPeople / 10);
  const arrPage = [];
  for (let i = 1; i <= sumPages; i++) {
    arrPage.push(`${i}`);
  }

  const handleClick = (numPage: string) => {
    getPeople('', numPage).then((res) => {
      setPeople(res.results);
    });
  };

  return (
    <div className={style.container}>
      {arrPage.map((page) => (
        <NavLink to="/" key={page} onClick={() => handleClick(page)}>
          {page}
        </NavLink>
      ))}
    </div>
  );
}

export default Pagination;

import { getPeople } from '../../utils/api';
import { PeopleType } from '../../types/types';
import style from './Pagination.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';

interface Props {
  countPeople: string;
  setPeople: React.Dispatch<React.SetStateAction<PeopleType[]>>;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

function Pagination({ countPeople, setPeople, currentPage, setCurrentPage }: Props) {
  const { valueSearch } = useContext(Context);
  const sumPages = Math.ceil(+countPeople / 10);
  const arrPage = [];

  for (let i = 1; i <= sumPages; i++) {
    arrPage.push(`${i}`);
  }

  const handleClick = (param: string) => {
    getPeople(valueSearch, param).then((res) => {
      setCurrentPage(param);
      setPeople(res.results);
    });
  };

  return (
    <div className={style.container}>
      {arrPage.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => handleClick(pageNum)}
          className={pageNum === currentPage ? 'active' : ''}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

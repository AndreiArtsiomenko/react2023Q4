import { Link } from 'react-router-dom';
import style from './App.module.css';

function App() {
  return (
    <div className={style.container}>
      <nav>
        <ul>
          <li>
            <Link to={`first`}>One form</Link>
          </li>
          <li>
            <Link to={`second`}>Two form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

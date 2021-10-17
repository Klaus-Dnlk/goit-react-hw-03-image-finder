import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from '../Loader/loader.module.css';

const Oval = () => (
  <div className={s.Loader}>
    <Loader type="Oval" color="#00BFFF" height={80} width={80} />
  </div>
);

export default Oval;

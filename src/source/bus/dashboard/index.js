import { Link } from 'react-router-dom';
import cx from 'classnames';
import Styles from '../../components/fitness/styles/index.module.scss';

import { Fitness } from '../../components/fitness';
import { book } from './../../navigation/book';


export const Dashboard = () => {
  return (
    <Fitness>
      
      <div className={Styles.navigation}>
        <h1>Как у тебя проходит день?</h1>

        <div className={Styles.items}>
        
          <Link to={book.breakfast} className={cx([Styles.link, Styles.category1])}>
            <span className={Styles.title}>Добавить завтрак</span>
            <span className={Styles.description}>Хороший завтрак очень важен</span>
          </Link>

          <Link to={book.lunch} className={cx([Styles.link, Styles.category2])}>
            <span className={Styles.title}>Добавить обед</span>
            <span className={Styles.description}>Успешные люди обедают</span>
          </Link>

          <Link to={book.dinner} className={cx([Styles.link, Styles.category3])}>
            <span className={Styles.title}>Добавить ужин</span>
            <span className={Styles.description}>Лучше не ужинать вообще</span>
          </Link>

          <Link to={book.steps} className={cx([Styles.link, Styles.category4])}>
            <span className={Styles.title}>Добавить активность</span>
            <span className={Styles.description}>Пешие прогулки это минимум</span>
          </Link>

          <Link to={book.fruits} className={cx([Styles.link, Styles.category5])}>
            <span className={Styles.title}>Добавить фрукты</span>
            <span className={Styles.description}>Фрукты подымают настроение</span>
          </Link>

          <Link to={book.vegetables} className={cx([Styles.link, Styles.category6])}>
            <span className={Styles.title}>Добавить овощи</span>
            <span className={Styles.description}>Овощи очень важны</span>
          </Link>

          <Link to={book.junk} className={cx([Styles.link, Styles.category7])}>
            <span className={Styles.title}>Добавить фастфуд</span>
            <span className={Styles.description}>Эта еда очень вредная</span>
          </Link>

          <Link to={book.water} className={cx([Styles.link, Styles.category8])}>
            <span className={Styles.title}>Добавить воду</span>
            <span className={Styles.description}>Вода это жизнь</span>
          </Link>

          <Link to={book.sleep} className={cx([Styles.link, Styles.category9])}>
            <span className={Styles.title}>Добавить сон</span>
            <span className={Styles.description}>Спать нужно всем</span>
          </Link>

          <Link to={book.coffee} className={cx([Styles.link, Styles.category10])}>
            <span className={Styles.title}>Добавить кофе</span>
            <span className={Styles.description}>Можно и без него</span>
          </Link>
        
        </div>
      </div>

    </Fitness>
  )
};

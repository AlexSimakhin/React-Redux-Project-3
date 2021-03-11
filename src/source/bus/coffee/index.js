import cx from 'classnames';
import Styles from './styles/index.module.scss';

import { Fitness } from '../../components/fitness';
import { useSelect } from './hooks/useSelect';
import { useGetRecordBreakfastFetch } from './hooks/useGetRecordBreakfastFetch';
import { createRecordReq } from './../../scripts/createRecordReq';
import { updateRecordReq } from './../../scripts/updateRecordReq';

export const Coffee = () => {
  const { currentSelect, setSelect } = useSelect();
  const { data } = useGetRecordBreakfastFetch(setSelect);
  
  const onSubmit = () => {
    console.log(data.hash, currentSelect);

    if (data.hash === 0) {
      createRecordReq('coffee', currentSelect);
    } else {
      updateRecordReq('coffee', currentSelect, data.hash);
    }
  };

  return (
    <Fitness>
      
      <div className={Styles.question}>
        <h1>Ты сегодня пил кофе?</h1>
        <div className={Styles.answers}>
          
          <span
            className={cx([Styles.answer, currentSelect === 'none' ? Styles.selected : ''])}
            onClick={() => setSelect('none')}
          >
            Я не пил совсем
          </span>

          <span
            className={cx([Styles.answer, currentSelect === 'light' ? Styles.selected : ''])}
            onClick={() => setSelect('light')}
          >
            Выпил 1 стакан
          </span>

          <span
            className={cx([Styles.answer, currentSelect === 'heavy' ? Styles.selected : ''])}
            onClick={() => setSelect('heavy')}
          >
            Выпил 2 или больше стаканов
          </span>

        </div>
        <button className={Styles.sendAnswer} onClick={onSubmit}>Ответить</button>
      </div>

    </Fitness>
  )
};

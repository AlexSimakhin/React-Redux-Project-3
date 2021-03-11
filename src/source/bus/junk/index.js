import cx from 'classnames';
import Styles from './styles/index.module.scss';

import { Fitness } from '../../components/fitness';
import { useSelect } from './hooks/useSelect';
import { useGetRecordBreakfastFetch } from './hooks/useGetRecordBreakfastFetch';
import { createRecordReq } from './../../scripts/createRecordReq';
import { updateRecordReq } from './../../scripts/updateRecordReq';

export const Junk = () => {
  const { currentSelect, setSelect } = useSelect(null);
  const { data } = useGetRecordBreakfastFetch(setSelect);
  
  const onSubmit = () => {
    console.log(data.hash, currentSelect);

    if (data.hash === 0) {
      createRecordReq('fruits', currentSelect);
    } else {
      updateRecordReq('fruits', currentSelect, data.hash);
    }
  };

  return (
    <Fitness>
      
      <div className={Styles.question}>
        <h1>Ты сегодня кушал Фастфуд?</h1>
        <div className={Styles.answers}>
          
          <span
            className={cx([Styles.answer, currentSelect === 'none' ? Styles.selected : ''])}
            onClick={() => setSelect('none')}
          >
            Да
          </span>

          <span
            className={cx([Styles.answer, currentSelect === 'light' ? Styles.selected : ''])}
            onClick={() => setSelect('light')}
          >
            Нет
          </span>

        </div>
        <button className={Styles.sendAnswer} onClick={onSubmit}>Ответить</button>
      </div>

    </Fitness>
  )
};

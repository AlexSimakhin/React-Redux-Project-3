import cx from 'classnames';
import Styles from './styles/index.module.scss';

import { Fitness } from '../../components/fitness';
import { useSelect } from './hooks/useSelect';
import { useGetRecordBreakfastFetch } from './hooks/useGetRecordBreakfastFetch';
import { createRecordReq } from './../../scripts/createRecordReq';
import { updateRecordReq } from './../../scripts/updateRecordReq';

export const Breakfast = () => {
  const { data, isFetching } = useGetRecordBreakfastFetch();

  const { currentSelect, setSelect } = useSelect(data);
  
  const onSubmit = () => {
    if (data.hash === 0) {
      createRecordReq('breakfast', { 'value': currentSelect });
    } else {
      updateRecordReq('breakfast', { 'value': currentSelect }, data.hash);
      setSelect(currentSelect);
    }
  };

  return (
    <Fitness>
      
      {!isFetching && currentSelect &&
        <div className={Styles.question}>
          <h1>Ты сегодня завтракал?</h1>
          <div className={Styles.answers}>
          
            <span
              className={cx([Styles.answer, currentSelect === 'none' ? Styles.selected : ''])}
              onClick={() => setSelect('none')}
            >
              Я не завтракал
          </span>

            <span
              className={cx([Styles.answer, currentSelect === 'light' ? Styles.selected : ''])}
              onClick={() => setSelect('light')}
            >
              У меня был легкий завтрак
          </span>

            <span
              className={cx([Styles.answer, currentSelect === 'heavy' ? Styles.selected : ''])}
              onClick={() => setSelect('heavy')}
            >
              Я очень плотно покушал
          </span>

          </div>
          <button className={Styles.sendAnswer} onClick={onSubmit}>Ответить</button>
        </div>
      }

    </Fitness>
  )
};

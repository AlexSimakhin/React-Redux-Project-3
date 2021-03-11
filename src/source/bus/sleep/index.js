import Styles from './styles/index.module.scss';

import { Fitness } from '../../components/fitness';
// import { useSelect } from './hooks/useSelect';
// import { useGetRecordBreakfastFetch } from './hooks/useGetRecordBreakfastFetch';
// import { createRecordReq } from './../../scripts/createRecordReq';
// import { updateRecordReq } from './../../scripts/updateRecordReq';

export const Sleep = () => {
  // const { currentSelect, setSelect } = useSelect();
  // const { data } = useGetRecordBreakfastFetch(setSelect);
  
  const onSubmit = () => {
    // console.log(data.hash, currentSelect);

    // if (data.hash === 0) {
    //   createRecordReq('steps', currentSelect);
    // } else {
    //   updateRecordReq('steps', currentSelect, data.hash);
    // }
  };

  return (
    <Fitness>
      
      <div className={Styles.navigation}>
        
        <div className={Styles.question}>
          <h1>Сколько часов ты сегодня спал?</h1>
          <div className={Styles.inputRow}>
            <input type="number" placeholder='Введите свое число' />
          </div>
          <button className={Styles.sendAnswer} onClick={onSubmit}>Ответить</button>
        </div>
      </div>

    </Fitness>
  )
};

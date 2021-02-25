import cx from 'classnames';
import Styles from './styles/index.module.scss';

import { Fitness } from '../../components/fitness';
// import { useSelect } from './hooks/useSelect';
// import { useGetRecordBreakfastFetch } from './hooks/useGetRecordBreakfastFetch';
// import { createRecordReq } from './../../scripts/createRecordReq';
// import { updateRecordReq } from './../../scripts/updateRecordReq';

export const Water = () => {
  // const { currentSelect, setSelect } = useSelect();
  // const { data } = useGetRecordBreakfastFetch(setSelect);
  
  const onSubmit = () => {
    // console.log(data.hash, currentSelect);

    // if (data.hash === 0) {
    //   createRecordReq('water', currentSelect);
    // } else {
    //   updateRecordReq('water', currentSelect, data.hash);
    // }
  };

  return (
    <Fitness>
      
      <div className={Styles.navigation}>
        
        <div className={Styles.question}>
          <h1>Сколько воды ты сегодня выпил?</h1>
          
          <div className={Styles.elements}>
            <button className={cx([Styles.element, Styles.selected])} />
            <button className={cx([Styles.element, Styles.selected])} />
            <button className={cx([Styles.element, Styles.selected])} />
            <button className={cx([Styles.element, Styles.selected])} />
            <button className={Styles.element} />
            <button className={Styles.element} />
            <button className={Styles.element} />
            <button className={Styles.element} />
            <button className={Styles.element} />
            <span className={Styles.size}>1000 мл</span>
          </div>

          <button className={Styles.sendAnswer} onClick={onSubmit}>Ответить</button>
        </div>
      </div>

    </Fitness>
  )
};

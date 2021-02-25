import cx from 'classnames';
import Styles from '../fitness/styles/index.module.scss';
import { useProgressBar } from './hooks/useProgressBar';
import { useValueProgressBarFetch } from './hooks/useValueProgressBarFetch';

export const Widget = () => {
  const { currentProgressBarValue, setProgressBarValue } = useProgressBar();
  
  useValueProgressBarFetch(setProgressBarValue);

  return (
    <div className={Styles.widget}>
      <span className={Styles.title}>Life Score</span>
      
      <div className={Styles.module}>
        <span className={Styles.score} style={{ bottom: currentProgressBarValue }}>{currentProgressBarValue}</span>
        <div className={Styles.progress}>
          <div className={Styles.fill} style={{ height: currentProgressBarValue }}></div>
        </div>

        <span className={cx([Styles.label, Styles.level1])}>Off Track</span>
        <span className={cx([Styles.label, Styles.level2])}>Imbalanced</span>
        <span className={cx([Styles.label, Styles.level3])}>Balanced</span>
        <span className={cx([Styles.label, Styles.level4])}>Healthy</span>
        <span className={cx([Styles.label, Styles.level5])}>Perfect Fit</span>
      </div>
    </div>
  );
};
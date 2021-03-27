import cx from 'classnames';
import Styles from '../fitness/styles/index.module.scss';
import { useValueProgressBarFetch } from './hooks/useValueProgressBarFetch';
import { useCurrentProgressBarValue } from './hooks/useCurrentProgressBarValue';


export const Widget = () => {
  const { currentProgressBarValue, _setProgressBarValue } = useCurrentProgressBarValue();
  useValueProgressBarFetch(_setProgressBarValue);

  return (
    <div className={Styles.widget}>
      <span className={Styles.title}>Life Score</span>
      
      <div className={Styles.module}>
        <span className={Styles.score} style={{ bottom: `${currentProgressBarValue / 200 * 100}%` }}>{currentProgressBarValue / 2}</span>
        <div className={Styles.progress}>
          <div className={Styles.fill} style={{ height: `${currentProgressBarValue / 200 * 100}%` }}></div>
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
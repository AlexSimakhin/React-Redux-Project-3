import Styles from './styles/index.module.scss';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar/index';
import { Widget } from '../../components/widget';

export const Fitness = ({children}) => {
  return (
    <section className={Styles.dashboard}>
      
      <Sidebar styles={Styles} />

      <div className={Styles.wrap}>
        
        <Header styles={Styles}/>

        <div className={Styles.content}>
          
          {children}

          <Widget />
          
        </div>

      </div>

    </section>
  )
};

import { LogoutButton } from '../../features/authentication/containers/LogoutButton';
import { Counter } from '../../features/counter/containers/Counter';
import { CounterHistory } from '../../features/counter/containers/CounterHistory';
import { Header } from '../../shared/components/Header';
import styles from './CounterPage.module.css';

export interface CounterPageProps {}

export const CounterPage: React.FC<CounterPageProps> = () => {
  return (
    <>
      <Header>
        <LogoutButton />
      </Header>
      <main className={styles.main}>
        <div>
          <Counter />
        </div>
        <div>
          <CounterHistory />
        </div>
      </main>
    </>
  );
};

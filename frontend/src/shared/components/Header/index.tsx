import styles from './Header.module.css';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }): JSX.Element => {
  return <header className={styles.header}>{children}</header>;
};

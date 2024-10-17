import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style['header']}>
      <p>React 💙 Redux</p>
    </header>
  );
}
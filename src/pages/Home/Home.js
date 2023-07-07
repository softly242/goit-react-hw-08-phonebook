import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the phonebook</h1>
    </div>
  );
};
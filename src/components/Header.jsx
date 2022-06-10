import styles from './Header.module.css';

export function Header() {
    return (
        <header>
            <h1 className={styles.title}>Movies</h1>
            <p className={styles.paragraph}>All the information of movies you want in the same place</p>
        </header>
    )
}

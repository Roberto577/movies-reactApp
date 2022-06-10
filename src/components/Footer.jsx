import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
    return (
        <footer>
                <p className={styles.pFooter}>Hecho por <a href={'https://github.com/Roberto577'}>Roberto Valenzuela</a></p>
                <a href={'https://github.com/Roberto577'}><FaGithub className={styles.iconGithub} size={60}/></a>
        </footer>
    )
}

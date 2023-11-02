import igniteLogo from "../assets/todo.svg";

import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="TO DO" />
        </header>
    )
}
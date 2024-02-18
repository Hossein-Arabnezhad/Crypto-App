import React from 'react';

import styles from "./Layout.module.css"; 

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Crypto App</h1>
                <p>React.js</p>
            </header>
            {children}
            <footer className={styles.footer}>
                Developed by Hossein
            </footer>
        </>
    );
};

export default Layout;
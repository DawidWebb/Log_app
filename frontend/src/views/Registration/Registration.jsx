import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Registration.module.scss';

import useStateWithLabel from '../../helpers/UseStateWhitLabel';
import checkEmail from '../../helpers/CheckEmail';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import Message from '../../components/Message/Message';

const RegistrationPage = () => {
    const [username, setUsername] = useStateWithLabel('username', '');
    const [email, setEmail] = useStateWithLabel('email', '');
    const [userPassword, setUserPassword] = useStateWithLabel('userPassword', '');

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('Zarejestrowano');
        // Pola mamy w state, kwestia wysłania ich w odpowiednie miejsce
    };

    return (
        <div className={styles.wrapper}>
            <h1>Registration_Page</h1>

            <form className={styles.form} onSubmit={handleRegistration}>
                <input
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                />
                <input
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                />
                <input
                    className={styles.input}
                    onChange={(e) => setUserPassword(e.target.value)}
                    value={userPassword}
                    placeholder="Password"
                />
                <input className={styles.button} type="submit" value="Rejestracja" />
            </form>
            <nav className={styles.nav}>
                <ul>
                    <NavLink to="/lost_password">Zapomniałem hasła...</NavLink>
                </ul>
            </nav>
            <ReturnButton />
        </div>
    );
};

export default RegistrationPage;

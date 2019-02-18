import React, {Component} from 'react';
import styles from './Menu.module.sass'
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className={styles.menuContainer}>
                <div className={styles.item}>
                    <NavLink to='/' className={styles.navLink} onClick={this.props.showMenu}>This week</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/month' className={styles.navLink}  onClick={this.props.showMenu}>This month</NavLink>
                </div>
            </div>
        );
    }
}

export default Menu;

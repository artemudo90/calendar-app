import React, {Component} from 'react';
import styles from './WeekMenu.module.sass'

import moment from 'moment'

class WeekMenu extends Component {
    render() {
        return (
            <div className={styles.weekMenuContainer}>
                <span className={styles.switch} onClick={() => this.props.selectWeek(-1)}>prev</span>
                <div className={styles.containerMode}>
                    <span className={styles.date}>{this.renderDate()} </span>
                    <img src={require('../../img/chevron.png')}
                         alt='chevron'
                         className={this.props.isOpenedMenu ? null : styles.inverted}
                         onClick={()=>this.props.showMenu()}/>
                </div>
                <span className={styles.switch} onClick={() => this.props.selectWeek(1)}>next</span>
            </div>
        );

    }

    renderDate() {
        let {currentWeek} = this.props;
        let firstDate = moment().week(currentWeek).day('Sunday');
        let lastDate = moment().week(currentWeek).day('Saturday');

        if (firstDate.date() < lastDate.date()) {
            return firstDate.format('MMMM DD') + "-" + lastDate.format('DD');
        }
        return firstDate.format('MMM DD') + "-" + lastDate.format('MMM DD')
    }

}


export default WeekMenu;

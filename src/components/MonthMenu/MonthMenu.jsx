import React, {Component} from 'react';
import styles from './MonthMenu.module.sass'
import moment from "moment";

class MonthMenu extends Component {
    render() {
        return (
            <div className={styles.monthMenuContainer}>
                <span className={styles.switch} onClick={() => this.props.selectMonth(-1)}>
                    {this.renderPrevNextMonth(-1)}
                </span>
                <div className={styles.containerMode}>
                    <span className={styles.month}>{moment().month(this.props.currentMonth).format('MMMM')} </span>
                    <img src={require('../../img/chevron.png')}
                         alt='chevron'
                         className={this.props.isOpenedMenu ? null : styles.inverted}
                         onClick={() => this.props.showMenu()}/>
                </div>
                <span className={styles.switch} onClick={() => this.props.selectMonth(1)}>
                    {this.renderPrevNextMonth(1)}
                </span>
            </div>
        );

    }

    renderPrevNextMonth(value) {
        return moment().month(this.props.currentMonth).add(value, 'month').format('MMMM')
    }
}


export default MonthMenu;

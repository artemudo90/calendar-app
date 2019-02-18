import React, {Component} from 'react';
import styles from './WeekNumbers.module.sass'
import moment from 'moment'

class WeekNumbers extends Component {
    render() {
        return (
            <div className={styles.weekNumberContainer}>
                {this.renderWeekNumber()}
            </div>

        );
    }

    renderWeekNumber() {
        let {currentWeek, currentDate, changeDate, setCurrentMonth} = this.props;

        let days = [];
        for (let i = 0; i < 7; i++) {
            const selectedDate = moment().week(currentWeek).day(i).format('dddd,DD MMMM');
            ///////////////////////////////////////////////////////////////////////////////////////
            const currentMonth = moment().week(currentWeek).get('month');

            days.push(
                <div
                    className={currentDate === selectedDate ? styles.selectedNumber : null}
                    onClick={() => {
                        changeDate(selectedDate);
                        setCurrentMonth(currentMonth)
                    }}
                    key={i}>
                    {moment().week(currentWeek).day(i).date()}
                    {selectedDate === moment().format('dddd,DD MMMM') ? <div className={styles.dot}> </div> : null}
                </div>
            );

        }
        return days;
    }
}

export default WeekNumbers;

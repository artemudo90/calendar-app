import React, {Component} from 'react';
import styles from './MonthNumbers.module.sass'
import moment from 'moment'

class MonthNumbers extends Component {
    render() {
        return (
            <div className={styles.monthNumbersContainer}>
                {this.renderWeekNumber()}
            </div>

        );
    }

    renderWeekNumber() {
        let {currentMonth, currentDate, changeDate, setCurrentWeek} = this.props;

        const startOfMonth = moment().month(currentMonth).startOf('month').date();
        const endOfMonth = moment().month(currentMonth).endOf('month').date();
        const weekDayFirstDate = moment().month(currentMonth).startOf('month').weekday();

        let days = [];
        for (let i = 0; i < weekDayFirstDate; i++) {
            days.push(<div/>)
        }
        for (let i = startOfMonth; i <= endOfMonth; i++) {


            const selectedDate = moment().month(currentMonth).date(i).format('dddd,DD MMMM');
            const currentWeek = moment().month(currentMonth).date(i).week();
            days.push(
                <div
                    className={currentDate === selectedDate ? styles.selectedNumber : null}
                    onClick={() => {
                        changeDate(selectedDate);
                        setCurrentWeek(currentWeek)
                    }}
                    key={i}>
                    {i}
                    {selectedDate === moment().format('dddd,DD MMMM') ? <div className={styles.dot}/> : null}
                </div>
            );

        }

        return days;
    }
}

export default MonthNumbers;

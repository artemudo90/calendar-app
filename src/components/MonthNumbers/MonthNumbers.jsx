import React, {Component} from 'react';
import styles from './MonthNumbers.module.sass'
import moment from 'moment'
import {eventData} from "../Data/EventData.js";

class MonthNumbers extends Component {
    render() {
        return (
            <div className={styles.monthNumbersContainer}>
                {this.renderWeekNumber()}
            </div>
        );
    }

    renderWeekNumber() {
        let {currentMonth, currentDate, changeDate, setCurrentWeek, createEvent} = this.props;
        const startOfMonth = moment().month(currentMonth).startOf('month').date();
        const endOfMonth = moment().month(currentMonth).endOf('month').date();
        const weekDayFirstDate = moment().month(currentMonth).startOf('month').weekday();

        let days = [];
        for (let i = 0; i < weekDayFirstDate; i++) {
            days.push(<div key={i}/>)
        }
        for (let i = startOfMonth; i <= endOfMonth; i++) {
            const selectedDate = moment().month(currentMonth).date(i).format('dddd,DD MMMM');
            const currentWeek = moment().month(currentMonth).date(i).week();
            const currentDay = moment().month(currentMonth).date(i).day();
            let isWeekend = false;
            if (currentDay === 0 || currentDay === 6) {
                isWeekend = true;
            }
            const event = checkAvailabilityEvent(moment().month(currentMonth).date(i).format('DD.MM.YYYY'));
            let hasEvent = false;
            if (event != null) {
                hasEvent = true;
            }
            days.push(
                <div
                    className={
                        currentDate === selectedDate ? styles.selectedNumber : isWeekend ? styles.weekend : null}
                    onClick={() => {
                        changeDate(selectedDate);
                        setCurrentWeek(currentWeek)
                        createEvent(event);
                    }}
                    key={i + weekDayFirstDate}>
                    {i}
                    {selectedDate === moment().format('dddd,DD MMMM') ? <div className={styles.dot}/> : null}
                    {hasEvent ? <div className={styles.eventLabel}/> : null}
                </div>
            );
        }
        return days;
    }
}

function checkAvailabilityEvent(date) {
    let event = null;
    eventData.forEach((v) => {
        if (v.date === date) {
            event = v;
        }
    });
    return event;
}

export default MonthNumbers;

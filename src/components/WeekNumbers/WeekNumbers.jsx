import React, {Component} from 'react';
import styles from './WeekNumbers.module.sass'
import moment from 'moment'
import {eventData} from "../Data/EventData";

class WeekNumbers extends Component {
    render() {
        return (
            <div className={styles.weekNumberContainer}>
                {this.renderWeekNumber()}
            </div>

        );
    }

    renderWeekNumber() {
        let {currentWeek, currentDate, changeDate, setCurrentMonth, createEvent} = this.props;

        let days = [];
        for (let i = 0; i < 7; i++) {
            const selectedDate = moment().week(currentWeek).day(i).format('dddd,DD MMMM');
            ///////////////////////////////////////////////////////////////////////////////////////
            const currentMonth = moment().week(currentWeek).get('month');
            let isWeekend = false;
            if (i === 0 || i === 6) {
                isWeekend = true;
            }
            const event = checkAvailabilityEvent(moment().month(currentMonth).week(currentWeek).day(i).format('DD.MM.YYYY'));
            let hasEvent = false;
            if (event != null) {
                hasEvent = true;
            }
            days.push(
                <div
                    className={currentDate === selectedDate ? styles.selectedNumber : isWeekend ? styles.weekend : null}
                    onClick={() => {
                        changeDate(selectedDate);
                        setCurrentMonth(currentMonth);
                        createEvent(event);
                    }}
                    key={i}>
                    {moment().week(currentWeek).day(i).date()}
                    {selectedDate === moment().format('dddd,DD MMMM') ? <div className={styles.dot}/> : null}
                    {hasEvent ? <div className={styles.eventLabel}/> : null}
                </div>
            );
        }
        return days;
    }
}

function checkAvailabilityEvent(date) {///////////////////////////////////////////////////////////////////////////
    let event = null;
    eventData.forEach((v) => {
        if (v.date === date) {
            event = v;
        }
    });
    return event;
}

export default WeekNumbers;

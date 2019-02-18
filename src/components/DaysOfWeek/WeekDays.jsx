import React, {Component} from 'react';
import styles from './WeekDays.module.sass'
import {weekDaysConstants} from "./Constans";

const renderDaysOfWeek = ()=>{
   return weekDaysConstants.map((day, i) =><span key={i}>{day}</span>)//ЗАЧЕМ КЛЮЧ???????????????????????????????
};

class WeekDays extends Component {
    render() {
        return (
                <div className={styles.weekDaysContainer}>
                    {renderDaysOfWeek()}
                </div>

        );
    }
}

export default WeekDays;

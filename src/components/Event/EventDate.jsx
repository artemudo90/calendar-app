import React, {Component} from 'react';
import styles from './EventDate.module.sass'


class EventDate extends Component {
    render() {
        return (
            <div className={styles.eventDateContainer}>
                <div className={styles.eventDate}>
                    <span>{this.props.date}</span>
                </div>
            </div>

        );
    }
}


export default EventDate
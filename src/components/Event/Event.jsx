import React, {Component} from 'react';
import styles from './Event.module.sass'


class Event extends Component {
    render() {
        return (
            <div className={styles.eventContainer}>
                <div className={styles.eventData}>
                    <div className={styles.nameAndTime}>
                        <span>{this.props.name}</span>
                        <span>{this.props.time}</span>
                    </div>
                    <div className={styles.eventBody}>
                        <span>{this.props.body}</span>
                    </div>
                </div>
            </div>

        );
    }
}


export default Event
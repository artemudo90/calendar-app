import React, {Component} from 'react';
import styles from './Date.module.sass'

class Date extends Component {
    render() {
        return (
            <div className={styles.dateContainer}>
                <span className={styles.date}>{this.props.currentDate}</span>
            </div>

        );
    }
}

export default Date;

import React, {Component} from 'react';
import './App.sass';
import WeekDays from "./components/DaysOfWeek/WeekDays";
import moment from 'moment'
import MonthMenu from "./components/MonthMenu/MonthMenu";
import MonthNumbers from "./components/MonthNumbers/MonthNumbers";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import WeekMenu from "./components/WeekMenu/WeekMenu";
import WeekNumbers from "./components/WeekNumbers/WeekNumbers";
import Menu from "./components/Menu/Menu";
import Date from "./components/Date/Date";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWeek: moment().get('week'),
            selectWeek: (value) => this.selectWeek(value),
            currentDate: moment().format('dddd,DD MMMM'),
            changeDate: (date) => this.changeDate(date),
            currentMonth: moment().get('month'),
            selectMonth: (value) => this.selectMonth(value),
            setCurrentWeek: (week) => this.setCurrentWeek(week),
            setCurrentMonth: (month) => this.setCurrentMonth(month),
            isOpenedMenu: false,
            showMenu: () => this.showMenu()
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='App'>

                    <Route exact path='/' render={() => <WeekMenu currentWeek={this.state.currentWeek}
                                                                  selectWeek={this.state.selectWeek}
                                                                  showMenu={this.state.showMenu}
                                                                  isOpenedMenu={this.state.isOpenedMenu}/>}/>
                    <Route path='/month' render={() => <MonthMenu currentMonth={this.state.currentMonth}
                                                                  selectMonth={this.state.selectMonth}
                                                                  showMenu={this.state.showMenu}
                                                                  isOpenedMenu={this.state.isOpenedMenu}/>}/>
                    {this.state.isOpenedMenu ? <Menu showMenu={this.state.showMenu}/> : null}
                    <WeekDays/>
                    <Route exact path='/' render={() => <WeekNumbers currentWeek={this.state.currentWeek}
                                                                     changeDate={this.state.changeDate}
                                                                     currentDate={this.state.currentDate}
                                                                     setCurrentMonth={this.state.setCurrentMonth}/>}/>
                    <Route path='/month' render={() => <MonthNumbers currentMonth={this.state.currentMonth}
                                                                     changeDate={this.state.changeDate}
                                                                     currentDate={this.state.currentDate}
                                                                     setCurrentWeek={this.state.setCurrentWeek}/>}/>
                    <Date currentDate={this.state.currentDate}/>
                </div>
            </BrowserRouter>
        )
    }

    showMenu() {
        this.setState({isOpenedMenu: !this.state.isOpenedMenu});
    }

    selectWeek(value) {
        this.setState({
            currentWeek: this.state.currentWeek + value
        })
        const currentMonth = moment().month(this.state.currentMonth);
        const newMonth = moment().week(this.state.currentWeek);
        if (newMonth > currentMonth) {
            this.setState({currentMonth: this.state.currentMonth + 1})
        } else if (newMonth < currentMonth) {
            this.setState({currentMonth: this.state.currentMonth - 1})
        }
    }

    selectMonth(value) {
        this.setState({
            currentMonth: this.state.currentMonth + value
        })
    }


    changeDate(date) {
        this.setState({currentDate: date})
    }

    setCurrentWeek(week) {
        this.setState({currentWeek: week})
    }

    setCurrentMonth(month) {
        this.setState({currentMonth: month})
    }

}

export default App;

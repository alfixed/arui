import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import Calendar from 'arui-feather/calendar';
import addDays from 'date-fns/add_days';
import subtractDays from 'date-fns/sub_days';
import getTime from 'date-fns/get_time';
import startOfDay from 'date-fns/start_of_day';

import './calendar.scss';

export default class CalendarClass extends PureComponent {
    cn = createCn('calendar');

    state = {
        dateOne: Date.now(),
        dateTwo: Date.now(),
        dateThree: Date.now(),
        dateFour: Date.now(),
        earlierLimit: subtractDays(new Date(), 3).valueOf(),
        laterLimit: addDays(new Date(), 1).valueOf()
    };
    
    render() {
        let currentDate = new Date();
        const offDays = [
            getTime(startOfDay(addDays(currentDate, 1))),
            getTime(startOfDay(addDays(currentDate, 4))),
            getTime(startOfDay(addDays(currentDate, 7)))
        ];
        
        let eventDays = [
            getTime(startOfDay(addDays(currentDate, -25))),
            getTime(startOfDay(addDays(currentDate, -24))),
            getTime(startOfDay(addDays(currentDate, -23))),
            getTime(startOfDay(addDays(currentDate, -19))),
            getTime(startOfDay(addDays(currentDate, -18))),
            getTime(startOfDay(addDays(currentDate, -15))),
            getTime(startOfDay(addDays(currentDate, -14))),
            getTime(startOfDay(addDays(currentDate, -13))),
            getTime(startOfDay(addDays(currentDate, -12))),
            getTime(startOfDay(addDays(currentDate, 2))),
            getTime(startOfDay(addDays(currentDate, 4)))
        ];
        return (
            <div>
                <div>Calendar</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                                <Calendar
                                    value={ this.state.dateOne }
                                    onValueChange={ (newDate) => {
                                        this.setState({
                                            dateOne: newDate
                                        });
                                    } }
                                />
                            </div>
                            <div className={ this.cn('column') }>
                                <Calendar
                                    value={ this.state.dateTwo }
                                    earlierLimit={ this.state.earlierLimit }
                                    laterLimit={ this.state.laterLimit }
                                    onValueChange={ (newDate) => {
                                        this.setState({
                                            dateTwo: newDate
                                        });
                                    } }
                                />
                            </div>
                            <div className={ this.cn('column') }>
                                <Calendar
                                    value={ this.state.dateThree }
                                    offDays={ offDays }
                                    onValueChange={ (newDate) => {
                                        this.setState({
                                            dateThree: newDate
                                        });
                                    } }
                                />
                            </div>
                            <div className={ this.cn('column') }>
                                <Calendar
                                    value={ this.state.dateFour }
                                    eventDays={ eventDays }
                                    onValueChange={ (newDate) => {
                                        this.setState({
                                            dateFour: newDate
                                        });
                                    } }
                                />
                            </div>
                            <div className={ this.cn('column') }>
                                <Calendar
                                    showToday={ true }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

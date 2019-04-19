import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import CalendarInput from 'arui-feather/calendar-input';
import IconOk from 'arui-feather/icon/ui/ok';

import './calendarInput.scss';

export default class CalendarInputClass extends PureComponent {
    cn = createCn('calendarInput');

    render() {
        const addDays = require('date-fns/add_days');
        const formatDate = require('date-fns/format');

        let currentDate = new Date();

        let calendar = {
            showToday: true
        };

        return (
            <div>
                <div>CalendarInput</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            {
                                ['s', 'm'].map(size => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <CalendarInput
                                            size={ size }
                                            defaultValue='01.02.2016'
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <div className={ this.cn('body') }>
                            {
                                ['s', 'm'].map(size => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <CalendarInput
                                            size={ size }
                                            defaultValue='41.12.2031'
                                            error='Такой даты не существует'
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <div className={ this.cn('body') }>
                            { ['s', 'm'].map(size => (
                                <div className={ this.cn('column') } key={ size }>
                                    <CalendarInput
                                        size={ size }
                                        defaultValue='01.02.2016'
                                        rightAddons={ <IconOk size={ size } colored={ true } /> }
                                    />
                                </div>
                            )) }
                        </div>
                        <div>
                            <CalendarInput
                                size='m'
                                calendar={ calendar }
                                defaultValue={ formatDate(addDays(currentDate, 2), 'DD.MM.YYYY') }
                                mobileMode='popup'
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

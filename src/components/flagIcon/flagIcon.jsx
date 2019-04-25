import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import FlagIcon from 'arui-feather/flag-icon';

import './flagIcon.scss';

export default class FlagIconClass extends PureComponent {
    cn = createCn('flagIcon');

    render() {
        const countries = require('arui-feather/lib/countries').default;

        const countriesList = countries.getCountries();
        return (
            <div>
                <div>FlagIcon</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            {
                                ['by', 'kz', 'ru', 'ua'].map(item => (
                                    <div
                                        key={ item }
                                        className={ this.cn('column') }
                                    >
                                        <FlagIcon
                                            country={ item }
                                            size='s'
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            {
                                ['s'].map(size => (
                                    <div
                                        key={ size }
                                        className={ this.cn('body') }
                                        style={ { alignItems: 'flex-start', flexWrap: 'wrap' } }
                                    >
                                        {
                                            countriesList.map(item => (
                                                <FlagIcon
                                                    key={ item.iso2 }
                                                    country={ item.iso2 }
                                                    mode='sprite'
                                                    size={ size }
                                                />
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

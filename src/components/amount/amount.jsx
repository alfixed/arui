import React, { PureComponent } from 'react';
import Amount from 'arui-feather/amount';
import { createCn } from 'bem-react-classname';

import './amount.scss';

export default class AmountClass extends PureComponent {
    cn = createCn('amount');

    render() {
        const AMOUNT = {
            value: 123535,
            bold: true,
            currency: {
                /* code: '', */
                minority: 100
            }
        };

        const AMOUNT_RUR = {
            value: 123535,
            currency: {
                code: 'RUR',
                minority: 100
            }
        };

        const AMOUNT_USD = {
            value: 123535,
            currency: {
                code: 'USD',
                minority: 100
            }
        };

        return (
            <div className={ this.cn() }>
                <div>Amount</div>
                <div className={ this.cn('body') }>
                    <div>
                        {
                            ['s', 'm', 'l', 'xl'].map(size => (
                                <div key={ size }>
                                    <Amount
                                        size={ size }
                                        amount={ AMOUNT }
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {
                            ['s', 'm', 'l', 'xl'].map(size => (
                                <div key={ size }>
                                    <Amount
                                        size={ size }
                                        amount={ AMOUNT_RUR }
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {
                            ['s', 'm', 'l', 'xl'].map(size => (
                                <div key={ size }>
                                    <Amount
                                        size={ size }
                                        amount={ AMOUNT_USD }
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

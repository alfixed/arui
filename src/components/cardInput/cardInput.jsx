import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import CardInput from 'arui-feather/card-input';

import './cardInput.scss';

export default class CardInputClass extends PureComponent {
    cn = createCn('cardInput');

    render() {
        const sizes = ['s', 'm'];
        return (
            <div>
                <div>CardInput</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                            <div>
                                {
                                    sizes.map(size => (
                                        <div className='row' key={ size }>
                                            <CardInput size={ size } placeholder='Введите номер карты' />
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

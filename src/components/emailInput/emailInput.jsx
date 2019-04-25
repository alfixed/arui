import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import EmailInput from 'arui-feather/email-input';
import IconEmail from 'arui-feather/icon/action/email';

import './emailInput.scss';

export default class EmailInputClass extends PureComponent {
    cn = createCn('emailInput');

    render() {
        return (
            <div>
                <div>EmailInput</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                                <EmailInput
                                    placeholder='Введите e-mail'
                                />
                            </div>
                            <div className={ this.cn('column') }>
                                <EmailInput
                                    placeholder='Введите e-mail с выводом ошибки'
                                    error='Ошибка'
                                />
                            </div>
                            <div className={ this.cn('column') }>
                                <EmailInput
                                    placeholder='Введите e-mail с подсказкой'
                                    hint='Подсказка'
                                />
                            </div>
                            <div className={ this.cn('column') }>
                                <EmailInput
                                    placeholder='Введите e-mail с иконкой'
                                    icon={ <IconEmail /> }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

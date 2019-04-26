import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';


import './formField.scss';

export default class FormFieldClass extends PureComponent {
    cn = createCn('formField');

    render() {
        return (
            <div>
                <div>FormField</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                                <div>
                                    {
                                        ['s', 'm'].map(size => (
                                            <div key={ size }>
                                                <FormField size={ size }>
                                                    <Input size={ size } placeholder='Введите что-нибудь' />
                                                </FormField>
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

import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import CheckBoxGroup from 'arui-feather/checkbox-group';
import CheckBox from 'arui-feather/checkbox';
import Label from 'arui-feather/label';

import './checkBoxGroup.scss';

export default class CheckBoxGroupClass extends PureComponent {
    cn = createCn('checkBoxGroup');

    render() {
        return (
            <div>
                <div>CheckBoxGroup</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                                <CheckBoxGroup label={ <Label size='m'>Выберите счёт</Label> }>
                                    <CheckBox
                                        text='Текущий счет'
                                        value='Текущий'
                                    />
                                    <CheckBox
                                        text='Основной счет'
                                        value='Основной'
                                    />
                                    <CheckBox
                                        text='Семейный счет'
                                        value='Семейный'
                                    />
                                    <CheckBox
                                        text='Зарплатный счет'
                                        value='Зарплатный'
                                    />
                                </CheckBoxGroup>
                            </div>
                            <div className={ this.cn('column') }>
                                <CheckBoxGroup type='button'>
                                    <CheckBox
                                        disabled={ true }
                                        text='Текущий'
                                        type='button'
                                        value='Текущий'
                                    />
                                    <CheckBox
                                        text='Основной'
                                        type='button'
                                        value='Основной'
                                    />
                                    <CheckBox
                                        text='Семейный'
                                        disabled={ true }
                                        type='button'
                                        value='Семейный'
                                    />
                                    <CheckBox
                                        text='Зарплатный'
                                        type='button'
                                        value='Зарплатный'
                                    />
                                </CheckBoxGroup>
                            </div>
                            <div className={ this.cn('column') }>
                                <CheckBoxGroup type='line'>
                                    <CheckBox
                                        text='Текущий'
                                        value='Текущий'
                                    />
                                    <CheckBox
                                        text='Основной'
                                        value='Основной'
                                        disabled={ true }
                                    />
                                    <CheckBox
                                        text='Семейный'
                                        value='Семейный'
                                    />
                                    <CheckBox
                                        text='Зарплатный'
                                        value='Зарплатный'
                                        disabled={ true }
                                    />
                                </CheckBoxGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

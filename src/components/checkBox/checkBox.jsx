import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import CheckBox from 'arui-feather/checkbox';

import './checkBox.scss';

export default class CheckBoxClass extends PureComponent {
    cn = createCn('checkBox');

    render() {
        return (
            <div>
                <div>CheckBox</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div>
                                {
                                    ['m'].map(size => (
                                        <div key={ size }>
                                            <div className={ this.cn('column') }>
                                                <CheckBox
                                                    text='Согласен с условиями'
                                                    size={ size }
                                                />
                                            </div>
                                            <div className={ this.cn('column') }>
                                                <CheckBox
                                                    text='Согласен с условиями'
                                                    size={ size }
                                                    disabled={ true }
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    ['m'].map(size => (
                                        <div key={ size }>
                                            <div className={ this.cn('column') }>
                                                <CheckBox
                                                    text='Согласен с условиями'
                                                    type='button'
                                                    size={ size }
                                                />
                                            </div>
                                            <div className={ this.cn('column') }>
                                                <CheckBox
                                                    text='Согласен с условиями'
                                                    type='button'
                                                    size={ size }
                                                    disabled={ true }
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    ['m'].map(size => (
                                        <div key={ size }>
                                            <div className={ this.cn('column') }>
                                                <CheckBox
                                                    text='Выбраны не все услуги'
                                                    size={ size }
                                                    indeterminate={ true }
                                                />
                                            </div>
                                            <div className={ this.cn('column') }>
                                                <CheckBox
                                                    text='Выбраны не все услуги'
                                                    size={ size }
                                                    disabled={ true }
                                                    indeterminate={ true }
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

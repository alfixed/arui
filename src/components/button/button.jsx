import React, { PureComponent } from 'react';
import Button from 'arui-feather/button';
import { createCn } from 'bem-react-classname';
import IconOk from 'arui-feather/icon/ui/ok'

import './button.scss';

export default class ButtonClass extends PureComponent {
    cn = createCn('button');

    render() {
        const buttons = [
            { size: 'm', name: 'Оплатить' },
            { size: 's', name: 'Купить' }
        ];

        return (
            <div>
                <div>Button</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') }  key={ size }>
                                        <Button
                                            view='extra'
                                            size={ size }
                                            title='Tak'
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <Button
                                            view='extra'
                                            size={ size }
                                            disabled={ true }
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') }  key={ size }>
                                        <Button
                                            size={ size }
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <Button
                                            size={ size }
                                            disabled={ true }
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <Button
                                            pseudo={ true }
                                            size={ size }
                                            view='action'
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <Button
                                            pseudo={ true }
                                            size={ size }
                                            disabled={ true }
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <Button
                                            icon={ <IconOk size={ size } /> }
                                            size={ size }
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                                <Button
                                    width='available'
                                    icon={ <IconOk size='xl' /> }
                                    size='l'
                                >
                                    Кнопка с иконкой
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <Button
                                            view='rounded'
                                            size={ size }
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={ this.cn('body') }>
                            {
                                buttons.map(({ size, name }) => (
                                    <div className={ this.cn('column') } key={ size }>
                                        <Button
                                            view='rounded'
                                            size={ size }
                                            disabled={ true }
                                        >
                                            { `${name}` }
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

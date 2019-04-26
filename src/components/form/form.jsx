import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';

import './form.scss';

export default class FormClass extends PureComponent {
    cn = createCn('form');

    render() {
        return (
            <div>
                <div>Form</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                                <Form onSubmit={ () => { alert('Мы перезвоним вам в течение 5 минут'); } }>
                                    <FormField>
                                        <Input placeholder='Введите номер' />
                                    </FormField>
                                    <FormField>
                                        <Button view='extra' type='submit'>Отправить</Button>
                                    </FormField>
                                </Form>
                            </div>
                            <div className={ this.cn('column') }>
                                <Form onSubmit={ () => { alert('Мы перезвоним вам в течение 5 минут'); } }>
                                    <FormField>
                                        <Input placeholder='Введите номер' />
                                    </FormField>
                                    <FormField>
                                        <Button view='action' type='submit'>Отправить</Button>
                                    </FormField>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

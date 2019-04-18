import React, { Component } from 'react';
import Attach from 'arui-feather/attach';
import { createCn } from 'bem-react-classname';
import IconCamera from 'arui-feather/icon/action/camera';
import IconLock from 'arui-feather/icon/action/lock';
import IconBankAlfa from 'arui-feather/icon/brand/bank-alfa';

import './attach.scss';

export default class AttachClass extends Component {
    cn = createCn('attach');

    constructor(props) {
        super(props);
      
        this.state = {
            valueAttachFirst: '',
            valueAttachSecond: ''
        };
    }
    
    handleChangeAttachFirst = (value) => {
        this.setState({ valueAttachFirst: value });
    }

    handleChangeAttachSecond = (value) => {
        this.setState({ valueAttachSecond: value });
    }

    render() {

        return (
            <div className={ this.cn() }>
                <div>Attach</div>
                <div>
                <div>
                    {
                        ['s', 'm'].map(size => (
                            <div className={ this.cn('body') } key={ size }>
                                <div className='column'>
                                    <Attach 
                                        size={ size } 
                                        noFileText=''
                                        buttonProps={ { type: 'reset'} }
                                    />
                                </div>
                                <div className='column'>
                                    <Attach
                                        size={ size }
                                        noFileText=''
                                        disabled={ true }
                                        icon={ <IconLock /> }
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className={ this.cn('body') }>
                        <Attach
                            size='s'
                            noFileText='Нет файла'
                            buttonContent={ this.state.valueAttachFirst ? 'Выберите другой файл' : 'Выберите файл' }
                            onChange={ this.handleChangeAttachFirst }
                            buttonProps={ { pseudo: true, view: 'extra' } }
                            value={ this.state.valueAttachFirst }
                            icon={ <IconCamera /> }
                        />
                    </div>
                </div>
                <div>
                    <div className={ this.cn('body') }>
                        <Attach
                            accept='.pdf, .xls'
                            noFileText='.pdf, .xls'
                            buttonContent='Выберите файл'
                            size='s'
                            onChange={ this.handleChangeAttachSecond }
                            value={ this.state.valueAttachSecond }
                            buttonProps={ { view: 'action' } }
                            icon={ <IconBankAlfa /> }
                        />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

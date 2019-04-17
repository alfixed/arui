import React, { Component } from 'react';
import Attach from 'arui-feather/attach';
import { createCn } from 'bem-react-classname';

import './attach.scss';

export default class AttachClass extends Component {
    cn = createCn('attach');

    constructor(props) {
        super(props);
      
        this.state = {
            value: false,
            value2: false
        };
    }
    
    handleChange = (value) => {
        this.setState({ value });
    }

    handleChangeValue2 = (value2) => {
        this.setState({ value2 });
    }

    render() {

        return (
            <div className={ this.cn() }>
                <div>Attach</div>
                <div>
                    {
                        ['s', 'm'].map(size => (
                            <div className={ this.cn('body') } key={ size }>
                                <div className='column'>
                                    <Attach size={ size } noFileText='' />
                                </div>
                                <div className='column'>
                                    <Attach size={ size } noFileText='' disabled={ true } />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className={ this.cn('body') }>
                        <Attach
                            size='s'
                            noFileText=''
                            buttonContent={ this.state.value ? 'Выберите другой файл' : 'Выберите файл' }
                            onChange={ this.handleChange }
                            buttonProps={ { pseudo: true } }
                            value={ this.state.value }
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
                            onChange={ this.handleChangeValue2 }
                            value={ this.state.value2 }
                        />
                    </div>
                </div>

            </div>
        );
    }
}

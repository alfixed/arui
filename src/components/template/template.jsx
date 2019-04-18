import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';

import './template.scss';

export default class ButtonClass extends PureComponent {
    cn = createCn('template');

    render() {
        return (
            <div>
                <div>Template</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

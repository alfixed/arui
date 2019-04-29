import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';

import './gridRow.scss';

export default class GridRowClass extends PureComponent {
    cn = createCn('gridRow');

    render() {
        return (
            <div>
                <div>GridRow</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <GridRow justify='left'>
                            <GridCol width='4'>
                                <div className={ this.cn('body') }>4</div>
                            </GridCol>
                            <GridCol width='4'>
                                <div className={ this.cn('body', 'column') }>4</div>
                            </GridCol>
                        </GridRow>
                        <GridRow justify='center'>
                            <GridCol width='4'>
                                <div className={ this.cn('body') }>4</div>
                            </GridCol>
                            <GridCol width='4'>
                                <div className={ this.cn('body', 'column') }>4</div>
                            </GridCol>
                        </GridRow>
                        <GridRow justify='right'>
                            <GridCol width='4'>
                                <div className={ this.cn('body') }>4</div>
                            </GridCol>
                            <GridCol width='4'>
                                <div className={ this.cn('body', 'column') }>4</div>
                            </GridCol>
                        </GridRow>
                        <GridRow justify='around'>
                            <GridCol width='4'>
                                <div className={ this.cn('body') }>4</div>
                            </GridCol>
                            <GridCol width='4'>
                                <div className={ this.cn('body', 'column') }>4</div>
                            </GridCol>
                        </GridRow>
                        <GridRow justify='between'>
                            <GridCol width='4'>
                                <div className={ this.cn('body', 'row') }>4</div>
                            </GridCol>
                            <GridCol width='4'>
                                <div className={ this.cn('body', 'column', 'row') }>4</div>
                            </GridCol>
                        </GridRow>
                    </div>
                </div>
            </div>
        );
    }
}

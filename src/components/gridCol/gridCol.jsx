import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';

import './gridCol.scss';

export default class GridColClass extends PureComponent {
    cn = createCn('gridCol');

    render() {
        return (
            <div>
                <div>GridCol</div>
                <div className={ this.cn() }>
                    <div>
                        <GridRow className={ this.cn('header') }>
                            <GridCol width={ { desktop: { m: 12 } } }>
                                <div className={ this.cn('body', 'column12') }>12</div>
                            </GridCol>
                        </GridRow>
                        <GridRow className={ this.cn('header') }>
                            {
                                [1, 2].map(key => (
                                    <GridCol width='6' key={ key }>
                                        <div className={ this.cn('body') }>6</div>
                                    </GridCol>
                                ))
                            }
                        </GridRow>
                        <GridRow className={ this.cn('header') }>
                            {
                                [1, 2, 3].map(key => (
                                    <GridCol width='4' key={ key }>
                                        <div className={ this.cn('body') }>4</div>
                                    </GridCol>
                                ))
                            }
                        </GridRow>
                        <GridRow className={ this.cn('header') }>
                            {
                                [1, 2, 3, 4].map(key => (
                                    <GridCol width='3' key={ key }>
                                        <div className={ this.cn('body') }>3</div>
                                    </GridCol>
                                ))
                            }
                        </GridRow>
                        <GridRow className={ this.cn('header') }>
                            {
                                [1, 2, 3, 4, 5, 6].map(key => (
                                    <GridCol width='2' key={ key }>
                                        <div className={ this.cn('body', 'column') }>2</div>
                                    </GridCol>
                                ))
                            }
                        </GridRow>
                        <GridRow className={ this.cn('header') }>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(key => (
                                    <GridCol width='1' key={ key }>
                                        <div className={ this.cn('body') }>1</div>
                                    </GridCol>
                                ))
                            }
                        </GridRow>
                    </div>
                </div>
            </div>
        );
    }
}

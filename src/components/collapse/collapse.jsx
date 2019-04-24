import React, { PureComponent } from 'react';
import { createCn } from 'bem-react-classname';
import Collapse from 'arui-feather/collapse';
import Paragraph from 'arui-feather/paragraph';

import './collapse.scss';

export default class CollapseClass extends PureComponent {
    cn = createCn('collapse');

    handleExpandedChange = (isExpanded) => {
        this.setState({ isExpanded });
    }
    state = {
        isExpanded: true
    };
    render() {
        return (
            <div>
                <div>Collapse</div>
                <div className={ this.cn() }>
                    <div className={ this.cn('header') }>
                        <div className={ this.cn('body') }>
                            <div className={ this.cn('column') }>
                            <Collapse
                                collapsedLabel='Подробнее'
                                expandedLabel='Скрыть'
                                isExpanded={ this.state.isExpanded }
                                onExpandedChange={ this.handleExpandedChange }
                            >
                                <Paragraph>
                                    Альфа-Банк, основанный в 1990 году, является универсальным банком,
                                    осуществляющим все основные виды банковских операций, представленных
                                    на рынке финансовых услуг, включая обслуживание частных и корпоративных
                                    клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
                                </Paragraph>
                            </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

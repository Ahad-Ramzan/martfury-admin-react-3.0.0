import React from 'react';
import TableOrderSummary from '~/components/shared/tables/TableOrderSummary';

const CardRecentOrders = () => (
    <div className="ps-card">
        <div className="ps-card__header">
            <h4>Vendas Recentes</h4>
        </div>

        <div className="ps-card__content">
            <TableOrderSummary />
        </div>

        <div className="ps-card__footer">
            <a className="ps-card__morelink" href="orders.htmls">
                Ver pedidos completos
                <i className="icon icon-chevron-right"></i>
            </a>
        </div>
    </div>
);

export default CardRecentOrders;

import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Order from './order';

const OrderList = ({ inProgressOrders = [], completedOrders = [] }) => {
	return (
		<div className="order-list">
			<ListGroup>
				{inProgressOrders.length > 0 && (
					<ListGroupItem className="list-group-heading" data-testid="in-progress-orders-heading">
						<div className="list-group-heading-text">進行中</div>
					</ListGroupItem>
				)}
				{inProgressOrders.map((order, index) => {
					return (
						<ListGroupItem key={index}>
							<Order order={order} isInProgress={true} />
						</ListGroupItem>
					);
				})}
				{completedOrders.length > 0 && (
					<ListGroupItem className="list-group-heading" data-testid="completed-orders-heading">
						<div className="list-group-heading-text">已完成</div>
					</ListGroupItem>
				)}
				{completedOrders.map((order, index) => {
					return (
						<ListGroupItem key={index}>
							<Order order={order} isInProgress={false} />
						</ListGroupItem>
					);
				})}
      </ListGroup>
		</div>
	);
}

export default OrderList;

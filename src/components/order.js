import React from 'react';

const Order = ({ order = {}, isInProgress = false }) => {
	const { name = "", logo= "", date = "", status = "" } = order;
	return (
		<div className="order">
			<div className="order-info">
				<div className="order-info-left">
					<img src={logo} alt={name} data-testid="order-image" />
				</div>
				<div className="order-info-right">
					<div className="order-status">
						<div
							className={isInProgress ? "in-progress-status" : "status"}
							data-testid="order-status"
						>
							{status.type}
						</div>
						{isInProgress && <div className="date" data-testid="delivery-date">預計出貨：{date}</div>}
					</div>
					<div className="order-name" data-testid="order-name">{name}</div>
				</div>
			</div>
			<i className="material-icons order-icon">keyboard_arrow_right</i>
		</div>
	);
}

export default Order;

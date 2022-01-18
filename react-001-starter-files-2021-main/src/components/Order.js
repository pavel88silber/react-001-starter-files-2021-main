import React from 'react'

class Order extends React.Component {

    renderOrder = key => {
        const burger = this.props.burgers[key];
        const count = this.props.order[key];

        const isAvailable = burger && burger.status === 'available';
        if (!isAvailable) {
            return <li className='unavailable'>
                סליחה, {burger ? burger.name : 'המבורגר'} לא זמין זמנית
            </li>
        }

        return <li>
                <span>
                    <span>{count}</span>  
                     _יחידות  <b>{burger.name}</b>  
                    <span> {count * burger.price} ₪</span>
                    <button className='cancelItem'>&times;</button>
                </span>
            </li>
    }

    
    render() {

        const orderIds = Object.keys(this.props.order)
        const total = orderIds.reduce((prevTotal, key) => {
            const burger = this.props.burgers[key];
            const count = this.props.order[key];

            const isAvailable = burger && burger.status === 'available';
            if(isAvailable) {
                return prevTotal + burger.price * count;
            }
        }, 0);

        return(
            <div className='order-wrap'>
                <h2>הזמנה שלך</h2>
                {/* <ul className='order'>{orderIds.map(key  => {
                    return <li key={key}>{key}</li>
                })}</ul> */}
                <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
                <p align='right' margin='20em'><b>{total} סה"כ</b></p>
            </div>
        )
    }
}

export default Order
import React from 'react'
import PropTypes from 'prop-types';
import Shipment from './Shipment';
import { TransitionGroup, CSSTransition} from 'react-transition-group'

class Order extends React.Component {

    static propTypes = {
        burgers: PropTypes.object,
        order: PropTypes.object,
        deleteFromOrder: PropTypes.func,
    }

    renderOrder = key => {
        const burger = this.props.burgers[key];
        const count = this.props.order[key];
        const isAvailable = burger && burger.status === 'available';
        const transitionOptions = {
            classNames: 'order',
            key,
            timeout: { enter: 500, exit: 500 }
        };

        if(!burger) return null;


        if (!isAvailable) {
            return (
            <CSSTransition 
                classNames='order' 
                key={key} 
                timeout={{ enter: 500, exit: 500}}
            >
            <li className='unavailable' key={key}>
                סליחה, {burger ? burger.name : 'המבורגר'} לא זמין זמנית
            </li>

            </CSSTransition>
            );
        }

        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup 
                            component='span'
                            className='count'
                        >
                            <CSSTransition  {...transitionOptions}>
                               <span>{count}</span> 
                            </CSSTransition>
                        </TransitionGroup>

                        _יחידות  <b>{burger.name}</b>  
                        <span> {count * burger.price} ₪</span>

                        <button 
                            onClick={() => 
                                this.props.deleteFromOrder(key)
                            } 
                                className='cancelItem'
                            >
                                &times;
                            </button>
                    </span>
                </li>
            </CSSTransition>
        )
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

                <TransitionGroup component ='ul' className='order'>
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>

                {/* <p align='right'><b>{total} סה"כ</b></p> */}

                {total > 0 ? (
                    <Shipment total={total} />
                ) : (
                    <div className='nothingSelected'>
                        אנא בחרו מהתפריט
                    </div>
                )
                }

            </div>
        )
    }
}

export default Order
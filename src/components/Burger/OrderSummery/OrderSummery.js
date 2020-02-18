import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummery = (props) => {
    const ingredientsSummery = Object.keys(props.ingredients)
        .map(igkey => {
            return (<li key={igkey}>
                <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{props.ingredients[igkey]}
            </li>)
        });

    return (
        <Aux>
            <h3>Order summery:</h3>
            <p>A delicious burger with the following ingredients:</p>
            {ingredientsSummery}
            <p><strong>Total price:</strong>{props.totalPrice}$</p>
            <p>Continue to checkout?</p>
            <Button buttonType={'Danger'} clicked={props.purchasingCancelled} >Cancle</Button>
            <Button buttonType={'Success'} clicked={props.purchasingContinued}>Continue</Button>

        </Aux>
    );
};


export default OrderSummery;
import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    { lable: 'Salad', type: 'salad' },
    { lable: 'Bacon', type: 'bacon' },
    { lable: 'Cheese', type: 'cheese' },
    { lable: 'Meat', type: 'meat' }
];


const buildControls = (props) => (
    
    <div className={'BuildControls'}>
        <p>Current price : <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.lable}
                lable={ctrl.lable}
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={'OrderButton'} disabled={!props.purchasable} onClick={props.purchasing}>ORDER NOW</button>
    </div>
)

export default buildControls;


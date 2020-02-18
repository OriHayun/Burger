import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className={'BuildControl'}>
        <div className={'Label'}>{props.lable}</div>
        <button className={'Less'} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={'More'} onClick={props.added}>More</button>
    </div>
)

export default buildControl;
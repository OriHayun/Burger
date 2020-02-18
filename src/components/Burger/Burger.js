import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger =(props)=>{

    let transformedIngredient=Object.keys(props.ingredient)
    .map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_,i) =>{
            return <BurgerIngredient key={igKey+1} type={igKey}/>
        })
    }).reduce((arr,le)=> {
        return arr.concat(le);
    },[])

    if (transformedIngredient.length===0){
        transformedIngredient=<p>Please insert ingredients</p>;
    }

    console.log(transformedIngredient)
    
    return(
        <div className={'Burger'}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredient}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;
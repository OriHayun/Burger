import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Burger from '../../Burger/Burger';
import BuildControls from '../../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummery from '../../Burger/OrderSummery/OrderSummery';

const INGREDIENTs_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }

    updatePurchasState =(ingredients)=>{
        const ingredient = ingredients;
        const sum = Object.keys(ingredient).map(igkey =>{
            return ingredient[igkey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});

    }


    addIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddtion = INGREDIENTs_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddtion;
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
        this.updatePurchasState(updatedIngredients);
    }

    removeIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTs_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceDeduction;
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
        this.updatePurchasState(updatedIngredients);
    }

    purchasingHandler =()=>{
        this.setState({purchasing:true});
    }

    purchasingCancelHandler =()=>{
        this.setState({purchasing:false});
    }

    purchasingContinueHandler=()=>{
        alert('You continue');
    }

    render() {

        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchasingCancelHandler} >
                    <OrderSummery 
                    ingredients={this.state.ingredients}
                    purchasingCancelled={this.purchasingCancelHandler}
                    purchasingContinued={this.purchasingContinueHandler}
                    totalPrice={this.state.totalPrice.toFixed(2)}
                    />
                </Modal>
                <Burger ingredient={this.state.ingredients} />
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemove={this.removeIngredientHandler}
                disabled={disabledInfo}
                totalPrice={this.state.totalPrice}
                purchasable={this.state.purchasable}
                purchasing={this.purchasingHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
import React from 'react';
import { connect } from 'react-redux';
import { computeLoan } from './selectors';

function LoanResult({ loan }){
    return(
        <div>
            <div>Total Interest Paid: {loan.totalInterest}</div>
            <div>Total Amount Paid: {loan.totalPaid} </div>          
        </div>
    )
}

function mapState(state){
    return {
        loan: computeLoan(state)
    }
}
    
export default connect(
    mapState
)(LoanResult);
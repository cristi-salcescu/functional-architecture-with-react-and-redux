import React from 'react';
import pipe from 'lodash/flow';
import { connect } from 'react-redux';
import { submitLoanRequest } from './actions';
import { preventDefault, extractFormData } from './helpers';

function LoanForm({ loanRequest, submitLoanRequest }){
    return(
        <form onSubmit={pipe(preventDefault, extractFormData, submitLoanRequest)} >
            <div>
                <label htmlFor="amount">Loan amount</label>
                <input 
                    name="amount" 
                    type="number" 
                    defaultValue={loanRequest.amount}
                    required
                />
            </div>
            <div>
                <label htmlFor="term">Loan term in years</label>
                <input 
                    name="term" 
                    type="number" 
                    defaultValue={loanRequest.term}
                    required
                />
            </div>
            <div>
                <label htmlFor="interest">Interest rate per year</label>
                <input 
                    name="interest" 
                    type="number" 
                    defaultValue={loanRequest.interest}
                    required
                />
            </div>
            <div>
                <button type="submit" >
                    Calculate
                </button>
            </div>
        </form>
    )
}

function mapState(loanRequest){
    return {
        loanRequest
    }
}
    
export default connect(
    mapState,
    { submitLoanRequest }
)(LoanForm);
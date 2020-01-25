import React from 'react';
import pipe from 'lodash/flow';
import { partial } from 'lodash';
import { connect } from 'react-redux';
import { withChange, preventDefault } from './helpers';
import { submitLoanRequest, changeLoanRequest } from './actions';

function LoanForm({ loanRequest, changeLoanRequest, submitLoanRequest }){
    function handleChange(e){
        const change = Object.freeze({
            name: e.target.name,
            value: e.target.value
        });

        changeLoanRequest(change);
    }

    const handleSubmit = partial(submitLoanRequest, loanRequest)

    return(
        <form onSubmit={pipe(preventDefault, handleSubmit)}>
            <div>
                <label htmlFor="amount">Loan amount</label>
                <input 
                    name="amount" 
                    type="number" 
                    value={loanRequest.amount} 
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="term">Loan term in years</label>
                <input 
                    name="term" 
                    type="number" 
                    value={loanRequest.term} 
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="interest">Interest rate per year</label>
                <input 
                    name="interest" 
                    type="number" 
                    value={loanRequest.interest} 
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <button type="submit">
                    Calculate
                </button>
            </div>
        </form>
    )
}

function mapState({ loanRequestInput }){
    return {
        loanRequest: loanRequestInput
    }
}
    
export default connect(
    mapState,
    { submitLoanRequest, changeLoanRequest }
)(LoanForm);
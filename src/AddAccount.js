import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewAccount } from './redux/actions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class AddAccount extends Component {
    addAccount = (event) => {
        event.preventDefault()
        let account = {
            id: Math.random().toString(36).substr(2, 5),
            accountName: event.target.elements.accountName.value,
            accountNumber: event.target.elements.accountNumber.value,
            bankName: event.target.elements.bankName.value,
            bankBranch: event.target.elements.bankBranch.value,
        }
        this.props.addNewAccount(account)
        this.props.history.push('/')
    }
    render() {
        return (

            <form onSubmit={this.addAccount}>
                <Link to="/">
                    <p><h3>User Accounts</h3></p>
                </Link>
                <h1>Add New Account</h1>
                <div>
                    <label>First Name</label>
                    <input type="text" name="accountName" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="accountNumber" />
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="text" name="bankName" />
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" name="bankBranch"/>
                </div>
                <button type="submit">Add Account</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addNewAccount
}

export default connect(null, mapDispatchToProps)(AddAccount)
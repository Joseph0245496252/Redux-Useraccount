import React, { Component } from 'react'
import { connect} from 'react-redux'
import { updateAccountInfo } from './redux/actions'
import { Link } from 'react-router-dom'

class EditAccount extends Component {
    updateAccount = (event)=>{
        event.preventDefault()
        let account = {
            id: this.props.match.params.id,
            accountName:event.target.elements.accountName.value,
            accountNumber:event.target.elements.accountNumber.value,
            bankName:event.target.elements.bankName.value,
            bankBranch:event.target.elements.bankBranch.value,
        }
        this.props.updateAccountInfo(account)
        this.props.history.push('/')
    }
    render() {
        const id = this.props.match.params.id
        console.log(id)
        let account = this.props.accounts.find(item=>{
            return item.id===id
        })
        console.log(account)
        return (
            
            <form onSubmit={this.updateAccount}>
                <Link to="/">
                    <p>Accounts</p>
                </Link>
                <h1 className="text-align: center;">Edit Account</h1>
                <div>
                    <label>Account Name</label>
                    <input type="text" name="accountName" defaultValue={account.accountName}/>
                </div>
                <div>
                    <label>Account Number</label>
                    <input type="text" name="accountNumber" defaultValue={account.accountNumber}/>
                </div>
                <div>
                    <label>Bank Name</label>
                    <input type="text" name="bankName" defaultValue={account.bankName}/>
                </div>
                <div>
                    <label>Bank Branch</label>
                    <input type="text" name="bankBranch" defaultValue={account.bankBranch}/>
                </div>
                <button type="submit">Update Account</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    updateAccountInfo
}

const mapStateToProps = (state)=> {
    return {
        accounts: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)

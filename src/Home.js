import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import { removeAccount } from './redux/actions'
class Home extends React.Component {
    
    deleteAccount = (id)=>{
        this.props.removeAccount(id)
    }
    render(){
        return (
            <div>
                <div>
                <Link to="/add">
                    <p>Add Account</p>
                </Link>

            </div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Number</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>

                {this.props.accounts.map(account=>{
                    return (
                    <tr>
                        <td>{account.accountName}</td>
                    <td>{account.accountNumber}</td>
                    <td>{account.bankName}</td>
                    <td>{account.bankBranch}</td>
                    <td><a onClick={()=>this.deleteAccount(account.id)}>Delete</a>  |  <Link to={"/edit/" + account.id}>Edit</Link></td>
                    </tr>
                    )
                })}
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        accounts:state
    }
}

const mapDispatchToProps = {
    removeAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

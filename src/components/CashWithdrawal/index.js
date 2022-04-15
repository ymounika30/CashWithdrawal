import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="card-container">
          <div className="app-container">
            <div className="initial-card">
              <h1 className="profile">{initial}</h1>
            </div>
            <h1 className="title">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance-value">
              {balance} <br />
              <span className="rupee">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum-rupee">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominationsList">
            {denominationsList.map(eachUser => (
              <DenominationItem
                denominationDetails={eachUser}
                key={eachUser.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

const Notifications = (props) => {
    const {notifications} = props
   //maping notifications collection from firebase
    return(
        <div className="notification section">
            <div className="card" >
                <div className = "card-content">
                    <span className = "card-title">Notifications</span>
                    <ul className = "notifications">
                        {notifications && notifications.map(x => {
                            return(
                                    <li key={x.id}>
                                        <p className="black-text">{x.user}</p>
                                        <p className="black-text">{x.content}</p>
                                        <div className="grey-text">{moment(x.time.toDate()).fromNow()}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
     

const mapStateToProps = (state) => {
    
    return {
        notifications: state.firestore.ordered.notifications
    }
}
export default connect(mapStateToProps)(Notifications)
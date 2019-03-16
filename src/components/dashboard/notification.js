import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

const Notifications = (props) => {
    const {notifications} = props
   
    return(
        <div className="notification section">
            <div className="card" >
                <div className = "card-content">
                    <span className = "card-title">Notifications</span>
                    <ul className = "notifications">
                        {notifications && notifications.map(x => {
                            return(
                                    <li key={x.id}>
                                        <p className="light blue-text text-lighten-2">{x.user}</p>
                                        <p className="light blue-text text-lighten-2">{x.content}</p>
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
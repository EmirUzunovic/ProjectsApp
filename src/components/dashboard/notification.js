import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

const Notifications = (props) => {
    const {notifications} = props
   
    return(
        <div className="section">
            <div className="card z-depth-0" >
                <div className = "card-content">
                    <span className = "card-title">Notifications</span>
                    <ul className = "notifications">
                        {notifications && notifications.map(x => {
                            return(
                                    <li key={x.id}>
                                        <span className="pink-text">{x.user}</span>
                                        <span className="pink-text">{x.content}</span>
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
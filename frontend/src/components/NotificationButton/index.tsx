import React from "react";
import "./styles.css"
import icon from "../../assets/img/notification.svg"
function NotificationButton() {
    return (
        <div className="notification-btn">
        <img src={icon} alt="Notificar" />
    </div>
    )

}

export default NotificationButton;
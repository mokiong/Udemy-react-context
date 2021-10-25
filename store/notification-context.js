import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { createContext, useState } from 'react';

const NotificationContext = createContext({
    notification: null,
    showNotification: function (notificationData) {},
    hideNotification: function () {},
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }

    function hideNotificationHandler() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    };

    return (
        <NotificationContext.Provider>
            {props.children}
        </NotificationContext.Provider>
    );
}

export default NotificationContext;

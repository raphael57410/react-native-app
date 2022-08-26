import notifee, { AuthorizationStatus } from "@notifee/react-native";
import { setSettingsModal } from "../ressources/modal/settingsModal";

async function Notification(text:string,description:string) {
    const settings = await notifee.getNotificationSettings();
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });

    if (settings.authorizationStatus == AuthorizationStatus.AUTHORIZED) {
        await notifee.displayNotification({
            title: text,
            body: description,
            android: {
                channelId,
                pressAction: {
                    id: 'default',
                },
            },
        });
    } else if (settings.authorizationStatus == AuthorizationStatus.DENIED) {
       setSettingsModal(true)
    }

}

export default Notification;
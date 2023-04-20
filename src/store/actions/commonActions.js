export const showNotification = (message, variant="success") => {
    return {type: "SHOW_NOTIFICATION", message, variant};
};
export const hideNotification = () => {
    return {type: "HIDE_NOTIFICATION"};
};

export const openModal = () => {
    return {type: "SHOW_MODAL"};
};
export const closeModal = () => {
    return {type: "CLOSE_MODAL"};
};

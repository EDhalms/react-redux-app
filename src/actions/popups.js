export function handleWelcomePopup(status) {
    return {
        type: 'HANDLE_WELCOME_POPUP',
        status
    }
}

export function handleOverlay(status) {
    return {
        type: 'HANDLE_OVERLAY',
        status
    }
}

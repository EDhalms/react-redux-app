export function handlePopup(actionType, status) {
    return {
        type: actionType,
        status
    }
}

export function handleOverlay(status) {
    return {
        type: 'HANDLE_OVERLAY',
        status
    }
}

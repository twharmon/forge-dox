const ws = new WebSocket(`ws://${window.location.host}/hot`)

ws.onmessage = e => {
    if (e.data === 'reload') {
        window.location.reload()
    }
}

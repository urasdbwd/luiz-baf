interface SESSIONS {
    [key: string]: ColfSession
}

interface Config {
    INGAME_NAME: string
    WEBHOOK_URL: string
    DELAY_TO_REMOVE_BED: number
    FLIP_ACTION_DELAY: number
    USE_COFL_CHAT: boolean
    ENABLE_CONSOLE_INPUT: boolean
    SESSIONS: SESSIONS
    WEBSOCKET_URL: string
}

interface ColfSession {
    id: string
    expires: Date
}

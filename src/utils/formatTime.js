// @flow

export function formatTime(time: string) {
    const chunks: string[] = time.split(':');
    
    if (chunks[0] && chunks[1]) {
        return `${chunks[0]}:${chunks[1]}`;
    }
    
    return time;
}

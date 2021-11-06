export function getDate(unix) {
    const date = new Date(unix * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${month} ${day}, ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

export function getTime(unix) {
    const date = new Date(unix * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

export function getShortDate(unix) {
    const date = new Date(unix * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const month = months[date.getMonth()];
    const day = date.getDate();

    return `${days[date.getDay()]}, ${month} ${day}`;
}
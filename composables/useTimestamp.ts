export function useTimestamp() {

    const today: Date = new Date();
    const yyyy: number = today.getFullYear();
    const mm: number = today.getMonth() + 1; // Months start at 0!
    const dd: number = today.getDate();
    const hours: number = today.getHours();
    const minutes: number = today.getMinutes();

    return {hours: hours, minutes: minutes}
}
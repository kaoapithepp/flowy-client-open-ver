export function timerCalculation() {
    const deadline: string = localStorage.getItem("deadlineTicket") as string;
    var distance = Date.parse(deadline) - Date.now();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {minutes, seconds};
}
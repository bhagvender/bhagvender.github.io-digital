
// setup timer with date set in the future
const timer2 = new CountdownTimer({
	selector: "#clock2",
	targetDate: new Date(Date.parse(new Date()) + 12 * 16 * 36 * 60 * 1000),
	backgroundColor: "rgba(0,0,0,.15)",
});



timer2.startTimer();

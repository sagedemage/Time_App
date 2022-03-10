function startTime() {
	const today = new Date();
    let h = today.getHours(); // hour
    let m = today.getMinutes(); // minute
    //let s = today.getSeconds();
	let rh = h; // human readable hour
	let d = "AM";
	var con = document.getElementById('glass');

	let list = FormatTime(h, rh, d);
	rh = list[0];
	d = list[1];

	WindowColor(h);
    m = checkTime(m);

    document.getElementById('time').innerHTML = rh + ":" + m + " " + d;
    setTimeout(startTime, 1000);
}

function checkTime(min) {
	/* add zero in front of 
	single digit number (0 - 9) */
	if (min < 10) {
		min = "0" + i
	} 
    return min;
}

function WindowColor(hour) {
	/* Change window color according 
	 * to the time of the day */
	var con = document.getElementById('glass');

	if (hour >= 7 && hour < 12) {
        /* Morning */
        // 7 to 11
        con.style.backgroundColor = "#C3DEE0";
    }
    if (hour >= 12 && hour < 19) {
        /* Afternoon */
        // 12 to 18
        con.style.backgroundColor = "#5DF4FF";
    }

    if (hour >= 19 || hour < 7) {
        /* Night */
        // 19 to 6
        con.style.backgroundColor = "#001865";
    }
}

function FormatTime(hour, readable_hour, day) {
	/* Format hour and set AM/PM */
	if (hour > 12) {
        readable_hour = hour - 12;
        day = "PM";
    }

	if (hour == 12) {
		day = "PM"
	}

	if (hour == 0) {
		readable_hour = hour + 12;	
	}

	return [readable_hour, day];
}

startTime();


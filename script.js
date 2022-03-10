function startTime() {
	const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    //let s = today.getSeconds();
	let d = "AM";
	var con = document.getElementById('glass');

	if (h >= 7 && h < 12) {
		/* Morning */
		// 7 to 11
		con.style.backgroundColor = "#C3DEE0"; 
	}
	if (h >= 12 && h < 19) {
		/* Afternoon */
		// 12 to 18
		con.style.backgroundColor = "#5DF4FF"; 
	}

	if (h >= 19 || h < 7) {
		/* Night */
		// 19 to 6
		con.style.backgroundColor = "#001865"; 

	}
    if (h > 12) {
    	h = h - 12;
        d = "PM";
    }
    m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + " " + d;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}; 
    // add zero in front of numbers < 10
    return i;
}

startTime();


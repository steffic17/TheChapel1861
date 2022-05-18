const getDate = () => {
	const d = new Date();
}

//Diary information
const getDiaryData = () => {
	
    var diaryWeekDate = [
		"07 Jan 2022",
"14 Jan 2022",
"21 Jan 2022",
"28 Jan 2022",
"04 Feb 2022",
"11 Feb 2022",
"18 Feb 2022",
"25 Feb 2022",
"04 Mar 2022",
"11 Mar 2022",
"18 Mar 2022",
"25 Mar 2022",
"01 Apr 2022",
"08 Apr 2022",
"15 Apr 2022",
"22 Apr 2022",
"29 Apr 2022",
"06 May 2022",
"13 May 2022",
"20 May 2022",
"27 May 2022",
"03 Jun 2022",
"10 Jun 2022",
"17 Jun 2022",
"24 Jun 2022",
"01 Jul 2022",
"08 Jul 2022",
"15 Jul 2022",
"22 Jul 2022",
"29 Jul 2022",
"05 Aug 2022",
"12 Aug 2022",
"19 Aug 2022",
"26 Aug 2022",
"02 Sep 2022",
"09 Sep 2022",
"16 Sep 2022",
"23 Sep 2022",
"30 Sep 2022",
"07 Oct 2022",
"14 Oct 2022",
"21 Oct 2022",
"28 Oct 2022",
"04 Nov 2022",
"11 Nov 2022",
"18 Nov 2022",
"25 Nov 2022",
"02 Dec 2022",
"09 Dec 2022",
"16 Dec 2022",
"23 Dec 2022",
"30 Dec 2022"
	];
	var diaryWeekAvailability = [
	"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"TENTATIVE",
"TENTATIVE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"TENTATIVE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"TENTATIVE",
"AVAILABLE",
"AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"AVAILABLE",
"TENTATIVE",
"NOT AVAILABLE",
"TENTATIVE",
"AVAILABLE",
"NOT AVAILABLE",
"AVAILABLE",
"AVAILABLE",
"AVAILABLE",
"AVAILABLE",
"AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE",
"NOT AVAILABLE"
	];


	var diaryNightPrice = [
		192,
150,
150,
150,
150,
223,
223,
150,
223,
192,
192,
223,
254,
254,
254,
223,
254,
192,
120,
135,
304,
223,
223,
223,
254,
254,
254,
254,
304,
304,
304,
304,
304,
304,
254,
254,
254,
223,
223,
223,
254,
254,
223,
192,
192,
150,
150,
150,
223,
254,
304,
304
	];

	var diaryNightsAvailable = [0,
0,
0,
0,
0,
7,
0,
0,
0,
0,
3,
0,
7,
7,
4,
0,
3,
0,
7,
3,
7,
2,
7,
3,
7,
3,
3,
7,
7,
7,
7,
7,
7,
7,
3,
7,
7,
3,
7,
7,
7,
7,
7,
3,
0,
0,
0,
0,
0,
0,
7,
7
	];

	const weekday = new Array(14);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	weekday[7] = "Sunday";
	weekday[8] = "Monday";
	weekday[9] = "Tuesday";
	weekday[10] = "Wednesday";
	weekday[11] = "Thursday";
	weekday[12] = "Friday";
	weekday[13] = "Saturday";
	
	const month = new Array(12);
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	
	let dateToday = new Date();
	let allDiary = [];  // Initialise the object array
	//Loop through whole date period
	for (let i = 0; i < diaryWeekDate.length; i++){
		const d = new Date(diaryWeekDate[i]);
		for (let j = 0; j < 7 ; j++){
			var newDate = new Date(d);
			newDate.setDate(d.getDate() + j);
			singleDiaryEntry = {
				date: newDate,
				day_num: d.getDay()+j,
				day: weekday[d.getDay()+j],
				night_price: diaryNightPrice[i]
			}
			
//			console.log(singleDiaryEntry);
			if (diaryNightsAvailable[i] > j) {
				singleDiaryEntry.availability = diaryWeekAvailability[i]
			} else {
				singleDiaryEntry.availability = "NOT AVAILABLE"
			}
//			console.log(singleDiaryEntry);
		allDiary.push(singleDiaryEntry);
		}
	}
	
	let diaryInMonths = [];  // Initialise the object array
	let currentMonthData = [];  // Initialise the object array
	let currentDay = [];  // Initialise the object array
	let singleDayEntry = [];  // Initialise the object array
	
	const firstDiaryDate = new Date(allDiary[0].date);
	
	let dayOfMonth = firstDiaryDate.getDay()-2;
	let currentMonth = firstDiaryDate.getMonth();
	for (let n = 0;n < allDiary.length; n++){
		const currentDiaryDate = new Date(allDiary[n].date);
//		console.log(currentDiaryDate);
		if (currentDiaryDate.getMonth() != currentMonth){
//			console.log(currentMonth);
			// Push month only if the last day's in the future!
			if(currentMonthData[currentMonthData.length-1].fullDate>dateToday){
				diaryInMonths.push(currentMonthData);
			}
			currentMonthData = [];  // Re-initialise the object array
//			console.log(`pushing month ${month[currentMonth]}`);
			if (currentMonth != 11){
				currentMonth++;
				dayOfMonth = 1;
			} else{
				currentMonth = 0;
				dayOfMonth = 1;
			}
		}
		currentDay = allDiary[n];
//		console.log(firstDiaryDate);
//		console.log(currentDay);
		singleDayEntry = {
			fullDate: currentDay.date,
			month: month[currentMonth],
			year: currentDay.date.getFullYear(),
			dayOfMonth: dayOfMonth,
			dayOfWeek: currentDay.day,
			dayOfWeek_num: currentDay.day_num,
			availability: currentDay.availability,
			night_price: currentDay.night_price
		}
		
		currentMonthData.push(singleDayEntry);
		
		dayOfMonth++;
		
	}
	// Push month only if the last day's in the future!
	if(currentMonthData[currentMonthData.length-1].fullDate>dateToday){
		diaryInMonths.push(currentMonthData);
	}

//	console.log(diaryInMonths);
	
	return diaryInMonths;
}
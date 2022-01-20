
/**/

const $slideshowContainer = $('.slideshow-container');

//var selectSlide = document.getElementsByClassName('dot');

//Initialise slide variables
var slideIndex = 0;
var slides = [];


//Call the slide data
const getSlides = async () => {
	
	allSlides = getAllSlideData();
		
	return allSlides;
}


//Slide viewing functions
const executeSlideView = (slideIndex=0) => {
  $slideshowContainer.css("visibility", "visible");
  
  getSlides().then(slides => slides);
  
  slideIndex = checkSlideIndex(slideIndex, slides);
  
  renderSingleSlide(slides, slideIndex);
  document.getElementById("slide-contents").style.display = "block";
  return false;
}

const renderSingleSlide = (slides, slideIndex = 0) => {
  slideIndex = checkSlideIndex(slideIndex, slides);
  
  const currentSlide = slides[slideIndex];
  let slideContent = createSingleSlideHTML(currentSlide);
  
  document.getElementById("slide-contents").innerHTML = slideContent;
}

//Slide viewing HTML helper
const createSingleSlideHTML = (currentSlide) => {
  return `<div class = "numbertext"> ${currentSlide.slide_number} of ${currentSlide.total_slides} </div>
	<img src = "${currentSlide.slide_image}" style = "${currentSlide.style}">
	<div class = "text">${currentSlide.caption}<\div>
    </div>
	`;
}





//Check the slide number is in the correct range
function checkSlideIndex(slideIndex, slides){
  slideIndex = Math.min(slideIndex, slides.length-1);
  slideIndex = Math.max(slideIndex, 0);
  return slideIndex;
}

// Next/previous slide controls
function plusSlides(n) {
  slideIndex = checkSlideIndex(slideIndex += n, slides);
  showSlides(slideIndex);
  return slideIndex;
}

// Current slide image controls
function selectAnySlide(n) {
  slideIndex = checkSlideIndex(slideIndex = n, slides);
  showSlides(slideIndex);
  return slideIndex;
}


//Show slides with dot function
function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  
  var slideIndex = n;
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }


  dots[slideIndex].className += " active";
  executeSlideView(slideIndex);
}







// Initialise month variables
var monthIndex = 0;
var diaryData = [];


//Call the diary data
const getDiary = async () => {
	allDiary = getDiaryData();
	
	return allDiary;
}


/* //Call the slide data
const getSlides = async () => {
	
	allSlides = getAllSlideData();
		
	return allSlides;
}

//Slide viewing functions
const executeSlideView = (slideIndex=0) => {
  $slideshowContainer.css("visibility", "visible");
  
  getSlides().then(slides => slides);
  
  slideIndex = checkSlideIndex(slideIndex, slides);
  
  renderSingleSlide(slides, slideIndex);
  document.getElementById("slide-contents").style.display = "block";
  return false;
}
 */

const showMonth = (monthIndex = 0) => {
//  console.log("getting diary data");
  getDiary().then(diaryData => diaryData);
  
  renderSingleMonth(allDiary, monthIndex);
  return false;
 }

const renderSingleMonth = (diaryData, monthIndex = 0) => {
  
//  console.log(diaryData);
  const currentMonth = diaryData[monthIndex];
//  console.log(currentMonth);
  let monthHTMLContent = createSingleMonthHTML(currentMonth);
  
  document.getElementById("view-month").innerHTML = `${currentMonth[0].month}<br><span style="font-size:18px">${currentMonth[0].year}</span>`;
  document.getElementById("month-contents").innerHTML = monthHTMLContent;
}

//Slide viewing HTML helper
const createSingleMonthHTML = (currentMonth) => {
//  console.log(currentMonth);
  let htmlString = "";  // Initialise the html string
  // Pre-fill blanks incase first let doesn't occur on first day of month
  for (let n = 0;n < currentMonth[0].dayOfMonth-1; n++){
	  htmlString += `<li></li>`;
  }

  // Pre-fill days before first day in month
  for (let n = 0;n < currentMonth[0].dayOfWeek_num-currentMonth[0].dayOfMonth; n++){
	  htmlString += `<li></li>`;
  }
  
  dateToday = new Date();
  //dateToday = new Date('April 19, 2022');  //Force date to check!
  
  for (let n = 0;n < currentMonth.length; n++){
	if(currentMonth[n].fullDate>dateToday){
		if (currentMonth[n].availability){
			if (currentMonth[n].dayOfWeek == "Friday"){
				htmlString += `<li><span class="start">
				  <a href="mailto: thechapel1861@outlook.com?subject=Chapel 1861 Enquiry:  Availability ${currentMonth[n].dayOfMonth} ${currentMonth[n].month} ${currentMonth[n].year}"> ${currentMonth[n].dayOfMonth}
				  <span style="font-size:0.7rem">£${currentMonth[n].night_price}</span></a></span></li>`;
			}
			else{
				htmlString += `<li>${currentMonth[n].dayOfMonth}  <span style="font-size:0.7rem">£${currentMonth[n].night_price}</span></li>`;
			}
  		}
		else{
			htmlString += `<li><span class="active"> ${currentMonth[n].dayOfMonth}</span></li>`;
		}
	}
	else{
			htmlString += `<li><span class="active"> ${currentMonth[n].dayOfMonth}</span></li>`;
	}
  }
					  
  return htmlString;
}


// Next/previous month controls
function plusMonth(n) {
  monthIndex = checkMonthIndex(monthIndex += n, allDiary)
  showMonth(monthIndex);
}

// Month view controls
function selectAnyMonth(n) {
  monthIndex = checkMonthIndex(monthIndex=n, allDiary)
  showMonth(monthIndex);
  return monthIndex;
}

//Check the slide number is in the correct range
function checkMonthIndex(monthIndex, diaryData){
  dateToday = new Date();
  // Check the month index is in the array range
  monthIndex = Math.min(monthIndex, diaryData.length-1);
  monthIndex = Math.max(monthIndex, 0);
  
  // Check the month index is current, i.e. not in the past
  for (let m = monthIndex; m < diaryData.length-2; m++){
    currentMonth = diaryData[m];
    if (dateToday>currentMonth[currentMonth.length-1].fullDate){
	  monthIndex += 1;
    }
	else{break;}
  }
  
  return monthIndex;
}
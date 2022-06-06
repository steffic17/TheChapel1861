const getAllSlideData = () => {
	
	slides = new Array(30);

	slides[0] = {slide_number: 1,total_slides: 30,slide_image: "Images/New For Listing/SQ003 Chapel Outside - Front - 3.jpg",style: "max-height:90vh;max-width:90vw",caption: "The Chapel 1861 in Spring"};
	slides[1] = {slide_number: 2,total_slides: 30,slide_image: "Images/New For Listing/SQ002 Chapel Outside - Front Door - 2.jpg",style: "max-height:90vh;max-width:90vw",caption: "Welcome to The Chapel 1861"};
	slides[2] = {slide_number: 3,total_slides: 30,slide_image: "Images/New For Listing/SQ006 Chapel Inside - Kitchen - 1.jpg",style: "max-height:90vh;max-width:90vw",caption: "Stunning open plan kitchen"};
	slides[3] = {slide_number: 4,total_slides: 30,slide_image: "Images/New For Listing/SQ007 Chapel Inside - Kitchen - 2.jpg",style: "max-height:90vh;max-width:90vw",caption: "Stunning open plan kitchen"};
	slides[4] = {slide_number: 5,total_slides: 30,slide_image: "Images/New For Listing/SQ012 Chapel Inside - Living Area - 2.jpg",style: "max-height:90vh;max-width:90vw",caption: "Open plan living area"};
	slides[5] = {slide_number: 6,total_slides: 30,slide_image: "Images/New For Listing/SQ103 Living Area - Piano.jpg",style: "max-height:90vh;max-width:90vw",caption: "Open plan living area"};
	slides[6] = {slide_number: 7,total_slides: 30,slide_image: "Images/New For Listing/SQ022 Chapel Inside - Atmospheric - 1.jpg",style: "max-height:90vh;max-width:90vw",caption: ""};
	slides[7] = {slide_number: 8,total_slides: 30,slide_image: "Images/New For Listing/SQ104 Living Area - Piano.jpg",style: "max-height:90vh;max-width:90vw",caption: "Baby grand piano"};
	slides[8] = {slide_number: 9,total_slides: 30,slide_image: "Images/New For Listing/SQ101 Living Area - Dining.jpg",style: "max-height:90vh;max-width:90vw",caption: "Open plan dining area"};
	slides[9] = {slide_number: 10,total_slides: 30,slide_image: "Images/New For Listing/SQ023 Chapel Inside - Atmospheric - 2.jpg",style: "max-height:90vh;max-width:90vw",caption: ""};
	slides[10] = {slide_number: 11,total_slides: 30,slide_image: "Images/New For Listing/SQ008 Chapel Inside - Kitchen - 3.jpg",style: "max-height:90vh;max-width:90vw",caption: "6-ring gas hob and double electric oven"};
	slides[11] = {slide_number: 12,total_slides: 30,slide_image: "Images/New For Listing/SQ009 Chapel Inside - Kitchen - 4.jpg",style: "max-height:90vh;max-width:90vw",caption: "6-ring gas hob"};
	slides[12] = {slide_number: 13,total_slides: 30,slide_image: "Images/New For Listing/SQ001 Chapel Outside - Front.jpg",style: "max-height:90vh;max-width:90vw",caption: "The Chapel 1861"};
	slides[13] = {slide_number: 14,total_slides: 30,slide_image: "Images/New For Listing/SQ003 Chapel Outside - Patio - 1.jpg",style: "max-height:90vh;max-width:90vw",caption: "Outside dining area"};
	slides[14] = {slide_number: 15,total_slides: 30,slide_image: "Images/New For Listing/SQ014 Chapel Inside - Landing - 2.jpg",style: "max-height:90vh;max-width:90vw",caption: "Galleried landing"};
	slides[15] = {slide_number: 16,total_slides: 30,slide_image: "Images/New For Listing/SQ015 Chapel Inside - Bedroom - 1.jpg",style: "max-height:90vh;max-width:90vw",caption: "Master suite"};
	slides[16] = {slide_number: 17,total_slides: 30,slide_image: "Images/New For Listing/SQ016 Chapel Inside - Ensuite - 1.jpg",style: "max-height:90vh;max-width:90vw",caption: "Ensuite to master"};
	slides[17] = {slide_number: 18,total_slides: 30,slide_image: "Images/New For Listing/SQ017 Chapel Inside - Bedroom - 2.jpg",style: "max-height:90vh;max-width:90vw",caption: "Bedroom 2"};
	slides[18] = {slide_number: 19,total_slides: 30,slide_image: "Images/New For Listing/SQ018 Chapel Inside - Ensuite - 2.jpg",style: "max-height:90vh;max-width:90vw",caption: "Ensuite to Bedroom 2"};
	slides[19] = {slide_number: 20,total_slides: 30,slide_image: "Images/New For Listing/010 Chapel Inside - Bed 3 - 7.jpg",style: "max-height:90vh;max-width:90vw",caption: "Bedroom 3"};
	slides[20] = {slide_number: 21,total_slides: 30,slide_image: "Images/New For Listing/SQ020 Chapel Inside - Bedroom - 4.jpg",style: "max-height:90vh;max-width:90vw",caption: "Bedroom 4"};
	slides[21] = {slide_number: 22,total_slides: 30,slide_image: "Images/New For Listing/SQ021 Chapel Inside - Bathroom - 1.jpg",style: "max-height:90vh;max-width:90vw",caption: "Family bathroom"};
	slides[22] = {slide_number: 23,total_slides: 30,slide_image: "Images/New For Listing/SQ013 Chapel Inside - Landing - 1.jpg",style: "max-height:90vh;max-width:90vw",caption: "Galleried landing"};
	slides[23] = {slide_number: 24,total_slides: 30,slide_image: "Images/Locality/Coast - Beach - Brancaster.jpg",style: "max-height:90vh;max-width:90vw",caption: "Brancaster Beach (30 minutes drive)"};
	slides[24] = {slide_number: 25,total_slides: 30,slide_image: "Images/Locality/Coast - Dunes - Wells-next-the-Sea.jpg",style: "max-height:90vh;max-width:90vw",caption: "Wells-next-the-Sea Sand Dunes (20 minutes drive)"};
	slides[25] = {slide_number: 26,total_slides: 30,slide_image: "Images/Locality/Fakenham - Church.jpg",style: "max-height:90vh;max-width:90vw",caption: "Fakenham Parish Church"};
	slides[26] = {slide_number: 27,total_slides: 30,slide_image: "Images/Locality/Fakenham - Cinema.jpg",style: "max-height:90vh;max-width:90vw",caption: "Fakenham Corn Hall - Now Cinema (2 minutes walk)"};
	slides[27] = {slide_number: 28,total_slides: 30,slide_image: "Images/Locality/Countryside - Good Weather.jpg",style: "max-height:90vh;max-width:90vw",caption: "North Norfolk Countryside"};
	slides[28] = {slide_number: 29,total_slides: 30,slide_image: "Images/Locality/Countryside - Harvest - Wheat.jpg",style: "max-height:90vh;max-width:90vw",caption: "North Norfolk Wheat Harvest"};
	slides[29] = {slide_number: 30,total_slides: 30,slide_image: "Images/Locality/Countryside - Wheat.jpg",style: "max-height:90vh;max-width:90vw",caption: "North Norfolk Wheat"};
	slides[30] = {slide_number: 31,total_slides: 30,slide_image: "Images/Logo-tall.jpg",style: "max-height:90vh;max-width:90vw",caption: "The Chapel 1861"};

	return slides;
}


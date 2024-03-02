//Create your own resume JSON format...
//For the above JSON, iterate overall for loops( for, for in, for of, for Each)


//........Solution.........//

let myresume = [
    {
	    "details": "Personal Details",
	    "name": "SENTHIL KUMAR",
	    "Contactno": 9655542669,
	    "emailid": "senthilgis.89@gmail.com",
		},
	{
	    "education": "Eeducational Details",
	    "pg": "MSc CS - The Gandhigram Rural University - Dindigul", 
	    "ug": "BSc CS - Madurai Kamaraj University - Madurai", 
	    "HSC": "Mathematics Computer - Government Higher Secondry School",
        "SSLC": "StateBoard - Government High School"
		},
	{
	    "experience": "Experience details",  
	    "totalexperience": 9, 
	    "senior research - 2013-2014": "Tamilnadu Agricultural University - Coibatore",
        "gis engineer 2015 - 2016": "Genesys International Corporation Ltd - Bangalore", 
        "gis analyst 2016-2023": "Viana Technologies Pvt Ltd",
        "gis analyst 2023-present": " IdeaForge Technology-Bangalore" 
		},
    {
        "technical skill": "Software Skills",
        "gis skill": " ArcGIS, AutoCAD, QGIS, Metashape",
        "coding skill": "HTML, CSS, JavaScript, Bootstrab" 
  		},
    {
        "address": "P Thiruvengedapuram, Sivakasi, Virudhunagar, Tmilnadu",

    	},
];

	/*let resume = JSON.stringify(myresume);
	console.log(resume);
	console.log(typeof(resume));*/

//...................For of .................................//	
    for(let resume of myresume){
        console.log(resume);
    }

//..................For In .................................//	
	for(let resume in myresume){
		console.log(resume);
	}

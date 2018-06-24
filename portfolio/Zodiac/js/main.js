var zodiac_group = [
    {
     name:"leo",
     strength:"Creative, passionate, generous, warm-hearted, cheerful, humorous",
     weakness:"Arrogant, stubborn, self-centered, lazy, inflexible",
     img:"img/leo.jpg"
    },
    {
     name:"cancer",
     strength:"Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
     weakness:"Moody, pessimistic, suspicious, manipulative, insecure",
     img:"img/cancer.jpg"
    },
    {
     name:"aquarius",
     strength:"Progressive, original, independent, humanitarian",
     weakness:"Runs from emotional expression, temperamental, uncompromising, aloof",
     img:"img/aquarius.jpg"
    },
    {
     name:"pisces",
     strength:"Compassionate, artistic, intuitive, gentle, wise, musical",
     weakness:"Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
     img:"img/pisces.jpg"
    },
    {
     name:"aries",
     strength:"Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
     weakness:"Impatient, moody, short-tempered, impulsive, aggressive",
     img:"img/aries.jpg"
    },
    {
     name:"taurus",
     strength:"Reliable, patient, practical, devoted, responsible, stable",
     weakness:"Stubborn, possessive, uncompromising",
     img:"img/taurus.jpg"
    },
    {
     name:"gemini",
     strength:"Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
     weakness:"Nervous, inconsistent, indecisive",
     img:"img/gemini.jpg"
    },
    {
     name:"virgo",
     strength:"Loyal, analytical, kind, hardworking, practical",
     weakness:"Shyness, worry, overly critical of self and others, all work and no play",
     img:"img/virgo.jpg"
    },
    {
     name:"libra",
     strength:"Cooperative,diplomatic, gracious, fair-minded, social",
     weakness:"Indecisive, avoids confrontations, will carry a grudge, self-pity",
     img:"img/libra.jpg"
    },
    {
     name:"scorpio",
     strength:"Resourceful, brave, passionate, stubborn, a true friend,handsome as fk",
     weakness:"Distrusting, jealous, secretive, violent",
     img:"img/scorpio.jpg"
    },
    {
     name:"sagittarius",
     strength:"Generous, idealistic, great sense of humor",
     weakness:"Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
     img:"img/sagittarius.jpg"
    },
    {
     name:"capricorn",
     strength:"Responsible, disciplined, self-control, good managers",
     weakness:"Know-it-all, unforgiving, condescending, expecting the worst",
     img:"img/capricorn.jpg"
    }
    // {
    //  name:"",
    //  strength:"",
    //  weakness:""
    // },
]


function zo(){
	var zodiac = document.getElementById('zodiac').value
        zodiac = zodiac.toLowerCase()
	var wrongname = "Please type in correct Zodiac name."
    var your_strength = "Your strength : "
    var your_weakness = "Your weakness : " 
    


	 for (var i = 0; i < zodiac_group.length; i++) {
	 	if (zodiac == zodiac_group[i].name) {
            document.getElementById('zodiac_img').src=zodiac_group[i].img
	 		document.getElementById('strength').innerHTML = your_strength + zodiac_group[i].strength
	 		document.getElementById('weakness').innerHTML = your_weakness + zodiac_group[i].weakness	 	
            return	
	 	}
            document.getElementById('zodiac_img').src=""
            document.getElementById('strength').innerHTML = wrongname
            document.getElementById('weakness').innerHTML = ""     


	 }
		}



document.getElementById('zodiac').onkeypress=function(enter){
    if(enter.keyCode==13){
        document.getElementById('check').click();
    }
}
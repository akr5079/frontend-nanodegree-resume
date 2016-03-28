/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Aharon Robinson");
var awesomeThoughts = "I am Aharon and I am Awesome!";
console.log(awesomeThoughts);
/*var email = "aharonrobinson@gmail.com";
var newEmail = email.replace("robinson@gmail.com",".robinson@outlook.com");
console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("Awesome","Fun");
$("#main").append(funThoughts);
*/
var skills = ["Flying"," Magic"," Dagger Throwing"," Pie Eating"," Whispering" ];
var bio = {"name":"Aharon Robinson","role":"    <b>President of the Galaxy</b>","contactInfo":"aharon.robinson@outlook.com", "pictureURL":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAaXAAAAJDk2YTVmZWE2LTBmMjItNDA2Zi1iMjM3LWIxYjA0OGUwYjhlYg.jpg", "welcomeMessage":"Welcome to Aharon Robinson's JS Resume!","skills":skills};
var work = {"CurrentRole":"Research Engineer" , "CurrentEmployer":"RAT Lab LLC","TimeWorked":"6 Months","EmployerLocation":"Seattle"};
var education = {
    "schools":[
        {"Name":"Penn State University",
        "Degree":"Bachelors of Science",
        "Major":"Electrical Engineering"},
        {"Name":"Penn State Behrend",
        "Degree":"Bachelors of Science",
        "Major":"Electrical Engineering"}],
        "onlineCourses":[
       {"SiteName":"Udacity.com",
        "Course":"Java Script Basics",
        "Year":"2016"},
       {"SiteName":"Coursera.com",
        "Course":"Machine Learning",
        "Year":"2013"}]
};
education["LastSchool"] = "Penn State University";
education["YearsAttended"] = "2009-2013";
education["SchoolCity"] = "State College";

var Projects =  { "Engineering": [{"Name":"Surface Independant Mouse" ,"Description":"Mouse moves in 3D space wrt user gestures","Year":"2012"},{"Name":"Eye Controlled MP3 Player","Description":"User controls a playlist with their eye-gaze. This project used an embedded controller and some coding","Year":"2011"}],"Community":[{"Name":"September Town Hall Meeting","Description":"Gather local residents to talk about community issues and address them to their local representatives","Location":"Seattle","Year":"2016"}], "Charitable":[{"Name":"ESO Erie","Description":"Expaning Social Opportunities for children with learning disabilities","Hours":"400"}]};
//var name = "Aharon Robinson";
//var role = "    <b>President of the Galaxy</b>";
/*var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedSkillsTittle = HTMLskillsStart;
var formattedSkillsList = HTMLskills.replace("%data%",bio.skills);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedContact  =HTMLemail.replace("%data%",bio.contactInfo);
var formattedEmployerName = HTMLworkEmployer.replace("%data%",work.CurrentEmployer);
$("#header").prepend(formattedContact);
$("#header").prepend(formattedSkillsList);
$("#header").prepend(formattedSkillsTittle);
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);

$("#header").append(formattedEmployerName);
$("#header").append(education["LastSchool"]);*/
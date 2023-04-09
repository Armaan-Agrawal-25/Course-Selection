//Main Screen

//Initializes Screen To Main Screen
setScreen("Main_Screen");
//Changes Screen To Registration Screen
onEvent("Registration_Button", "click", function( ) {
  setScreen("Registration_Screen");
});
//Changes Screen To 5 Majors Screen
onEvent("5_Majors_Button", "click", function( ) {
  setScreen("5_Majors_Screen");
});
//Changes Screen To Minors And Additional Majors Screen
onEvent("More_Majors_Minors_Button", "click", function( ) {
  setScreen("Majors_And_Minors_Screen");
});
//Changes To Cofirmation Screen
onEvent("Enter_Button", "click", function( ) {
 setScreen("Confirm_Screen");
});

//Confirm Screen

//Records all text from all dropdowns and inputs; changes screen to congrats screen
onEvent("Yes_Button", "click", function( ) {
  createRecord("Student Course Registration Information", {Student_Full_Name: getText("Enter_Name"), Advisor_Full_Name: getText("Enter_Advisor_Name"), English: getText("English_Drop"), History: getText("History_Drop"), Mathematics: getText("Math_Drop"), Science: getText("Science_Drop"), Language: (getText("Language_Type_Drop") + " " + getText("Language_Level_Drop") + " " + getText("Honors_Or_Not_Drop")), Major_1: (getText("Major_1_Drop") + ", " + getText("Major1_Input")), Major_2: (getText("Major_2_Drop") + ", " + getText("Major2_Input")), Minor_1: (getText("Minor_1_Drop") + ", " + getText("Minor_1_Name")), Minor_2: (getText("Minor_2_Drop") + ", " + getText("Minor_2_Name")), Minor_3: (getText("Minor_3_Drop") + ", " + getText("Minor_3_Name"))}, function(record) {
  });
  setScreen("Congrats_Screen")
});
//Changes Screen To Main Screen
onEvent("No_Button", "click", function( ) {
 setScreen("Main_Screen");
});

//Registration Screen

//Changes Screen To Main Screen
onEvent("Back_To_Main_Screen_From_Registration", "click", function( ) {
  setScreen("Main_Screen");
});

//5 Majors Screen

//Changes Screen To Main Screen
onEvent("Back_To_Main_Screen_From_5_Majors", "click", function( ) {
  setScreen("Main_Screen");
});

//More Majors And Minors Screen

//Changes Screen To Minors Screen
onEvent("Minors_Button", "click", function( ) {
  setScreen("Minors_Screen");
});
//Changes Screen To Majors Screen
onEvent("Majors_Button", "click", function( ) {
  setScreen("Majors_Screen");
});
//Changes Screen To Main Screen
onEvent("Back_To_Main_Screen_From_Majors_And_Minors", "click", function( ) {
  setScreen("Main_Screen");
});

//Minors Screen

//Changes Screen To Minors And Additional Majors Screen
onEvent("Back_To_M&M_From_Minor", "click", function( ) {
  setScreen("Majors_And_Minors_Screen");
});

//Majors Screen

//Changes Screen To Minors And Additional Majors Screen
onEvent("Back_To_M&M_From_Major", "click", function( ) {
  setScreen("Majors_And_Minors_Screen");
});

//Confirmed Screen

//Changes Screen To Main Screen
onEvent("Back_Home_Button", "click", function( ) {
  setScreen("Main_Screen");
});


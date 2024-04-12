    var first = 0.25
    var second = 0.75

    function getIndex() {
        document.getElementById("demo").innerHTML = document.getElementById("mySelect").value;
    }

   // Second Year Credits
   
   function getsecYCredits(){

            var secYcredit1 = parseFloat(document.getElementById("secYcredit1").value);
            var secYcredit2 = parseFloat(document.getElementById("secYcredit2").value);
			var secYcredit3 = parseFloat(document.getElementById("secYcredit3").value);
			var secYcredit4 = parseFloat(document.getElementById("secYcredit4").value);
			var secYcredit5 = parseFloat(document.getElementById("secYcredit5").value);
			var secYcredit6 = parseFloat(document.getElementById("secYcredit6").value);
			
            var secYcreditresult = secYcredit1 + secYcredit2 + secYcredit3 + secYcredit4 + secYcredit5 + secYcredit6;
			
            document.getElementById("secYcreditResult").value = secYcreditresult;
			
	if (secYcreditResult.value != 120){
	  alert("Credits must equal 120");
	  document.getElementById("secYcreditResult").value = "";
	  return false;
    } 
   
   }
   
   // Final Year Credits
   
   function getCredits(){
            var credit1 = parseFloat(document.getElementById("credit1").value);
            var credit2 = parseFloat(document.getElementById("credit2").value);
			var credit3 = parseFloat(document.getElementById("credit3").value);
			var credit4 = parseFloat(document.getElementById("credit4").value);
			var credit5 = parseFloat(document.getElementById("credit5").value);
			
            var creditresult = credit1 + credit2 + credit3 + credit4 + credit5;
			
            document.getElementById("creditResult").value = creditresult;
			
	if (creditResult.value != 120){
	  alert("Credits must equal 120");
	  document.getElementById("creditResult").value = "";
	  return false;
    } 
   
   }
   
   // Main Calculation Function
   
   function getdegreeMark(){
    var secYcredit1 = parseInt(document.getElementById("secYcredit1").value);
	var secYcredit2 = parseInt(document.getElementById("secYcredit2").value);
	var secYcredit3 = parseInt(document.getElementById("secYcredit3").value);
	var secYcredit4 = parseInt(document.getElementById("secYcredit4").value);
	var secYcredit5 = parseInt(document.getElementById("secYcredit5").value);
	var secYcredit6 = parseInt(document.getElementById("secYcredit6").value);
	
    var secYcreditresult = parseFloat(document.getElementById("secYcreditResult").value);
   
    var secYweighted1 = secYcredit1 / secYcreditresult;
	var secYweighted2 = secYcredit2 / secYcreditresult;
	var secYweighted3 = secYcredit3 / secYcreditresult;
	var secYweighted4 = secYcredit4 / secYcreditresult;
	var secYweighted5 = secYcredit5 / secYcreditresult;
	var secYweighted6 = secYcredit6 / secYcreditresult;
  
    var secYm1 = parseInt(document.getElementById("secYm1").value);
	var secYm2 = parseInt(document.getElementById("secYm2").value);
	var secYm3 = parseInt(document.getElementById("secYm3").value);
	var secYm4 = parseInt(document.getElementById("secYm4").value);
	var secYm5 = parseInt(document.getElementById("secYm5").value);
	var secYm6 = parseInt(document.getElementById("secYm6").value);
    
   
    var secYwAvg1 = secYm1 * secYweighted1;
	var secYwAvg2 = secYm2 * secYweighted2;
	var secYwAvg3 = secYm3 * secYweighted3;
	var secYwAvg4 = secYm4 * secYweighted4;
	var secYwAvg5 = secYm5 * secYweighted5;
	var secYwAvg6 = secYm6 * secYweighted6;
    
	var secYMark = secYwAvg1 + secYwAvg2 + secYwAvg3 + secYwAvg4 + secYwAvg5 + secYwAvg6;
	
	document.getElementById("secYmark").value = secYMark; // should be label instead of textbox
	
	var secYlbl = document.getElementById('lblsecondYMark');
	secYlbl.innerHTML = secYMark;
	
	// Final Year Start
	
	var credit1 = parseInt(document.getElementById("credit1").value);
	var credit2 = parseInt(document.getElementById("credit2").value);
	var credit3 = parseInt(document.getElementById("credit3").value);
	var credit4 = parseInt(document.getElementById("credit4").value);
	var credit5 = parseInt(document.getElementById("credit5").value);
	
    var creditresult = parseInt(document.getElementById("creditResult").value); 
   
    var weighted1 = credit1 / creditresult;
	var weighted2 = credit2 / creditresult;
	var weighted3 = credit3 / creditresult;
	var weighted4 = credit4 / creditresult;
	var weighted5 = credit5 / creditresult;
  
    var m1 = parseInt(document.getElementById("m1").value);
	var m2 = parseInt(document.getElementById("m2").value);
	var m3 = parseInt(document.getElementById("m3").value);
	var m4 = parseInt(document.getElementById("m4").value);
	var m5 = parseInt(document.getElementById("m5").value);
    
   
    var wAvg1 = m1 * weighted1;
	var wAvg2 = m2 * weighted2;
	var wAvg3 = m3 * weighted3;
	var wAvg4 = m4 * weighted4;
	var wAvg5 = m5 * weighted5;
    
	var FinalYearMark = wAvg1 + wAvg2 + wAvg3 + wAvg4 + wAvg5;
	
	document.getElementById("finalyearmark").value = FinalYearMark; // should be label instead of textbox
	
	var finalYlbl = document.getElementById('lblfinalYMark');
	finalYlbl.innerHTML = FinalYearMark;
	
	
	
	
	
	// 'Final Degree Mark'
	
	var degreeMark = document.getElementById("degreeResult").value = (first * secYMark) + (second * FinalYearMark);
	
	var grade = document.getElementById("grade");
	
	if ((degreeMark > 39.9) && (degreeMark < 49.5)) {
	  grade.textContent = "'Third' Degree Mark";
	  return false;
    }
	if ((degreeMark > 49.4) && (degreeMark < 59.0)) {
	  grade.textContent = "'Lower Second' Degree Mark (2.2)";
	  return false;
    }
	if ((degreeMark > 58.9) && (degreeMark < 68.5)) {
	  grade.textContent = "'Upper Second' Degree Mark (2.1)";
	  return false;
    }
	if (degreeMark > 68.4){
	  grade.textContent = "'First' Degree Mark";
	  return false;
    }
      
   }
   
   // Modules
   
   function getWebDev(){
    document.getElementById("demo").innerHTML = "kxjvhjfdvdfjnfd";
   
   var Project = document.getElementById("module1label").textContent = "Project";
   var AdvancedWebDevelopment = document.getElementById("module2label").textContent = "Advanced Web Development";
   var InformationSecurityManagement1 = document.getElementById("module3label").textContent = "Information Security Management";
   var MobileDevelopment = document.getElementById("module4label").textContent = "Mobile Development";
   var BusinessManagement1 = document.getElementById("module5label").textContent = "Business Management";
   
    var secYClientServerSystems = document.getElementById("secYmodule1label").textContent = "Client Server Systems";
   var secYNetworkPenetrationTesting = document.getElementById("secYmodule2label").textContent = "Network Penetration Testing";
   var secYNetworkingAndSecurity = document.getElementById("secYmodule3label").textContent = "Networking and security";
   var secYSoftwareArchitectures = document.getElementById("secYmodule4label").textContent = "Software Architectures";
   var secYSoftwareProjectsAgileTechniques = document.getElementById("secYmodule5label").textContent = "Software Projects With Agile Techniques";
   var secYuXEngineering = document.getElementById("secYmodule6label").textContent = "UX Engineering";
   
   }
   function getComputerScience(){
   
   var ComputerGraphics = document.getElementById("module1label").textContent = "Software Project with Agile Techniques";
   var SoftwareManagement = document.getElementById("module2label").textContent = "AI and Data Mining";
   var ProjectCS = document.getElementById("module3label").textContent = "Data Structures and Algorithms";
   var BusinessManagement3 = document.getElementById("module4label").textContent = "Business Management";
   var InformationSecurityManagement3 = document.getElementById("module5label").textContent = "Information Security Management";
   
   var secYSoftwareProjectsAgileTechniques2 = document.getElementById("secYmodule1label").textContent = "Software Projects Agile Techniques";
	var secYAIandDataMining = document.getElementById("secYmodule2label").textContent = "AI And Data Mining";
	var secYDataStructuresAndAlgorithms = document.getElementById("secYmodule3label").textContent = "Data Structures And Algorithms";
	var secYNetworkingAndSecurity2 = document.getElementById("secYmodule4label").textContent = "Networking And Security";
	var secYSoftwareArchitectures2 = document.getElementById("secYmodule5label").textContent = "Software Architectures";
    var secYClientServerSystems2 = document.getElementById("secYmodule6label").textContent = "Client Server Systems";	
   
   }
   function getComputerNetworks(){
   
   var AdvanceRoutingandSwitching = document.getElementById("module1label").textContent = "Advance Routing & Switching";
   var WANandGlobalNetworks = document.getElementById("module2label").textContent = "WAN & Global Networks";
   var BusinessPracticeandEmployability = document.getElementById("module3label").textContent = "Business Practice & Employability";
   var InformationSecurity = document.getElementById("module4label").textContent = "Information Security";
   var ProjectComputerNetworks = document.getElementById("module5label").textContent = "Project Computer Networks";
   
   var secYMobileAndInternetTelevisionStreaming = document.getElementById("secYmodule1label").textContent = "Mobile And Internet Television Streaming";
	var secYPrinciplesAndConceptsOfNetwork = document.getElementById("secYmodule2label").textContent = "Principles And Concepts Of Network Technologies";
	var secYRoutingAndSwitching = document.getElementById("secYmodule3label").textContent = "Routing And Switching";
	var secYDigitalCommunication = document.getElementById("secYmodule4label").textContent = "Digital Communication";
	document.getElementById("secYmodule5label").textContent = "Mobile Networking And Network Simulation";
    var secYSystemAdministration = document.getElementById("secYmodule6label").textContent = "System Administration";

   
   }
   function getSoftwareEngineering(){
   
   var SoftwareEngineering = document.getElementById("module1label").textContent = "Software Engineering";
   var SoftwareQualityManagement = document.getElementById("module2label").textContent = "Software Quality Management";
   var ProjectForSoftwareEngineering = document.getElementById("module3label").textContent = "Project For Software Engineering";
   var InformationSecurityManagement2 = document.getElementById("module4label").textContent = "Information Security Management";
   var BusinessManagement2 = document.getElementById("module5label").textContent = "Business Management";
   
   var secYSoftwareArchitectures3 = document.getElementById("secYmodule1label").textContent = "Software Architectures";
	var secYClientServerSystems3 = document.getElementById("secYmodule2label").textContent = "Client Server Systems";
	var secYDataStructuresAndAlgorithms2 = document.getElementById("secYmodule3label").textContent = "Data Structures And Algorithms";
	var secYSoftwareEvolution = document.getElementById("secYmodule4label").textContent = "Software Evolution";
	var secYNetworkingAndSecurity3 = document.getElementById("secYmodule5label").textContent = "Networking And Security";
    var secYSoftwareProjectsAgileTechniques3 = document.getElementById("secYmodule6label").textContent = "Software Projects Agile Techniques";
   
   }
   
      
   
   // Second Year Buttons

   document.getElementById('secYcalcCredits').addEventListener('click', getsecYCredits, false);
   document.getElementById('calcdegreeMark').addEventListener('click', getdegreeMark, false);

     
   // Final Year Button

   document.getElementById('calcCredits').addEventListener('click', getCredits, false);
   
   
   // Function that gets Degree Modules.
   
   function selectDegree() {
        let degree = document.getElementById("degreeDropdown").value;
        switch(degree) {
          case "Web Development":
            result = getWebDev();
            break;
          case "Computer Science":
            result = getComputerScience();
            break;
          case "Computer Networks":
            result = getComputerNetworks();
            break;
          case "Software Engineering":
            result = getSoftwareEngineering();
            break;
          default:
            result = "NONE";
        }
        return result;
   }
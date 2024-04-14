    var first = 0.25;
    var second = 0.75;

   function getSecondYearMark(totalCredits){
      let secondYMark = 0;
      let secYcreditClasses = document.getElementsByClassName("secYcredit");
      let secCreditArray = Array.prototype.slice.call(secYcreditClasses);
      let secYmClasses = document.getElementsByClassName("secondYModule");
      let secYmoduleArray = Array.prototype.slice.call(secYmClasses);

      for (let i = 0; i < secYmoduleArray.length; i++) {
          let secYweighted = parseInt(secCreditArray[i].value) / totalCredits;
          let secYwAvg = parseInt(secYmoduleArray[i].value) * secYweighted;
          secondYMark += secYwAvg;
      }
    return secondYMark;
   }
   function getFinalYearMark(totalCredits){
    let finalYMark = 0;
    let finalYcreditClasses = document.getElementsByClassName("finalYcredit");
    let finalCreditArray = Array.prototype.slice.call(finalYcreditClasses);
    let finalYmClasses = document.getElementsByClassName("finalYModule");
    let finalYmoduleArray = Array.prototype.slice.call(finalYmClasses);

    for (let i = 0; i < finalYmoduleArray.length; i++) {
      let finalYweighted = parseInt(finalCreditArray[i].value) / totalCredits;
      let finalYwAvg = parseInt(finalYmoduleArray[i].value) * finalYweighted;
      finalYMark += finalYwAvg;
    }
    return finalYMark;
   }
   
   // Main Calculation Function.
   function getDegreeMark(){
        if(document.getElementById("degreeDropdown").value == "--"){
            alert("Please select a Programme Course!")
            return false;
        };

        let totalCredits = 120;
        
        // Second Year Mark.
        secondYMark = getSecondYearMark(totalCredits);
        document.getElementById('lblsecondYMark').innerHTML = secondYMark;

        // Final Year Mark.
        finalYMark = getFinalYearMark(totalCredits);
        document.getElementById('lblfinalYMark').innerHTML = finalYMark;

        // 'Final Degree Mark'.
        let degreeMark = document.getElementById("degreeResult").value = (first * secondYMark) + (second * finalYMark);
        
        let grade = document.getElementById("grade");
        
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
   
   // Degree Module Names.
   function getWebDev(){
      document.getElementById("module1label").textContent = "Project";
      document.getElementById("module2label").textContent = "Advanced Web Development";
      document.getElementById("module3label").textContent = "Information Security Management";
      document.getElementById("module4label").textContent = "Mobile Development";
      document.getElementById("module5label").textContent = "Business Management";
      
      document.getElementById("secYmodule1label").textContent = "Client Server Systems";
      document.getElementById("secYmodule2label").textContent = "Network Penetration Testing";
      document.getElementById("secYmodule3label").textContent = "Networking and security";
      document.getElementById("secYmodule4label").textContent = "Software Architectures";
      document.getElementById("secYmodule5label").textContent = "Software Projects With Agile Techniques";
      document.getElementById("secYmodule6label").textContent = "UX Engineering";
   
   }
   function getComputerScience(){
      document.getElementById("module1label").textContent = "Software Project with Agile Techniques";
      document.getElementById("module2label").textContent = "AI and Data Mining";
      document.getElementById("module3label").textContent = "Data Structures and Algorithms";
      document.getElementById("module4label").textContent = "Business Management";
      document.getElementById("module5label").textContent = "Information Security Management";
      
      document.getElementById("secYmodule1label").textContent = "Software Projects Agile Techniques";
      document.getElementById("secYmodule2label").textContent = "AI And Data Mining";
      document.getElementById("secYmodule3label").textContent = "Data Structures And Algorithms";
      document.getElementById("secYmodule4label").textContent = "Networking And Security";
      document.getElementById("secYmodule5label").textContent = "Software Architectures";
      document.getElementById("secYmodule6label").textContent = "Client Server Systems";	
   
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
     
   // Calculate final total Button.
   document.getElementById('calcdegreeMark').addEventListener('click', getDegreeMark);
   
   // Function that gets calls selected Degree.
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
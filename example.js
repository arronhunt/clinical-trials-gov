const ClinicalTrial = require("./src/");

ClinicalTrial.search({ condition: "Asthma" }).then((studies) => {
  studies.forEach((study, index) => {
    console.log(index, study.title);
  });
});

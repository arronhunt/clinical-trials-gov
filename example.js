const ClinicalTrial = require("./src/");

ClinicalTrial.search({ condition: "Asthma" }).then(studies => {
  console.table(studies, ["order", "nct_id", "title"]);
});

ClinicalTrial.searchConditions("asthma").then(console.log);

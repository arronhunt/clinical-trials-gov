const https = require("https");
const parseString = require("xml2js").parseString;

const URL = "https://clinicaltrials.gov/ct2";

/**
 * Clinical trials
 */
class ClinicalTrial {
  /**
   * Search for clinical trials using search criteria
   * @param {Object} props
   * @param {string} [props.status=open] - Specify whether you want to search for studies that are recruiting participants or in other stages.
   * @param {string} [props.condition] - Specify the disease, disorder, syndrome, illness, or injury that is being studied. On ClinicalTrials.gov, conditions may also include other health-related issues such as lifespan, quality of life, and health risks.
   * @param {string} [props.terms] - Specify words or phrases related to the studies you want to find. This performs a general search of the study information, including the title, brief description, conditions, interventions, and locations. Also use this field to find studies by NCT number.
   * @param {string} [props.country=US] - Studies are often conducted in many locations around the world. Use this field to select up to three locations to search for studies. For the United States, you can narrow your search by selecting a state.
   * @param {string} [props.state] - The state withing the United States you would like to search.
   * @param {string} [props.gender] - Search by the sex of persons who may participate in a study.
   * @param {bool} [props.healthy=true] - Limit your search to studies which accept healthy participants (people who do not have the condition or related conditions or symptoms being studies).
   * @param {number} [props.count=25] - Number of results to return. Default is 25.
   * @param {number} [props.offset] - The offset index used for pagination.
   * @returns {Object}
   */
  static search(props) {
    let query = `${URL}/results?displayxml=true`;
    if (props) {
      query += `&recr=${props.status || "open"}`;
      query += `&cond=${props.condition || ""}`;
      query += `&term=${props.terms || ""}`;
      query += `&cntry1=NA:${props.country || "US"}`;
      props.state &&
        (query += `&state1=NA:${props.country || "US"}:${props.state}`);
      query += `&gndr=${props.gender || ""}`;
      query += `&hlth=${props.healthy ? "Y" : "N"}`;
      query += `&count=${props.count || 25}`;
      query += `&start=${props.offset || 1}`;
    }

    return httpGetAsync(query).then(
      result => result.search_results.clinical_study
    );
  }

  /**
   * Search the conditions and diseases list
   * @param {string} search_query - Search query. E.g. "Cancer"
   * @returns {array}
   */
  static searchConditions(search_query) {
    let query = `${URL}/rpc/extend/cond`;
    query += `?cond=${search_query}`;

    return httpGetAsync(query, false);
  }

  /**
   * Get details for a specific trial from a ClinicalTrials.gov Identifier
   * @param {string} id - ClinicalTrials.gov Identifier
   * @returns {object}
   */
  static getDetails(id) {
    let query = `${URL}/show/${id}`;
    query += "?displayxml=true";

    // return this.request(query).then(result => result.clinical_study);
    return httpGetAsync(query).then(result => result.clinical_study);
  }
}

/*
 * Parse response XML and return formatted JSON
 */
const parseXML = xml => {
  let response;
  parseString(
    xml,
    {
      explicitArray: false,
      mergeAttrs: true,
      normalize: true
    },
    (err, result) => {
      if (!err) {
        response = result;
      } else {
        throw err;
      }
    }
  );
  return response;
};

/*
 * Make an async request using https
 */
const httpGetAsync = (query, parse_xml = true) => {
  return new Promise((resolve, reject) => {
    const request = https.get(query, response => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(
          new Error("Failed to load page, status code: " + response.statusCode)
        );
      }
      let data = "";
      response.on("data", chunk => {
        data += chunk;
      });
      response.on("end", () => {
        resolve(parse_xml ? parseXML(data) : data);
      });
    });
    request.on("error", error => reject(error));
  });
};

module.exports = ClinicalTrial;

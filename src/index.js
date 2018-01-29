const fetch = require('node-fetch');
const parseString = require('xml2js').parseString;

const URL = "https://clinicaltrials.gov/ct2";

/**
 * Clinical trials
 */
class ClinicalTrial {

    /*
    * Internal request function that parses xml response and returns a JSON result
    */
    static async request(query) {
        return new Promise(resolve => {
            fetch(query)
            .then(response => response.text())
            .then(xml => {
                parseString(xml, {explicitArray: false}, function (err, result) {
                    if (err) {
                        throw err;
                    } else {
                        resolve(result);
                    }
                }); 
            });
        });
    }

    /**
     * @typedef {object} SearchProps
     * @param {string} status - Specify whether you want to search for studies that are recruiting participants or in other stages.
     * @param {string} condition - Specify the disease, disorder, syndrome, illness, or injury that is being studied. On ClinicalTrials.gov, conditions may also include other health-related issues such as lifespan, quality of life, and health risks.
     * @param {string} terms - Specify words or phrases related to the studies you want to find. This performs a general search of the study information, including the title, brief description, conditions, interventions, and locations. Also use this field to find studies by NCT number.
     * @param {string} country - Studies are often conducted in many locations around the world. Use this field to select up to three locations to search for studies. For the United States, you can narrow your search by selecting a state.
     * @param {string} gender - Search by the sex of persons who may participate in a study.
     * @param {string} healthy - Limit your search to studies which accept healthy participants (people who do not have the condition or related conditions or symptoms being studies).
     * @param {number} count - Number of results to return. Default is 25.
     */

    /**
     * Search for clinical trials using search criteria
     * @param {SearchProps} props
     * @returns {object}
     */
    static search(props) {
        let query = `${URL}/results`;
        query += '?displayxml=true';
        query += `&recr=${props.status || 'open'}`;
        query += `&cond=${props.condition || ''}`;
        query += `&term=${props.terms || ''}`;
        query += `&cntry1=NA:${props.country || 'US'}`;
        query += `&state1=NA:${props.country || 'US'}:${props.state || 'CA'}`;
        query += `&gndr=${props.gender || ''}`;
        query += `&hlth=${props.healthy ? 'Y' : 'N'}`;
        query += `&count=${props.count || 25}`;

        return this.request(query).then(result => result.search_results.clinical_study);
    }

    /**
     * Search the conditions and diseases list
     * @param {string} search_query - Search query. E.g. "Cancer"
     * @returns {array}
     */
    static searchConditions(search_query) {
        let query = `${URL}/rpc/extend/cond`;
        query += `?cond=${search_query}`;

        return fetch(query).then(resp => resp.text()).then(JSON.parse);
    }

    /**
     * Get details for a specific trial from a ClinicalTrials.gov Identifier
     * @param {string} id - ClinicalTrials.gov Identifier
     * @returns {object}
     */
    static getDetails(id) {
        let query = `${URL}/show/${id}`;
        query += '?displayxml=true';

        return this.request(query).then(result => result.clinical_study);
    }
}

module.exports = ClinicalTrial;
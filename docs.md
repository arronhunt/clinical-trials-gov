<a name="ClinicalTrial"></a>

## ClinicalTrial
Clinical trials

**Kind**: global class  

* [ClinicalTrial](#ClinicalTrial)
    * [.search(props)](#ClinicalTrial.search) ⇒ <code>Object</code>
    * [.searchConditions(search_query)](#ClinicalTrial.searchConditions) ⇒ <code>array</code>
    * [.getDetails(id)](#ClinicalTrial.getDetails) ⇒ <code>object</code>

<a name="ClinicalTrial.search"></a>

### ClinicalTrial.search(props) ⇒ <code>Object</code>
Search for clinical trials using search criteria

**Kind**: static method of [<code>ClinicalTrial</code>](#ClinicalTrial)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>Object</code> |  |  |
| [props.status] | <code>string</code> | <code>&quot;open&quot;</code> | Specify whether you want to search for studies that are recruiting participants or in other stages. |
| [props.condition] | <code>string</code> |  | Specify the disease, disorder, syndrome, illness, or injury that is being studied. On ClinicalTrials.gov, conditions may also include other health-related issues such as lifespan, quality of life, and health risks. |
| [props.terms] | <code>string</code> |  | Specify words or phrases related to the studies you want to find. This performs a general search of the study information, including the title, brief description, conditions, interventions, and locations. Also use this field to find studies by NCT number. |
| [props.country] | <code>string</code> | <code>&quot;US&quot;</code> | Studies are often conducted in many locations around the world. Use this field to select up to three locations to search for studies. For the United States, you can narrow your search by selecting a state. |
| [props.state] | <code>string</code> |  | The state withing the United States you would like to search. |
| [props.gender] | <code>string</code> |  | Search by the sex of persons who may participate in a study. |
| [props.healthy] | <code>bool</code> | <code>true</code> | Limit your search to studies which accept healthy participants (people who do not have the condition or related conditions or symptoms being studies). |
| [props.count] | <code>number</code> | <code>25</code> | Number of results to return. Default is 25. |
| [props.offset] | <code>number</code> |  | The offset index used for pagination. |

<a name="ClinicalTrial.searchConditions"></a>

### ClinicalTrial.searchConditions(search_query) ⇒ <code>array</code>
Search the conditions and diseases list

**Kind**: static method of [<code>ClinicalTrial</code>](#ClinicalTrial)  

| Param | Type | Description |
| --- | --- | --- |
| search_query | <code>string</code> | Search query. E.g. "Cancer" |

<a name="ClinicalTrial.getDetails"></a>

### ClinicalTrial.getDetails(id) ⇒ <code>object</code>
Get details for a specific trial from a ClinicalTrials.gov Identifier

**Kind**: static method of [<code>ClinicalTrial</code>](#ClinicalTrial)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ClinicalTrials.gov Identifier |


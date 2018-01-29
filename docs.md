## Classes

<dl>
<dt><a href="#ClinicalTrial">ClinicalTrial</a></dt>
<dd><p>Clinical trials</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#SearchProps">SearchProps</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="ClinicalTrial"></a>

## ClinicalTrial
Clinical trials

**Kind**: global class  

* [ClinicalTrial](#ClinicalTrial)
    * [.search(props)](#ClinicalTrial.search) ⇒ <code>object</code>
    * [.searchConditions(search_query)](#ClinicalTrial.searchConditions) ⇒ <code>array</code>
    * [.getDetails(id)](#ClinicalTrial.getDetails) ⇒ <code>object</code>

<a name="ClinicalTrial.search"></a>

### ClinicalTrial.search(props) ⇒ <code>object</code>
Search for clinical trials using search criteria

**Kind**: static method of [<code>ClinicalTrial</code>](#ClinicalTrial)  

| Param | Type |
| --- | --- |
| props | [<code>SearchProps</code>](#SearchProps) | 

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

<a name="SearchProps"></a>

## SearchProps : <code>object</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | Specify whether you want to search for studies that are recruiting participants or in other stages. |
| condition | <code>string</code> | Specify the disease, disorder, syndrome, illness, or injury that is being studied. On ClinicalTrials.gov, conditions may also include other health-related issues such as lifespan, quality of life, and health risks. |
| terms | <code>string</code> | Specify words or phrases related to the studies you want to find. This performs a general search of the study information, including the title, brief description, conditions, interventions, and locations. Also use this field to find studies by NCT number. |
| country | <code>string</code> | Studies are often conducted in many locations around the world. Use this field to select up to three locations to search for studies. For the United States, you can narrow your search by selecting a state. |
| gender | <code>string</code> | Search by the sex of persons who may participate in a study. |
| healthy | <code>bool</code> | Limit your search to studies which accept healthy participants (people who do not have the condition or related conditions or symptoms being studies). |
| count | <code>number</code> | Number of results to return. Default is 25. |


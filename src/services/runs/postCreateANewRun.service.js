import { spec } from "pactum";

/**
 * Method to create a new Test Run in Qase
 * @param {*} projectCode - Qase project code
 * @param {*} testRunName - Qase test run name
 * @param {*} descriptionTestRunName - Qase description Test Run Name
 */
export default async function postCreateANewRun(projectCode, testRunName, descriptionTestRunName) {
  await spec()
    .post(`https://api.qase.io/v1/run/${projectCode}`)
    .withHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    })
    .withQueryParams({
      limit: 10,
      offset: 0
    })
    .withBody({
      "title": `${testRunName}`,
      "description": `${descriptionTestRunName}`,
      "include_all_cases": false
    })
}

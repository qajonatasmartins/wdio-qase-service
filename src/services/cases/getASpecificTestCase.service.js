import { spec } from "pactum";

/**
 * Method to fetch a specific test case by ID
 * @param {*} projectCode - Qase project code
 * @param {*} testCaseId - Qase test Case Id
 */
export default async function getASpecificTestCase(projectCode, testCaseId) {
    return await spec()
        .post(`https://api.qase.io/v1/case/${projectCode}/${testCaseId}`)
        .withHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
}

import { spec } from "pactum";

/**
 * Method to fetch a specific test case by ID
 * @param {*} projectCode - Qase project code
 * @param {*} idRun - Qase test Case Id
 */
export default async function postCreateTestRunResult(projectCode, idRun, isDefect, payloadStepByStep) {
    return await spec()
        .post(`https://api.qase.io/v1/result/${projectCode}/${idRun}`)
        .withHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
        .withBody({
            "case_id": 1,
            "status": "failed",
            "time_ms": timestamp,
            "case": {
                "title": "[CT1] - Validar o login no admin"
            },
            "defect": isDefect,
            "steps": [
                payloadStepByStep
            ]
        })
}

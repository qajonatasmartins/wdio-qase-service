import { spec } from "pactum";

export default async function postCreateANewRun() {
  await spec().post("");
}

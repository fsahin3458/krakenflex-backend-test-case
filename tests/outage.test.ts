import { jest } from "@jest/globals";
import { mockedOutages } from "./mocks";
import * as outage from "../src/services/outage";
import { AxiosResponse } from "axios";

describe("getOutages()", () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });
  it("should test mock result for getOutages()", async () => {

    // spying GET request
    const spy = jest.spyOn(outage, "getOutages").mockResolvedValue(mockedOutages);

    const result = await outage.getOutages();
    expect(result).toEqual(mockedOutages);

    // restore the original function after the test
     spy.mockRestore();
  });

  afterAll(() => {
    jest.resetModules();
  });
});

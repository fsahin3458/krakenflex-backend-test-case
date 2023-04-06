import { jest } from "@jest/globals";
import { mockedSiteInfo } from "./mocks";
import * as siteInfo from "../src/services/siteInfo";
import { AxiosResponse } from "axios";
import { config } from "../resource/config";

describe("getSiteInfo", () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });
  it("should test mock result for getOutages()", async () => {
    // spying GET request
    const spy = jest
      .spyOn(siteInfo, "getSiteInfo")
      .mockResolvedValue(mockedSiteInfo);

    const result = await siteInfo.getSiteInfo(config.SITE);
    expect(result).toEqual(mockedSiteInfo);

    // restore the original function after the test
    spy.mockRestore();
  });

  afterAll(() => {
    jest.resetModules();
  });
});

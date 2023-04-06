import { filterOutagesByDeviceAndBeginDate } from "../src/services/filter";
import { mockedOutages, mockedSiteInfo, mockedFilteredOutages } from "./mocks";

describe("filterOutagesByDeviceAndBeginDate()", () => {
  it("should get all mocked result", () => {
    const filteredOutages = filterOutagesByDeviceAndBeginDate(
      mockedOutages,
      mockedSiteInfo,
      "2022-01-01T00:00:00.000Z"
    );
    expect(filteredOutages).toEqual(mockedFilteredOutages);
  });

  it("should return specific result array matching outages", () => {
    const filteredOutages = filterOutagesByDeviceAndBeginDate(
      mockedOutages,
      mockedSiteInfo,
      "2023-01-01T00:00:00.000Z"
    );
    const filteredOutagesResult = [
      {
        id: "75e96db4-bba2-4035-8f43-df2cbd3da859",
        begin: "2023-05-11T14:35:15.359Z",
        end: "2023-12-27T11:19:19.393Z",
        name: "Battery 8",
      },
    ];
    expect(filteredOutages).toEqual(filteredOutagesResult);
  });

  it("should return an empty array if there are no matching outages", () => {
    const filteredOutages = filterOutagesByDeviceAndBeginDate(
      mockedOutages,
      mockedSiteInfo,
      "2024-01-01T00:00:00.000Z"
    );
    expect(filteredOutages).toEqual([]);
  });
});

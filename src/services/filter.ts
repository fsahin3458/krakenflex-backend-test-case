import { Outage, OutageWithDevice, SiteInfo } from "../schemas";

const filterOutagesByDevice = (deviceIds: string[]) => (outage: Outage) => {
  return deviceIds.includes(outage.id);
};

const filterByBeginDate = (start: string) => (outage: Outage) => {
  const startDate = new Date(start);
  const outageBeginDate = new Date(outage.begin);
  return outageBeginDate.getTime() >= startDate.getTime();
};

const attachDeviceNameIntoOutage = (siteInfo: SiteInfo) => (outage: Outage) => {
  const device = siteInfo.devices.find(
    (deviceFromSiteInfo) => deviceFromSiteInfo.id === outage.id
  );
  return { ...outage, name: device?.name ?? "" };
};

export const filterOutagesByDeviceAndBeginDate = (
  outages: Outage[],
  siteInfo: SiteInfo,
  startDate: string
): OutageWithDevice[] => {
  const deviceIds = siteInfo.devices.map((device) => device.id);

  return outages
    .filter(filterByBeginDate(startDate))
    .filter(filterOutagesByDevice(deviceIds))
    .map(attachDeviceNameIntoOutage(siteInfo))
    .filter((outage) => !!outage.name);
};

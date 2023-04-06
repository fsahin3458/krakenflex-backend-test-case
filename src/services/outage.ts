import { logger } from "../utils/logger";
import { httpClient } from "../utils/http";
import { Outage, OutageWithDevice } from "../schemas/outage";

export async function getOutages(): Promise<Outage[]> {
  try {
    const response = await httpClient.get<Outage[]>("/outages");
    logger.debug("Getting outages...", response.data);
    return response.data;
  } catch (e) {
    logger.error(e);
    throw Error("Error occured while getting outages!");
  }
}

export async function postOutages(
  siteId: string,
  outages: OutageWithDevice[]
): Promise<void> {
  try {
    await httpClient.post(`/site-outages/${siteId}`, outages);
    logger.debug(`Outages posted to /site-outages/${siteId}`, outages);
  } catch (e) {
    logger.error(e);
    throw Error(
      `Error occured while posting outages to /site-outages/${siteId}!`
    );
  }
}

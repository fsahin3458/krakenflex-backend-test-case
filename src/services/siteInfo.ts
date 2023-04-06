import { logger } from "../utils/logger";
import { httpClient } from "../utils/http";
import { SiteInfo } from "../schemas/siteInfo";

export async function getSiteInfo(siteId: string): Promise<SiteInfo> {
  try {
    const response = await httpClient.get<SiteInfo>(`/site-info/${siteId}`);
    logger.debug(`Getting sito info for ${siteId}`, response.data);
    return response.data;
  } catch (error) {
    logger.error(error);
    throw Error(
      `Error occured while getting site info from /site-info/${siteId}`
    );
  }
}

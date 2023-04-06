import { config } from "./resource/config";
import { logger } from "./src/utils/logger";
import {
  getOutages,
  getSiteInfo,
  filterOutagesByDeviceAndBeginDate,
  postOutages,
} from "./src/services";
import { sleep } from "./src/utils/sleep";

async function main() {
  try {
    const outages = await getOutages();

    const site = config.SITE;
    const siteInfo = await getSiteInfo(site);

    const filteredOutages = filterOutagesByDeviceAndBeginDate(
      outages,
      siteInfo,
      config.MILESTONE_DATE
    );

    await postOutages(site, filteredOutages);
    logger.info(`Outages successfully posted for ${site}!`);
    await sleep(10);
  } catch (error) {
    logger.error("Error occurred while running service...", error);
    await sleep(10);
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });

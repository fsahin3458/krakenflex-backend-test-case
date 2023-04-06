# KrakenFlex Back End Test Case
Your task is to write a small program that:

1. Retrieves all outages from the `GET /outages` endpoint
2. Retrieves information from the `GET /site-info/{siteId}` endpoint for the site with the ID `norwich-pear-tree`
3. Filters out any outages that began before `2022-01-01T00:00:00.000Z` or don't have an ID that is in the list of
   devices in the site information
4. For the remaining outages, it should attach the display name of the device in the site information to each appropriate outage
5. Sends this list of outages to `POST /site-outages/{siteId}` for the site with the ID `norwich-pear-tree`

## Develop
```sh
npm install
npm run dev
```

## Run

For running application:
```sh
npm install
npm run start
```

Example running project with env values:
```sh
API_KEY={{SOMEAPI-KEY}} LOG_LEVEL={{SOME-LOG-LEVEL/error,info,debug}} npm run start 
```

## Build
```sh
npm run build
```

## Test
Test for all running cases:
```sh
npm test
```
Just for specific scenarios:
```sh
npm install --global jest
jest test/SPECIFIC-TEST-FILE.test.js
```

## Lint
```sh
npm run lint
```

## Format
```sh
npm run format
```

## Configure

These values are set to config and it can change easily & set from env.

- `API_BASE_URL`: Base URL for the KrakenFlex test API.
- `API_KEY`: API-KEY to validate credentials for KrakenFlex test API.`.
- `SITE`: the string that specifies a site.
- `MILESTONE_DATE`: the date that filters out any outages that began before
- `LOG_LEVEL`: log level, default: 'info'
- `HTTP_RETRY_COUNT`: axios retry count 

## Plugins

The case study is currently extended with the following plugins. They are linked below.

| Plugin | README |
| ------ | ------ |
| Axios | https://www.npmjs.com/package/axios |
| Jest |https://www.npmjs.com/package/jest |
| Winston | https://www.npmjs.com/package/winston |




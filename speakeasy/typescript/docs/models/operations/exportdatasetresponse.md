# ExportDatasetResponse


## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | HTTP response content type for this operation                                                                                          |
| `statusCode`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | HTTP response status code for this operation                                                                                           |
| `rawResponse`                                                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                  | :heavy_check_mark:                                                                                                                     | Raw HTTP response; suitable for custom response parsing                                                                                |
| `body`                                                                                                                                 | *Uint8Array*                                                                                                                           | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `defaultApplicationJsonObject`                                                                                                         | [operations.ExportDatasetNativeResponseBody](../../models/operations/exportdatasetnativeresponsebody.md)                               | :heavy_minus_sign:                                                                                                                     | Default Response.                                                                                                                      |
| `defaultApplicationLdPlusJsonObject`                                                                                                   | [operations.ExportDatasetNativeResponseDefaultResponseBody](../../models/operations/exportdatasetnativeresponsedefaultresponsebody.md) | :heavy_minus_sign:                                                                                                                     | Default Response.                                                                                                                      |
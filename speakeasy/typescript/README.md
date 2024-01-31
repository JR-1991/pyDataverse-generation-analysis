# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PyDataverse } from "openapi";

async function run() {
    const sdk = new PyDataverse({
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const persistentId = "string";
    const exporter = "string";

    const result = await sdk.native.exportDataset(persistentId, exporter);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [native](docs/sdks/native/README.md)

* [exportDataset](docs/sdks/native/README.md#exportdataset)
* [getAssignments](docs/sdks/native/README.md#getassignments)
* [createAssignment](docs/sdks/native/README.md#createassignment)
* [getDataset](docs/sdks/native/README.md#getdataset)
* [deleteDataset](docs/sdks/native/README.md#deletedataset)
* [getDatasetByPid](docs/sdks/native/README.md#getdatasetbypid)
* [addFileToDataset](docs/sdks/native/README.md#addfiletodataset)
* [destroyDataset](docs/sdks/native/README.md#destroydataset)
* [editVersionMetadata](docs/sdks/native/README.md#editversionmetadata)
* [getPrivateUrlData](docs/sdks/native/README.md#getprivateurldata)
* [createPrivateUrl](docs/sdks/native/README.md#createprivateurl)
* [deletePrivateUrl](docs/sdks/native/README.md#deleteprivateurl)
* [listVersions](docs/sdks/native/README.md#listversions)
* [getVersion](docs/sdks/native/README.md#getversion)
* [updateDraftVersion](docs/sdks/native/README.md#updatedraftversion)
* [deleteDraftVersion](docs/sdks/native/README.md#deletedraftversion)
* [viewDataverse](docs/sdks/native/README.md#viewdataverse)
* [addDataverse](docs/sdks/native/README.md#adddataverse)
* [deleteDataverse](docs/sdks/native/README.md#deletedataverse)
* [publishDataverse](docs/sdks/native/README.md#publishdataverse)
* [listContent](docs/sdks/native/README.md#listcontent)
* [importDataset](docs/sdks/native/README.md#importdataset)
* [listFacets](docs/sdks/native/README.md#listfacets)
* [setFacets](docs/sdks/native/README.md#setfacets)
* [listRoles](docs/sdks/native/README.md#listroles)
* [createRole](docs/sdks/native/README.md#createrole)
* [getFileData](docs/sdks/native/README.md#getfiledata)
* [deleteFileInDataset](docs/sdks/native/README.md#deletefileindataset)
* [updateFileMetadata](docs/sdks/native/README.md#updatefilemetadata)
* [redetectDatafile](docs/sdks/native/README.md#redetectdatafile)
* [reingest](docs/sdks/native/README.md#reingest)
* [replaceFileInDataset](docs/sdks/native/README.md#replacefileindataset)
* [restrictFileInDataset](docs/sdks/native/README.md#restrictfileindataset)
* [uningestDatafile](docs/sdks/native/README.md#uningestdatafile)
* [getTermsOfUse](docs/sdks/native/README.md#gettermsofuse)
* [getServer](docs/sdks/native/README.md#getserver)
* [getInfo](docs/sdks/native/README.md#getinfo)
* [list](docs/sdks/native/README.md#list)
* [getBlock](docs/sdks/native/README.md#getblock)
* [createNewRole](docs/sdks/native/README.md#createnewrole)
* [viewRole](docs/sdks/native/README.md#viewrole)
* [deleteRole](docs/sdks/native/README.md#deleterole)
* [getAuthenticatedUserByToken](docs/sdks/native/README.md#getauthenticateduserbytoken)
* [getTokenExpirationDate](docs/sdks/native/README.md#gettokenexpirationdate)
* [deleteToken](docs/sdks/native/README.md#deletetoken)
* [recreateToken](docs/sdks/native/README.md#recreatetoken)
<!-- End Available Resources and Operations [operations] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { PyDataverse } from "openapi";

async function run() {
    const sdk = new PyDataverse({
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const identifier = "string";
    const key = "string";
    const requestBody = new TextEncoder().encode("0x88E3C10aa1");

    const result = await sdk.native.createAssignment(identifier, key, requestBody);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { PyDataverse } from "openapi";

async function run() {
    const sdk = new PyDataverse({
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const persistentId = "string";
    const exporter = "string";

    let result;
    try {
        result = await sdk.native.exportDataset(persistentId, exporter);
    } catch (err) {
        // Handle errors here
        throw err;
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://dvn-cloud-app-1.lib.harvard.edu:8080/` | None |
| 1 | `http://dvn-cloud-app-1.lib.harvard.edu:8009/` | None |
| 2 | `https://dvn-cloud-app-1.lib.harvard.edu:8181/` | None |

```typescript
import { PyDataverse } from "openapi";

async function run() {
    const sdk = new PyDataverse({
        serverIdx: 2,
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const persistentId = "string";
    const exporter = "string";

    const result = await sdk.native.exportDataset(persistentId, exporter);

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { PyDataverse } from "openapi";

async function run() {
    const sdk = new PyDataverse({
        serverURL: "http://dvn-cloud-app-1.lib.harvard.edu:8080/",
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const persistentId = "string";
    const exporter = "string";

    const result = await sdk.native.exportDataset(persistentId, exporter);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { PyDataverse } from "openapi";
import { HTTPClient } from "openapi/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new PyDataverse({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `apiKeyAuth` | apiKey       | API key      |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { PyDataverse } from "openapi";

async function run() {
    const sdk = new PyDataverse({
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const persistentId = "string";
    const exporter = "string";

    const result = await sdk.native.exportDataset(persistentId, exporter);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

# pydataverse

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

```bash
pip install git+<UNSET>.git
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.export_dataset(persistent_id='string', exporter='string')

if res.status_code == 200:
    # handle response
    pass
```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [native](docs/sdks/native/README.md)

* [export_dataset](docs/sdks/native/README.md#export_dataset)
* [get_assignments](docs/sdks/native/README.md#get_assignments)
* [create_assignment](docs/sdks/native/README.md#create_assignment)
* [get_dataset](docs/sdks/native/README.md#get_dataset)
* [delete_dataset](docs/sdks/native/README.md#delete_dataset)
* [get_dataset_by_pid](docs/sdks/native/README.md#get_dataset_by_pid)
* [add_file_to_dataset](docs/sdks/native/README.md#add_file_to_dataset)
* [destroy_dataset](docs/sdks/native/README.md#destroy_dataset)
* [edit_version_metadata](docs/sdks/native/README.md#edit_version_metadata)
* [get_private_url_data](docs/sdks/native/README.md#get_private_url_data)
* [create_private_url](docs/sdks/native/README.md#create_private_url)
* [delete_private_url](docs/sdks/native/README.md#delete_private_url)
* [list_versions](docs/sdks/native/README.md#list_versions)
* [get_version](docs/sdks/native/README.md#get_version)
* [update_draft_version](docs/sdks/native/README.md#update_draft_version)
* [delete_draft_version](docs/sdks/native/README.md#delete_draft_version)
* [view_dataverse](docs/sdks/native/README.md#view_dataverse)
* [add_dataverse](docs/sdks/native/README.md#add_dataverse)
* [delete_dataverse](docs/sdks/native/README.md#delete_dataverse)
* [publish_dataverse](docs/sdks/native/README.md#publish_dataverse)
* [list_content](docs/sdks/native/README.md#list_content)
* [import_dataset](docs/sdks/native/README.md#import_dataset)
* [list_facets](docs/sdks/native/README.md#list_facets)
* [set_facets](docs/sdks/native/README.md#set_facets)
* [list_roles](docs/sdks/native/README.md#list_roles)
* [create_role](docs/sdks/native/README.md#create_role)
* [get_file_data](docs/sdks/native/README.md#get_file_data)
* [delete_file_in_dataset](docs/sdks/native/README.md#delete_file_in_dataset)
* [get_file_metadata](docs/sdks/native/README.md#get_file_metadata)
* [update_file_metadata](docs/sdks/native/README.md#update_file_metadata)
* [redetect_datafile](docs/sdks/native/README.md#redetect_datafile)
* [reingest](docs/sdks/native/README.md#reingest)
* [replace_file_in_dataset](docs/sdks/native/README.md#replace_file_in_dataset)
* [restrict_file_in_dataset](docs/sdks/native/README.md#restrict_file_in_dataset)
* [uningest_datafile](docs/sdks/native/README.md#uningest_datafile)
* [get_terms_of_use](docs/sdks/native/README.md#get_terms_of_use)
* [get_server](docs/sdks/native/README.md#get_server)
* [get_info](docs/sdks/native/README.md#get_info)
* [list](docs/sdks/native/README.md#list)
* [get_block](docs/sdks/native/README.md#get_block)
* [create_new_role](docs/sdks/native/README.md#create_new_role)
* [view_role](docs/sdks/native/README.md#view_role)
* [delete_role](docs/sdks/native/README.md#delete_role)
* [get_authenticated_user_by_token](docs/sdks/native/README.md#get_authenticated_user_by_token)
* [get_token_expiration_date](docs/sdks/native/README.md#get_token_expiration_date)
* [delete_token](docs/sdks/native/README.md#delete_token)
* [recreate_token](docs/sdks/native/README.md#recreate_token)
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or raise an error.  If Error objects are specified in your OpenAPI Spec, the SDK will raise the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

### Example

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = None
try:
    res = s.native.export_dataset(persistent_id='string', exporter='string')
except errors.SDKError as e:
    print(e)  # handle exception
    raise(e)

if res.status_code == 200:
    # handle response
    pass
```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `server_idx: int` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://dvn-cloud-app-1.lib.harvard.edu:8080/` | None |
| 1 | `http://dvn-cloud-app-1.lib.harvard.edu:8009/` | None |
| 2 | `https://dvn-cloud-app-1.lib.harvard.edu:8181/` | None |

#### Example

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    server_idx=2,
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.export_dataset(persistent_id='string', exporter='string')

if res.status_code == 200:
    # handle response
    pass
```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `server_url: str` optional parameter when initializing the SDK client instance. For example:
```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    server_url="http://dvn-cloud-app-1.lib.harvard.edu:8080/",
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.export_dataset(persistent_id='string', exporter='string')

if res.status_code == 200:
    # handle response
    pass
```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Python SDK makes API calls using the [requests](https://pypi.org/project/requests/) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `requests.Session` object.

For example, you could specify a header for every request that this sdk makes as follows:
```python
import pydataverse
import requests

http_client = requests.Session()
http_client.headers.update({'x-custom-header': 'someValue'})
s = pydataverse.PyDataverse(client: http_client)
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `api_key_auth` | apiKey         | API key        |

To authenticate with the API the `api_key_auth` parameter must be set when initializing the SDK client instance. For example:
```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.export_dataset(persistent_id='string', exporter='string')

if res.status_code == 200:
    # handle response
    pass
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

# Native
(*native*)

### Available Operations

* [export_dataset](#export_dataset)
* [get_assignments](#get_assignments)
* [create_assignment](#create_assignment)
* [get_dataset](#get_dataset)
* [delete_dataset](#delete_dataset)
* [get_dataset_by_pid](#get_dataset_by_pid)
* [add_file_to_dataset](#add_file_to_dataset)
* [destroy_dataset](#destroy_dataset)
* [edit_version_metadata](#edit_version_metadata)
* [get_private_url_data](#get_private_url_data)
* [create_private_url](#create_private_url)
* [delete_private_url](#delete_private_url)
* [list_versions](#list_versions)
* [get_version](#get_version)
* [update_draft_version](#update_draft_version)
* [delete_draft_version](#delete_draft_version)
* [view_dataverse](#view_dataverse)
* [add_dataverse](#add_dataverse)
* [delete_dataverse](#delete_dataverse)
* [publish_dataverse](#publish_dataverse)
* [list_content](#list_content)
* [import_dataset](#import_dataset)
* [list_facets](#list_facets)
* [set_facets](#set_facets)
* [list_roles](#list_roles)
* [create_role](#create_role)
* [get_file_data](#get_file_data)
* [delete_file_in_dataset](#delete_file_in_dataset)
* [get_file_metadata](#get_file_metadata)
* [update_file_metadata](#update_file_metadata)
* [redetect_datafile](#redetect_datafile)
* [reingest](#reingest)
* [replace_file_in_dataset](#replace_file_in_dataset)
* [restrict_file_in_dataset](#restrict_file_in_dataset)
* [uningest_datafile](#uningest_datafile)
* [get_terms_of_use](#get_terms_of_use)
* [get_server](#get_server)
* [get_info](#get_info)
* [list](#list)
* [get_block](#get_block)
* [create_new_role](#create_new_role)
* [view_role](#view_role)
* [delete_role](#delete_role)
* [get_authenticated_user_by_token](#get_authenticated_user_by_token)
* [get_token_expiration_date](#get_token_expiration_date)
* [delete_token](#delete_token)
* [recreate_token](#recreate_token)

## export_dataset

### Example Usage

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

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `persistent_id`    | *Optional[str]*    | :heavy_minus_sign: | N/A                |
| `exporter`         | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.ExportDatasetResponse](../../models/operations/exportdatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_assignments

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_assignments(identifier='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.GetAssignmentsResponse](../../models/operations/getassignmentsresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## create_assignment

### Example Usage

```python
import pydataverse
from pydataverse.models import components, operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.create_assignment(identifier='string', key='string', request_body='0x88E3C10aa1'.encode())

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |
| `key`              | *Optional[str]*    | :heavy_minus_sign: | N/A                |
| `request_body`     | *Optional[bytes]*  | :heavy_minus_sign: | N/A                |


### Response

**[operations.CreateAssignmentResponse](../../models/operations/createassignmentresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_dataset

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_dataset(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.GetDatasetResponse](../../models/operations/getdatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## delete_dataset

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.delete_dataset(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.DeleteDatasetResponse](../../models/operations/deletedatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_dataset_by_pid

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_dataset_by_pid(persistent_id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `persistent_id`    | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.GetDatasetByPidResponse](../../models/operations/getdatasetbypidresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## add_file_to_dataset

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.add_file_to_dataset(id='string', request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.AddFileToDatasetResponse](../../models/operations/addfiletodatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## destroy_dataset

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.destroy_dataset(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.DestroyDatasetResponse](../../models/operations/destroydatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## edit_version_metadata

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.edit_version_metadata(id='string', replace=False, request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `replace`          | *Optional[bool]*   | :heavy_minus_sign: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.EditVersionMetadataResponse](../../models/operations/editversionmetadataresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_private_url_data

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_private_url_data(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.GetPrivateURLDataResponse](../../models/operations/getprivateurldataresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## create_private_url

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.create_private_url(id='string', anonymized_access=False)

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter           | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `id`                | *str*               | :heavy_check_mark:  | N/A                 |
| `anonymized_access` | *Optional[bool]*    | :heavy_minus_sign:  | N/A                 |


### Response

**[operations.CreatePrivateURLResponse](../../models/operations/createprivateurlresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## delete_private_url

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.delete_private_url(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.DeletePrivateURLResponse](../../models/operations/deleteprivateurlresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## list_versions

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.list_versions(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.ListVersionsResponse](../../models/operations/listversionsresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_version

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_version(id='string', version_id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `version_id`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.GetVersionResponse](../../models/operations/getversionresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## update_draft_version

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.update_draft_version(id='string', version_id='string', request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `version_id`       | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.UpdateDraftVersionResponse](../../models/operations/updatedraftversionresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## delete_draft_version

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.delete_draft_version(id='string', version_id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `version_id`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.DeleteDraftVersionResponse](../../models/operations/deletedraftversionresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## view_dataverse

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.view_dataverse(identifier='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.ViewDataverseResponse](../../models/operations/viewdataverseresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## add_dataverse

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.add_dataverse(identifier='string', request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.AddDataverseResponse](../../models/operations/adddataverseresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## delete_dataverse

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.delete_dataverse(identifier='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.DeleteDataverseResponse](../../models/operations/deletedataverseresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## publish_dataverse

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.publish_dataverse(identifier='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.PublishDataverseResponse](../../models/operations/publishdataverseresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## list_content

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.list_content(identifier='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.ListContentResponse](../../models/operations/listcontentresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## import_dataset

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.import_dataset(identifier='string', pid='string', release='string', request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |
| `pid`              | *Optional[str]*    | :heavy_minus_sign: | N/A                |
| `release`          | *Optional[str]*    | :heavy_minus_sign: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.ImportDatasetResponse](../../models/operations/importdatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## list_facets

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.list_facets(identifier='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.ListFacetsResponse](../../models/operations/listfacetsresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## set_facets

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.set_facets(identifier='string', request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.SetFacetsResponse](../../models/operations/setfacetsresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## list_roles

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.list_roles(identifier='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.ListRolesResponse](../../models/operations/listrolesresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## create_role

### Example Usage

```python
import pydataverse
from pydataverse.models import components, operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.create_role(identifier='string', request_body='0x806bC8e46C'.encode())

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[bytes]*  | :heavy_minus_sign: | N/A                |


### Response

**[operations.CreateRoleResponse](../../models/operations/createroleresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_file_data

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_file_data(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.GetFileDataResponse](../../models/operations/getfiledataresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## delete_file_in_dataset

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.delete_file_in_dataset(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.DeleteFileInDatasetResponse](../../models/operations/deletefileindatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_file_metadata

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_file_metadata(id='string', version_id='string', request_body='0xFDBBE8A4AD'.encode())

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `version_id`       | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[bytes]*  | :heavy_minus_sign: | N/A                |


### Response

**[operations.GetFileMetadataResponse](../../models/operations/getfilemetadataresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## update_file_metadata

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.update_file_metadata(id='string', request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.UpdateFileMetadataResponse](../../models/operations/updatefilemetadataresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## redetect_datafile

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.redetect_datafile(id='string', dry_run=False)

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `dry_run`          | *Optional[bool]*   | :heavy_minus_sign: | N/A                |


### Response

**[operations.RedetectDatafileResponse](../../models/operations/redetectdatafileresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## reingest

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.reingest(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.ReingestResponse](../../models/operations/reingestresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## replace_file_in_dataset

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.replace_file_in_dataset(id='string', request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.ReplaceFileInDatasetResponse](../../models/operations/replacefileindatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## restrict_file_in_dataset

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.restrict_file_in_dataset(id='string', request_body='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |
| `request_body`     | *Optional[str]*    | :heavy_minus_sign: | N/A                |


### Response

**[operations.RestrictFileInDatasetResponse](../../models/operations/restrictfileindatasetresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## uningest_datafile

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.uningest_datafile(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.UningestDatafileResponse](../../models/operations/uningestdatafileresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_terms_of_use

### Example Usage

```python
import pydataverse

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_terms_of_use()

if res.status_code == 200:
    # handle response
    pass
```


### Response

**[operations.GetTermsOfUseResponse](../../models/operations/gettermsofuseresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_server

### Example Usage

```python
import pydataverse

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_server()

if res.status_code == 200:
    # handle response
    pass
```


### Response

**[operations.GetServerResponse](../../models/operations/getserverresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_info

### Example Usage

```python
import pydataverse

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_info()

if res.status_code == 200:
    # handle response
    pass
```


### Response

**[operations.GetInfoResponse](../../models/operations/getinforesponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## list

### Example Usage

```python
import pydataverse

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.list()

if res.status_code == 200:
    # handle response
    pass
```


### Response

**[operations.ListResponse](../../models/operations/listresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_block

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_block(identifier='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `identifier`       | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.GetBlockResponse](../../models/operations/getblockresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## create_new_role

### Example Usage

```python
import pydataverse
from pydataverse.models import components, operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.create_new_role(dvo='string', request_body='0x0f1d1C009E'.encode())

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `dvo`              | *Optional[str]*    | :heavy_minus_sign: | N/A                |
| `request_body`     | *Optional[bytes]*  | :heavy_minus_sign: | N/A                |


### Response

**[operations.CreateNewRoleResponse](../../models/operations/createnewroleresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## view_role

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.view_role(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.ViewRoleResponse](../../models/operations/viewroleresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## delete_role

### Example Usage

```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.delete_role(id='string')

if res.status_code == 200:
    # handle response
    pass
```

### Parameters

| Parameter          | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *str*              | :heavy_check_mark: | N/A                |


### Response

**[operations.DeleteRoleResponse](../../models/operations/deleteroleresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_authenticated_user_by_token

### Example Usage

```python
import pydataverse

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_authenticated_user_by_token()

if res.status_code == 200:
    # handle response
    pass
```


### Response

**[operations.GetAuthenticatedUserByTokenResponse](../../models/operations/getauthenticateduserbytokenresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_token_expiration_date

### Example Usage

```python
import pydataverse

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.get_token_expiration_date()

if res.status_code == 200:
    # handle response
    pass
```


### Response

**[operations.GetTokenExpirationDateResponse](../../models/operations/gettokenexpirationdateresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## delete_token

### Example Usage

```python
import pydataverse

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.delete_token()

if res.status_code == 200:
    # handle response
    pass
```


### Response

**[operations.DeleteTokenResponse](../../models/operations/deletetokenresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## recreate_token

### Example Usage

```python
import pydataverse

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.recreate_token()

if res.status_code == 200:
    # handle response
    pass
```


### Response

**[operations.RecreateTokenResponse](../../models/operations/recreatetokenresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

# pyDataverse.NativeApi

All URIs are relative to *http://dvn-cloud-app-1.lib.harvard.edu:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_dataverse**](NativeApi.md#add_dataverse) | **POST** /api/v1/dataverses/{identifier} | 
[**add_file_to_dataset**](NativeApi.md#add_file_to_dataset) | **POST** /api/v1/datasets/{id}/add | 
[**create_assignment**](NativeApi.md#create_assignment) | **POST** /api/v1/datasets/{identifier}/assignments | 
[**create_new_role**](NativeApi.md#create_new_role) | **POST** /api/v1/roles | 
[**create_private_url**](NativeApi.md#create_private_url) | **POST** /api/v1/datasets/{id}/privateUrl | 
[**create_role**](NativeApi.md#create_role) | **POST** /api/v1/dataverses/{identifier}/roles | 
[**delete_dataset**](NativeApi.md#delete_dataset) | **DELETE** /api/v1/datasets/{id} | 
[**delete_dataverse**](NativeApi.md#delete_dataverse) | **DELETE** /api/v1/dataverses/{identifier} | 
[**delete_draft_version**](NativeApi.md#delete_draft_version) | **DELETE** /api/v1/datasets/{id}/versions/{versionId} | 
[**delete_file_in_dataset**](NativeApi.md#delete_file_in_dataset) | **DELETE** /api/v1/files/{id} | 
[**delete_private_url**](NativeApi.md#delete_private_url) | **DELETE** /api/v1/datasets/{id}/privateUrl | 
[**delete_role**](NativeApi.md#delete_role) | **DELETE** /api/v1/roles/{id} | 
[**delete_token**](NativeApi.md#delete_token) | **DELETE** /api/v1/users/token | 
[**destroy_dataset**](NativeApi.md#destroy_dataset) | **DELETE** /api/v1/datasets/{id}/destroy | 
[**edit_version_metadata**](NativeApi.md#edit_version_metadata) | **PUT** /api/v1/datasets/{id}/editMetadata | 
[**export_dataset**](NativeApi.md#export_dataset) | **GET** /api/v1/datasets/export | 
[**get_assignments**](NativeApi.md#get_assignments) | **GET** /api/v1/datasets/{identifier}/assignments | 
[**get_authenticated_user_by_token**](NativeApi.md#get_authenticated_user_by_token) | **GET** /api/v1/users/:me | 
[**get_block**](NativeApi.md#get_block) | **GET** /api/v1/metadatablocks/{identifier} | 
[**get_dataset**](NativeApi.md#get_dataset) | **GET** /api/v1/datasets/{id} | 
[**get_dataset_by_pid**](NativeApi.md#get_dataset_by_pid) | **GET** /api/v1/datasets/:persistentId | 
[**get_file_data**](NativeApi.md#get_file_data) | **GET** /api/v1/files/{id} | 
[**get_file_metadata**](NativeApi.md#get_file_metadata) | **GET** /api/v1/files/{id}/metadata | 
[**get_info**](NativeApi.md#get_info) | **GET** /api/v1/info/version | 
[**get_private_url_data**](NativeApi.md#get_private_url_data) | **GET** /api/v1/datasets/{id}/privateUrl | 
[**get_server**](NativeApi.md#get_server) | **GET** /api/v1/info/server | 
[**get_terms_of_use**](NativeApi.md#get_terms_of_use) | **GET** /api/v1/info/apiTermsOfUse | 
[**get_token_expiration_date**](NativeApi.md#get_token_expiration_date) | **GET** /api/v1/users/token | 
[**get_version**](NativeApi.md#get_version) | **GET** /api/v1/datasets/{id}/versions/{versionId} | 
[**import_dataset**](NativeApi.md#import_dataset) | **POST** /api/v1/dataverses/{identifier}/datasets/:import | 
[**list**](NativeApi.md#list) | **GET** /api/v1/metadatablocks | 
[**list_content**](NativeApi.md#list_content) | **GET** /api/v1/dataverses/{identifier}/contents | 
[**list_facets**](NativeApi.md#list_facets) | **GET** /api/v1/dataverses/{identifier}/facets | 
[**list_roles**](NativeApi.md#list_roles) | **GET** /api/v1/dataverses/{identifier}/roles | 
[**list_versions**](NativeApi.md#list_versions) | **GET** /api/v1/datasets/{id}/versions | 
[**publish_dataverse**](NativeApi.md#publish_dataverse) | **POST** /api/v1/dataverses/{identifier}/actions/:publish | 
[**recreate_token**](NativeApi.md#recreate_token) | **POST** /api/v1/users/token/recreate | 
[**redetect_datafile**](NativeApi.md#redetect_datafile) | **POST** /api/v1/files/{id}/redetect | 
[**reingest**](NativeApi.md#reingest) | **POST** /api/v1/files/{id}/reingest | 
[**replace_file_in_dataset**](NativeApi.md#replace_file_in_dataset) | **POST** /api/v1/files/{id}/replace | 
[**restrict_file_in_dataset**](NativeApi.md#restrict_file_in_dataset) | **PUT** /api/v1/files/{id}/restrict | 
[**set_facets**](NativeApi.md#set_facets) | **POST** /api/v1/dataverses/{identifier}/facets | 
[**uningest_datafile**](NativeApi.md#uningest_datafile) | **POST** /api/v1/files/{id}/uningest | 
[**update_draft_version**](NativeApi.md#update_draft_version) | **PUT** /api/v1/datasets/{id}/versions/{versionId} | 
[**update_file_metadata**](NativeApi.md#update_file_metadata) | **POST** /api/v1/files/{id}/metadata | 
[**view_dataverse**](NativeApi.md#view_dataverse) | **GET** /api/v1/dataverses/{identifier} | 
[**view_role**](NativeApi.md#view_role) | **GET** /api/v1/roles/{id} | 


# **add_dataverse**
> object add_dataverse(identifier, body=body)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 
    body = 'body_example' # str |  (optional)

    try:
        api_response = api_instance.add_dataverse(identifier, body=body)
        print("The response of NativeApi->add_dataverse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->add_dataverse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_file_to_dataset**
> object add_file_to_dataset(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.add_file_to_dataset(id)
        print("The response of NativeApi->add_file_to_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->add_file_to_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_assignment**
> object create_assignment(identifier, key=key, role_assignment_dto=role_assignment_dto)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.models.role_assignment_dto import RoleAssignmentDTO
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 
    key = 'key_example' # str |  (optional)
    role_assignment_dto = pyDataverse.RoleAssignmentDTO() # RoleAssignmentDTO |  (optional)

    try:
        api_response = api_instance.create_assignment(identifier, key=key, role_assignment_dto=role_assignment_dto)
        print("The response of NativeApi->create_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->create_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 
 **key** | **str**|  | [optional] 
 **role_assignment_dto** | [**RoleAssignmentDTO**](RoleAssignmentDTO.md)|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_new_role**
> object create_new_role(dvo=dvo, role_dto=role_dto)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.models.role_dto import RoleDTO
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    dvo = 'dvo_example' # str |  (optional)
    role_dto = pyDataverse.RoleDTO() # RoleDTO |  (optional)

    try:
        api_response = api_instance.create_new_role(dvo=dvo, role_dto=role_dto)
        print("The response of NativeApi->create_new_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->create_new_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dvo** | **str**|  | [optional] 
 **role_dto** | [**RoleDTO**](RoleDTO.md)|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_private_url**
> object create_private_url(id, anonymized_access=anonymized_access)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    anonymized_access = False # bool |  (optional) (default to False)

    try:
        api_response = api_instance.create_private_url(id, anonymized_access=anonymized_access)
        print("The response of NativeApi->create_private_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->create_private_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **anonymized_access** | **bool**|  | [optional] [default to False]

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_role**
> object create_role(identifier, role_dto=role_dto)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.models.role_dto import RoleDTO
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 
    role_dto = pyDataverse.RoleDTO() # RoleDTO |  (optional)

    try:
        api_response = api_instance.create_role(identifier, role_dto=role_dto)
        print("The response of NativeApi->create_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->create_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 
 **role_dto** | [**RoleDTO**](RoleDTO.md)|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_dataset**
> object delete_dataset(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.delete_dataset(id)
        print("The response of NativeApi->delete_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->delete_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_dataverse**
> object delete_dataverse(identifier)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 

    try:
        api_response = api_instance.delete_dataverse(identifier)
        print("The response of NativeApi->delete_dataverse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->delete_dataverse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_draft_version**
> object delete_draft_version(id, version_id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    version_id = 'version_id_example' # str | 

    try:
        api_response = api_instance.delete_draft_version(id, version_id)
        print("The response of NativeApi->delete_draft_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->delete_draft_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **version_id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_file_in_dataset**
> object delete_file_in_dataset(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.delete_file_in_dataset(id)
        print("The response of NativeApi->delete_file_in_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->delete_file_in_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_private_url**
> object delete_private_url(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.delete_private_url(id)
        print("The response of NativeApi->delete_private_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->delete_private_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_role**
> object delete_role(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.delete_role(id)
        print("The response of NativeApi->delete_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->delete_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_token**
> object delete_token()



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)

    try:
        api_response = api_instance.delete_token()
        print("The response of NativeApi->delete_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->delete_token: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **destroy_dataset**
> object destroy_dataset(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.destroy_dataset(id)
        print("The response of NativeApi->destroy_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->destroy_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_version_metadata**
> object edit_version_metadata(id, replace=replace, body=body)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    replace = True # bool |  (optional)
    body = 'body_example' # str |  (optional)

    try:
        api_response = api_instance.edit_version_metadata(id, replace=replace, body=body)
        print("The response of NativeApi->edit_version_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->edit_version_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **replace** | **bool**|  | [optional] 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_dataset**
> object export_dataset(persistent_id=persistent_id, exporter=exporter)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    persistent_id = 'persistent_id_example' # str |  (optional)
    exporter = 'exporter_example' # str |  (optional)

    try:
        api_response = api_instance.export_dataset(persistent_id=persistent_id, exporter=exporter)
        print("The response of NativeApi->export_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->export_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persistent_id** | **str**|  | [optional] 
 **exporter** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json, application/html, application/ld+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_assignments**
> object get_assignments(identifier)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 

    try:
        api_response = api_instance.get_assignments(identifier)
        print("The response of NativeApi->get_assignments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_assignments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_authenticated_user_by_token**
> object get_authenticated_user_by_token()



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)

    try:
        api_response = api_instance.get_authenticated_user_by_token()
        print("The response of NativeApi->get_authenticated_user_by_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_authenticated_user_by_token: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_block**
> object get_block(identifier)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 

    try:
        api_response = api_instance.get_block(identifier)
        print("The response of NativeApi->get_block:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_block: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dataset**
> object get_dataset(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_dataset(id)
        print("The response of NativeApi->get_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dataset_by_pid**
> object get_dataset_by_pid(persistent_id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    persistent_id = 'persistent_id_example' # str | 

    try:
        api_response = api_instance.get_dataset_by_pid(persistent_id)
        print("The response of NativeApi->get_dataset_by_pid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_dataset_by_pid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persistent_id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_file_data**
> object get_file_data(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_file_data(id)
        print("The response of NativeApi->get_file_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_file_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_file_metadata**
> object get_file_metadata(id, version_id, body=body)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    version_id = 'version_id_example' # str | 
    body = True # bool |  (optional)

    try:
        api_response = api_instance.get_file_metadata(id, version_id, body=body)
        print("The response of NativeApi->get_file_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_file_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **version_id** | **str**|  | 
 **body** | **bool**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_info**
> object get_info()



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)

    try:
        api_response = api_instance.get_info()
        print("The response of NativeApi->get_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_info: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_private_url_data**
> object get_private_url_data(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_private_url_data(id)
        print("The response of NativeApi->get_private_url_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_private_url_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_server**
> object get_server()



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)

    try:
        api_response = api_instance.get_server()
        print("The response of NativeApi->get_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_server: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_terms_of_use**
> object get_terms_of_use()



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)

    try:
        api_response = api_instance.get_terms_of_use()
        print("The response of NativeApi->get_terms_of_use:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_terms_of_use: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_token_expiration_date**
> object get_token_expiration_date()



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)

    try:
        api_response = api_instance.get_token_expiration_date()
        print("The response of NativeApi->get_token_expiration_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_token_expiration_date: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_version**
> object get_version(id, version_id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    version_id = 'version_id_example' # str | 

    try:
        api_response = api_instance.get_version(id, version_id)
        print("The response of NativeApi->get_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->get_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **version_id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_dataset**
> object import_dataset(identifier, pid=pid, release=release, body=body)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 
    pid = 'pid_example' # str |  (optional)
    release = 'release_example' # str |  (optional)
    body = 'body_example' # str |  (optional)

    try:
        api_response = api_instance.import_dataset(identifier, pid=pid, release=release, body=body)
        print("The response of NativeApi->import_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->import_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 
 **pid** | **str**|  | [optional] 
 **release** | **str**|  | [optional] 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> object list()



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)

    try:
        api_response = api_instance.list()
        print("The response of NativeApi->list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_content**
> object list_content(identifier)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 

    try:
        api_response = api_instance.list_content(identifier)
        print("The response of NativeApi->list_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->list_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_facets**
> object list_facets(identifier)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 

    try:
        api_response = api_instance.list_facets(identifier)
        print("The response of NativeApi->list_facets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->list_facets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_roles**
> object list_roles(identifier)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 

    try:
        api_response = api_instance.list_roles(identifier)
        print("The response of NativeApi->list_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->list_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_versions**
> object list_versions(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.list_versions(id)
        print("The response of NativeApi->list_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->list_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publish_dataverse**
> object publish_dataverse(identifier)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 

    try:
        api_response = api_instance.publish_dataverse(identifier)
        print("The response of NativeApi->publish_dataverse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->publish_dataverse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recreate_token**
> object recreate_token()



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)

    try:
        api_response = api_instance.recreate_token()
        print("The response of NativeApi->recreate_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->recreate_token: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redetect_datafile**
> object redetect_datafile(id, dry_run=dry_run)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    dry_run = True # bool |  (optional)

    try:
        api_response = api_instance.redetect_datafile(id, dry_run=dry_run)
        print("The response of NativeApi->redetect_datafile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->redetect_datafile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **dry_run** | **bool**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reingest**
> object reingest(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.reingest(id)
        print("The response of NativeApi->reingest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->reingest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_file_in_dataset**
> object replace_file_in_dataset(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.replace_file_in_dataset(id)
        print("The response of NativeApi->replace_file_in_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->replace_file_in_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restrict_file_in_dataset**
> object restrict_file_in_dataset(id, body=body)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    body = 'body_example' # str |  (optional)

    try:
        api_response = api_instance.restrict_file_in_dataset(id, body=body)
        print("The response of NativeApi->restrict_file_in_dataset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->restrict_file_in_dataset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_facets**
> object set_facets(identifier, body=body)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 
    body = 'body_example' # str |  (optional)

    try:
        api_response = api_instance.set_facets(identifier, body=body)
        print("The response of NativeApi->set_facets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->set_facets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uningest_datafile**
> object uningest_datafile(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.uningest_datafile(id)
        print("The response of NativeApi->uningest_datafile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->uningest_datafile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_draft_version**
> object update_draft_version(id, version_id, body=body)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    version_id = 'version_id_example' # str | 
    body = 'body_example' # str |  (optional)

    try:
        api_response = api_instance.update_draft_version(id, version_id, body=body)
        print("The response of NativeApi->update_draft_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->update_draft_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **version_id** | **str**|  | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_file_metadata**
> object update_file_metadata(id, body=body)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 
    body = 'body_example' # str |  (optional)

    try:
        api_response = api_instance.update_file_metadata(id, body=body)
        print("The response of NativeApi->update_file_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->update_file_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_dataverse**
> object view_dataverse(identifier)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    identifier = 'identifier_example' # str | 

    try:
        api_response = api_instance.view_dataverse(identifier)
        print("The response of NativeApi->view_dataverse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->view_dataverse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_role**
> object view_role(id)



### Example

* Api Key Authentication (ApiKeyAuth):

```python
import time
import os
import pyDataverse
from pyDataverse.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://dvn-cloud-app-1.lib.harvard.edu:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = pyDataverse.Configuration(
    host = "http://dvn-cloud-app-1.lib.harvard.edu:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with pyDataverse.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pyDataverse.NativeApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.view_role(id)
        print("The response of NativeApi->view_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NativeApi->view_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


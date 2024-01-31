# RoleDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**owner_id** | **str** |  | [optional] 
**permissions** | **str** |  | [optional] 

## Example

```python
from pyDataverse.models.role_dto import RoleDTO

# TODO update the JSON string below
json = "{}"
# create an instance of RoleDTO from a JSON string
role_dto_instance = RoleDTO.from_json(json)
# print the JSON string representation of the object
print RoleDTO.to_json()

# convert the object into a dict
role_dto_dict = role_dto_instance.to_dict()
# create an instance of RoleDTO from a dict
role_dto_form_dict = role_dto.from_dict(role_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



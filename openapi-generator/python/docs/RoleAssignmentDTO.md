# RoleAssignmentDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | **str** |  | [optional] 
**role** | **str** |  | [optional] 

## Example

```python
from pyDataverse.models.role_assignment_dto import RoleAssignmentDTO

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentDTO from a JSON string
role_assignment_dto_instance = RoleAssignmentDTO.from_json(json)
# print the JSON string representation of the object
print RoleAssignmentDTO.to_json()

# convert the object into a dict
role_assignment_dto_dict = role_assignment_dto_instance.to_dict()
# create an instance of RoleAssignmentDTO from a dict
role_assignment_dto_form_dict = role_assignment_dto.from_dict(role_assignment_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



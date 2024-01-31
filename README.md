# pyDataverse: OpenAPI Reconstruction

This repository demonstrates multiple OpenAPI code generation tools for the pyDataverse API. Based on an OpenAPI specification drawn from from Dataverse 5.14 ednpoint `/openapi` all paths that are utilized in pyDataverse's `NativeAPI` have been extracted and utilized to generate client side code. Due to missing request bodies and responses in the OpenAPI specifications, the generated code is far from optimal. However, it is a good starting point for further development and highlights the differences between the code generation tools.

> [!IMPORTANT]
> These are all the relevant files and their descriptions:
> 
> - `pydataverse_openapi_schema.yaml` - Contains the OpenAPI specification for the pyDataverse NativeAPI
> - `pydataverse_nativeapi_paths.txt` - Collection of paths in pyDataverse's NativeAPI
> - `dataverse_5_14_openapi_schema.yaml` - Contains the OpenAPI specification for Dataverse 5.14
> - `openapi_generator` - Contains the generated code from OpenAPI Generator
> - `speakeasy` - Contains the generated code from Speakeasy
> - `generate.sh` - Script to generate the code from the OpenAPI specification
> - `gen.yaml` - Configuration file for Speakeasy

## Dataverse 5.14 OAI analysis

### Missing parts in the OpenAPI specification

- PersistentId endpoints
- `api/v1/datasets` POST request for dataset creation
- Response and Request-Body schemes for almost all endpoints missing
- Existing request body schemes
  - /api/v1/dataverses/{identifier}/roles
  - /api/v1/roles
- Authentication information missing

### Specific issues

*/api/v1/files/{id}/metadata*

- `versionId` is expected within the path, but is not included
- Maybe it is a query parameter?

### Authentication per endpoint

```yaml
some/path/{id}:
    get:
        summary: Get a specific object
        description: Get a specific object
        operationId: getSpecificObject
        security:
            - ApiKeyAuth:
                type: apiKey
                in: header
                name: X-Dataverse-key
        parameters: ...
        responses: ...
```

## Code generation



### [OpenAPI Generator](https://openapi-generator.tech)

Below is a list of SDK that have been generated based on pyDataverse's OAI spec:

- [Basic Python](./openapi-generator/pydantic)
- [PyDantic Python](./openapi-generator/pydantic)
- [Typescript-axios](./openapi-generator/typescript)
- [Rust](./openapi-generator/rust)

#### Features

- OpenAPI generator allows to preserve existing objects
  - https://openapi-generator.tech/docs/usage/#target-external-models

### [Speakeasy](https://www.speakeasyapi.dev)

Below is a list of SDK that have been generated based on pyDataverse's OAI spec:

- [Python](./speakeasy/python)
- [Typescript](./speakeasy/typescript)

#### Features

- Well-structured code and less lines
- Python generator based on `dataclasses` and thus less dependent on third-party libs
- Allows to customize the generated code beyond OpenAPI specification
  - https://www.speakeasyapi.dev/docs/openapi/best-practices#extending-openapi 

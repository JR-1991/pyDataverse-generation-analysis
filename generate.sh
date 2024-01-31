#!bin/bash

# OpenAPI Generator
openapi-generator generate \
    -i pydataverse_openapi_schema.yaml \
    -g python \
    -o ./openapi-generator/python \
    --package-name pyDataverse

openapi-generator generate \
    -i pydataverse_openapi_schema.yaml \
    -g python-pydantic-v1 \
    -o ./openapi-generator/pydantic \
    --package-name pyDataverse

openapi-generator generate \
    -i pydataverse_openapi_schema.yaml \
    -g typescript-axios \
    -o ./openapi-generator/typescript \
    --package-name DataverseTS

openapi-generator generate \
    -i pydataverse_openapi_schema.yaml \
    -g rust \
    -o ./openapi-generator/rust \
    --package-name dataverse

# Speakeasy
speakeasy generate sdk \
    -s pydataverse_openapi_schema.yaml \
    -o ./speakeasy/python \
    -l python

speakeasy generate sdk \
    -s pydataverse_openapi_schema.yaml \
    -o ./speakeasy/typescript \
    -l typescript

"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class GetDatasetByPidRequest:
    persistent_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'persistentId', 'style': 'form', 'explode': True }})
    



@dataclasses.dataclass
class GetDatasetByPidResponseBody:
    r"""Default Response."""
    



@dataclasses.dataclass
class GetDatasetByPidResponse:
    content_type: str = dataclasses.field()
    r"""HTTP response content type for this operation"""
    raw_response: requests_http.Response = dataclasses.field()
    r"""Raw HTTP response; suitable for custom response parsing"""
    status_code: int = dataclasses.field()
    r"""HTTP response status code for this operation"""
    body: Optional[bytes] = dataclasses.field(default=None)
    


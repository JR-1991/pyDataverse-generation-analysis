"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class RoleDTO:
    alias: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    owner_id: Optional[str] = dataclasses.field(default=None)
    permissions: Optional[str] = dataclasses.field(default=None)
    


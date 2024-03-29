/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type RoleDTO = {
    alias?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    ownerId?: string | undefined;
    permissions?: string | undefined;
};

/** @internal */
export namespace RoleDTO$ {
    export type Inbound = {
        alias?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        ownerId?: string | undefined;
        permissions?: string | undefined;
    };

    export const inboundSchema: z.ZodType<RoleDTO, z.ZodTypeDef, Inbound> = z
        .object({
            alias: z.string().optional(),
            name: z.string().optional(),
            description: z.string().optional(),
            ownerId: z.string().optional(),
            permissions: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.alias === undefined ? null : { alias: v.alias }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.ownerId === undefined ? null : { ownerId: v.ownerId }),
                ...(v.permissions === undefined ? null : { permissions: v.permissions }),
            };
        });

    export type Outbound = {
        alias?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        ownerId?: string | undefined;
        permissions?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RoleDTO> = z
        .object({
            alias: z.string().optional(),
            name: z.string().optional(),
            description: z.string().optional(),
            ownerId: z.string().optional(),
            permissions: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.alias === undefined ? null : { alias: v.alias }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.ownerId === undefined ? null : { ownerId: v.ownerId }),
                ...(v.permissions === undefined ? null : { permissions: v.permissions }),
            };
        });
}

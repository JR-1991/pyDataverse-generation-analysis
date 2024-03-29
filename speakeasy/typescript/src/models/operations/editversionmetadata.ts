/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64";
import { z } from "zod";

export type EditVersionMetadataRequest = {
    id: string;
    replace?: boolean | undefined;
    requestBody?: string | undefined;
};

/**
 * Default Response.
 */
export type EditVersionMetadataResponseBody = {};

export type EditVersionMetadataResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    body?: Uint8Array | string | undefined;
};

/** @internal */
export namespace EditVersionMetadataRequest$ {
    export type Inbound = {
        id: string;
        replace?: boolean | undefined;
        RequestBody?: string | undefined;
    };

    export const inboundSchema: z.ZodType<EditVersionMetadataRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            replace: z.boolean().optional(),
            RequestBody: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.replace === undefined ? null : { replace: v.replace }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        id: string;
        replace?: boolean | undefined;
        RequestBody?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditVersionMetadataRequest> = z
        .object({
            id: z.string(),
            replace: z.boolean().optional(),
            requestBody: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.replace === undefined ? null : { replace: v.replace }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace EditVersionMetadataResponseBody$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<EditVersionMetadataResponseBody, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        EditVersionMetadataResponseBody
    > = z.object({});
}

/** @internal */
export namespace EditVersionMetadataResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        Body?: Uint8Array | string | undefined;
    };

    export const inboundSchema: z.ZodType<EditVersionMetadataResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            Body: b64$.zodInbound.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.Body === undefined ? null : { body: v.Body }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        Body?: Uint8Array | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditVersionMetadataResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            body: b64$.zodOutbound.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.body === undefined ? null : { Body: v.body }),
            };
        });
}

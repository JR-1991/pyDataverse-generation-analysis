/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64";
import { z } from "zod";

export type ViewDataverseRequest = {
    identifier: string;
};

/**
 * Default Response.
 */
export type ViewDataverseResponseBody = {};

export type ViewDataverseResponse = {
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
export namespace ViewDataverseRequest$ {
    export type Inbound = {
        identifier: string;
    };

    export const inboundSchema: z.ZodType<ViewDataverseRequest, z.ZodTypeDef, Inbound> = z
        .object({
            identifier: z.string(),
        })
        .transform((v) => {
            return {
                identifier: v.identifier,
            };
        });

    export type Outbound = {
        identifier: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ViewDataverseRequest> = z
        .object({
            identifier: z.string(),
        })
        .transform((v) => {
            return {
                identifier: v.identifier,
            };
        });
}

/** @internal */
export namespace ViewDataverseResponseBody$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<ViewDataverseResponseBody, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ViewDataverseResponseBody> =
        z.object({});
}

/** @internal */
export namespace ViewDataverseResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        Body?: Uint8Array | string | undefined;
    };

    export const inboundSchema: z.ZodType<ViewDataverseResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ViewDataverseResponse> = z
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

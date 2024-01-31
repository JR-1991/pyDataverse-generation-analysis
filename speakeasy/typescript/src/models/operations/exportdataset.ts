/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64";
import { z } from "zod";

export type ExportDatasetRequest = {
    persistentId?: string | undefined;
    exporter?: string | undefined;
};

/**
 * Default Response.
 */
export type ExportDatasetNativeResponseDefaultResponseBody = {};

/**
 * Default Response.
 */
export type ExportDatasetNativeResponseBody = {};

/**
 * Default Response.
 */
export type ExportDatasetResponseBody = {};

export type ExportDatasetResponse = {
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
    /**
     * Default Response.
     */
    defaultApplicationJsonObject?: ExportDatasetNativeResponseBody | undefined;
    /**
     * Default Response.
     */
    defaultApplicationLdPlusJsonObject?: ExportDatasetNativeResponseDefaultResponseBody | undefined;
};

/** @internal */
export namespace ExportDatasetRequest$ {
    export type Inbound = {
        persistentId?: string | undefined;
        exporter?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ExportDatasetRequest, z.ZodTypeDef, Inbound> = z
        .object({
            persistentId: z.string().optional(),
            exporter: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.persistentId === undefined ? null : { persistentId: v.persistentId }),
                ...(v.exporter === undefined ? null : { exporter: v.exporter }),
            };
        });

    export type Outbound = {
        persistentId?: string | undefined;
        exporter?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExportDatasetRequest> = z
        .object({
            persistentId: z.string().optional(),
            exporter: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.persistentId === undefined ? null : { persistentId: v.persistentId }),
                ...(v.exporter === undefined ? null : { exporter: v.exporter }),
            };
        });
}

/** @internal */
export namespace ExportDatasetNativeResponseDefaultResponseBody$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        ExportDatasetNativeResponseDefaultResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ExportDatasetNativeResponseDefaultResponseBody
    > = z.object({});
}

/** @internal */
export namespace ExportDatasetNativeResponseBody$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<ExportDatasetNativeResponseBody, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ExportDatasetNativeResponseBody
    > = z.object({});
}

/** @internal */
export namespace ExportDatasetResponseBody$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<ExportDatasetResponseBody, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExportDatasetResponseBody> =
        z.object({});
}

/** @internal */
export namespace ExportDatasetResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        Body?: Uint8Array | string | undefined;
        "default_application/json_object"?: ExportDatasetNativeResponseBody$.Inbound | undefined;
        "default_application/ld+json_object"?:
            | ExportDatasetNativeResponseDefaultResponseBody$.Inbound
            | undefined;
    };

    export const inboundSchema: z.ZodType<ExportDatasetResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            Body: b64$.zodInbound.optional(),
            "default_application/json_object": z
                .lazy(() => ExportDatasetNativeResponseBody$.inboundSchema)
                .optional(),
            "default_application/ld+json_object": z
                .lazy(() => ExportDatasetNativeResponseDefaultResponseBody$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.Body === undefined ? null : { body: v.Body }),
                ...(v["default_application/json_object"] === undefined
                    ? null
                    : { defaultApplicationJsonObject: v["default_application/json_object"] }),
                ...(v["default_application/ld+json_object"] === undefined
                    ? null
                    : {
                          defaultApplicationLdPlusJsonObject:
                              v["default_application/ld+json_object"],
                      }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        Body?: Uint8Array | undefined;
        "default_application/json_object"?: ExportDatasetNativeResponseBody$.Outbound | undefined;
        "default_application/ld+json_object"?:
            | ExportDatasetNativeResponseDefaultResponseBody$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExportDatasetResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            body: b64$.zodOutbound.optional(),
            defaultApplicationJsonObject: z
                .lazy(() => ExportDatasetNativeResponseBody$.outboundSchema)
                .optional(),
            defaultApplicationLdPlusJsonObject: z
                .lazy(() => ExportDatasetNativeResponseDefaultResponseBody$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.body === undefined ? null : { Body: v.body }),
                ...(v.defaultApplicationJsonObject === undefined
                    ? null
                    : { "default_application/json_object": v.defaultApplicationJsonObject }),
                ...(v.defaultApplicationLdPlusJsonObject === undefined
                    ? null
                    : {
                          "default_application/ld+json_object":
                              v.defaultApplicationLdPlusJsonObject,
                      }),
            };
        });
}

/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../../arkeo/arkeo/params";
import { Provider, Contract } from "../../arkeo/arkeo/keeper";
import {
  PageRequest,
  PageResponse,
} from "../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "arkeo.arkeo";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryFetchProviderRequest {
  pubkey: string;
  service: string;
}

export interface QueryFetchProviderResponse {
  provider: Provider | undefined;
}

export interface QueryAllProviderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProviderResponse {
  provider: Provider[];
  pagination: PageResponse | undefined;
}

export interface QueryFetchContractRequest {
  contractId: number;
}

export interface QueryFetchContractResponse {
  contract: Contract | undefined;
}

export interface QueryAllContractRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllContractResponse {
  contract: Contract[];
  pagination: PageResponse | undefined;
}

/** this line is used by starport scaffolding # 3 */
export interface QueryActiveContractRequest {
  provider: string;
  service: string;
  spender: string;
}

export interface QueryActiveContractResponse {
  contract: Contract | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryFetchProviderRequest: object = { pubkey: "", service: "" };

export const QueryFetchProviderRequest = {
  encode(
    message: QueryFetchProviderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pubkey !== "") {
      writer.uint32(10).string(message.pubkey);
    }
    if (message.service !== "") {
      writer.uint32(18).string(message.service);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFetchProviderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFetchProviderRequest,
    } as QueryFetchProviderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkey = reader.string();
          break;
        case 2:
          message.service = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFetchProviderRequest {
    const message = {
      ...baseQueryFetchProviderRequest,
    } as QueryFetchProviderRequest;
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = String(object.pubkey);
    } else {
      message.pubkey = "";
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = String(object.service);
    } else {
      message.service = "";
    }
    return message;
  },

  toJSON(message: QueryFetchProviderRequest): unknown {
    const obj: any = {};
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFetchProviderRequest>
  ): QueryFetchProviderRequest {
    const message = {
      ...baseQueryFetchProviderRequest,
    } as QueryFetchProviderRequest;
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = "";
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = object.service;
    } else {
      message.service = "";
    }
    return message;
  },
};

const baseQueryFetchProviderResponse: object = {};

export const QueryFetchProviderResponse = {
  encode(
    message: QueryFetchProviderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.provider !== undefined) {
      Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFetchProviderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFetchProviderResponse,
    } as QueryFetchProviderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = Provider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFetchProviderResponse {
    const message = {
      ...baseQueryFetchProviderResponse,
    } as QueryFetchProviderResponse;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = Provider.fromJSON(object.provider);
    } else {
      message.provider = undefined;
    }
    return message;
  },

  toJSON(message: QueryFetchProviderResponse): unknown {
    const obj: any = {};
    message.provider !== undefined &&
      (obj.provider = message.provider
        ? Provider.toJSON(message.provider)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFetchProviderResponse>
  ): QueryFetchProviderResponse {
    const message = {
      ...baseQueryFetchProviderResponse,
    } as QueryFetchProviderResponse;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = Provider.fromPartial(object.provider);
    } else {
      message.provider = undefined;
    }
    return message;
  },
};

const baseQueryAllProviderRequest: object = {};

export const QueryAllProviderRequest = {
  encode(
    message: QueryAllProviderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProviderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProviderRequest,
    } as QueryAllProviderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProviderRequest {
    const message = {
      ...baseQueryAllProviderRequest,
    } as QueryAllProviderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProviderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProviderRequest>
  ): QueryAllProviderRequest {
    const message = {
      ...baseQueryAllProviderRequest,
    } as QueryAllProviderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProviderResponse: object = {};

export const QueryAllProviderResponse = {
  encode(
    message: QueryAllProviderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.provider) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllProviderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProviderResponse,
    } as QueryAllProviderResponse;
    message.provider = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider.push(Provider.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProviderResponse {
    const message = {
      ...baseQueryAllProviderResponse,
    } as QueryAllProviderResponse;
    message.provider = [];
    if (object.provider !== undefined && object.provider !== null) {
      for (const e of object.provider) {
        message.provider.push(Provider.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProviderResponse): unknown {
    const obj: any = {};
    if (message.provider) {
      obj.provider = message.provider.map((e) =>
        e ? Provider.toJSON(e) : undefined
      );
    } else {
      obj.provider = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProviderResponse>
  ): QueryAllProviderResponse {
    const message = {
      ...baseQueryAllProviderResponse,
    } as QueryAllProviderResponse;
    message.provider = [];
    if (object.provider !== undefined && object.provider !== null) {
      for (const e of object.provider) {
        message.provider.push(Provider.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryFetchContractRequest: object = { contractId: 0 };

export const QueryFetchContractRequest = {
  encode(
    message: QueryFetchContractRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractId !== 0) {
      writer.uint32(8).uint64(message.contractId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFetchContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFetchContractRequest,
    } as QueryFetchContractRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFetchContractRequest {
    const message = {
      ...baseQueryFetchContractRequest,
    } as QueryFetchContractRequest;
    if (object.contractId !== undefined && object.contractId !== null) {
      message.contractId = Number(object.contractId);
    } else {
      message.contractId = 0;
    }
    return message;
  },

  toJSON(message: QueryFetchContractRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFetchContractRequest>
  ): QueryFetchContractRequest {
    const message = {
      ...baseQueryFetchContractRequest,
    } as QueryFetchContractRequest;
    if (object.contractId !== undefined && object.contractId !== null) {
      message.contractId = object.contractId;
    } else {
      message.contractId = 0;
    }
    return message;
  },
};

const baseQueryFetchContractResponse: object = {};

export const QueryFetchContractResponse = {
  encode(
    message: QueryFetchContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contract !== undefined) {
      Contract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFetchContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFetchContractResponse,
    } as QueryFetchContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = Contract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFetchContractResponse {
    const message = {
      ...baseQueryFetchContractResponse,
    } as QueryFetchContractResponse;
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = Contract.fromJSON(object.contract);
    } else {
      message.contract = undefined;
    }
    return message;
  },

  toJSON(message: QueryFetchContractResponse): unknown {
    const obj: any = {};
    message.contract !== undefined &&
      (obj.contract = message.contract
        ? Contract.toJSON(message.contract)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFetchContractResponse>
  ): QueryFetchContractResponse {
    const message = {
      ...baseQueryFetchContractResponse,
    } as QueryFetchContractResponse;
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = Contract.fromPartial(object.contract);
    } else {
      message.contract = undefined;
    }
    return message;
  },
};

const baseQueryAllContractRequest: object = {};

export const QueryAllContractRequest = {
  encode(
    message: QueryAllContractRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllContractRequest,
    } as QueryAllContractRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllContractRequest {
    const message = {
      ...baseQueryAllContractRequest,
    } as QueryAllContractRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllContractRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllContractRequest>
  ): QueryAllContractRequest {
    const message = {
      ...baseQueryAllContractRequest,
    } as QueryAllContractRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllContractResponse: object = {};

export const QueryAllContractResponse = {
  encode(
    message: QueryAllContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.contract) {
      Contract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllContractResponse,
    } as QueryAllContractResponse;
    message.contract = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract.push(Contract.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllContractResponse {
    const message = {
      ...baseQueryAllContractResponse,
    } as QueryAllContractResponse;
    message.contract = [];
    if (object.contract !== undefined && object.contract !== null) {
      for (const e of object.contract) {
        message.contract.push(Contract.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllContractResponse): unknown {
    const obj: any = {};
    if (message.contract) {
      obj.contract = message.contract.map((e) =>
        e ? Contract.toJSON(e) : undefined
      );
    } else {
      obj.contract = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllContractResponse>
  ): QueryAllContractResponse {
    const message = {
      ...baseQueryAllContractResponse,
    } as QueryAllContractResponse;
    message.contract = [];
    if (object.contract !== undefined && object.contract !== null) {
      for (const e of object.contract) {
        message.contract.push(Contract.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryActiveContractRequest: object = {
  provider: "",
  service: "",
  spender: "",
};

export const QueryActiveContractRequest = {
  encode(
    message: QueryActiveContractRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.service !== "") {
      writer.uint32(18).string(message.service);
    }
    if (message.spender !== "") {
      writer.uint32(26).string(message.spender);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryActiveContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryActiveContractRequest,
    } as QueryActiveContractRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.service = reader.string();
          break;
        case 3:
          message.spender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActiveContractRequest {
    const message = {
      ...baseQueryActiveContractRequest,
    } as QueryActiveContractRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = String(object.service);
    } else {
      message.service = "";
    }
    if (object.spender !== undefined && object.spender !== null) {
      message.spender = String(object.spender);
    } else {
      message.spender = "";
    }
    return message;
  },

  toJSON(message: QueryActiveContractRequest): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.service !== undefined && (obj.service = message.service);
    message.spender !== undefined && (obj.spender = message.spender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryActiveContractRequest>
  ): QueryActiveContractRequest {
    const message = {
      ...baseQueryActiveContractRequest,
    } as QueryActiveContractRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = object.service;
    } else {
      message.service = "";
    }
    if (object.spender !== undefined && object.spender !== null) {
      message.spender = object.spender;
    } else {
      message.spender = "";
    }
    return message;
  },
};

const baseQueryActiveContractResponse: object = {};

export const QueryActiveContractResponse = {
  encode(
    message: QueryActiveContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contract !== undefined) {
      Contract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryActiveContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryActiveContractResponse,
    } as QueryActiveContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = Contract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActiveContractResponse {
    const message = {
      ...baseQueryActiveContractResponse,
    } as QueryActiveContractResponse;
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = Contract.fromJSON(object.contract);
    } else {
      message.contract = undefined;
    }
    return message;
  },

  toJSON(message: QueryActiveContractResponse): unknown {
    const obj: any = {};
    message.contract !== undefined &&
      (obj.contract = message.contract
        ? Contract.toJSON(message.contract)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryActiveContractResponse>
  ): QueryActiveContractResponse {
    const message = {
      ...baseQueryActiveContractResponse,
    } as QueryActiveContractResponse;
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = Contract.fromPartial(object.contract);
    } else {
      message.contract = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  FetchProvider(
    request: QueryFetchProviderRequest
  ): Promise<QueryFetchProviderResponse>;
  ProviderAll(
    request: QueryAllProviderRequest
  ): Promise<QueryAllProviderResponse>;
  FetchContract(
    request: QueryFetchContractRequest
  ): Promise<QueryFetchContractResponse>;
  ContractAll(
    request: QueryAllContractRequest
  ): Promise<QueryAllContractResponse>;
  /** Queries an active contract by spender, provider and service. */
  ActiveContract(
    request: QueryActiveContractRequest
  ): Promise<QueryActiveContractResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("arkeo.arkeo.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  FetchProvider(
    request: QueryFetchProviderRequest
  ): Promise<QueryFetchProviderResponse> {
    const data = QueryFetchProviderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "arkeo.arkeo.Query",
      "FetchProvider",
      data
    );
    return promise.then((data) =>
      QueryFetchProviderResponse.decode(new Reader(data))
    );
  }

  ProviderAll(
    request: QueryAllProviderRequest
  ): Promise<QueryAllProviderResponse> {
    const data = QueryAllProviderRequest.encode(request).finish();
    const promise = this.rpc.request("arkeo.arkeo.Query", "ProviderAll", data);
    return promise.then((data) =>
      QueryAllProviderResponse.decode(new Reader(data))
    );
  }

  FetchContract(
    request: QueryFetchContractRequest
  ): Promise<QueryFetchContractResponse> {
    const data = QueryFetchContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "arkeo.arkeo.Query",
      "FetchContract",
      data
    );
    return promise.then((data) =>
      QueryFetchContractResponse.decode(new Reader(data))
    );
  }

  ContractAll(
    request: QueryAllContractRequest
  ): Promise<QueryAllContractResponse> {
    const data = QueryAllContractRequest.encode(request).finish();
    const promise = this.rpc.request("arkeo.arkeo.Query", "ContractAll", data);
    return promise.then((data) =>
      QueryAllContractResponse.decode(new Reader(data))
    );
  }

  ActiveContract(
    request: QueryActiveContractRequest
  ): Promise<QueryActiveContractResponse> {
    const data = QueryActiveContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "arkeo.arkeo.Query",
      "ActiveContract",
      data
    );
    return promise.then((data) =>
      QueryActiveContractResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

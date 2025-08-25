/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface EarnControllerGetEarnItemsParams {
  /** Фильтрация */
  filter: Object;
  /** Сортировка */
  sort: EarnSort;
}

export interface EarnItemDto {
  /**
   * Бейджи
   * @example []
   */
  badges?: EarnItemDtoBadgesEnum[];
  /**
   * Длительность стейкинга
   * @example 100
   */
  duration: number | EarnItemDtoDurationEnum;
  /**
   * Уникальный идентификатор
   * @example "earn_001"
   */
  id: string;
  /**
   * Максимальная ставка
   * @example 100
   */
  maxRate: number;
  /**
   * Название продукта
   * @example "Simple Earn"
   */
  name?: string;
  /**
   * Тип периода
   * @example "flexible"
   */
  periodType: EarnItemDtoPeriodTypeEnum;
  /** Информация о платформе */
  platform: EarnItemPlatformDto;
  /**
   * Уровень продукта
   * @example "normal"
   */
  productLevel: EarnItemDtoProductLevelEnum;
  /**
   * Настройки ставки
   * @example []
   */
  rateSettings?: EarnItemRateSettingsDto[];
  /** Информация о токене */
  token: EarnItemTokenDto;
}

export enum EarnItemDtoBadgesEnum {
  SmallLimit = "smallLimit",
  ForNewUsers = "forNewUsers",
}

export enum EarnItemDtoDurationEnum {
  Infinity = "Infinity",
}

/**
 * Тип периода
 * @example "flexible"
 */
export enum EarnItemDtoPeriodTypeEnum {
  Flexible = "flexible",
  Fixed = "fixed",
}

/**
 * Уровень продукта
 * @example "normal"
 */
export enum EarnItemDtoProductLevelEnum {
  NewUser = "newUser",
  Beginner = "beginner",
  Normal = "normal",
  Vip = "vip",
}

export interface EarnItemPlatformDto {
  /**
   * Ссылка на платформу
   * @example "https://binance.com"
   */
  link: string;
  /**
   * Название платформы
   * @example "Binance"
   */
  name: EarnItemPlatformDtoNameEnum;
  /**
   * Ссылка на платформу с рефкой
   * @example "https://binance.com/ref/CPA_00CR5Q0KBD"
   */
  refLink: string;
}

/**
 * Название платформы
 * @example "Binance"
 */
export enum EarnItemPlatformDtoNameEnum {
  Binance = "Binance",
  Bybit = "Bybit",
  Mexc = "Mexc",
  Okx = "Okx",
  Kucoin = "Kucoin",
  Htx = "Htx",
  BingX = "BingX",
  Bitget = "Bitget",
  Jito = "Jito",
  Lido = "Lido",
  Mellow = "Mellow",
  Navi = "Navi",
  Spark = "Spark",
  Venus = "Venus",
}

export interface EarnItemRateSettingsDto {
  /**
   * Текущий APY
   * @example 5.5
   */
  apy: number;
  /**
   * Максимальная сумма
   * @example 100000
   */
  max: number | EarnItemRateSettingsDtoMaxEnum;
  /**
   * Минимальная сумма
   * @example 10000
   */
  min: number;
}

export enum EarnItemRateSettingsDtoMaxEnum {
  Infinity = "Infinity",
}

export interface EarnItemTokenDto {
  /**
   * Название токена
   * @example "BTC"
   */
  name: EarnItemTokenDtoNameEnum;
}

/**
 * Название токена
 * @example "BTC"
 */
export enum EarnItemTokenDtoNameEnum {
  USDT = "USDT",
  SuiUSDT = "suiUSDT",
  WUSDT = "wUSDT",
  USDC = "USDC",
  WUSDC = "wUSDC",
  ETH = "ETH",
  WETH = "WETH",
  SuiETH = "suiETH",
  BTC = "BTC",
  SuiWBTC = "suiWBTC",
  WBTC = "WBTC",
  LBTC = "LBTC",
  USDE = "USDE",
  SOL = "SOL",
  SUI = "SUI",
  VSUI = "vSUI",
  StSUI = "stSUI",
  HaSUI = "haSUI",
}

export interface EarnRequest {
  /** Фильтрация */
  filter: object | null;
  /** Сортировка */
  sort: EarnSort | null;
}

export interface EarnResponseDto {
  /**
   * Массив элементов earn
   * @example []
   */
  data: EarnItemDto[];
}

export interface EarnSort {
  /** @example "-1" */
  direction: EarnSortDirectionEnum;
}

/** @example "-1" */
export enum EarnSortDirectionEnum {
  Value1 = 1,
  Value11 = -1,
}

export interface HealthResponseDto {
  /**
   * Сообщение о статусе API
   * @example "Hello World!"
   */
  message: string;
  /**
   * Временная метка ответа
   * @example "2024-01-01T00:00:00.000Z"
   */
  timestamp: string;
}

export type Object = object;

export interface PoolItemDto {
  /**
   * Бейджи
   * @example []
   */
  badges?: PoolItemDtoBadgesEnum[];
  /**
   * Уникальный идентификатор
   * @example "pool_001"
   */
  id: string;
}

export enum PoolItemDtoBadgesEnum {
  SmallLimit = "smallLimit",
  ForNewUsers = "forNewUsers",
}

export interface PoolsResponseDto {
  /**
   * Список пулов
   * @example []
   */
  data: PoolItemDto[];
}

export namespace Health {
  /**
   * No description
   * @tags AppController
   * @name AppControllerGetHello
   * @summary Health check
   * @request GET:/health
   * @response `200` `HealthResponseDto`
   */
  export namespace AppControllerGetHello {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HealthResponseDto;
  }
}

export namespace Earn {
  /**
   * No description
   * @tags EarnController
   * @name EarnControllerGetEarnItems
   * @summary Получить список earn элементов
   * @request GET:/earn
   * @response `200` `EarnResponseDto`
   */
  export namespace EarnControllerGetEarnItems {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Фильтрация */
      filter: Object;
      /** Сортировка */
      sort: EarnSort;
    };
    export type RequestBody = EarnRequest;
    export type RequestHeaders = {};
    export type ResponseBody = EarnResponseDto;
  }

  /**
   * No description
   * @tags EarnController
   * @name EarnControllerGetEarnItemsWithoutJob
   * @summary Получить список earn элементов
   * @request GET:/earn/without-job
   * @response `200` `EarnResponseDto`
   */
  export namespace EarnControllerGetEarnItemsWithoutJob {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EarnResponseDto;
  }
}

export namespace Pools {
  /**
   * No description
   * @tags PoolsController
   * @name PoolsControllerGetPoolItems
   * @summary Получить список пуллов
   * @request GET:/pools
   * @response `200` `PoolsResponseDto`
   */
  export namespace PoolsControllerGetPoolItems {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PoolsResponseDto;
  }

  /**
   * No description
   * @tags PoolsController
   * @name PoolsControllerGetPoolsItemsWithoutJob
   * @summary Получить список пуллов без job
   * @request GET:/pools/without-job
   * @response `200` `PoolsResponseDto`
   */
  export namespace PoolsControllerGetPoolsItemsWithoutJob {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PoolsResponseDto;
  }
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { "Content-Type": type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title Compare DeFi API
 * @version 1.0
 * @contact
 *
 * API для сравнения DeFi протоколов и стейкинга
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  health = {
    /**
     * No description
     *
     * @tags AppController
     * @name AppControllerGetHello
     * @summary Health check
     * @request GET:/health
     * @response `200` `HealthResponseDto`
     */
    appControllerGetHello: (params: RequestParams = {}) =>
      this.http.request<HealthResponseDto, any>({
        path: `/health`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  earn = {
    /**
     * No description
     *
     * @tags EarnController
     * @name EarnControllerGetEarnItems
     * @summary Получить список earn элементов
     * @request GET:/earn
     * @response `200` `EarnResponseDto`
     */
    earnControllerGetEarnItems: (
      query: EarnControllerGetEarnItemsParams,
      data: EarnRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<EarnResponseDto, any>({
        path: `/earn`,
        method: "GET",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EarnController
     * @name EarnControllerGetEarnItemsWithoutJob
     * @summary Получить список earn элементов
     * @request GET:/earn/without-job
     * @response `200` `EarnResponseDto`
     */
    earnControllerGetEarnItemsWithoutJob: (params: RequestParams = {}) =>
      this.http.request<EarnResponseDto, any>({
        path: `/earn/without-job`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  pools = {
    /**
     * No description
     *
     * @tags PoolsController
     * @name PoolsControllerGetPoolItems
     * @summary Получить список пуллов
     * @request GET:/pools
     * @response `200` `PoolsResponseDto`
     */
    poolsControllerGetPoolItems: (params: RequestParams = {}) =>
      this.http.request<PoolsResponseDto, any>({
        path: `/pools`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PoolsController
     * @name PoolsControllerGetPoolsItemsWithoutJob
     * @summary Получить список пуллов без job
     * @request GET:/pools/without-job
     * @response `200` `PoolsResponseDto`
     */
    poolsControllerGetPoolsItemsWithoutJob: (params: RequestParams = {}) =>
      this.http.request<PoolsResponseDto, any>({
        path: `/pools/without-job`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}

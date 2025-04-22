
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Auth
 * 
 */
export type Auth = $Result.DefaultSelection<Prisma.$AuthPayload>
/**
 * Model ProjectManager
 * 
 */
export type ProjectManager = $Result.DefaultSelection<Prisma.$ProjectManagerPayload>
/**
 * Model TeamLeader
 * 
 */
export type TeamLeader = $Result.DefaultSelection<Prisma.$TeamLeaderPayload>
/**
 * Model Developer
 * 
 */
export type Developer = $Result.DefaultSelection<Prisma.$DeveloperPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const TaskStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const OTPStatus: {
  VERIFIED: 'VERIFIED',
  PENDING: 'PENDING'
};

export type OTPStatus = (typeof OTPStatus)[keyof typeof OTPStatus]

}

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type OTPStatus = $Enums.OTPStatus

export const OTPStatus: typeof $Enums.OTPStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auths
 * const auths = await prisma.auth.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Auths
   * const auths = await prisma.auth.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auth`: Exposes CRUD operations for the **Auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.AuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectManager`: Exposes CRUD operations for the **ProjectManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectManagers
    * const projectManagers = await prisma.projectManager.findMany()
    * ```
    */
  get projectManager(): Prisma.ProjectManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamLeader`: Exposes CRUD operations for the **TeamLeader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamLeaders
    * const teamLeaders = await prisma.teamLeader.findMany()
    * ```
    */
  get teamLeader(): Prisma.TeamLeaderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.developer`: Exposes CRUD operations for the **Developer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Developers
    * const developers = await prisma.developer.findMany()
    * ```
    */
  get developer(): Prisma.DeveloperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Auth: 'Auth',
    ProjectManager: 'ProjectManager',
    TeamLeader: 'TeamLeader',
    Developer: 'Developer',
    Project: 'Project',
    Task: 'Task',
    Session: 'Session',
    Otp: 'Otp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auth" | "projectManager" | "teamLeader" | "developer" | "project" | "task" | "session" | "otp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Auth: {
        payload: Prisma.$AuthPayload<ExtArgs>
        fields: Prisma.AuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findFirst: {
            args: Prisma.AuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findMany: {
            args: Prisma.AuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          create: {
            args: Prisma.AuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          createMany: {
            args: Prisma.AuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          delete: {
            args: Prisma.AuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          update: {
            args: Prisma.AuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          deleteMany: {
            args: Prisma.AuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          upsert: {
            args: Prisma.AuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.AuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      ProjectManager: {
        payload: Prisma.$ProjectManagerPayload<ExtArgs>
        fields: Prisma.ProjectManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>
          }
          findFirst: {
            args: Prisma.ProjectManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>
          }
          findMany: {
            args: Prisma.ProjectManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>[]
          }
          create: {
            args: Prisma.ProjectManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>
          }
          createMany: {
            args: Prisma.ProjectManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>[]
          }
          delete: {
            args: Prisma.ProjectManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>
          }
          update: {
            args: Prisma.ProjectManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>
          }
          deleteMany: {
            args: Prisma.ProjectManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>[]
          }
          upsert: {
            args: Prisma.ProjectManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectManagerPayload>
          }
          aggregate: {
            args: Prisma.ProjectManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectManager>
          }
          groupBy: {
            args: Prisma.ProjectManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectManagerCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectManagerCountAggregateOutputType> | number
          }
        }
      }
      TeamLeader: {
        payload: Prisma.$TeamLeaderPayload<ExtArgs>
        fields: Prisma.TeamLeaderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamLeaderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamLeaderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>
          }
          findFirst: {
            args: Prisma.TeamLeaderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamLeaderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>
          }
          findMany: {
            args: Prisma.TeamLeaderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>[]
          }
          create: {
            args: Prisma.TeamLeaderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>
          }
          createMany: {
            args: Prisma.TeamLeaderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamLeaderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>[]
          }
          delete: {
            args: Prisma.TeamLeaderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>
          }
          update: {
            args: Prisma.TeamLeaderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>
          }
          deleteMany: {
            args: Prisma.TeamLeaderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamLeaderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamLeaderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>[]
          }
          upsert: {
            args: Prisma.TeamLeaderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamLeaderPayload>
          }
          aggregate: {
            args: Prisma.TeamLeaderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamLeader>
          }
          groupBy: {
            args: Prisma.TeamLeaderGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamLeaderGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamLeaderCountArgs<ExtArgs>
            result: $Utils.Optional<TeamLeaderCountAggregateOutputType> | number
          }
        }
      }
      Developer: {
        payload: Prisma.$DeveloperPayload<ExtArgs>
        fields: Prisma.DeveloperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeveloperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeveloperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          findFirst: {
            args: Prisma.DeveloperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeveloperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          findMany: {
            args: Prisma.DeveloperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          create: {
            args: Prisma.DeveloperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          createMany: {
            args: Prisma.DeveloperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeveloperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          delete: {
            args: Prisma.DeveloperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          update: {
            args: Prisma.DeveloperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          deleteMany: {
            args: Prisma.DeveloperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeveloperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeveloperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          upsert: {
            args: Prisma.DeveloperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          aggregate: {
            args: Prisma.DeveloperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeveloper>
          }
          groupBy: {
            args: Prisma.DeveloperGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeveloperGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeveloperCountArgs<ExtArgs>
            result: $Utils.Optional<DeveloperCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    auth?: AuthOmit
    projectManager?: ProjectManagerOmit
    teamLeader?: TeamLeaderOmit
    developer?: DeveloperOmit
    project?: ProjectOmit
    task?: TaskOmit
    session?: SessionOmit
    otp?: OtpOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectManagerCountOutputType
   */

  export type ProjectManagerCountOutputType = {
    projects: number
  }

  export type ProjectManagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectManagerCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ProjectManagerCountOutputType without action
   */
  export type ProjectManagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManagerCountOutputType
     */
    select?: ProjectManagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectManagerCountOutputType without action
   */
  export type ProjectManagerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type TeamLeaderCountOutputType
   */

  export type TeamLeaderCountOutputType = {
    projects: number
  }

  export type TeamLeaderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TeamLeaderCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * TeamLeaderCountOutputType without action
   */
  export type TeamLeaderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeaderCountOutputType
     */
    select?: TeamLeaderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamLeaderCountOutputType without action
   */
  export type TeamLeaderCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type DeveloperCountOutputType
   */

  export type DeveloperCountOutputType = {
    tasks: number
  }

  export type DeveloperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | DeveloperCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperCountOutputType
     */
    select?: DeveloperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _avg: AuthAvgAggregateOutputType | null
    _sum: AuthSumAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthSumAggregateOutputType = {
    id: number | null
  }

  export type AuthMinAggregateOutputType = {
    id: number | null
    email: string | null
    salt: string | null
    hash: string | null
  }

  export type AuthMaxAggregateOutputType = {
    id: number | null
    email: string | null
    salt: string | null
    hash: string | null
  }

  export type AuthCountAggregateOutputType = {
    id: number
    email: number
    salt: number
    hash: number
    _all: number
  }


  export type AuthAvgAggregateInputType = {
    id?: true
  }

  export type AuthSumAggregateInputType = {
    id?: true
  }

  export type AuthMinAggregateInputType = {
    id?: true
    email?: true
    salt?: true
    hash?: true
  }

  export type AuthMaxAggregateInputType = {
    id?: true
    email?: true
    salt?: true
    hash?: true
  }

  export type AuthCountAggregateInputType = {
    id?: true
    email?: true
    salt?: true
    hash?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auth to aggregate.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type AuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthWhereInput
    orderBy?: AuthOrderByWithAggregationInput | AuthOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: AuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _avg?: AuthAvgAggregateInputType
    _sum?: AuthSumAggregateInputType
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    id: number
    email: string
    salt: string
    hash: string
    _count: AuthCountAggregateOutputType | null
    _avg: AuthAvgAggregateOutputType | null
    _sum: AuthSumAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends AuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type AuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    salt?: boolean
    hash?: boolean
    manager?: boolean | Auth$managerArgs<ExtArgs>
    leader?: boolean | Auth$leaderArgs<ExtArgs>
    dev?: boolean | Auth$devArgs<ExtArgs>
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    salt?: boolean
    hash?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    salt?: boolean
    hash?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectScalar = {
    id?: boolean
    email?: boolean
    salt?: boolean
    hash?: boolean
  }

  export type AuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "salt" | "hash", ExtArgs["result"]["auth"]>
  export type AuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Auth$managerArgs<ExtArgs>
    leader?: boolean | Auth$leaderArgs<ExtArgs>
    dev?: boolean | Auth$devArgs<ExtArgs>
  }
  export type AuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auth"
    objects: {
      manager: Prisma.$ProjectManagerPayload<ExtArgs> | null
      leader: Prisma.$TeamLeaderPayload<ExtArgs> | null
      dev: Prisma.$DeveloperPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      salt: string
      hash: string
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type AuthGetPayload<S extends boolean | null | undefined | AuthDefaultArgs> = $Result.GetResult<Prisma.$AuthPayload, S>

  type AuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface AuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auth'], meta: { name: 'Auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {AuthFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthFindUniqueArgs>(args: SelectSubset<T, AuthFindUniqueArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthFindFirstArgs>(args?: SelectSubset<T, AuthFindFirstArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authWithIdOnly = await prisma.auth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthFindManyArgs>(args?: SelectSubset<T, AuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth.
     * @param {AuthCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
     */
    create<T extends AuthCreateArgs>(args: SelectSubset<T, AuthCreateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auths.
     * @param {AuthCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCreateManyArgs>(args?: SelectSubset<T, AuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auths and returns the data saved in the database.
     * @param {AuthCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth.
     * @param {AuthDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
     */
    delete<T extends AuthDeleteArgs>(args: SelectSubset<T, AuthDeleteArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth.
     * @param {AuthUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUpdateArgs>(args: SelectSubset<T, AuthUpdateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auths.
     * @param {AuthDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthDeleteManyArgs>(args?: SelectSubset<T, AuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUpdateManyArgs>(args: SelectSubset<T, AuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {AuthUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth.
     * @param {AuthUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends AuthUpsertArgs>(args: SelectSubset<T, AuthUpsertArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends AuthCountArgs>(
      args?: Subset<T, AuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthGroupByArgs['orderBy'] }
        : { orderBy?: AuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auth model
   */
  readonly fields: AuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends Auth$managerArgs<ExtArgs> = {}>(args?: Subset<T, Auth$managerArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leader<T extends Auth$leaderArgs<ExtArgs> = {}>(args?: Subset<T, Auth$leaderArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dev<T extends Auth$devArgs<ExtArgs> = {}>(args?: Subset<T, Auth$devArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auth model
   */
  interface AuthFieldRefs {
    readonly id: FieldRef<"Auth", 'Int'>
    readonly email: FieldRef<"Auth", 'String'>
    readonly salt: FieldRef<"Auth", 'String'>
    readonly hash: FieldRef<"Auth", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Auth findUnique
   */
  export type AuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findUniqueOrThrow
   */
  export type AuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findFirst
   */
  export type AuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findFirstOrThrow
   */
  export type AuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findMany
   */
  export type AuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auths to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth create
   */
  export type AuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The data needed to create a Auth.
     */
    data: XOR<AuthCreateInput, AuthUncheckedCreateInput>
  }

  /**
   * Auth createMany
   */
  export type AuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth createManyAndReturn
   */
  export type AuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth update
   */
  export type AuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The data needed to update a Auth.
     */
    data: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
    /**
     * Choose, which Auth to update.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth updateMany
   */
  export type AuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth updateManyAndReturn
   */
  export type AuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth upsert
   */
  export type AuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The filter to search for the Auth to update in case it exists.
     */
    where: AuthWhereUniqueInput
    /**
     * In case the Auth found by the `where` argument doesn't exist, create a new Auth with this data.
     */
    create: XOR<AuthCreateInput, AuthUncheckedCreateInput>
    /**
     * In case the Auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
  }

  /**
   * Auth delete
   */
  export type AuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter which Auth to delete.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth deleteMany
   */
  export type AuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auths to delete
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to delete.
     */
    limit?: number
  }

  /**
   * Auth.manager
   */
  export type Auth$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    where?: ProjectManagerWhereInput
  }

  /**
   * Auth.leader
   */
  export type Auth$leaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    where?: TeamLeaderWhereInput
  }

  /**
   * Auth.dev
   */
  export type Auth$devArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    where?: DeveloperWhereInput
  }

  /**
   * Auth without action
   */
  export type AuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
  }


  /**
   * Model ProjectManager
   */

  export type AggregateProjectManager = {
    _count: ProjectManagerCountAggregateOutputType | null
    _avg: ProjectManagerAvgAggregateOutputType | null
    _sum: ProjectManagerSumAggregateOutputType | null
    _min: ProjectManagerMinAggregateOutputType | null
    _max: ProjectManagerMaxAggregateOutputType | null
  }

  export type ProjectManagerAvgAggregateOutputType = {
    id: number | null
    authId: number | null
  }

  export type ProjectManagerSumAggregateOutputType = {
    id: number | null
    authId: number | null
  }

  export type ProjectManagerMinAggregateOutputType = {
    id: number | null
    username: string | null
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number | null
  }

  export type ProjectManagerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number | null
  }

  export type ProjectManagerCountAggregateOutputType = {
    id: number
    username: number
    lastLogin: number
    lastLogout: number
    authId: number
    _all: number
  }


  export type ProjectManagerAvgAggregateInputType = {
    id?: true
    authId?: true
  }

  export type ProjectManagerSumAggregateInputType = {
    id?: true
    authId?: true
  }

  export type ProjectManagerMinAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
  }

  export type ProjectManagerMaxAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
  }

  export type ProjectManagerCountAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
    _all?: true
  }

  export type ProjectManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectManager to aggregate.
     */
    where?: ProjectManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectManagers to fetch.
     */
    orderBy?: ProjectManagerOrderByWithRelationInput | ProjectManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectManagers
    **/
    _count?: true | ProjectManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectManagerMaxAggregateInputType
  }

  export type GetProjectManagerAggregateType<T extends ProjectManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectManager[P]>
      : GetScalarType<T[P], AggregateProjectManager[P]>
  }




  export type ProjectManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectManagerWhereInput
    orderBy?: ProjectManagerOrderByWithAggregationInput | ProjectManagerOrderByWithAggregationInput[]
    by: ProjectManagerScalarFieldEnum[] | ProjectManagerScalarFieldEnum
    having?: ProjectManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectManagerCountAggregateInputType | true
    _avg?: ProjectManagerAvgAggregateInputType
    _sum?: ProjectManagerSumAggregateInputType
    _min?: ProjectManagerMinAggregateInputType
    _max?: ProjectManagerMaxAggregateInputType
  }

  export type ProjectManagerGroupByOutputType = {
    id: number
    username: string
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number
    _count: ProjectManagerCountAggregateOutputType | null
    _avg: ProjectManagerAvgAggregateOutputType | null
    _sum: ProjectManagerSumAggregateOutputType | null
    _min: ProjectManagerMinAggregateOutputType | null
    _max: ProjectManagerMaxAggregateOutputType | null
  }

  type GetProjectManagerGroupByPayload<T extends ProjectManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectManagerGroupByOutputType[P]>
        }
      >
    >


  export type ProjectManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
    projects?: boolean | ProjectManager$projectsArgs<ExtArgs>
    session?: boolean | ProjectManager$sessionArgs<ExtArgs>
    otp?: boolean | ProjectManager$otpArgs<ExtArgs>
    _count?: boolean | ProjectManagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectManager"]>

  export type ProjectManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectManager"]>

  export type ProjectManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectManager"]>

  export type ProjectManagerSelectScalar = {
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
  }

  export type ProjectManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "lastLogin" | "lastLogout" | "authId", ExtArgs["result"]["projectManager"]>
  export type ProjectManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
    projects?: boolean | ProjectManager$projectsArgs<ExtArgs>
    session?: boolean | ProjectManager$sessionArgs<ExtArgs>
    otp?: boolean | ProjectManager$otpArgs<ExtArgs>
    _count?: boolean | ProjectManagerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type ProjectManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }

  export type $ProjectManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectManager"
    objects: {
      auth: Prisma.$AuthPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs> | null
      otp: Prisma.$OtpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      lastLogin: Date | null
      lastLogout: Date | null
      authId: number
    }, ExtArgs["result"]["projectManager"]>
    composites: {}
  }

  type ProjectManagerGetPayload<S extends boolean | null | undefined | ProjectManagerDefaultArgs> = $Result.GetResult<Prisma.$ProjectManagerPayload, S>

  type ProjectManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectManagerCountAggregateInputType | true
    }

  export interface ProjectManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectManager'], meta: { name: 'ProjectManager' } }
    /**
     * Find zero or one ProjectManager that matches the filter.
     * @param {ProjectManagerFindUniqueArgs} args - Arguments to find a ProjectManager
     * @example
     * // Get one ProjectManager
     * const projectManager = await prisma.projectManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectManagerFindUniqueArgs>(args: SelectSubset<T, ProjectManagerFindUniqueArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectManager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectManagerFindUniqueOrThrowArgs} args - Arguments to find a ProjectManager
     * @example
     * // Get one ProjectManager
     * const projectManager = await prisma.projectManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectManagerFindFirstArgs} args - Arguments to find a ProjectManager
     * @example
     * // Get one ProjectManager
     * const projectManager = await prisma.projectManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectManagerFindFirstArgs>(args?: SelectSubset<T, ProjectManagerFindFirstArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectManagerFindFirstOrThrowArgs} args - Arguments to find a ProjectManager
     * @example
     * // Get one ProjectManager
     * const projectManager = await prisma.projectManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectManagers
     * const projectManagers = await prisma.projectManager.findMany()
     * 
     * // Get first 10 ProjectManagers
     * const projectManagers = await prisma.projectManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectManagerWithIdOnly = await prisma.projectManager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectManagerFindManyArgs>(args?: SelectSubset<T, ProjectManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectManager.
     * @param {ProjectManagerCreateArgs} args - Arguments to create a ProjectManager.
     * @example
     * // Create one ProjectManager
     * const ProjectManager = await prisma.projectManager.create({
     *   data: {
     *     // ... data to create a ProjectManager
     *   }
     * })
     * 
     */
    create<T extends ProjectManagerCreateArgs>(args: SelectSubset<T, ProjectManagerCreateArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectManagers.
     * @param {ProjectManagerCreateManyArgs} args - Arguments to create many ProjectManagers.
     * @example
     * // Create many ProjectManagers
     * const projectManager = await prisma.projectManager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectManagerCreateManyArgs>(args?: SelectSubset<T, ProjectManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectManagers and returns the data saved in the database.
     * @param {ProjectManagerCreateManyAndReturnArgs} args - Arguments to create many ProjectManagers.
     * @example
     * // Create many ProjectManagers
     * const projectManager = await prisma.projectManager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectManagers and only return the `id`
     * const projectManagerWithIdOnly = await prisma.projectManager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectManager.
     * @param {ProjectManagerDeleteArgs} args - Arguments to delete one ProjectManager.
     * @example
     * // Delete one ProjectManager
     * const ProjectManager = await prisma.projectManager.delete({
     *   where: {
     *     // ... filter to delete one ProjectManager
     *   }
     * })
     * 
     */
    delete<T extends ProjectManagerDeleteArgs>(args: SelectSubset<T, ProjectManagerDeleteArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectManager.
     * @param {ProjectManagerUpdateArgs} args - Arguments to update one ProjectManager.
     * @example
     * // Update one ProjectManager
     * const projectManager = await prisma.projectManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectManagerUpdateArgs>(args: SelectSubset<T, ProjectManagerUpdateArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectManagers.
     * @param {ProjectManagerDeleteManyArgs} args - Arguments to filter ProjectManagers to delete.
     * @example
     * // Delete a few ProjectManagers
     * const { count } = await prisma.projectManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectManagerDeleteManyArgs>(args?: SelectSubset<T, ProjectManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectManagers
     * const projectManager = await prisma.projectManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectManagerUpdateManyArgs>(args: SelectSubset<T, ProjectManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectManagers and returns the data updated in the database.
     * @param {ProjectManagerUpdateManyAndReturnArgs} args - Arguments to update many ProjectManagers.
     * @example
     * // Update many ProjectManagers
     * const projectManager = await prisma.projectManager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectManagers and only return the `id`
     * const projectManagerWithIdOnly = await prisma.projectManager.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectManager.
     * @param {ProjectManagerUpsertArgs} args - Arguments to update or create a ProjectManager.
     * @example
     * // Update or create a ProjectManager
     * const projectManager = await prisma.projectManager.upsert({
     *   create: {
     *     // ... data to create a ProjectManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectManager we want to update
     *   }
     * })
     */
    upsert<T extends ProjectManagerUpsertArgs>(args: SelectSubset<T, ProjectManagerUpsertArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectManagerCountArgs} args - Arguments to filter ProjectManagers to count.
     * @example
     * // Count the number of ProjectManagers
     * const count = await prisma.projectManager.count({
     *   where: {
     *     // ... the filter for the ProjectManagers we want to count
     *   }
     * })
    **/
    count<T extends ProjectManagerCountArgs>(
      args?: Subset<T, ProjectManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectManagerAggregateArgs>(args: Subset<T, ProjectManagerAggregateArgs>): Prisma.PrismaPromise<GetProjectManagerAggregateType<T>>

    /**
     * Group by ProjectManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectManagerGroupByArgs['orderBy'] }
        : { orderBy?: ProjectManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectManager model
   */
  readonly fields: ProjectManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends AuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthDefaultArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends ProjectManager$projectsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectManager$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends ProjectManager$sessionArgs<ExtArgs> = {}>(args?: Subset<T, ProjectManager$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    otp<T extends ProjectManager$otpArgs<ExtArgs> = {}>(args?: Subset<T, ProjectManager$otpArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectManager model
   */
  interface ProjectManagerFieldRefs {
    readonly id: FieldRef<"ProjectManager", 'Int'>
    readonly username: FieldRef<"ProjectManager", 'String'>
    readonly lastLogin: FieldRef<"ProjectManager", 'DateTime'>
    readonly lastLogout: FieldRef<"ProjectManager", 'DateTime'>
    readonly authId: FieldRef<"ProjectManager", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectManager findUnique
   */
  export type ProjectManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectManager to fetch.
     */
    where: ProjectManagerWhereUniqueInput
  }

  /**
   * ProjectManager findUniqueOrThrow
   */
  export type ProjectManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectManager to fetch.
     */
    where: ProjectManagerWhereUniqueInput
  }

  /**
   * ProjectManager findFirst
   */
  export type ProjectManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectManager to fetch.
     */
    where?: ProjectManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectManagers to fetch.
     */
    orderBy?: ProjectManagerOrderByWithRelationInput | ProjectManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectManagers.
     */
    cursor?: ProjectManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectManagers.
     */
    distinct?: ProjectManagerScalarFieldEnum | ProjectManagerScalarFieldEnum[]
  }

  /**
   * ProjectManager findFirstOrThrow
   */
  export type ProjectManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectManager to fetch.
     */
    where?: ProjectManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectManagers to fetch.
     */
    orderBy?: ProjectManagerOrderByWithRelationInput | ProjectManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectManagers.
     */
    cursor?: ProjectManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectManagers.
     */
    distinct?: ProjectManagerScalarFieldEnum | ProjectManagerScalarFieldEnum[]
  }

  /**
   * ProjectManager findMany
   */
  export type ProjectManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectManagers to fetch.
     */
    where?: ProjectManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectManagers to fetch.
     */
    orderBy?: ProjectManagerOrderByWithRelationInput | ProjectManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectManagers.
     */
    cursor?: ProjectManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectManagers.
     */
    skip?: number
    distinct?: ProjectManagerScalarFieldEnum | ProjectManagerScalarFieldEnum[]
  }

  /**
   * ProjectManager create
   */
  export type ProjectManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectManager.
     */
    data: XOR<ProjectManagerCreateInput, ProjectManagerUncheckedCreateInput>
  }

  /**
   * ProjectManager createMany
   */
  export type ProjectManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectManagers.
     */
    data: ProjectManagerCreateManyInput | ProjectManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectManager createManyAndReturn
   */
  export type ProjectManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectManagers.
     */
    data: ProjectManagerCreateManyInput | ProjectManagerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectManager update
   */
  export type ProjectManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectManager.
     */
    data: XOR<ProjectManagerUpdateInput, ProjectManagerUncheckedUpdateInput>
    /**
     * Choose, which ProjectManager to update.
     */
    where: ProjectManagerWhereUniqueInput
  }

  /**
   * ProjectManager updateMany
   */
  export type ProjectManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectManagers.
     */
    data: XOR<ProjectManagerUpdateManyMutationInput, ProjectManagerUncheckedUpdateManyInput>
    /**
     * Filter which ProjectManagers to update
     */
    where?: ProjectManagerWhereInput
    /**
     * Limit how many ProjectManagers to update.
     */
    limit?: number
  }

  /**
   * ProjectManager updateManyAndReturn
   */
  export type ProjectManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * The data used to update ProjectManagers.
     */
    data: XOR<ProjectManagerUpdateManyMutationInput, ProjectManagerUncheckedUpdateManyInput>
    /**
     * Filter which ProjectManagers to update
     */
    where?: ProjectManagerWhereInput
    /**
     * Limit how many ProjectManagers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectManager upsert
   */
  export type ProjectManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectManager to update in case it exists.
     */
    where: ProjectManagerWhereUniqueInput
    /**
     * In case the ProjectManager found by the `where` argument doesn't exist, create a new ProjectManager with this data.
     */
    create: XOR<ProjectManagerCreateInput, ProjectManagerUncheckedCreateInput>
    /**
     * In case the ProjectManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectManagerUpdateInput, ProjectManagerUncheckedUpdateInput>
  }

  /**
   * ProjectManager delete
   */
  export type ProjectManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    /**
     * Filter which ProjectManager to delete.
     */
    where: ProjectManagerWhereUniqueInput
  }

  /**
   * ProjectManager deleteMany
   */
  export type ProjectManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectManagers to delete
     */
    where?: ProjectManagerWhereInput
    /**
     * Limit how many ProjectManagers to delete.
     */
    limit?: number
  }

  /**
   * ProjectManager.projects
   */
  export type ProjectManager$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * ProjectManager.session
   */
  export type ProjectManager$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * ProjectManager.otp
   */
  export type ProjectManager$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    where?: OtpWhereInput
  }

  /**
   * ProjectManager without action
   */
  export type ProjectManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
  }


  /**
   * Model TeamLeader
   */

  export type AggregateTeamLeader = {
    _count: TeamLeaderCountAggregateOutputType | null
    _avg: TeamLeaderAvgAggregateOutputType | null
    _sum: TeamLeaderSumAggregateOutputType | null
    _min: TeamLeaderMinAggregateOutputType | null
    _max: TeamLeaderMaxAggregateOutputType | null
  }

  export type TeamLeaderAvgAggregateOutputType = {
    id: number | null
    authId: number | null
  }

  export type TeamLeaderSumAggregateOutputType = {
    id: number | null
    authId: number | null
  }

  export type TeamLeaderMinAggregateOutputType = {
    id: number | null
    username: string | null
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number | null
  }

  export type TeamLeaderMaxAggregateOutputType = {
    id: number | null
    username: string | null
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number | null
  }

  export type TeamLeaderCountAggregateOutputType = {
    id: number
    username: number
    lastLogin: number
    lastLogout: number
    authId: number
    _all: number
  }


  export type TeamLeaderAvgAggregateInputType = {
    id?: true
    authId?: true
  }

  export type TeamLeaderSumAggregateInputType = {
    id?: true
    authId?: true
  }

  export type TeamLeaderMinAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
  }

  export type TeamLeaderMaxAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
  }

  export type TeamLeaderCountAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
    _all?: true
  }

  export type TeamLeaderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamLeader to aggregate.
     */
    where?: TeamLeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamLeaders to fetch.
     */
    orderBy?: TeamLeaderOrderByWithRelationInput | TeamLeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamLeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamLeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamLeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamLeaders
    **/
    _count?: true | TeamLeaderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamLeaderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamLeaderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamLeaderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamLeaderMaxAggregateInputType
  }

  export type GetTeamLeaderAggregateType<T extends TeamLeaderAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamLeader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamLeader[P]>
      : GetScalarType<T[P], AggregateTeamLeader[P]>
  }




  export type TeamLeaderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamLeaderWhereInput
    orderBy?: TeamLeaderOrderByWithAggregationInput | TeamLeaderOrderByWithAggregationInput[]
    by: TeamLeaderScalarFieldEnum[] | TeamLeaderScalarFieldEnum
    having?: TeamLeaderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamLeaderCountAggregateInputType | true
    _avg?: TeamLeaderAvgAggregateInputType
    _sum?: TeamLeaderSumAggregateInputType
    _min?: TeamLeaderMinAggregateInputType
    _max?: TeamLeaderMaxAggregateInputType
  }

  export type TeamLeaderGroupByOutputType = {
    id: number
    username: string
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number
    _count: TeamLeaderCountAggregateOutputType | null
    _avg: TeamLeaderAvgAggregateOutputType | null
    _sum: TeamLeaderSumAggregateOutputType | null
    _min: TeamLeaderMinAggregateOutputType | null
    _max: TeamLeaderMaxAggregateOutputType | null
  }

  type GetTeamLeaderGroupByPayload<T extends TeamLeaderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamLeaderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamLeaderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamLeaderGroupByOutputType[P]>
            : GetScalarType<T[P], TeamLeaderGroupByOutputType[P]>
        }
      >
    >


  export type TeamLeaderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
    projects?: boolean | TeamLeader$projectsArgs<ExtArgs>
    session?: boolean | TeamLeader$sessionArgs<ExtArgs>
    otp?: boolean | TeamLeader$otpArgs<ExtArgs>
    _count?: boolean | TeamLeaderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamLeader"]>

  export type TeamLeaderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamLeader"]>

  export type TeamLeaderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamLeader"]>

  export type TeamLeaderSelectScalar = {
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
  }

  export type TeamLeaderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "lastLogin" | "lastLogout" | "authId", ExtArgs["result"]["teamLeader"]>
  export type TeamLeaderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
    projects?: boolean | TeamLeader$projectsArgs<ExtArgs>
    session?: boolean | TeamLeader$sessionArgs<ExtArgs>
    otp?: boolean | TeamLeader$otpArgs<ExtArgs>
    _count?: boolean | TeamLeaderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamLeaderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type TeamLeaderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }

  export type $TeamLeaderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamLeader"
    objects: {
      auth: Prisma.$AuthPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs> | null
      otp: Prisma.$OtpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      lastLogin: Date | null
      lastLogout: Date | null
      authId: number
    }, ExtArgs["result"]["teamLeader"]>
    composites: {}
  }

  type TeamLeaderGetPayload<S extends boolean | null | undefined | TeamLeaderDefaultArgs> = $Result.GetResult<Prisma.$TeamLeaderPayload, S>

  type TeamLeaderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamLeaderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamLeaderCountAggregateInputType | true
    }

  export interface TeamLeaderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamLeader'], meta: { name: 'TeamLeader' } }
    /**
     * Find zero or one TeamLeader that matches the filter.
     * @param {TeamLeaderFindUniqueArgs} args - Arguments to find a TeamLeader
     * @example
     * // Get one TeamLeader
     * const teamLeader = await prisma.teamLeader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamLeaderFindUniqueArgs>(args: SelectSubset<T, TeamLeaderFindUniqueArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamLeader that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamLeaderFindUniqueOrThrowArgs} args - Arguments to find a TeamLeader
     * @example
     * // Get one TeamLeader
     * const teamLeader = await prisma.teamLeader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamLeaderFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamLeaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamLeader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeaderFindFirstArgs} args - Arguments to find a TeamLeader
     * @example
     * // Get one TeamLeader
     * const teamLeader = await prisma.teamLeader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamLeaderFindFirstArgs>(args?: SelectSubset<T, TeamLeaderFindFirstArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamLeader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeaderFindFirstOrThrowArgs} args - Arguments to find a TeamLeader
     * @example
     * // Get one TeamLeader
     * const teamLeader = await prisma.teamLeader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamLeaderFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamLeaderFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamLeaders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeaderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamLeaders
     * const teamLeaders = await prisma.teamLeader.findMany()
     * 
     * // Get first 10 TeamLeaders
     * const teamLeaders = await prisma.teamLeader.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamLeaderWithIdOnly = await prisma.teamLeader.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamLeaderFindManyArgs>(args?: SelectSubset<T, TeamLeaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamLeader.
     * @param {TeamLeaderCreateArgs} args - Arguments to create a TeamLeader.
     * @example
     * // Create one TeamLeader
     * const TeamLeader = await prisma.teamLeader.create({
     *   data: {
     *     // ... data to create a TeamLeader
     *   }
     * })
     * 
     */
    create<T extends TeamLeaderCreateArgs>(args: SelectSubset<T, TeamLeaderCreateArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamLeaders.
     * @param {TeamLeaderCreateManyArgs} args - Arguments to create many TeamLeaders.
     * @example
     * // Create many TeamLeaders
     * const teamLeader = await prisma.teamLeader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamLeaderCreateManyArgs>(args?: SelectSubset<T, TeamLeaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamLeaders and returns the data saved in the database.
     * @param {TeamLeaderCreateManyAndReturnArgs} args - Arguments to create many TeamLeaders.
     * @example
     * // Create many TeamLeaders
     * const teamLeader = await prisma.teamLeader.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamLeaders and only return the `id`
     * const teamLeaderWithIdOnly = await prisma.teamLeader.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamLeaderCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamLeaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamLeader.
     * @param {TeamLeaderDeleteArgs} args - Arguments to delete one TeamLeader.
     * @example
     * // Delete one TeamLeader
     * const TeamLeader = await prisma.teamLeader.delete({
     *   where: {
     *     // ... filter to delete one TeamLeader
     *   }
     * })
     * 
     */
    delete<T extends TeamLeaderDeleteArgs>(args: SelectSubset<T, TeamLeaderDeleteArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamLeader.
     * @param {TeamLeaderUpdateArgs} args - Arguments to update one TeamLeader.
     * @example
     * // Update one TeamLeader
     * const teamLeader = await prisma.teamLeader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamLeaderUpdateArgs>(args: SelectSubset<T, TeamLeaderUpdateArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamLeaders.
     * @param {TeamLeaderDeleteManyArgs} args - Arguments to filter TeamLeaders to delete.
     * @example
     * // Delete a few TeamLeaders
     * const { count } = await prisma.teamLeader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamLeaderDeleteManyArgs>(args?: SelectSubset<T, TeamLeaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamLeaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeaderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamLeaders
     * const teamLeader = await prisma.teamLeader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamLeaderUpdateManyArgs>(args: SelectSubset<T, TeamLeaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamLeaders and returns the data updated in the database.
     * @param {TeamLeaderUpdateManyAndReturnArgs} args - Arguments to update many TeamLeaders.
     * @example
     * // Update many TeamLeaders
     * const teamLeader = await prisma.teamLeader.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamLeaders and only return the `id`
     * const teamLeaderWithIdOnly = await prisma.teamLeader.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamLeaderUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamLeaderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamLeader.
     * @param {TeamLeaderUpsertArgs} args - Arguments to update or create a TeamLeader.
     * @example
     * // Update or create a TeamLeader
     * const teamLeader = await prisma.teamLeader.upsert({
     *   create: {
     *     // ... data to create a TeamLeader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamLeader we want to update
     *   }
     * })
     */
    upsert<T extends TeamLeaderUpsertArgs>(args: SelectSubset<T, TeamLeaderUpsertArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamLeaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeaderCountArgs} args - Arguments to filter TeamLeaders to count.
     * @example
     * // Count the number of TeamLeaders
     * const count = await prisma.teamLeader.count({
     *   where: {
     *     // ... the filter for the TeamLeaders we want to count
     *   }
     * })
    **/
    count<T extends TeamLeaderCountArgs>(
      args?: Subset<T, TeamLeaderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamLeaderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamLeader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeaderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamLeaderAggregateArgs>(args: Subset<T, TeamLeaderAggregateArgs>): Prisma.PrismaPromise<GetTeamLeaderAggregateType<T>>

    /**
     * Group by TeamLeader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamLeaderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamLeaderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamLeaderGroupByArgs['orderBy'] }
        : { orderBy?: TeamLeaderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamLeaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamLeaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamLeader model
   */
  readonly fields: TeamLeaderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamLeader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamLeaderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends AuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthDefaultArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends TeamLeader$projectsArgs<ExtArgs> = {}>(args?: Subset<T, TeamLeader$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends TeamLeader$sessionArgs<ExtArgs> = {}>(args?: Subset<T, TeamLeader$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    otp<T extends TeamLeader$otpArgs<ExtArgs> = {}>(args?: Subset<T, TeamLeader$otpArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamLeader model
   */
  interface TeamLeaderFieldRefs {
    readonly id: FieldRef<"TeamLeader", 'Int'>
    readonly username: FieldRef<"TeamLeader", 'String'>
    readonly lastLogin: FieldRef<"TeamLeader", 'DateTime'>
    readonly lastLogout: FieldRef<"TeamLeader", 'DateTime'>
    readonly authId: FieldRef<"TeamLeader", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeamLeader findUnique
   */
  export type TeamLeaderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeader to fetch.
     */
    where: TeamLeaderWhereUniqueInput
  }

  /**
   * TeamLeader findUniqueOrThrow
   */
  export type TeamLeaderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeader to fetch.
     */
    where: TeamLeaderWhereUniqueInput
  }

  /**
   * TeamLeader findFirst
   */
  export type TeamLeaderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeader to fetch.
     */
    where?: TeamLeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamLeaders to fetch.
     */
    orderBy?: TeamLeaderOrderByWithRelationInput | TeamLeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamLeaders.
     */
    cursor?: TeamLeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamLeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamLeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamLeaders.
     */
    distinct?: TeamLeaderScalarFieldEnum | TeamLeaderScalarFieldEnum[]
  }

  /**
   * TeamLeader findFirstOrThrow
   */
  export type TeamLeaderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeader to fetch.
     */
    where?: TeamLeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamLeaders to fetch.
     */
    orderBy?: TeamLeaderOrderByWithRelationInput | TeamLeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamLeaders.
     */
    cursor?: TeamLeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamLeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamLeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamLeaders.
     */
    distinct?: TeamLeaderScalarFieldEnum | TeamLeaderScalarFieldEnum[]
  }

  /**
   * TeamLeader findMany
   */
  export type TeamLeaderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * Filter, which TeamLeaders to fetch.
     */
    where?: TeamLeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamLeaders to fetch.
     */
    orderBy?: TeamLeaderOrderByWithRelationInput | TeamLeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamLeaders.
     */
    cursor?: TeamLeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamLeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamLeaders.
     */
    skip?: number
    distinct?: TeamLeaderScalarFieldEnum | TeamLeaderScalarFieldEnum[]
  }

  /**
   * TeamLeader create
   */
  export type TeamLeaderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamLeader.
     */
    data: XOR<TeamLeaderCreateInput, TeamLeaderUncheckedCreateInput>
  }

  /**
   * TeamLeader createMany
   */
  export type TeamLeaderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamLeaders.
     */
    data: TeamLeaderCreateManyInput | TeamLeaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamLeader createManyAndReturn
   */
  export type TeamLeaderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * The data used to create many TeamLeaders.
     */
    data: TeamLeaderCreateManyInput | TeamLeaderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamLeader update
   */
  export type TeamLeaderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamLeader.
     */
    data: XOR<TeamLeaderUpdateInput, TeamLeaderUncheckedUpdateInput>
    /**
     * Choose, which TeamLeader to update.
     */
    where: TeamLeaderWhereUniqueInput
  }

  /**
   * TeamLeader updateMany
   */
  export type TeamLeaderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamLeaders.
     */
    data: XOR<TeamLeaderUpdateManyMutationInput, TeamLeaderUncheckedUpdateManyInput>
    /**
     * Filter which TeamLeaders to update
     */
    where?: TeamLeaderWhereInput
    /**
     * Limit how many TeamLeaders to update.
     */
    limit?: number
  }

  /**
   * TeamLeader updateManyAndReturn
   */
  export type TeamLeaderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * The data used to update TeamLeaders.
     */
    data: XOR<TeamLeaderUpdateManyMutationInput, TeamLeaderUncheckedUpdateManyInput>
    /**
     * Filter which TeamLeaders to update
     */
    where?: TeamLeaderWhereInput
    /**
     * Limit how many TeamLeaders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamLeader upsert
   */
  export type TeamLeaderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamLeader to update in case it exists.
     */
    where: TeamLeaderWhereUniqueInput
    /**
     * In case the TeamLeader found by the `where` argument doesn't exist, create a new TeamLeader with this data.
     */
    create: XOR<TeamLeaderCreateInput, TeamLeaderUncheckedCreateInput>
    /**
     * In case the TeamLeader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamLeaderUpdateInput, TeamLeaderUncheckedUpdateInput>
  }

  /**
   * TeamLeader delete
   */
  export type TeamLeaderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    /**
     * Filter which TeamLeader to delete.
     */
    where: TeamLeaderWhereUniqueInput
  }

  /**
   * TeamLeader deleteMany
   */
  export type TeamLeaderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamLeaders to delete
     */
    where?: TeamLeaderWhereInput
    /**
     * Limit how many TeamLeaders to delete.
     */
    limit?: number
  }

  /**
   * TeamLeader.projects
   */
  export type TeamLeader$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * TeamLeader.session
   */
  export type TeamLeader$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * TeamLeader.otp
   */
  export type TeamLeader$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    where?: OtpWhereInput
  }

  /**
   * TeamLeader without action
   */
  export type TeamLeaderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
  }


  /**
   * Model Developer
   */

  export type AggregateDeveloper = {
    _count: DeveloperCountAggregateOutputType | null
    _avg: DeveloperAvgAggregateOutputType | null
    _sum: DeveloperSumAggregateOutputType | null
    _min: DeveloperMinAggregateOutputType | null
    _max: DeveloperMaxAggregateOutputType | null
  }

  export type DeveloperAvgAggregateOutputType = {
    id: number | null
    authId: number | null
  }

  export type DeveloperSumAggregateOutputType = {
    id: number | null
    authId: number | null
  }

  export type DeveloperMinAggregateOutputType = {
    id: number | null
    username: string | null
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number | null
  }

  export type DeveloperMaxAggregateOutputType = {
    id: number | null
    username: string | null
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number | null
  }

  export type DeveloperCountAggregateOutputType = {
    id: number
    username: number
    lastLogin: number
    lastLogout: number
    authId: number
    _all: number
  }


  export type DeveloperAvgAggregateInputType = {
    id?: true
    authId?: true
  }

  export type DeveloperSumAggregateInputType = {
    id?: true
    authId?: true
  }

  export type DeveloperMinAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
  }

  export type DeveloperMaxAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
  }

  export type DeveloperCountAggregateInputType = {
    id?: true
    username?: true
    lastLogin?: true
    lastLogout?: true
    authId?: true
    _all?: true
  }

  export type DeveloperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developer to aggregate.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Developers
    **/
    _count?: true | DeveloperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeveloperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeveloperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeveloperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeveloperMaxAggregateInputType
  }

  export type GetDeveloperAggregateType<T extends DeveloperAggregateArgs> = {
        [P in keyof T & keyof AggregateDeveloper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeveloper[P]>
      : GetScalarType<T[P], AggregateDeveloper[P]>
  }




  export type DeveloperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeveloperWhereInput
    orderBy?: DeveloperOrderByWithAggregationInput | DeveloperOrderByWithAggregationInput[]
    by: DeveloperScalarFieldEnum[] | DeveloperScalarFieldEnum
    having?: DeveloperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeveloperCountAggregateInputType | true
    _avg?: DeveloperAvgAggregateInputType
    _sum?: DeveloperSumAggregateInputType
    _min?: DeveloperMinAggregateInputType
    _max?: DeveloperMaxAggregateInputType
  }

  export type DeveloperGroupByOutputType = {
    id: number
    username: string
    lastLogin: Date | null
    lastLogout: Date | null
    authId: number
    _count: DeveloperCountAggregateOutputType | null
    _avg: DeveloperAvgAggregateOutputType | null
    _sum: DeveloperSumAggregateOutputType | null
    _min: DeveloperMinAggregateOutputType | null
    _max: DeveloperMaxAggregateOutputType | null
  }

  type GetDeveloperGroupByPayload<T extends DeveloperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeveloperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeveloperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
            : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
        }
      >
    >


  export type DeveloperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
    tasks?: boolean | Developer$tasksArgs<ExtArgs>
    session?: boolean | Developer$sessionArgs<ExtArgs>
    otp?: boolean | Developer$otpArgs<ExtArgs>
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developer"]>

  export type DeveloperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developer"]>

  export type DeveloperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developer"]>

  export type DeveloperSelectScalar = {
    id?: boolean
    username?: boolean
    lastLogin?: boolean
    lastLogout?: boolean
    authId?: boolean
  }

  export type DeveloperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "lastLogin" | "lastLogout" | "authId", ExtArgs["result"]["developer"]>
  export type DeveloperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
    tasks?: boolean | Developer$tasksArgs<ExtArgs>
    session?: boolean | Developer$sessionArgs<ExtArgs>
    otp?: boolean | Developer$otpArgs<ExtArgs>
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeveloperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type DeveloperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }

  export type $DeveloperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Developer"
    objects: {
      auth: Prisma.$AuthPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs> | null
      otp: Prisma.$OtpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      lastLogin: Date | null
      lastLogout: Date | null
      authId: number
    }, ExtArgs["result"]["developer"]>
    composites: {}
  }

  type DeveloperGetPayload<S extends boolean | null | undefined | DeveloperDefaultArgs> = $Result.GetResult<Prisma.$DeveloperPayload, S>

  type DeveloperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeveloperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeveloperCountAggregateInputType | true
    }

  export interface DeveloperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Developer'], meta: { name: 'Developer' } }
    /**
     * Find zero or one Developer that matches the filter.
     * @param {DeveloperFindUniqueArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeveloperFindUniqueArgs>(args: SelectSubset<T, DeveloperFindUniqueArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Developer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeveloperFindUniqueOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeveloperFindUniqueOrThrowArgs>(args: SelectSubset<T, DeveloperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Developer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindFirstArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeveloperFindFirstArgs>(args?: SelectSubset<T, DeveloperFindFirstArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Developer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindFirstOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeveloperFindFirstOrThrowArgs>(args?: SelectSubset<T, DeveloperFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Developers
     * const developers = await prisma.developer.findMany()
     * 
     * // Get first 10 Developers
     * const developers = await prisma.developer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const developerWithIdOnly = await prisma.developer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeveloperFindManyArgs>(args?: SelectSubset<T, DeveloperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Developer.
     * @param {DeveloperCreateArgs} args - Arguments to create a Developer.
     * @example
     * // Create one Developer
     * const Developer = await prisma.developer.create({
     *   data: {
     *     // ... data to create a Developer
     *   }
     * })
     * 
     */
    create<T extends DeveloperCreateArgs>(args: SelectSubset<T, DeveloperCreateArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Developers.
     * @param {DeveloperCreateManyArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developer = await prisma.developer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeveloperCreateManyArgs>(args?: SelectSubset<T, DeveloperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Developers and returns the data saved in the database.
     * @param {DeveloperCreateManyAndReturnArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developer = await prisma.developer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Developers and only return the `id`
     * const developerWithIdOnly = await prisma.developer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeveloperCreateManyAndReturnArgs>(args?: SelectSubset<T, DeveloperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Developer.
     * @param {DeveloperDeleteArgs} args - Arguments to delete one Developer.
     * @example
     * // Delete one Developer
     * const Developer = await prisma.developer.delete({
     *   where: {
     *     // ... filter to delete one Developer
     *   }
     * })
     * 
     */
    delete<T extends DeveloperDeleteArgs>(args: SelectSubset<T, DeveloperDeleteArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Developer.
     * @param {DeveloperUpdateArgs} args - Arguments to update one Developer.
     * @example
     * // Update one Developer
     * const developer = await prisma.developer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeveloperUpdateArgs>(args: SelectSubset<T, DeveloperUpdateArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Developers.
     * @param {DeveloperDeleteManyArgs} args - Arguments to filter Developers to delete.
     * @example
     * // Delete a few Developers
     * const { count } = await prisma.developer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeveloperDeleteManyArgs>(args?: SelectSubset<T, DeveloperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Developers
     * const developer = await prisma.developer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeveloperUpdateManyArgs>(args: SelectSubset<T, DeveloperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers and returns the data updated in the database.
     * @param {DeveloperUpdateManyAndReturnArgs} args - Arguments to update many Developers.
     * @example
     * // Update many Developers
     * const developer = await prisma.developer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Developers and only return the `id`
     * const developerWithIdOnly = await prisma.developer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeveloperUpdateManyAndReturnArgs>(args: SelectSubset<T, DeveloperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Developer.
     * @param {DeveloperUpsertArgs} args - Arguments to update or create a Developer.
     * @example
     * // Update or create a Developer
     * const developer = await prisma.developer.upsert({
     *   create: {
     *     // ... data to create a Developer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Developer we want to update
     *   }
     * })
     */
    upsert<T extends DeveloperUpsertArgs>(args: SelectSubset<T, DeveloperUpsertArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperCountArgs} args - Arguments to filter Developers to count.
     * @example
     * // Count the number of Developers
     * const count = await prisma.developer.count({
     *   where: {
     *     // ... the filter for the Developers we want to count
     *   }
     * })
    **/
    count<T extends DeveloperCountArgs>(
      args?: Subset<T, DeveloperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeveloperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeveloperAggregateArgs>(args: Subset<T, DeveloperAggregateArgs>): Prisma.PrismaPromise<GetDeveloperAggregateType<T>>

    /**
     * Group by Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeveloperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeveloperGroupByArgs['orderBy'] }
        : { orderBy?: DeveloperGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeveloperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeveloperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Developer model
   */
  readonly fields: DeveloperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Developer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeveloperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends AuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthDefaultArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Developer$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Developer$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends Developer$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Developer$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    otp<T extends Developer$otpArgs<ExtArgs> = {}>(args?: Subset<T, Developer$otpArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Developer model
   */
  interface DeveloperFieldRefs {
    readonly id: FieldRef<"Developer", 'Int'>
    readonly username: FieldRef<"Developer", 'String'>
    readonly lastLogin: FieldRef<"Developer", 'DateTime'>
    readonly lastLogout: FieldRef<"Developer", 'DateTime'>
    readonly authId: FieldRef<"Developer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Developer findUnique
   */
  export type DeveloperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer findUniqueOrThrow
   */
  export type DeveloperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer findFirst
   */
  export type DeveloperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer findFirstOrThrow
   */
  export type DeveloperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer findMany
   */
  export type DeveloperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer create
   */
  export type DeveloperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The data needed to create a Developer.
     */
    data: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
  }

  /**
   * Developer createMany
   */
  export type DeveloperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Developers.
     */
    data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Developer createManyAndReturn
   */
  export type DeveloperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * The data used to create many Developers.
     */
    data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Developer update
   */
  export type DeveloperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The data needed to update a Developer.
     */
    data: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
    /**
     * Choose, which Developer to update.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer updateMany
   */
  export type DeveloperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Developers.
     */
    data: XOR<DeveloperUpdateManyMutationInput, DeveloperUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DeveloperWhereInput
    /**
     * Limit how many Developers to update.
     */
    limit?: number
  }

  /**
   * Developer updateManyAndReturn
   */
  export type DeveloperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * The data used to update Developers.
     */
    data: XOR<DeveloperUpdateManyMutationInput, DeveloperUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DeveloperWhereInput
    /**
     * Limit how many Developers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Developer upsert
   */
  export type DeveloperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The filter to search for the Developer to update in case it exists.
     */
    where: DeveloperWhereUniqueInput
    /**
     * In case the Developer found by the `where` argument doesn't exist, create a new Developer with this data.
     */
    create: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
    /**
     * In case the Developer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
  }

  /**
   * Developer delete
   */
  export type DeveloperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter which Developer to delete.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer deleteMany
   */
  export type DeveloperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developers to delete
     */
    where?: DeveloperWhereInput
    /**
     * Limit how many Developers to delete.
     */
    limit?: number
  }

  /**
   * Developer.tasks
   */
  export type Developer$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Developer.session
   */
  export type Developer$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * Developer.otp
   */
  export type Developer$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    where?: OtpWhereInput
  }

  /**
   * Developer without action
   */
  export type DeveloperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    storyPoints: number | null
    managerId: number | null
    leaderId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    storyPoints: number | null
    managerId: number | null
    leaderId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    storyPoints: number | null
    status: $Enums.ProjectStatus | null
    createdAt: Date | null
    managerId: number | null
    leaderId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    storyPoints: number | null
    status: $Enums.ProjectStatus | null
    createdAt: Date | null
    managerId: number | null
    leaderId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    storyPoints: number
    status: number
    createdAt: number
    managerId: number
    leaderId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    storyPoints?: true
    managerId?: true
    leaderId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    storyPoints?: true
    managerId?: true
    leaderId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    storyPoints?: true
    status?: true
    createdAt?: true
    managerId?: true
    leaderId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    storyPoints?: true
    status?: true
    createdAt?: true
    managerId?: true
    leaderId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    storyPoints?: true
    status?: true
    createdAt?: true
    managerId?: true
    leaderId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    storyPoints: number | null
    status: $Enums.ProjectStatus
    createdAt: Date
    managerId: number
    leaderId: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    storyPoints?: boolean
    status?: boolean
    createdAt?: boolean
    managerId?: boolean
    leaderId?: boolean
    manager?: boolean | ProjectManagerDefaultArgs<ExtArgs>
    teamLeader?: boolean | TeamLeaderDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    storyPoints?: boolean
    status?: boolean
    createdAt?: boolean
    managerId?: boolean
    leaderId?: boolean
    manager?: boolean | ProjectManagerDefaultArgs<ExtArgs>
    teamLeader?: boolean | TeamLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    storyPoints?: boolean
    status?: boolean
    createdAt?: boolean
    managerId?: boolean
    leaderId?: boolean
    manager?: boolean | ProjectManagerDefaultArgs<ExtArgs>
    teamLeader?: boolean | TeamLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    storyPoints?: boolean
    status?: boolean
    createdAt?: boolean
    managerId?: boolean
    leaderId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "storyPoints" | "status" | "createdAt" | "managerId" | "leaderId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ProjectManagerDefaultArgs<ExtArgs>
    teamLeader?: boolean | TeamLeaderDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ProjectManagerDefaultArgs<ExtArgs>
    teamLeader?: boolean | TeamLeaderDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ProjectManagerDefaultArgs<ExtArgs>
    teamLeader?: boolean | TeamLeaderDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      manager: Prisma.$ProjectManagerPayload<ExtArgs>
      teamLeader: Prisma.$TeamLeaderPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      storyPoints: number | null
      status: $Enums.ProjectStatus
      createdAt: Date
      managerId: number
      leaderId: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends ProjectManagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectManagerDefaultArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teamLeader<T extends TeamLeaderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamLeaderDefaultArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly storyPoints: FieldRef<"Project", 'Int'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly managerId: FieldRef<"Project", 'Int'>
    readonly leaderId: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    developerId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    developerId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    updatedAt: Date | null
    projectId: number | null
    developerId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    updatedAt: Date | null
    projectId: number | null
    developerId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    updatedAt: number
    projectId: number
    developerId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    projectId?: true
    developerId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    projectId?: true
    developerId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    updatedAt?: true
    projectId?: true
    developerId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    updatedAt?: true
    projectId?: true
    developerId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    updatedAt?: true
    projectId?: true
    developerId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    status: $Enums.TaskStatus
    updatedAt: Date
    projectId: number
    developerId: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    updatedAt?: boolean
    projectId?: boolean
    developerId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    updatedAt?: boolean
    projectId?: boolean
    developerId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    updatedAt?: boolean
    projectId?: boolean
    developerId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    updatedAt?: boolean
    projectId?: boolean
    developerId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "updatedAt" | "projectId" | "developerId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      developer: Prisma.$DeveloperPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      status: $Enums.TaskStatus
      updatedAt: Date
      projectId: number
      developerId: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    developer<T extends DeveloperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeveloperDefaultArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly projectId: FieldRef<"Task", 'Int'>
    readonly developerId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    managerId: number | null
    leaderId: number | null
    developerId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    managerId: number | null
    leaderId: number | null
    developerId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    session: string | null
    expiry: Date | null
    managerId: number | null
    leaderId: number | null
    developerId: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    session: string | null
    expiry: Date | null
    managerId: number | null
    leaderId: number | null
    developerId: number | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    session: number
    expiry: number
    managerId: number
    leaderId: number
    developerId: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    managerId?: true
    leaderId?: true
    developerId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    managerId?: true
    leaderId?: true
    developerId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    session?: true
    expiry?: true
    managerId?: true
    leaderId?: true
    developerId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    session?: true
    expiry?: true
    managerId?: true
    leaderId?: true
    developerId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    session?: true
    expiry?: true
    managerId?: true
    leaderId?: true
    developerId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    session: string
    expiry: Date
    managerId: number | null
    leaderId: number | null
    developerId: number | null
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session?: boolean
    expiry?: boolean
    managerId?: boolean
    leaderId?: boolean
    developerId?: boolean
    manager?: boolean | Session$managerArgs<ExtArgs>
    leader?: boolean | Session$leaderArgs<ExtArgs>
    developer?: boolean | Session$developerArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session?: boolean
    expiry?: boolean
    managerId?: boolean
    leaderId?: boolean
    developerId?: boolean
    manager?: boolean | Session$managerArgs<ExtArgs>
    leader?: boolean | Session$leaderArgs<ExtArgs>
    developer?: boolean | Session$developerArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session?: boolean
    expiry?: boolean
    managerId?: boolean
    leaderId?: boolean
    developerId?: boolean
    manager?: boolean | Session$managerArgs<ExtArgs>
    leader?: boolean | Session$leaderArgs<ExtArgs>
    developer?: boolean | Session$developerArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    session?: boolean
    expiry?: boolean
    managerId?: boolean
    leaderId?: boolean
    developerId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session" | "expiry" | "managerId" | "leaderId" | "developerId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Session$managerArgs<ExtArgs>
    leader?: boolean | Session$leaderArgs<ExtArgs>
    developer?: boolean | Session$developerArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Session$managerArgs<ExtArgs>
    leader?: boolean | Session$leaderArgs<ExtArgs>
    developer?: boolean | Session$developerArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Session$managerArgs<ExtArgs>
    leader?: boolean | Session$leaderArgs<ExtArgs>
    developer?: boolean | Session$developerArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      manager: Prisma.$ProjectManagerPayload<ExtArgs> | null
      leader: Prisma.$TeamLeaderPayload<ExtArgs> | null
      developer: Prisma.$DeveloperPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session: string
      expiry: Date
      managerId: number | null
      leaderId: number | null
      developerId: number | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends Session$managerArgs<ExtArgs> = {}>(args?: Subset<T, Session$managerArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leader<T extends Session$leaderArgs<ExtArgs> = {}>(args?: Subset<T, Session$leaderArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    developer<T extends Session$developerArgs<ExtArgs> = {}>(args?: Subset<T, Session$developerArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly session: FieldRef<"Session", 'String'>
    readonly expiry: FieldRef<"Session", 'DateTime'>
    readonly managerId: FieldRef<"Session", 'Int'>
    readonly leaderId: FieldRef<"Session", 'Int'>
    readonly developerId: FieldRef<"Session", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.manager
   */
  export type Session$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    where?: ProjectManagerWhereInput
  }

  /**
   * Session.leader
   */
  export type Session$leaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    where?: TeamLeaderWhereInput
  }

  /**
   * Session.developer
   */
  export type Session$developerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    where?: DeveloperWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    id: number | null
    managerId: number | null
    leaderId: number | null
    developerId: number | null
  }

  export type OtpSumAggregateOutputType = {
    id: number | null
    managerId: number | null
    leaderId: number | null
    developerId: number | null
  }

  export type OtpMinAggregateOutputType = {
    id: number | null
    otp: string | null
    expiry: Date | null
    status: $Enums.OTPStatus | null
    managerId: number | null
    leaderId: number | null
    developerId: number | null
  }

  export type OtpMaxAggregateOutputType = {
    id: number | null
    otp: string | null
    expiry: Date | null
    status: $Enums.OTPStatus | null
    managerId: number | null
    leaderId: number | null
    developerId: number | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    otp: number
    expiry: number
    status: number
    managerId: number
    leaderId: number
    developerId: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    id?: true
    managerId?: true
    leaderId?: true
    developerId?: true
  }

  export type OtpSumAggregateInputType = {
    id?: true
    managerId?: true
    leaderId?: true
    developerId?: true
  }

  export type OtpMinAggregateInputType = {
    id?: true
    otp?: true
    expiry?: true
    status?: true
    managerId?: true
    leaderId?: true
    developerId?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    otp?: true
    expiry?: true
    status?: true
    managerId?: true
    leaderId?: true
    developerId?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    otp?: true
    expiry?: true
    status?: true
    managerId?: true
    leaderId?: true
    developerId?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: number
    otp: string
    expiry: Date
    status: $Enums.OTPStatus
    managerId: number | null
    leaderId: number | null
    developerId: number | null
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    expiry?: boolean
    status?: boolean
    managerId?: boolean
    leaderId?: boolean
    developerId?: boolean
    manager?: boolean | Otp$managerArgs<ExtArgs>
    leader?: boolean | Otp$leaderArgs<ExtArgs>
    developer?: boolean | Otp$developerArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    expiry?: boolean
    status?: boolean
    managerId?: boolean
    leaderId?: boolean
    developerId?: boolean
    manager?: boolean | Otp$managerArgs<ExtArgs>
    leader?: boolean | Otp$leaderArgs<ExtArgs>
    developer?: boolean | Otp$developerArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    expiry?: boolean
    status?: boolean
    managerId?: boolean
    leaderId?: boolean
    developerId?: boolean
    manager?: boolean | Otp$managerArgs<ExtArgs>
    leader?: boolean | Otp$leaderArgs<ExtArgs>
    developer?: boolean | Otp$developerArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    otp?: boolean
    expiry?: boolean
    status?: boolean
    managerId?: boolean
    leaderId?: boolean
    developerId?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "otp" | "expiry" | "status" | "managerId" | "leaderId" | "developerId", ExtArgs["result"]["otp"]>
  export type OtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Otp$managerArgs<ExtArgs>
    leader?: boolean | Otp$leaderArgs<ExtArgs>
    developer?: boolean | Otp$developerArgs<ExtArgs>
  }
  export type OtpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Otp$managerArgs<ExtArgs>
    leader?: boolean | Otp$leaderArgs<ExtArgs>
    developer?: boolean | Otp$developerArgs<ExtArgs>
  }
  export type OtpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Otp$managerArgs<ExtArgs>
    leader?: boolean | Otp$leaderArgs<ExtArgs>
    developer?: boolean | Otp$developerArgs<ExtArgs>
  }

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {
      manager: Prisma.$ProjectManagerPayload<ExtArgs> | null
      leader: Prisma.$TeamLeaderPayload<ExtArgs> | null
      developer: Prisma.$DeveloperPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      otp: string
      expiry: Date
      status: $Enums.OTPStatus
      managerId: number | null
      leaderId: number | null
      developerId: number | null
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends Otp$managerArgs<ExtArgs> = {}>(args?: Subset<T, Otp$managerArgs<ExtArgs>>): Prisma__ProjectManagerClient<$Result.GetResult<Prisma.$ProjectManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leader<T extends Otp$leaderArgs<ExtArgs> = {}>(args?: Subset<T, Otp$leaderArgs<ExtArgs>>): Prisma__TeamLeaderClient<$Result.GetResult<Prisma.$TeamLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    developer<T extends Otp$developerArgs<ExtArgs> = {}>(args?: Subset<T, Otp$developerArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'Int'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly expiry: FieldRef<"Otp", 'DateTime'>
    readonly status: FieldRef<"Otp", 'OTPStatus'>
    readonly managerId: FieldRef<"Otp", 'Int'>
    readonly leaderId: FieldRef<"Otp", 'Int'>
    readonly developerId: FieldRef<"Otp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp.manager
   */
  export type Otp$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectManager
     */
    select?: ProjectManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectManager
     */
    omit?: ProjectManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectManagerInclude<ExtArgs> | null
    where?: ProjectManagerWhereInput
  }

  /**
   * Otp.leader
   */
  export type Otp$leaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamLeader
     */
    select?: TeamLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamLeader
     */
    omit?: TeamLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamLeaderInclude<ExtArgs> | null
    where?: TeamLeaderWhereInput
  }

  /**
   * Otp.developer
   */
  export type Otp$developerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    where?: DeveloperWhereInput
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthScalarFieldEnum: {
    id: 'id',
    email: 'email',
    salt: 'salt',
    hash: 'hash'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const ProjectManagerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    lastLogin: 'lastLogin',
    lastLogout: 'lastLogout',
    authId: 'authId'
  };

  export type ProjectManagerScalarFieldEnum = (typeof ProjectManagerScalarFieldEnum)[keyof typeof ProjectManagerScalarFieldEnum]


  export const TeamLeaderScalarFieldEnum: {
    id: 'id',
    username: 'username',
    lastLogin: 'lastLogin',
    lastLogout: 'lastLogout',
    authId: 'authId'
  };

  export type TeamLeaderScalarFieldEnum = (typeof TeamLeaderScalarFieldEnum)[keyof typeof TeamLeaderScalarFieldEnum]


  export const DeveloperScalarFieldEnum: {
    id: 'id',
    username: 'username',
    lastLogin: 'lastLogin',
    lastLogout: 'lastLogout',
    authId: 'authId'
  };

  export type DeveloperScalarFieldEnum = (typeof DeveloperScalarFieldEnum)[keyof typeof DeveloperScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    storyPoints: 'storyPoints',
    status: 'status',
    createdAt: 'createdAt',
    managerId: 'managerId',
    leaderId: 'leaderId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    updatedAt: 'updatedAt',
    projectId: 'projectId',
    developerId: 'developerId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    session: 'session',
    expiry: 'expiry',
    managerId: 'managerId',
    leaderId: 'leaderId',
    developerId: 'developerId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    otp: 'otp',
    expiry: 'expiry',
    status: 'status',
    managerId: 'managerId',
    leaderId: 'leaderId',
    developerId: 'developerId'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'OTPStatus'
   */
  export type EnumOTPStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OTPStatus'>
    


  /**
   * Reference to a field of type 'OTPStatus[]'
   */
  export type ListEnumOTPStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OTPStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuthWhereInput = {
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    id?: IntFilter<"Auth"> | number
    email?: StringFilter<"Auth"> | string
    salt?: StringFilter<"Auth"> | string
    hash?: StringFilter<"Auth"> | string
    manager?: XOR<ProjectManagerNullableScalarRelationFilter, ProjectManagerWhereInput> | null
    leader?: XOR<TeamLeaderNullableScalarRelationFilter, TeamLeaderWhereInput> | null
    dev?: XOR<DeveloperNullableScalarRelationFilter, DeveloperWhereInput> | null
  }

  export type AuthOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    manager?: ProjectManagerOrderByWithRelationInput
    leader?: TeamLeaderOrderByWithRelationInput
    dev?: DeveloperOrderByWithRelationInput
  }

  export type AuthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    salt?: StringFilter<"Auth"> | string
    hash?: StringFilter<"Auth"> | string
    manager?: XOR<ProjectManagerNullableScalarRelationFilter, ProjectManagerWhereInput> | null
    leader?: XOR<TeamLeaderNullableScalarRelationFilter, TeamLeaderWhereInput> | null
    dev?: XOR<DeveloperNullableScalarRelationFilter, DeveloperWhereInput> | null
  }, "id" | "email">

  export type AuthOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    _count?: AuthCountOrderByAggregateInput
    _avg?: AuthAvgOrderByAggregateInput
    _max?: AuthMaxOrderByAggregateInput
    _min?: AuthMinOrderByAggregateInput
    _sum?: AuthSumOrderByAggregateInput
  }

  export type AuthScalarWhereWithAggregatesInput = {
    AND?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    OR?: AuthScalarWhereWithAggregatesInput[]
    NOT?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auth"> | number
    email?: StringWithAggregatesFilter<"Auth"> | string
    salt?: StringWithAggregatesFilter<"Auth"> | string
    hash?: StringWithAggregatesFilter<"Auth"> | string
  }

  export type ProjectManagerWhereInput = {
    AND?: ProjectManagerWhereInput | ProjectManagerWhereInput[]
    OR?: ProjectManagerWhereInput[]
    NOT?: ProjectManagerWhereInput | ProjectManagerWhereInput[]
    id?: IntFilter<"ProjectManager"> | number
    username?: StringFilter<"ProjectManager"> | string
    lastLogin?: DateTimeNullableFilter<"ProjectManager"> | Date | string | null
    lastLogout?: DateTimeNullableFilter<"ProjectManager"> | Date | string | null
    authId?: IntFilter<"ProjectManager"> | number
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
    projects?: ProjectListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    otp?: XOR<OtpNullableScalarRelationFilter, OtpWhereInput> | null
  }

  export type ProjectManagerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    lastLogout?: SortOrderInput | SortOrder
    authId?: SortOrder
    auth?: AuthOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
    session?: SessionOrderByWithRelationInput
    otp?: OtpOrderByWithRelationInput
  }

  export type ProjectManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    authId?: number
    AND?: ProjectManagerWhereInput | ProjectManagerWhereInput[]
    OR?: ProjectManagerWhereInput[]
    NOT?: ProjectManagerWhereInput | ProjectManagerWhereInput[]
    lastLogin?: DateTimeNullableFilter<"ProjectManager"> | Date | string | null
    lastLogout?: DateTimeNullableFilter<"ProjectManager"> | Date | string | null
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
    projects?: ProjectListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    otp?: XOR<OtpNullableScalarRelationFilter, OtpWhereInput> | null
  }, "id" | "username" | "authId">

  export type ProjectManagerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    lastLogout?: SortOrderInput | SortOrder
    authId?: SortOrder
    _count?: ProjectManagerCountOrderByAggregateInput
    _avg?: ProjectManagerAvgOrderByAggregateInput
    _max?: ProjectManagerMaxOrderByAggregateInput
    _min?: ProjectManagerMinOrderByAggregateInput
    _sum?: ProjectManagerSumOrderByAggregateInput
  }

  export type ProjectManagerScalarWhereWithAggregatesInput = {
    AND?: ProjectManagerScalarWhereWithAggregatesInput | ProjectManagerScalarWhereWithAggregatesInput[]
    OR?: ProjectManagerScalarWhereWithAggregatesInput[]
    NOT?: ProjectManagerScalarWhereWithAggregatesInput | ProjectManagerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectManager"> | number
    username?: StringWithAggregatesFilter<"ProjectManager"> | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"ProjectManager"> | Date | string | null
    lastLogout?: DateTimeNullableWithAggregatesFilter<"ProjectManager"> | Date | string | null
    authId?: IntWithAggregatesFilter<"ProjectManager"> | number
  }

  export type TeamLeaderWhereInput = {
    AND?: TeamLeaderWhereInput | TeamLeaderWhereInput[]
    OR?: TeamLeaderWhereInput[]
    NOT?: TeamLeaderWhereInput | TeamLeaderWhereInput[]
    id?: IntFilter<"TeamLeader"> | number
    username?: StringFilter<"TeamLeader"> | string
    lastLogin?: DateTimeNullableFilter<"TeamLeader"> | Date | string | null
    lastLogout?: DateTimeNullableFilter<"TeamLeader"> | Date | string | null
    authId?: IntFilter<"TeamLeader"> | number
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
    projects?: ProjectListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    otp?: XOR<OtpNullableScalarRelationFilter, OtpWhereInput> | null
  }

  export type TeamLeaderOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    lastLogout?: SortOrderInput | SortOrder
    authId?: SortOrder
    auth?: AuthOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
    session?: SessionOrderByWithRelationInput
    otp?: OtpOrderByWithRelationInput
  }

  export type TeamLeaderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    authId?: number
    AND?: TeamLeaderWhereInput | TeamLeaderWhereInput[]
    OR?: TeamLeaderWhereInput[]
    NOT?: TeamLeaderWhereInput | TeamLeaderWhereInput[]
    lastLogin?: DateTimeNullableFilter<"TeamLeader"> | Date | string | null
    lastLogout?: DateTimeNullableFilter<"TeamLeader"> | Date | string | null
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
    projects?: ProjectListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    otp?: XOR<OtpNullableScalarRelationFilter, OtpWhereInput> | null
  }, "id" | "username" | "authId">

  export type TeamLeaderOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    lastLogout?: SortOrderInput | SortOrder
    authId?: SortOrder
    _count?: TeamLeaderCountOrderByAggregateInput
    _avg?: TeamLeaderAvgOrderByAggregateInput
    _max?: TeamLeaderMaxOrderByAggregateInput
    _min?: TeamLeaderMinOrderByAggregateInput
    _sum?: TeamLeaderSumOrderByAggregateInput
  }

  export type TeamLeaderScalarWhereWithAggregatesInput = {
    AND?: TeamLeaderScalarWhereWithAggregatesInput | TeamLeaderScalarWhereWithAggregatesInput[]
    OR?: TeamLeaderScalarWhereWithAggregatesInput[]
    NOT?: TeamLeaderScalarWhereWithAggregatesInput | TeamLeaderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamLeader"> | number
    username?: StringWithAggregatesFilter<"TeamLeader"> | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"TeamLeader"> | Date | string | null
    lastLogout?: DateTimeNullableWithAggregatesFilter<"TeamLeader"> | Date | string | null
    authId?: IntWithAggregatesFilter<"TeamLeader"> | number
  }

  export type DeveloperWhereInput = {
    AND?: DeveloperWhereInput | DeveloperWhereInput[]
    OR?: DeveloperWhereInput[]
    NOT?: DeveloperWhereInput | DeveloperWhereInput[]
    id?: IntFilter<"Developer"> | number
    username?: StringFilter<"Developer"> | string
    lastLogin?: DateTimeNullableFilter<"Developer"> | Date | string | null
    lastLogout?: DateTimeNullableFilter<"Developer"> | Date | string | null
    authId?: IntFilter<"Developer"> | number
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
    tasks?: TaskListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    otp?: XOR<OtpNullableScalarRelationFilter, OtpWhereInput> | null
  }

  export type DeveloperOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    lastLogout?: SortOrderInput | SortOrder
    authId?: SortOrder
    auth?: AuthOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    session?: SessionOrderByWithRelationInput
    otp?: OtpOrderByWithRelationInput
  }

  export type DeveloperWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    authId?: number
    AND?: DeveloperWhereInput | DeveloperWhereInput[]
    OR?: DeveloperWhereInput[]
    NOT?: DeveloperWhereInput | DeveloperWhereInput[]
    lastLogin?: DateTimeNullableFilter<"Developer"> | Date | string | null
    lastLogout?: DateTimeNullableFilter<"Developer"> | Date | string | null
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
    tasks?: TaskListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    otp?: XOR<OtpNullableScalarRelationFilter, OtpWhereInput> | null
  }, "id" | "username" | "authId">

  export type DeveloperOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    lastLogout?: SortOrderInput | SortOrder
    authId?: SortOrder
    _count?: DeveloperCountOrderByAggregateInput
    _avg?: DeveloperAvgOrderByAggregateInput
    _max?: DeveloperMaxOrderByAggregateInput
    _min?: DeveloperMinOrderByAggregateInput
    _sum?: DeveloperSumOrderByAggregateInput
  }

  export type DeveloperScalarWhereWithAggregatesInput = {
    AND?: DeveloperScalarWhereWithAggregatesInput | DeveloperScalarWhereWithAggregatesInput[]
    OR?: DeveloperScalarWhereWithAggregatesInput[]
    NOT?: DeveloperScalarWhereWithAggregatesInput | DeveloperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Developer"> | number
    username?: StringWithAggregatesFilter<"Developer"> | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Developer"> | Date | string | null
    lastLogout?: DateTimeNullableWithAggregatesFilter<"Developer"> | Date | string | null
    authId?: IntWithAggregatesFilter<"Developer"> | number
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    storyPoints?: IntNullableFilter<"Project"> | number | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    managerId?: IntFilter<"Project"> | number
    leaderId?: IntFilter<"Project"> | number
    manager?: XOR<ProjectManagerScalarRelationFilter, ProjectManagerWhereInput>
    teamLeader?: XOR<TeamLeaderScalarRelationFilter, TeamLeaderWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    storyPoints?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    manager?: ProjectManagerOrderByWithRelationInput
    teamLeader?: TeamLeaderOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    storyPoints?: IntNullableFilter<"Project"> | number | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    managerId?: IntFilter<"Project"> | number
    leaderId?: IntFilter<"Project"> | number
    manager?: XOR<ProjectManagerScalarRelationFilter, ProjectManagerWhereInput>
    teamLeader?: XOR<TeamLeaderScalarRelationFilter, TeamLeaderWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    storyPoints?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    storyPoints?: IntNullableWithAggregatesFilter<"Project"> | number | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    managerId?: IntWithAggregatesFilter<"Project"> | number
    leaderId?: IntWithAggregatesFilter<"Project"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    projectId?: IntFilter<"Task"> | number
    developerId?: IntFilter<"Task"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    developer?: XOR<DeveloperScalarRelationFilter, DeveloperWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    developerId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    developer?: DeveloperOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    projectId?: IntFilter<"Task"> | number
    developerId?: IntFilter<"Task"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    developer?: XOR<DeveloperScalarRelationFilter, DeveloperWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    developerId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    projectId?: IntWithAggregatesFilter<"Task"> | number
    developerId?: IntWithAggregatesFilter<"Task"> | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    session?: StringFilter<"Session"> | string
    expiry?: DateTimeFilter<"Session"> | Date | string
    managerId?: IntNullableFilter<"Session"> | number | null
    leaderId?: IntNullableFilter<"Session"> | number | null
    developerId?: IntNullableFilter<"Session"> | number | null
    manager?: XOR<ProjectManagerNullableScalarRelationFilter, ProjectManagerWhereInput> | null
    leader?: XOR<TeamLeaderNullableScalarRelationFilter, TeamLeaderWhereInput> | null
    developer?: XOR<DeveloperNullableScalarRelationFilter, DeveloperWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
    managerId?: SortOrderInput | SortOrder
    leaderId?: SortOrderInput | SortOrder
    developerId?: SortOrderInput | SortOrder
    manager?: ProjectManagerOrderByWithRelationInput
    leader?: TeamLeaderOrderByWithRelationInput
    developer?: DeveloperOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    managerId?: number
    leaderId?: number
    developerId?: number
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    session?: StringFilter<"Session"> | string
    expiry?: DateTimeFilter<"Session"> | Date | string
    manager?: XOR<ProjectManagerNullableScalarRelationFilter, ProjectManagerWhereInput> | null
    leader?: XOR<TeamLeaderNullableScalarRelationFilter, TeamLeaderWhereInput> | null
    developer?: XOR<DeveloperNullableScalarRelationFilter, DeveloperWhereInput> | null
  }, "id" | "managerId" | "leaderId" | "developerId">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
    managerId?: SortOrderInput | SortOrder
    leaderId?: SortOrderInput | SortOrder
    developerId?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    session?: StringWithAggregatesFilter<"Session"> | string
    expiry?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    managerId?: IntNullableWithAggregatesFilter<"Session"> | number | null
    leaderId?: IntNullableWithAggregatesFilter<"Session"> | number | null
    developerId?: IntNullableWithAggregatesFilter<"Session"> | number | null
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: IntFilter<"Otp"> | number
    otp?: StringFilter<"Otp"> | string
    expiry?: DateTimeFilter<"Otp"> | Date | string
    status?: EnumOTPStatusFilter<"Otp"> | $Enums.OTPStatus
    managerId?: IntNullableFilter<"Otp"> | number | null
    leaderId?: IntNullableFilter<"Otp"> | number | null
    developerId?: IntNullableFilter<"Otp"> | number | null
    manager?: XOR<ProjectManagerNullableScalarRelationFilter, ProjectManagerWhereInput> | null
    leader?: XOR<TeamLeaderNullableScalarRelationFilter, TeamLeaderWhereInput> | null
    developer?: XOR<DeveloperNullableScalarRelationFilter, DeveloperWhereInput> | null
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    managerId?: SortOrderInput | SortOrder
    leaderId?: SortOrderInput | SortOrder
    developerId?: SortOrderInput | SortOrder
    manager?: ProjectManagerOrderByWithRelationInput
    leader?: TeamLeaderOrderByWithRelationInput
    developer?: DeveloperOrderByWithRelationInput
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    managerId?: number
    leaderId?: number
    developerId?: number
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    otp?: StringFilter<"Otp"> | string
    expiry?: DateTimeFilter<"Otp"> | Date | string
    status?: EnumOTPStatusFilter<"Otp"> | $Enums.OTPStatus
    manager?: XOR<ProjectManagerNullableScalarRelationFilter, ProjectManagerWhereInput> | null
    leader?: XOR<TeamLeaderNullableScalarRelationFilter, TeamLeaderWhereInput> | null
    developer?: XOR<DeveloperNullableScalarRelationFilter, DeveloperWhereInput> | null
  }, "id" | "managerId" | "leaderId" | "developerId">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    managerId?: SortOrderInput | SortOrder
    leaderId?: SortOrderInput | SortOrder
    developerId?: SortOrderInput | SortOrder
    _count?: OtpCountOrderByAggregateInput
    _avg?: OtpAvgOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
    _sum?: OtpSumOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Otp"> | number
    otp?: StringWithAggregatesFilter<"Otp"> | string
    expiry?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    status?: EnumOTPStatusWithAggregatesFilter<"Otp"> | $Enums.OTPStatus
    managerId?: IntNullableWithAggregatesFilter<"Otp"> | number | null
    leaderId?: IntNullableWithAggregatesFilter<"Otp"> | number | null
    developerId?: IntNullableWithAggregatesFilter<"Otp"> | number | null
  }

  export type AuthCreateInput = {
    email: string
    salt: string
    hash: string
    manager?: ProjectManagerCreateNestedOneWithoutAuthInput
    leader?: TeamLeaderCreateNestedOneWithoutAuthInput
    dev?: DeveloperCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateInput = {
    id?: number
    email: string
    salt: string
    hash: string
    manager?: ProjectManagerUncheckedCreateNestedOneWithoutAuthInput
    leader?: TeamLeaderUncheckedCreateNestedOneWithoutAuthInput
    dev?: DeveloperUncheckedCreateNestedOneWithoutAuthInput
  }

  export type AuthUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    manager?: ProjectManagerUpdateOneWithoutAuthNestedInput
    leader?: TeamLeaderUpdateOneWithoutAuthNestedInput
    dev?: DeveloperUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    manager?: ProjectManagerUncheckedUpdateOneWithoutAuthNestedInput
    leader?: TeamLeaderUncheckedUpdateOneWithoutAuthNestedInput
    dev?: DeveloperUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type AuthCreateManyInput = {
    id?: number
    email: string
    salt: string
    hash: string
  }

  export type AuthUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type AuthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectManagerCreateInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutManagerInput
    projects?: ProjectCreateNestedManyWithoutManagerInput
    session?: SessionCreateNestedOneWithoutManagerInput
    otp?: OtpCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerUncheckedCreateInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    session?: SessionUncheckedCreateNestedOneWithoutManagerInput
    otp?: OtpUncheckedCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutManagerNestedInput
    projects?: ProjectUpdateManyWithoutManagerNestedInput
    session?: SessionUpdateOneWithoutManagerNestedInput
    otp?: OtpUpdateOneWithoutManagerNestedInput
  }

  export type ProjectManagerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    session?: SessionUncheckedUpdateOneWithoutManagerNestedInput
    otp?: OtpUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type ProjectManagerCreateManyInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
  }

  export type ProjectManagerUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectManagerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamLeaderCreateInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutLeaderInput
    projects?: ProjectCreateNestedManyWithoutTeamLeaderInput
    session?: SessionCreateNestedOneWithoutLeaderInput
    otp?: OtpCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderUncheckedCreateInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamLeaderInput
    session?: SessionUncheckedCreateNestedOneWithoutLeaderInput
    otp?: OtpUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutLeaderNestedInput
    projects?: ProjectUpdateManyWithoutTeamLeaderNestedInput
    session?: SessionUpdateOneWithoutLeaderNestedInput
    otp?: OtpUpdateOneWithoutLeaderNestedInput
  }

  export type TeamLeaderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    projects?: ProjectUncheckedUpdateManyWithoutTeamLeaderNestedInput
    session?: SessionUncheckedUpdateOneWithoutLeaderNestedInput
    otp?: OtpUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type TeamLeaderCreateManyInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
  }

  export type TeamLeaderUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamLeaderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
  }

  export type DeveloperCreateInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutDevInput
    tasks?: TaskCreateNestedManyWithoutDeveloperInput
    session?: SessionCreateNestedOneWithoutDeveloperInput
    otp?: OtpCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperUncheckedCreateInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutDeveloperInput
    session?: SessionUncheckedCreateNestedOneWithoutDeveloperInput
    otp?: OtpUncheckedCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutDevNestedInput
    tasks?: TaskUpdateManyWithoutDeveloperNestedInput
    session?: SessionUpdateOneWithoutDeveloperNestedInput
    otp?: OtpUpdateOneWithoutDeveloperNestedInput
  }

  export type DeveloperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutDeveloperNestedInput
    session?: SessionUncheckedUpdateOneWithoutDeveloperNestedInput
    otp?: OtpUncheckedUpdateOneWithoutDeveloperNestedInput
  }

  export type DeveloperCreateManyInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
  }

  export type DeveloperUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeveloperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    manager: ProjectManagerCreateNestedOneWithoutProjectsInput
    teamLeader: TeamLeaderCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    managerId: number
    leaderId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: ProjectManagerUpdateOneRequiredWithoutProjectsNestedInput
    teamLeader?: TeamLeaderUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: IntFieldUpdateOperationsInput | number
    leaderId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    managerId: number
    leaderId: number
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: IntFieldUpdateOperationsInput | number
    leaderId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    developer: DeveloperCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    projectId: number
    developerId: number
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    projectId: number
    developerId: number
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    developerId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateInput = {
    session: string
    expiry: Date | string
    manager?: ProjectManagerCreateNestedOneWithoutSessionInput
    leader?: TeamLeaderCreateNestedOneWithoutSessionInput
    developer?: DeveloperCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    session: string
    expiry: Date | string
    managerId?: number | null
    leaderId?: number | null
    developerId?: number | null
  }

  export type SessionUpdateInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: ProjectManagerUpdateOneWithoutSessionNestedInput
    leader?: TeamLeaderUpdateOneWithoutSessionNestedInput
    developer?: DeveloperUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateManyInput = {
    id?: number
    session: string
    expiry: Date | string
    managerId?: number | null
    leaderId?: number | null
    developerId?: number | null
  }

  export type SessionUpdateManyMutationInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OtpCreateInput = {
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    manager?: ProjectManagerCreateNestedOneWithoutOtpInput
    leader?: TeamLeaderCreateNestedOneWithoutOtpInput
    developer?: DeveloperCreateNestedOneWithoutOtpInput
  }

  export type OtpUncheckedCreateInput = {
    id?: number
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    managerId?: number | null
    leaderId?: number | null
    developerId?: number | null
  }

  export type OtpUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    manager?: ProjectManagerUpdateOneWithoutOtpNestedInput
    leader?: TeamLeaderUpdateOneWithoutOtpNestedInput
    developer?: DeveloperUpdateOneWithoutOtpNestedInput
  }

  export type OtpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OtpCreateManyInput = {
    id?: number
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    managerId?: number | null
    leaderId?: number | null
    developerId?: number | null
  }

  export type OtpUpdateManyMutationInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProjectManagerNullableScalarRelationFilter = {
    is?: ProjectManagerWhereInput | null
    isNot?: ProjectManagerWhereInput | null
  }

  export type TeamLeaderNullableScalarRelationFilter = {
    is?: TeamLeaderWhereInput | null
    isNot?: TeamLeaderWhereInput | null
  }

  export type DeveloperNullableScalarRelationFilter = {
    is?: DeveloperWhereInput | null
    isNot?: DeveloperWhereInput | null
  }

  export type AuthCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
  }

  export type AuthAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
  }

  export type AuthMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
  }

  export type AuthSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuthScalarRelationFilter = {
    is?: AuthWhereInput
    isNot?: AuthWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type OtpNullableScalarRelationFilter = {
    is?: OtpWhereInput | null
    isNot?: OtpWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectManagerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type ProjectManagerAvgOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
  }

  export type ProjectManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type ProjectManagerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type ProjectManagerSumOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TeamLeaderCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type TeamLeaderAvgOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
  }

  export type TeamLeaderMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type TeamLeaderMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type TeamLeaderSumOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeveloperCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type DeveloperAvgOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
  }

  export type DeveloperMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type DeveloperMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    lastLogin?: SortOrder
    lastLogout?: SortOrder
    authId?: SortOrder
  }

  export type DeveloperSumOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectManagerScalarRelationFilter = {
    is?: ProjectManagerWhereInput
    isNot?: ProjectManagerWhereInput
  }

  export type TeamLeaderScalarRelationFilter = {
    is?: TeamLeaderWhereInput
    isNot?: TeamLeaderWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    storyPoints?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    storyPoints?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    storyPoints?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    storyPoints?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    storyPoints?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type DeveloperScalarRelationFilter = {
    is?: DeveloperWhereInput
    isNot?: DeveloperWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    developerId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    developerId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    developerId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    developerId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    developerId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type EnumOTPStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusFilter<$PrismaModel> | $Enums.OTPStatus
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type OtpAvgOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type OtpSumOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    leaderId?: SortOrder
    developerId?: SortOrder
  }

  export type EnumOTPStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusWithAggregatesFilter<$PrismaModel> | $Enums.OTPStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOTPStatusFilter<$PrismaModel>
    _max?: NestedEnumOTPStatusFilter<$PrismaModel>
  }

  export type ProjectManagerCreateNestedOneWithoutAuthInput = {
    create?: XOR<ProjectManagerCreateWithoutAuthInput, ProjectManagerUncheckedCreateWithoutAuthInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutAuthInput
    connect?: ProjectManagerWhereUniqueInput
  }

  export type TeamLeaderCreateNestedOneWithoutAuthInput = {
    create?: XOR<TeamLeaderCreateWithoutAuthInput, TeamLeaderUncheckedCreateWithoutAuthInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutAuthInput
    connect?: TeamLeaderWhereUniqueInput
  }

  export type DeveloperCreateNestedOneWithoutAuthInput = {
    create?: XOR<DeveloperCreateWithoutAuthInput, DeveloperUncheckedCreateWithoutAuthInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutAuthInput
    connect?: DeveloperWhereUniqueInput
  }

  export type ProjectManagerUncheckedCreateNestedOneWithoutAuthInput = {
    create?: XOR<ProjectManagerCreateWithoutAuthInput, ProjectManagerUncheckedCreateWithoutAuthInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutAuthInput
    connect?: ProjectManagerWhereUniqueInput
  }

  export type TeamLeaderUncheckedCreateNestedOneWithoutAuthInput = {
    create?: XOR<TeamLeaderCreateWithoutAuthInput, TeamLeaderUncheckedCreateWithoutAuthInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutAuthInput
    connect?: TeamLeaderWhereUniqueInput
  }

  export type DeveloperUncheckedCreateNestedOneWithoutAuthInput = {
    create?: XOR<DeveloperCreateWithoutAuthInput, DeveloperUncheckedCreateWithoutAuthInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutAuthInput
    connect?: DeveloperWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProjectManagerUpdateOneWithoutAuthNestedInput = {
    create?: XOR<ProjectManagerCreateWithoutAuthInput, ProjectManagerUncheckedCreateWithoutAuthInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutAuthInput
    upsert?: ProjectManagerUpsertWithoutAuthInput
    disconnect?: ProjectManagerWhereInput | boolean
    delete?: ProjectManagerWhereInput | boolean
    connect?: ProjectManagerWhereUniqueInput
    update?: XOR<XOR<ProjectManagerUpdateToOneWithWhereWithoutAuthInput, ProjectManagerUpdateWithoutAuthInput>, ProjectManagerUncheckedUpdateWithoutAuthInput>
  }

  export type TeamLeaderUpdateOneWithoutAuthNestedInput = {
    create?: XOR<TeamLeaderCreateWithoutAuthInput, TeamLeaderUncheckedCreateWithoutAuthInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutAuthInput
    upsert?: TeamLeaderUpsertWithoutAuthInput
    disconnect?: TeamLeaderWhereInput | boolean
    delete?: TeamLeaderWhereInput | boolean
    connect?: TeamLeaderWhereUniqueInput
    update?: XOR<XOR<TeamLeaderUpdateToOneWithWhereWithoutAuthInput, TeamLeaderUpdateWithoutAuthInput>, TeamLeaderUncheckedUpdateWithoutAuthInput>
  }

  export type DeveloperUpdateOneWithoutAuthNestedInput = {
    create?: XOR<DeveloperCreateWithoutAuthInput, DeveloperUncheckedCreateWithoutAuthInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutAuthInput
    upsert?: DeveloperUpsertWithoutAuthInput
    disconnect?: DeveloperWhereInput | boolean
    delete?: DeveloperWhereInput | boolean
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutAuthInput, DeveloperUpdateWithoutAuthInput>, DeveloperUncheckedUpdateWithoutAuthInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectManagerUncheckedUpdateOneWithoutAuthNestedInput = {
    create?: XOR<ProjectManagerCreateWithoutAuthInput, ProjectManagerUncheckedCreateWithoutAuthInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutAuthInput
    upsert?: ProjectManagerUpsertWithoutAuthInput
    disconnect?: ProjectManagerWhereInput | boolean
    delete?: ProjectManagerWhereInput | boolean
    connect?: ProjectManagerWhereUniqueInput
    update?: XOR<XOR<ProjectManagerUpdateToOneWithWhereWithoutAuthInput, ProjectManagerUpdateWithoutAuthInput>, ProjectManagerUncheckedUpdateWithoutAuthInput>
  }

  export type TeamLeaderUncheckedUpdateOneWithoutAuthNestedInput = {
    create?: XOR<TeamLeaderCreateWithoutAuthInput, TeamLeaderUncheckedCreateWithoutAuthInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutAuthInput
    upsert?: TeamLeaderUpsertWithoutAuthInput
    disconnect?: TeamLeaderWhereInput | boolean
    delete?: TeamLeaderWhereInput | boolean
    connect?: TeamLeaderWhereUniqueInput
    update?: XOR<XOR<TeamLeaderUpdateToOneWithWhereWithoutAuthInput, TeamLeaderUpdateWithoutAuthInput>, TeamLeaderUncheckedUpdateWithoutAuthInput>
  }

  export type DeveloperUncheckedUpdateOneWithoutAuthNestedInput = {
    create?: XOR<DeveloperCreateWithoutAuthInput, DeveloperUncheckedCreateWithoutAuthInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutAuthInput
    upsert?: DeveloperUpsertWithoutAuthInput
    disconnect?: DeveloperWhereInput | boolean
    delete?: DeveloperWhereInput | boolean
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutAuthInput, DeveloperUpdateWithoutAuthInput>, DeveloperUncheckedUpdateWithoutAuthInput>
  }

  export type AuthCreateNestedOneWithoutManagerInput = {
    create?: XOR<AuthCreateWithoutManagerInput, AuthUncheckedCreateWithoutManagerInput>
    connectOrCreate?: AuthCreateOrConnectWithoutManagerInput
    connect?: AuthWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SessionCreateNestedOneWithoutManagerInput = {
    create?: XOR<SessionCreateWithoutManagerInput, SessionUncheckedCreateWithoutManagerInput>
    connectOrCreate?: SessionCreateOrConnectWithoutManagerInput
    connect?: SessionWhereUniqueInput
  }

  export type OtpCreateNestedOneWithoutManagerInput = {
    create?: XOR<OtpCreateWithoutManagerInput, OtpUncheckedCreateWithoutManagerInput>
    connectOrCreate?: OtpCreateOrConnectWithoutManagerInput
    connect?: OtpWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedOneWithoutManagerInput = {
    create?: XOR<SessionCreateWithoutManagerInput, SessionUncheckedCreateWithoutManagerInput>
    connectOrCreate?: SessionCreateOrConnectWithoutManagerInput
    connect?: SessionWhereUniqueInput
  }

  export type OtpUncheckedCreateNestedOneWithoutManagerInput = {
    create?: XOR<OtpCreateWithoutManagerInput, OtpUncheckedCreateWithoutManagerInput>
    connectOrCreate?: OtpCreateOrConnectWithoutManagerInput
    connect?: OtpWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AuthUpdateOneRequiredWithoutManagerNestedInput = {
    create?: XOR<AuthCreateWithoutManagerInput, AuthUncheckedCreateWithoutManagerInput>
    connectOrCreate?: AuthCreateOrConnectWithoutManagerInput
    upsert?: AuthUpsertWithoutManagerInput
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutManagerInput, AuthUpdateWithoutManagerInput>, AuthUncheckedUpdateWithoutManagerInput>
  }

  export type ProjectUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutManagerInput | ProjectUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutManagerInput | ProjectUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutManagerInput | ProjectUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SessionUpdateOneWithoutManagerNestedInput = {
    create?: XOR<SessionCreateWithoutManagerInput, SessionUncheckedCreateWithoutManagerInput>
    connectOrCreate?: SessionCreateOrConnectWithoutManagerInput
    upsert?: SessionUpsertWithoutManagerInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutManagerInput, SessionUpdateWithoutManagerInput>, SessionUncheckedUpdateWithoutManagerInput>
  }

  export type OtpUpdateOneWithoutManagerNestedInput = {
    create?: XOR<OtpCreateWithoutManagerInput, OtpUncheckedCreateWithoutManagerInput>
    connectOrCreate?: OtpCreateOrConnectWithoutManagerInput
    upsert?: OtpUpsertWithoutManagerInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutManagerInput, OtpUpdateWithoutManagerInput>, OtpUncheckedUpdateWithoutManagerInput>
  }

  export type ProjectUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutManagerInput | ProjectUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutManagerInput | ProjectUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutManagerInput | ProjectUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SessionUncheckedUpdateOneWithoutManagerNestedInput = {
    create?: XOR<SessionCreateWithoutManagerInput, SessionUncheckedCreateWithoutManagerInput>
    connectOrCreate?: SessionCreateOrConnectWithoutManagerInput
    upsert?: SessionUpsertWithoutManagerInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutManagerInput, SessionUpdateWithoutManagerInput>, SessionUncheckedUpdateWithoutManagerInput>
  }

  export type OtpUncheckedUpdateOneWithoutManagerNestedInput = {
    create?: XOR<OtpCreateWithoutManagerInput, OtpUncheckedCreateWithoutManagerInput>
    connectOrCreate?: OtpCreateOrConnectWithoutManagerInput
    upsert?: OtpUpsertWithoutManagerInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutManagerInput, OtpUpdateWithoutManagerInput>, OtpUncheckedUpdateWithoutManagerInput>
  }

  export type AuthCreateNestedOneWithoutLeaderInput = {
    create?: XOR<AuthCreateWithoutLeaderInput, AuthUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: AuthCreateOrConnectWithoutLeaderInput
    connect?: AuthWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutTeamLeaderInput = {
    create?: XOR<ProjectCreateWithoutTeamLeaderInput, ProjectUncheckedCreateWithoutTeamLeaderInput> | ProjectCreateWithoutTeamLeaderInput[] | ProjectUncheckedCreateWithoutTeamLeaderInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamLeaderInput | ProjectCreateOrConnectWithoutTeamLeaderInput[]
    createMany?: ProjectCreateManyTeamLeaderInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SessionCreateNestedOneWithoutLeaderInput = {
    create?: XOR<SessionCreateWithoutLeaderInput, SessionUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: SessionCreateOrConnectWithoutLeaderInput
    connect?: SessionWhereUniqueInput
  }

  export type OtpCreateNestedOneWithoutLeaderInput = {
    create?: XOR<OtpCreateWithoutLeaderInput, OtpUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: OtpCreateOrConnectWithoutLeaderInput
    connect?: OtpWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeamLeaderInput = {
    create?: XOR<ProjectCreateWithoutTeamLeaderInput, ProjectUncheckedCreateWithoutTeamLeaderInput> | ProjectCreateWithoutTeamLeaderInput[] | ProjectUncheckedCreateWithoutTeamLeaderInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamLeaderInput | ProjectCreateOrConnectWithoutTeamLeaderInput[]
    createMany?: ProjectCreateManyTeamLeaderInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedOneWithoutLeaderInput = {
    create?: XOR<SessionCreateWithoutLeaderInput, SessionUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: SessionCreateOrConnectWithoutLeaderInput
    connect?: SessionWhereUniqueInput
  }

  export type OtpUncheckedCreateNestedOneWithoutLeaderInput = {
    create?: XOR<OtpCreateWithoutLeaderInput, OtpUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: OtpCreateOrConnectWithoutLeaderInput
    connect?: OtpWhereUniqueInput
  }

  export type AuthUpdateOneRequiredWithoutLeaderNestedInput = {
    create?: XOR<AuthCreateWithoutLeaderInput, AuthUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: AuthCreateOrConnectWithoutLeaderInput
    upsert?: AuthUpsertWithoutLeaderInput
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutLeaderInput, AuthUpdateWithoutLeaderInput>, AuthUncheckedUpdateWithoutLeaderInput>
  }

  export type ProjectUpdateManyWithoutTeamLeaderNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamLeaderInput, ProjectUncheckedCreateWithoutTeamLeaderInput> | ProjectCreateWithoutTeamLeaderInput[] | ProjectUncheckedCreateWithoutTeamLeaderInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamLeaderInput | ProjectCreateOrConnectWithoutTeamLeaderInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamLeaderInput | ProjectUpsertWithWhereUniqueWithoutTeamLeaderInput[]
    createMany?: ProjectCreateManyTeamLeaderInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamLeaderInput | ProjectUpdateWithWhereUniqueWithoutTeamLeaderInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamLeaderInput | ProjectUpdateManyWithWhereWithoutTeamLeaderInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SessionUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<SessionCreateWithoutLeaderInput, SessionUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: SessionCreateOrConnectWithoutLeaderInput
    upsert?: SessionUpsertWithoutLeaderInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutLeaderInput, SessionUpdateWithoutLeaderInput>, SessionUncheckedUpdateWithoutLeaderInput>
  }

  export type OtpUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<OtpCreateWithoutLeaderInput, OtpUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: OtpCreateOrConnectWithoutLeaderInput
    upsert?: OtpUpsertWithoutLeaderInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutLeaderInput, OtpUpdateWithoutLeaderInput>, OtpUncheckedUpdateWithoutLeaderInput>
  }

  export type ProjectUncheckedUpdateManyWithoutTeamLeaderNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamLeaderInput, ProjectUncheckedCreateWithoutTeamLeaderInput> | ProjectCreateWithoutTeamLeaderInput[] | ProjectUncheckedCreateWithoutTeamLeaderInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamLeaderInput | ProjectCreateOrConnectWithoutTeamLeaderInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamLeaderInput | ProjectUpsertWithWhereUniqueWithoutTeamLeaderInput[]
    createMany?: ProjectCreateManyTeamLeaderInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamLeaderInput | ProjectUpdateWithWhereUniqueWithoutTeamLeaderInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamLeaderInput | ProjectUpdateManyWithWhereWithoutTeamLeaderInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SessionUncheckedUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<SessionCreateWithoutLeaderInput, SessionUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: SessionCreateOrConnectWithoutLeaderInput
    upsert?: SessionUpsertWithoutLeaderInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutLeaderInput, SessionUpdateWithoutLeaderInput>, SessionUncheckedUpdateWithoutLeaderInput>
  }

  export type OtpUncheckedUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<OtpCreateWithoutLeaderInput, OtpUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: OtpCreateOrConnectWithoutLeaderInput
    upsert?: OtpUpsertWithoutLeaderInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutLeaderInput, OtpUpdateWithoutLeaderInput>, OtpUncheckedUpdateWithoutLeaderInput>
  }

  export type AuthCreateNestedOneWithoutDevInput = {
    create?: XOR<AuthCreateWithoutDevInput, AuthUncheckedCreateWithoutDevInput>
    connectOrCreate?: AuthCreateOrConnectWithoutDevInput
    connect?: AuthWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput> | TaskCreateWithoutDeveloperInput[] | TaskUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeveloperInput | TaskCreateOrConnectWithoutDeveloperInput[]
    createMany?: TaskCreateManyDeveloperInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type SessionCreateNestedOneWithoutDeveloperInput = {
    create?: XOR<SessionCreateWithoutDeveloperInput, SessionUncheckedCreateWithoutDeveloperInput>
    connectOrCreate?: SessionCreateOrConnectWithoutDeveloperInput
    connect?: SessionWhereUniqueInput
  }

  export type OtpCreateNestedOneWithoutDeveloperInput = {
    create?: XOR<OtpCreateWithoutDeveloperInput, OtpUncheckedCreateWithoutDeveloperInput>
    connectOrCreate?: OtpCreateOrConnectWithoutDeveloperInput
    connect?: OtpWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput> | TaskCreateWithoutDeveloperInput[] | TaskUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeveloperInput | TaskCreateOrConnectWithoutDeveloperInput[]
    createMany?: TaskCreateManyDeveloperInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedOneWithoutDeveloperInput = {
    create?: XOR<SessionCreateWithoutDeveloperInput, SessionUncheckedCreateWithoutDeveloperInput>
    connectOrCreate?: SessionCreateOrConnectWithoutDeveloperInput
    connect?: SessionWhereUniqueInput
  }

  export type OtpUncheckedCreateNestedOneWithoutDeveloperInput = {
    create?: XOR<OtpCreateWithoutDeveloperInput, OtpUncheckedCreateWithoutDeveloperInput>
    connectOrCreate?: OtpCreateOrConnectWithoutDeveloperInput
    connect?: OtpWhereUniqueInput
  }

  export type AuthUpdateOneRequiredWithoutDevNestedInput = {
    create?: XOR<AuthCreateWithoutDevInput, AuthUncheckedCreateWithoutDevInput>
    connectOrCreate?: AuthCreateOrConnectWithoutDevInput
    upsert?: AuthUpsertWithoutDevInput
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutDevInput, AuthUpdateWithoutDevInput>, AuthUncheckedUpdateWithoutDevInput>
  }

  export type TaskUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput> | TaskCreateWithoutDeveloperInput[] | TaskUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeveloperInput | TaskCreateOrConnectWithoutDeveloperInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDeveloperInput | TaskUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: TaskCreateManyDeveloperInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDeveloperInput | TaskUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDeveloperInput | TaskUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SessionUpdateOneWithoutDeveloperNestedInput = {
    create?: XOR<SessionCreateWithoutDeveloperInput, SessionUncheckedCreateWithoutDeveloperInput>
    connectOrCreate?: SessionCreateOrConnectWithoutDeveloperInput
    upsert?: SessionUpsertWithoutDeveloperInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutDeveloperInput, SessionUpdateWithoutDeveloperInput>, SessionUncheckedUpdateWithoutDeveloperInput>
  }

  export type OtpUpdateOneWithoutDeveloperNestedInput = {
    create?: XOR<OtpCreateWithoutDeveloperInput, OtpUncheckedCreateWithoutDeveloperInput>
    connectOrCreate?: OtpCreateOrConnectWithoutDeveloperInput
    upsert?: OtpUpsertWithoutDeveloperInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutDeveloperInput, OtpUpdateWithoutDeveloperInput>, OtpUncheckedUpdateWithoutDeveloperInput>
  }

  export type TaskUncheckedUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput> | TaskCreateWithoutDeveloperInput[] | TaskUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeveloperInput | TaskCreateOrConnectWithoutDeveloperInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDeveloperInput | TaskUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: TaskCreateManyDeveloperInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDeveloperInput | TaskUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDeveloperInput | TaskUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SessionUncheckedUpdateOneWithoutDeveloperNestedInput = {
    create?: XOR<SessionCreateWithoutDeveloperInput, SessionUncheckedCreateWithoutDeveloperInput>
    connectOrCreate?: SessionCreateOrConnectWithoutDeveloperInput
    upsert?: SessionUpsertWithoutDeveloperInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutDeveloperInput, SessionUpdateWithoutDeveloperInput>, SessionUncheckedUpdateWithoutDeveloperInput>
  }

  export type OtpUncheckedUpdateOneWithoutDeveloperNestedInput = {
    create?: XOR<OtpCreateWithoutDeveloperInput, OtpUncheckedCreateWithoutDeveloperInput>
    connectOrCreate?: OtpCreateOrConnectWithoutDeveloperInput
    upsert?: OtpUpsertWithoutDeveloperInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutDeveloperInput, OtpUpdateWithoutDeveloperInput>, OtpUncheckedUpdateWithoutDeveloperInput>
  }

  export type ProjectManagerCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ProjectManagerCreateWithoutProjectsInput, ProjectManagerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutProjectsInput
    connect?: ProjectManagerWhereUniqueInput
  }

  export type TeamLeaderCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TeamLeaderCreateWithoutProjectsInput, TeamLeaderUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutProjectsInput
    connect?: TeamLeaderWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectManagerUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ProjectManagerCreateWithoutProjectsInput, ProjectManagerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutProjectsInput
    upsert?: ProjectManagerUpsertWithoutProjectsInput
    connect?: ProjectManagerWhereUniqueInput
    update?: XOR<XOR<ProjectManagerUpdateToOneWithWhereWithoutProjectsInput, ProjectManagerUpdateWithoutProjectsInput>, ProjectManagerUncheckedUpdateWithoutProjectsInput>
  }

  export type TeamLeaderUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TeamLeaderCreateWithoutProjectsInput, TeamLeaderUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutProjectsInput
    upsert?: TeamLeaderUpsertWithoutProjectsInput
    connect?: TeamLeaderWhereUniqueInput
    update?: XOR<XOR<TeamLeaderUpdateToOneWithWhereWithoutProjectsInput, TeamLeaderUpdateWithoutProjectsInput>, TeamLeaderUncheckedUpdateWithoutProjectsInput>
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type DeveloperCreateNestedOneWithoutTasksInput = {
    create?: XOR<DeveloperCreateWithoutTasksInput, DeveloperUncheckedCreateWithoutTasksInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutTasksInput
    connect?: DeveloperWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type DeveloperUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<DeveloperCreateWithoutTasksInput, DeveloperUncheckedCreateWithoutTasksInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutTasksInput
    upsert?: DeveloperUpsertWithoutTasksInput
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutTasksInput, DeveloperUpdateWithoutTasksInput>, DeveloperUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectManagerCreateNestedOneWithoutSessionInput = {
    create?: XOR<ProjectManagerCreateWithoutSessionInput, ProjectManagerUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutSessionInput
    connect?: ProjectManagerWhereUniqueInput
  }

  export type TeamLeaderCreateNestedOneWithoutSessionInput = {
    create?: XOR<TeamLeaderCreateWithoutSessionInput, TeamLeaderUncheckedCreateWithoutSessionInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutSessionInput
    connect?: TeamLeaderWhereUniqueInput
  }

  export type DeveloperCreateNestedOneWithoutSessionInput = {
    create?: XOR<DeveloperCreateWithoutSessionInput, DeveloperUncheckedCreateWithoutSessionInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutSessionInput
    connect?: DeveloperWhereUniqueInput
  }

  export type ProjectManagerUpdateOneWithoutSessionNestedInput = {
    create?: XOR<ProjectManagerCreateWithoutSessionInput, ProjectManagerUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutSessionInput
    upsert?: ProjectManagerUpsertWithoutSessionInput
    disconnect?: ProjectManagerWhereInput | boolean
    delete?: ProjectManagerWhereInput | boolean
    connect?: ProjectManagerWhereUniqueInput
    update?: XOR<XOR<ProjectManagerUpdateToOneWithWhereWithoutSessionInput, ProjectManagerUpdateWithoutSessionInput>, ProjectManagerUncheckedUpdateWithoutSessionInput>
  }

  export type TeamLeaderUpdateOneWithoutSessionNestedInput = {
    create?: XOR<TeamLeaderCreateWithoutSessionInput, TeamLeaderUncheckedCreateWithoutSessionInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutSessionInput
    upsert?: TeamLeaderUpsertWithoutSessionInput
    disconnect?: TeamLeaderWhereInput | boolean
    delete?: TeamLeaderWhereInput | boolean
    connect?: TeamLeaderWhereUniqueInput
    update?: XOR<XOR<TeamLeaderUpdateToOneWithWhereWithoutSessionInput, TeamLeaderUpdateWithoutSessionInput>, TeamLeaderUncheckedUpdateWithoutSessionInput>
  }

  export type DeveloperUpdateOneWithoutSessionNestedInput = {
    create?: XOR<DeveloperCreateWithoutSessionInput, DeveloperUncheckedCreateWithoutSessionInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutSessionInput
    upsert?: DeveloperUpsertWithoutSessionInput
    disconnect?: DeveloperWhereInput | boolean
    delete?: DeveloperWhereInput | boolean
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutSessionInput, DeveloperUpdateWithoutSessionInput>, DeveloperUncheckedUpdateWithoutSessionInput>
  }

  export type ProjectManagerCreateNestedOneWithoutOtpInput = {
    create?: XOR<ProjectManagerCreateWithoutOtpInput, ProjectManagerUncheckedCreateWithoutOtpInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutOtpInput
    connect?: ProjectManagerWhereUniqueInput
  }

  export type TeamLeaderCreateNestedOneWithoutOtpInput = {
    create?: XOR<TeamLeaderCreateWithoutOtpInput, TeamLeaderUncheckedCreateWithoutOtpInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutOtpInput
    connect?: TeamLeaderWhereUniqueInput
  }

  export type DeveloperCreateNestedOneWithoutOtpInput = {
    create?: XOR<DeveloperCreateWithoutOtpInput, DeveloperUncheckedCreateWithoutOtpInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutOtpInput
    connect?: DeveloperWhereUniqueInput
  }

  export type EnumOTPStatusFieldUpdateOperationsInput = {
    set?: $Enums.OTPStatus
  }

  export type ProjectManagerUpdateOneWithoutOtpNestedInput = {
    create?: XOR<ProjectManagerCreateWithoutOtpInput, ProjectManagerUncheckedCreateWithoutOtpInput>
    connectOrCreate?: ProjectManagerCreateOrConnectWithoutOtpInput
    upsert?: ProjectManagerUpsertWithoutOtpInput
    disconnect?: ProjectManagerWhereInput | boolean
    delete?: ProjectManagerWhereInput | boolean
    connect?: ProjectManagerWhereUniqueInput
    update?: XOR<XOR<ProjectManagerUpdateToOneWithWhereWithoutOtpInput, ProjectManagerUpdateWithoutOtpInput>, ProjectManagerUncheckedUpdateWithoutOtpInput>
  }

  export type TeamLeaderUpdateOneWithoutOtpNestedInput = {
    create?: XOR<TeamLeaderCreateWithoutOtpInput, TeamLeaderUncheckedCreateWithoutOtpInput>
    connectOrCreate?: TeamLeaderCreateOrConnectWithoutOtpInput
    upsert?: TeamLeaderUpsertWithoutOtpInput
    disconnect?: TeamLeaderWhereInput | boolean
    delete?: TeamLeaderWhereInput | boolean
    connect?: TeamLeaderWhereUniqueInput
    update?: XOR<XOR<TeamLeaderUpdateToOneWithWhereWithoutOtpInput, TeamLeaderUpdateWithoutOtpInput>, TeamLeaderUncheckedUpdateWithoutOtpInput>
  }

  export type DeveloperUpdateOneWithoutOtpNestedInput = {
    create?: XOR<DeveloperCreateWithoutOtpInput, DeveloperUncheckedCreateWithoutOtpInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutOtpInput
    upsert?: DeveloperUpsertWithoutOtpInput
    disconnect?: DeveloperWhereInput | boolean
    delete?: DeveloperWhereInput | boolean
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutOtpInput, DeveloperUpdateWithoutOtpInput>, DeveloperUncheckedUpdateWithoutOtpInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumOTPStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusFilter<$PrismaModel> | $Enums.OTPStatus
  }

  export type NestedEnumOTPStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusWithAggregatesFilter<$PrismaModel> | $Enums.OTPStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOTPStatusFilter<$PrismaModel>
    _max?: NestedEnumOTPStatusFilter<$PrismaModel>
  }

  export type ProjectManagerCreateWithoutAuthInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    projects?: ProjectCreateNestedManyWithoutManagerInput
    session?: SessionCreateNestedOneWithoutManagerInput
    otp?: OtpCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerUncheckedCreateWithoutAuthInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    session?: SessionUncheckedCreateNestedOneWithoutManagerInput
    otp?: OtpUncheckedCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerCreateOrConnectWithoutAuthInput = {
    where: ProjectManagerWhereUniqueInput
    create: XOR<ProjectManagerCreateWithoutAuthInput, ProjectManagerUncheckedCreateWithoutAuthInput>
  }

  export type TeamLeaderCreateWithoutAuthInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    projects?: ProjectCreateNestedManyWithoutTeamLeaderInput
    session?: SessionCreateNestedOneWithoutLeaderInput
    otp?: OtpCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderUncheckedCreateWithoutAuthInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamLeaderInput
    session?: SessionUncheckedCreateNestedOneWithoutLeaderInput
    otp?: OtpUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderCreateOrConnectWithoutAuthInput = {
    where: TeamLeaderWhereUniqueInput
    create: XOR<TeamLeaderCreateWithoutAuthInput, TeamLeaderUncheckedCreateWithoutAuthInput>
  }

  export type DeveloperCreateWithoutAuthInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    tasks?: TaskCreateNestedManyWithoutDeveloperInput
    session?: SessionCreateNestedOneWithoutDeveloperInput
    otp?: OtpCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperUncheckedCreateWithoutAuthInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutDeveloperInput
    session?: SessionUncheckedCreateNestedOneWithoutDeveloperInput
    otp?: OtpUncheckedCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperCreateOrConnectWithoutAuthInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutAuthInput, DeveloperUncheckedCreateWithoutAuthInput>
  }

  export type ProjectManagerUpsertWithoutAuthInput = {
    update: XOR<ProjectManagerUpdateWithoutAuthInput, ProjectManagerUncheckedUpdateWithoutAuthInput>
    create: XOR<ProjectManagerCreateWithoutAuthInput, ProjectManagerUncheckedCreateWithoutAuthInput>
    where?: ProjectManagerWhereInput
  }

  export type ProjectManagerUpdateToOneWithWhereWithoutAuthInput = {
    where?: ProjectManagerWhereInput
    data: XOR<ProjectManagerUpdateWithoutAuthInput, ProjectManagerUncheckedUpdateWithoutAuthInput>
  }

  export type ProjectManagerUpdateWithoutAuthInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUpdateManyWithoutManagerNestedInput
    session?: SessionUpdateOneWithoutManagerNestedInput
    otp?: OtpUpdateOneWithoutManagerNestedInput
  }

  export type ProjectManagerUncheckedUpdateWithoutAuthInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    session?: SessionUncheckedUpdateOneWithoutManagerNestedInput
    otp?: OtpUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type TeamLeaderUpsertWithoutAuthInput = {
    update: XOR<TeamLeaderUpdateWithoutAuthInput, TeamLeaderUncheckedUpdateWithoutAuthInput>
    create: XOR<TeamLeaderCreateWithoutAuthInput, TeamLeaderUncheckedCreateWithoutAuthInput>
    where?: TeamLeaderWhereInput
  }

  export type TeamLeaderUpdateToOneWithWhereWithoutAuthInput = {
    where?: TeamLeaderWhereInput
    data: XOR<TeamLeaderUpdateWithoutAuthInput, TeamLeaderUncheckedUpdateWithoutAuthInput>
  }

  export type TeamLeaderUpdateWithoutAuthInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUpdateManyWithoutTeamLeaderNestedInput
    session?: SessionUpdateOneWithoutLeaderNestedInput
    otp?: OtpUpdateOneWithoutLeaderNestedInput
  }

  export type TeamLeaderUncheckedUpdateWithoutAuthInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUncheckedUpdateManyWithoutTeamLeaderNestedInput
    session?: SessionUncheckedUpdateOneWithoutLeaderNestedInput
    otp?: OtpUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type DeveloperUpsertWithoutAuthInput = {
    update: XOR<DeveloperUpdateWithoutAuthInput, DeveloperUncheckedUpdateWithoutAuthInput>
    create: XOR<DeveloperCreateWithoutAuthInput, DeveloperUncheckedCreateWithoutAuthInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutAuthInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutAuthInput, DeveloperUncheckedUpdateWithoutAuthInput>
  }

  export type DeveloperUpdateWithoutAuthInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUpdateManyWithoutDeveloperNestedInput
    session?: SessionUpdateOneWithoutDeveloperNestedInput
    otp?: OtpUpdateOneWithoutDeveloperNestedInput
  }

  export type DeveloperUncheckedUpdateWithoutAuthInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUncheckedUpdateManyWithoutDeveloperNestedInput
    session?: SessionUncheckedUpdateOneWithoutDeveloperNestedInput
    otp?: OtpUncheckedUpdateOneWithoutDeveloperNestedInput
  }

  export type AuthCreateWithoutManagerInput = {
    email: string
    salt: string
    hash: string
    leader?: TeamLeaderCreateNestedOneWithoutAuthInput
    dev?: DeveloperCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateWithoutManagerInput = {
    id?: number
    email: string
    salt: string
    hash: string
    leader?: TeamLeaderUncheckedCreateNestedOneWithoutAuthInput
    dev?: DeveloperUncheckedCreateNestedOneWithoutAuthInput
  }

  export type AuthCreateOrConnectWithoutManagerInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutManagerInput, AuthUncheckedCreateWithoutManagerInput>
  }

  export type ProjectCreateWithoutManagerInput = {
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    teamLeader: TeamLeaderCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutManagerInput = {
    id?: number
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    leaderId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput>
  }

  export type ProjectCreateManyManagerInputEnvelope = {
    data: ProjectCreateManyManagerInput | ProjectCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutManagerInput = {
    session: string
    expiry: Date | string
    leader?: TeamLeaderCreateNestedOneWithoutSessionInput
    developer?: DeveloperCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutManagerInput = {
    id?: number
    session: string
    expiry: Date | string
    leaderId?: number | null
    developerId?: number | null
  }

  export type SessionCreateOrConnectWithoutManagerInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutManagerInput, SessionUncheckedCreateWithoutManagerInput>
  }

  export type OtpCreateWithoutManagerInput = {
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    leader?: TeamLeaderCreateNestedOneWithoutOtpInput
    developer?: DeveloperCreateNestedOneWithoutOtpInput
  }

  export type OtpUncheckedCreateWithoutManagerInput = {
    id?: number
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    leaderId?: number | null
    developerId?: number | null
  }

  export type OtpCreateOrConnectWithoutManagerInput = {
    where: OtpWhereUniqueInput
    create: XOR<OtpCreateWithoutManagerInput, OtpUncheckedCreateWithoutManagerInput>
  }

  export type AuthUpsertWithoutManagerInput = {
    update: XOR<AuthUpdateWithoutManagerInput, AuthUncheckedUpdateWithoutManagerInput>
    create: XOR<AuthCreateWithoutManagerInput, AuthUncheckedCreateWithoutManagerInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutManagerInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutManagerInput, AuthUncheckedUpdateWithoutManagerInput>
  }

  export type AuthUpdateWithoutManagerInput = {
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    leader?: TeamLeaderUpdateOneWithoutAuthNestedInput
    dev?: DeveloperUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    leader?: TeamLeaderUncheckedUpdateOneWithoutAuthNestedInput
    dev?: DeveloperUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutManagerInput, ProjectUncheckedUpdateWithoutManagerInput>
    create: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutManagerInput, ProjectUncheckedUpdateWithoutManagerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutManagerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutManagerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    storyPoints?: IntNullableFilter<"Project"> | number | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    managerId?: IntFilter<"Project"> | number
    leaderId?: IntFilter<"Project"> | number
  }

  export type SessionUpsertWithoutManagerInput = {
    update: XOR<SessionUpdateWithoutManagerInput, SessionUncheckedUpdateWithoutManagerInput>
    create: XOR<SessionCreateWithoutManagerInput, SessionUncheckedCreateWithoutManagerInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutManagerInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutManagerInput, SessionUncheckedUpdateWithoutManagerInput>
  }

  export type SessionUpdateWithoutManagerInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: TeamLeaderUpdateOneWithoutSessionNestedInput
    developer?: DeveloperUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OtpUpsertWithoutManagerInput = {
    update: XOR<OtpUpdateWithoutManagerInput, OtpUncheckedUpdateWithoutManagerInput>
    create: XOR<OtpCreateWithoutManagerInput, OtpUncheckedCreateWithoutManagerInput>
    where?: OtpWhereInput
  }

  export type OtpUpdateToOneWithWhereWithoutManagerInput = {
    where?: OtpWhereInput
    data: XOR<OtpUpdateWithoutManagerInput, OtpUncheckedUpdateWithoutManagerInput>
  }

  export type OtpUpdateWithoutManagerInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    leader?: TeamLeaderUpdateOneWithoutOtpNestedInput
    developer?: DeveloperUpdateOneWithoutOtpNestedInput
  }

  export type OtpUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    leaderId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuthCreateWithoutLeaderInput = {
    email: string
    salt: string
    hash: string
    manager?: ProjectManagerCreateNestedOneWithoutAuthInput
    dev?: DeveloperCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateWithoutLeaderInput = {
    id?: number
    email: string
    salt: string
    hash: string
    manager?: ProjectManagerUncheckedCreateNestedOneWithoutAuthInput
    dev?: DeveloperUncheckedCreateNestedOneWithoutAuthInput
  }

  export type AuthCreateOrConnectWithoutLeaderInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutLeaderInput, AuthUncheckedCreateWithoutLeaderInput>
  }

  export type ProjectCreateWithoutTeamLeaderInput = {
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    manager: ProjectManagerCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTeamLeaderInput = {
    id?: number
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    managerId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTeamLeaderInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeamLeaderInput, ProjectUncheckedCreateWithoutTeamLeaderInput>
  }

  export type ProjectCreateManyTeamLeaderInputEnvelope = {
    data: ProjectCreateManyTeamLeaderInput | ProjectCreateManyTeamLeaderInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutLeaderInput = {
    session: string
    expiry: Date | string
    manager?: ProjectManagerCreateNestedOneWithoutSessionInput
    developer?: DeveloperCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutLeaderInput = {
    id?: number
    session: string
    expiry: Date | string
    managerId?: number | null
    developerId?: number | null
  }

  export type SessionCreateOrConnectWithoutLeaderInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutLeaderInput, SessionUncheckedCreateWithoutLeaderInput>
  }

  export type OtpCreateWithoutLeaderInput = {
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    manager?: ProjectManagerCreateNestedOneWithoutOtpInput
    developer?: DeveloperCreateNestedOneWithoutOtpInput
  }

  export type OtpUncheckedCreateWithoutLeaderInput = {
    id?: number
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    managerId?: number | null
    developerId?: number | null
  }

  export type OtpCreateOrConnectWithoutLeaderInput = {
    where: OtpWhereUniqueInput
    create: XOR<OtpCreateWithoutLeaderInput, OtpUncheckedCreateWithoutLeaderInput>
  }

  export type AuthUpsertWithoutLeaderInput = {
    update: XOR<AuthUpdateWithoutLeaderInput, AuthUncheckedUpdateWithoutLeaderInput>
    create: XOR<AuthCreateWithoutLeaderInput, AuthUncheckedCreateWithoutLeaderInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutLeaderInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutLeaderInput, AuthUncheckedUpdateWithoutLeaderInput>
  }

  export type AuthUpdateWithoutLeaderInput = {
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    manager?: ProjectManagerUpdateOneWithoutAuthNestedInput
    dev?: DeveloperUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateWithoutLeaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    manager?: ProjectManagerUncheckedUpdateOneWithoutAuthNestedInput
    dev?: DeveloperUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutTeamLeaderInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTeamLeaderInput, ProjectUncheckedUpdateWithoutTeamLeaderInput>
    create: XOR<ProjectCreateWithoutTeamLeaderInput, ProjectUncheckedCreateWithoutTeamLeaderInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTeamLeaderInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTeamLeaderInput, ProjectUncheckedUpdateWithoutTeamLeaderInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTeamLeaderInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTeamLeaderInput>
  }

  export type SessionUpsertWithoutLeaderInput = {
    update: XOR<SessionUpdateWithoutLeaderInput, SessionUncheckedUpdateWithoutLeaderInput>
    create: XOR<SessionCreateWithoutLeaderInput, SessionUncheckedCreateWithoutLeaderInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutLeaderInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutLeaderInput, SessionUncheckedUpdateWithoutLeaderInput>
  }

  export type SessionUpdateWithoutLeaderInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: ProjectManagerUpdateOneWithoutSessionNestedInput
    developer?: DeveloperUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutLeaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OtpUpsertWithoutLeaderInput = {
    update: XOR<OtpUpdateWithoutLeaderInput, OtpUncheckedUpdateWithoutLeaderInput>
    create: XOR<OtpCreateWithoutLeaderInput, OtpUncheckedCreateWithoutLeaderInput>
    where?: OtpWhereInput
  }

  export type OtpUpdateToOneWithWhereWithoutLeaderInput = {
    where?: OtpWhereInput
    data: XOR<OtpUpdateWithoutLeaderInput, OtpUncheckedUpdateWithoutLeaderInput>
  }

  export type OtpUpdateWithoutLeaderInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    manager?: ProjectManagerUpdateOneWithoutOtpNestedInput
    developer?: DeveloperUpdateOneWithoutOtpNestedInput
  }

  export type OtpUncheckedUpdateWithoutLeaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuthCreateWithoutDevInput = {
    email: string
    salt: string
    hash: string
    manager?: ProjectManagerCreateNestedOneWithoutAuthInput
    leader?: TeamLeaderCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateWithoutDevInput = {
    id?: number
    email: string
    salt: string
    hash: string
    manager?: ProjectManagerUncheckedCreateNestedOneWithoutAuthInput
    leader?: TeamLeaderUncheckedCreateNestedOneWithoutAuthInput
  }

  export type AuthCreateOrConnectWithoutDevInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutDevInput, AuthUncheckedCreateWithoutDevInput>
  }

  export type TaskCreateWithoutDeveloperInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutDeveloperInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    projectId: number
  }

  export type TaskCreateOrConnectWithoutDeveloperInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput>
  }

  export type TaskCreateManyDeveloperInputEnvelope = {
    data: TaskCreateManyDeveloperInput | TaskCreateManyDeveloperInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutDeveloperInput = {
    session: string
    expiry: Date | string
    manager?: ProjectManagerCreateNestedOneWithoutSessionInput
    leader?: TeamLeaderCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutDeveloperInput = {
    id?: number
    session: string
    expiry: Date | string
    managerId?: number | null
    leaderId?: number | null
  }

  export type SessionCreateOrConnectWithoutDeveloperInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutDeveloperInput, SessionUncheckedCreateWithoutDeveloperInput>
  }

  export type OtpCreateWithoutDeveloperInput = {
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    manager?: ProjectManagerCreateNestedOneWithoutOtpInput
    leader?: TeamLeaderCreateNestedOneWithoutOtpInput
  }

  export type OtpUncheckedCreateWithoutDeveloperInput = {
    id?: number
    otp: string
    expiry: Date | string
    status?: $Enums.OTPStatus
    managerId?: number | null
    leaderId?: number | null
  }

  export type OtpCreateOrConnectWithoutDeveloperInput = {
    where: OtpWhereUniqueInput
    create: XOR<OtpCreateWithoutDeveloperInput, OtpUncheckedCreateWithoutDeveloperInput>
  }

  export type AuthUpsertWithoutDevInput = {
    update: XOR<AuthUpdateWithoutDevInput, AuthUncheckedUpdateWithoutDevInput>
    create: XOR<AuthCreateWithoutDevInput, AuthUncheckedCreateWithoutDevInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutDevInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutDevInput, AuthUncheckedUpdateWithoutDevInput>
  }

  export type AuthUpdateWithoutDevInput = {
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    manager?: ProjectManagerUpdateOneWithoutAuthNestedInput
    leader?: TeamLeaderUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateWithoutDevInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    manager?: ProjectManagerUncheckedUpdateOneWithoutAuthNestedInput
    leader?: TeamLeaderUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutDeveloperInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutDeveloperInput, TaskUncheckedUpdateWithoutDeveloperInput>
    create: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutDeveloperInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutDeveloperInput, TaskUncheckedUpdateWithoutDeveloperInput>
  }

  export type TaskUpdateManyWithWhereWithoutDeveloperInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutDeveloperInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    projectId?: IntFilter<"Task"> | number
    developerId?: IntFilter<"Task"> | number
  }

  export type SessionUpsertWithoutDeveloperInput = {
    update: XOR<SessionUpdateWithoutDeveloperInput, SessionUncheckedUpdateWithoutDeveloperInput>
    create: XOR<SessionCreateWithoutDeveloperInput, SessionUncheckedCreateWithoutDeveloperInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutDeveloperInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutDeveloperInput, SessionUncheckedUpdateWithoutDeveloperInput>
  }

  export type SessionUpdateWithoutDeveloperInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: ProjectManagerUpdateOneWithoutSessionNestedInput
    leader?: TeamLeaderUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OtpUpsertWithoutDeveloperInput = {
    update: XOR<OtpUpdateWithoutDeveloperInput, OtpUncheckedUpdateWithoutDeveloperInput>
    create: XOR<OtpCreateWithoutDeveloperInput, OtpUncheckedCreateWithoutDeveloperInput>
    where?: OtpWhereInput
  }

  export type OtpUpdateToOneWithWhereWithoutDeveloperInput = {
    where?: OtpWhereInput
    data: XOR<OtpUpdateWithoutDeveloperInput, OtpUncheckedUpdateWithoutDeveloperInput>
  }

  export type OtpUpdateWithoutDeveloperInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    manager?: ProjectManagerUpdateOneWithoutOtpNestedInput
    leader?: TeamLeaderUpdateOneWithoutOtpNestedInput
  }

  export type OtpUncheckedUpdateWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    leaderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectManagerCreateWithoutProjectsInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutManagerInput
    session?: SessionCreateNestedOneWithoutManagerInput
    otp?: OtpCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerUncheckedCreateWithoutProjectsInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    session?: SessionUncheckedCreateNestedOneWithoutManagerInput
    otp?: OtpUncheckedCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerCreateOrConnectWithoutProjectsInput = {
    where: ProjectManagerWhereUniqueInput
    create: XOR<ProjectManagerCreateWithoutProjectsInput, ProjectManagerUncheckedCreateWithoutProjectsInput>
  }

  export type TeamLeaderCreateWithoutProjectsInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutLeaderInput
    session?: SessionCreateNestedOneWithoutLeaderInput
    otp?: OtpCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderUncheckedCreateWithoutProjectsInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    session?: SessionUncheckedCreateNestedOneWithoutLeaderInput
    otp?: OtpUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderCreateOrConnectWithoutProjectsInput = {
    where: TeamLeaderWhereUniqueInput
    create: XOR<TeamLeaderCreateWithoutProjectsInput, TeamLeaderUncheckedCreateWithoutProjectsInput>
  }

  export type TaskCreateWithoutProjectInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    developer: DeveloperCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    developerId: number
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectManagerUpsertWithoutProjectsInput = {
    update: XOR<ProjectManagerUpdateWithoutProjectsInput, ProjectManagerUncheckedUpdateWithoutProjectsInput>
    create: XOR<ProjectManagerCreateWithoutProjectsInput, ProjectManagerUncheckedCreateWithoutProjectsInput>
    where?: ProjectManagerWhereInput
  }

  export type ProjectManagerUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ProjectManagerWhereInput
    data: XOR<ProjectManagerUpdateWithoutProjectsInput, ProjectManagerUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectManagerUpdateWithoutProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutManagerNestedInput
    session?: SessionUpdateOneWithoutManagerNestedInput
    otp?: OtpUpdateOneWithoutManagerNestedInput
  }

  export type ProjectManagerUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    session?: SessionUncheckedUpdateOneWithoutManagerNestedInput
    otp?: OtpUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type TeamLeaderUpsertWithoutProjectsInput = {
    update: XOR<TeamLeaderUpdateWithoutProjectsInput, TeamLeaderUncheckedUpdateWithoutProjectsInput>
    create: XOR<TeamLeaderCreateWithoutProjectsInput, TeamLeaderUncheckedCreateWithoutProjectsInput>
    where?: TeamLeaderWhereInput
  }

  export type TeamLeaderUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TeamLeaderWhereInput
    data: XOR<TeamLeaderUpdateWithoutProjectsInput, TeamLeaderUncheckedUpdateWithoutProjectsInput>
  }

  export type TeamLeaderUpdateWithoutProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutLeaderNestedInput
    session?: SessionUpdateOneWithoutLeaderNestedInput
    otp?: OtpUpdateOneWithoutLeaderNestedInput
  }

  export type TeamLeaderUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    session?: SessionUncheckedUpdateOneWithoutLeaderNestedInput
    otp?: OtpUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    manager: ProjectManagerCreateNestedOneWithoutProjectsInput
    teamLeader: TeamLeaderCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    managerId: number
    leaderId: number
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type DeveloperCreateWithoutTasksInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutDevInput
    session?: SessionCreateNestedOneWithoutDeveloperInput
    otp?: OtpCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperUncheckedCreateWithoutTasksInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    session?: SessionUncheckedCreateNestedOneWithoutDeveloperInput
    otp?: OtpUncheckedCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperCreateOrConnectWithoutTasksInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutTasksInput, DeveloperUncheckedCreateWithoutTasksInput>
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: ProjectManagerUpdateOneRequiredWithoutProjectsNestedInput
    teamLeader?: TeamLeaderUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: IntFieldUpdateOperationsInput | number
    leaderId?: IntFieldUpdateOperationsInput | number
  }

  export type DeveloperUpsertWithoutTasksInput = {
    update: XOR<DeveloperUpdateWithoutTasksInput, DeveloperUncheckedUpdateWithoutTasksInput>
    create: XOR<DeveloperCreateWithoutTasksInput, DeveloperUncheckedCreateWithoutTasksInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutTasksInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutTasksInput, DeveloperUncheckedUpdateWithoutTasksInput>
  }

  export type DeveloperUpdateWithoutTasksInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutDevNestedInput
    session?: SessionUpdateOneWithoutDeveloperNestedInput
    otp?: OtpUpdateOneWithoutDeveloperNestedInput
  }

  export type DeveloperUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    session?: SessionUncheckedUpdateOneWithoutDeveloperNestedInput
    otp?: OtpUncheckedUpdateOneWithoutDeveloperNestedInput
  }

  export type ProjectManagerCreateWithoutSessionInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutManagerInput
    projects?: ProjectCreateNestedManyWithoutManagerInput
    otp?: OtpCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerUncheckedCreateWithoutSessionInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    otp?: OtpUncheckedCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerCreateOrConnectWithoutSessionInput = {
    where: ProjectManagerWhereUniqueInput
    create: XOR<ProjectManagerCreateWithoutSessionInput, ProjectManagerUncheckedCreateWithoutSessionInput>
  }

  export type TeamLeaderCreateWithoutSessionInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutLeaderInput
    projects?: ProjectCreateNestedManyWithoutTeamLeaderInput
    otp?: OtpCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderUncheckedCreateWithoutSessionInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamLeaderInput
    otp?: OtpUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderCreateOrConnectWithoutSessionInput = {
    where: TeamLeaderWhereUniqueInput
    create: XOR<TeamLeaderCreateWithoutSessionInput, TeamLeaderUncheckedCreateWithoutSessionInput>
  }

  export type DeveloperCreateWithoutSessionInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutDevInput
    tasks?: TaskCreateNestedManyWithoutDeveloperInput
    otp?: OtpCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperUncheckedCreateWithoutSessionInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutDeveloperInput
    otp?: OtpUncheckedCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperCreateOrConnectWithoutSessionInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutSessionInput, DeveloperUncheckedCreateWithoutSessionInput>
  }

  export type ProjectManagerUpsertWithoutSessionInput = {
    update: XOR<ProjectManagerUpdateWithoutSessionInput, ProjectManagerUncheckedUpdateWithoutSessionInput>
    create: XOR<ProjectManagerCreateWithoutSessionInput, ProjectManagerUncheckedCreateWithoutSessionInput>
    where?: ProjectManagerWhereInput
  }

  export type ProjectManagerUpdateToOneWithWhereWithoutSessionInput = {
    where?: ProjectManagerWhereInput
    data: XOR<ProjectManagerUpdateWithoutSessionInput, ProjectManagerUncheckedUpdateWithoutSessionInput>
  }

  export type ProjectManagerUpdateWithoutSessionInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutManagerNestedInput
    projects?: ProjectUpdateManyWithoutManagerNestedInput
    otp?: OtpUpdateOneWithoutManagerNestedInput
  }

  export type ProjectManagerUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    otp?: OtpUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type TeamLeaderUpsertWithoutSessionInput = {
    update: XOR<TeamLeaderUpdateWithoutSessionInput, TeamLeaderUncheckedUpdateWithoutSessionInput>
    create: XOR<TeamLeaderCreateWithoutSessionInput, TeamLeaderUncheckedCreateWithoutSessionInput>
    where?: TeamLeaderWhereInput
  }

  export type TeamLeaderUpdateToOneWithWhereWithoutSessionInput = {
    where?: TeamLeaderWhereInput
    data: XOR<TeamLeaderUpdateWithoutSessionInput, TeamLeaderUncheckedUpdateWithoutSessionInput>
  }

  export type TeamLeaderUpdateWithoutSessionInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutLeaderNestedInput
    projects?: ProjectUpdateManyWithoutTeamLeaderNestedInput
    otp?: OtpUpdateOneWithoutLeaderNestedInput
  }

  export type TeamLeaderUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    projects?: ProjectUncheckedUpdateManyWithoutTeamLeaderNestedInput
    otp?: OtpUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type DeveloperUpsertWithoutSessionInput = {
    update: XOR<DeveloperUpdateWithoutSessionInput, DeveloperUncheckedUpdateWithoutSessionInput>
    create: XOR<DeveloperCreateWithoutSessionInput, DeveloperUncheckedCreateWithoutSessionInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutSessionInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutSessionInput, DeveloperUncheckedUpdateWithoutSessionInput>
  }

  export type DeveloperUpdateWithoutSessionInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutDevNestedInput
    tasks?: TaskUpdateManyWithoutDeveloperNestedInput
    otp?: OtpUpdateOneWithoutDeveloperNestedInput
  }

  export type DeveloperUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutDeveloperNestedInput
    otp?: OtpUncheckedUpdateOneWithoutDeveloperNestedInput
  }

  export type ProjectManagerCreateWithoutOtpInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutManagerInput
    projects?: ProjectCreateNestedManyWithoutManagerInput
    session?: SessionCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerUncheckedCreateWithoutOtpInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    session?: SessionUncheckedCreateNestedOneWithoutManagerInput
  }

  export type ProjectManagerCreateOrConnectWithoutOtpInput = {
    where: ProjectManagerWhereUniqueInput
    create: XOR<ProjectManagerCreateWithoutOtpInput, ProjectManagerUncheckedCreateWithoutOtpInput>
  }

  export type TeamLeaderCreateWithoutOtpInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutLeaderInput
    projects?: ProjectCreateNestedManyWithoutTeamLeaderInput
    session?: SessionCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderUncheckedCreateWithoutOtpInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamLeaderInput
    session?: SessionUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type TeamLeaderCreateOrConnectWithoutOtpInput = {
    where: TeamLeaderWhereUniqueInput
    create: XOR<TeamLeaderCreateWithoutOtpInput, TeamLeaderUncheckedCreateWithoutOtpInput>
  }

  export type DeveloperCreateWithoutOtpInput = {
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    auth: AuthCreateNestedOneWithoutDevInput
    tasks?: TaskCreateNestedManyWithoutDeveloperInput
    session?: SessionCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperUncheckedCreateWithoutOtpInput = {
    id?: number
    username: string
    lastLogin?: Date | string | null
    lastLogout?: Date | string | null
    authId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutDeveloperInput
    session?: SessionUncheckedCreateNestedOneWithoutDeveloperInput
  }

  export type DeveloperCreateOrConnectWithoutOtpInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutOtpInput, DeveloperUncheckedCreateWithoutOtpInput>
  }

  export type ProjectManagerUpsertWithoutOtpInput = {
    update: XOR<ProjectManagerUpdateWithoutOtpInput, ProjectManagerUncheckedUpdateWithoutOtpInput>
    create: XOR<ProjectManagerCreateWithoutOtpInput, ProjectManagerUncheckedCreateWithoutOtpInput>
    where?: ProjectManagerWhereInput
  }

  export type ProjectManagerUpdateToOneWithWhereWithoutOtpInput = {
    where?: ProjectManagerWhereInput
    data: XOR<ProjectManagerUpdateWithoutOtpInput, ProjectManagerUncheckedUpdateWithoutOtpInput>
  }

  export type ProjectManagerUpdateWithoutOtpInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutManagerNestedInput
    projects?: ProjectUpdateManyWithoutManagerNestedInput
    session?: SessionUpdateOneWithoutManagerNestedInput
  }

  export type ProjectManagerUncheckedUpdateWithoutOtpInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    session?: SessionUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type TeamLeaderUpsertWithoutOtpInput = {
    update: XOR<TeamLeaderUpdateWithoutOtpInput, TeamLeaderUncheckedUpdateWithoutOtpInput>
    create: XOR<TeamLeaderCreateWithoutOtpInput, TeamLeaderUncheckedCreateWithoutOtpInput>
    where?: TeamLeaderWhereInput
  }

  export type TeamLeaderUpdateToOneWithWhereWithoutOtpInput = {
    where?: TeamLeaderWhereInput
    data: XOR<TeamLeaderUpdateWithoutOtpInput, TeamLeaderUncheckedUpdateWithoutOtpInput>
  }

  export type TeamLeaderUpdateWithoutOtpInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutLeaderNestedInput
    projects?: ProjectUpdateManyWithoutTeamLeaderNestedInput
    session?: SessionUpdateOneWithoutLeaderNestedInput
  }

  export type TeamLeaderUncheckedUpdateWithoutOtpInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    projects?: ProjectUncheckedUpdateManyWithoutTeamLeaderNestedInput
    session?: SessionUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type DeveloperUpsertWithoutOtpInput = {
    update: XOR<DeveloperUpdateWithoutOtpInput, DeveloperUncheckedUpdateWithoutOtpInput>
    create: XOR<DeveloperCreateWithoutOtpInput, DeveloperUncheckedCreateWithoutOtpInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutOtpInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutOtpInput, DeveloperUncheckedUpdateWithoutOtpInput>
  }

  export type DeveloperUpdateWithoutOtpInput = {
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth?: AuthUpdateOneRequiredWithoutDevNestedInput
    tasks?: TaskUpdateManyWithoutDeveloperNestedInput
    session?: SessionUpdateOneWithoutDeveloperNestedInput
  }

  export type DeveloperUncheckedUpdateWithoutOtpInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutDeveloperNestedInput
    session?: SessionUncheckedUpdateOneWithoutDeveloperNestedInput
  }

  export type ProjectCreateManyManagerInput = {
    id?: number
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    leaderId: number
  }

  export type ProjectUpdateWithoutManagerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: TeamLeaderUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateManyTeamLeaderInput = {
    id?: number
    name: string
    description?: string | null
    storyPoints?: number | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    managerId: number
  }

  export type ProjectUpdateWithoutTeamLeaderInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: ProjectManagerUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTeamLeaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTeamLeaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyDeveloperInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    projectId: number
  }

  export type TaskUpdateWithoutDeveloperInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUncheckedUpdateManyWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyProjectInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    updatedAt?: Date | string
    developerId: number
  }

  export type TaskUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developer?: DeveloperUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
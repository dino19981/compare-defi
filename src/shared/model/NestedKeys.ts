/**
 * Utility type to get nested keys with dot notation
 * @example
 * type NestedKeys<{ a: { b: { c: string } } }> = 'a.b.c' | 'a.b' | 'a'
 */
export type NestedKeys<T> = T extends string | number | boolean
  ? never
  : T extends Array<infer U>
    ? U extends string | number | boolean
      ? never
      : `${string & keyof T}.${NestedKeys<U>}`
    : T extends object
      ? {
          [K in keyof T]: K extends string
            ? T[K] extends object
              ? `${K}.${NestedKeys<T[K]>}` | K
              : K
            : never;
        }[keyof T]
      : never;

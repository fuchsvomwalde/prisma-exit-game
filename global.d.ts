/**
 * utility types
 * for more useful utility types see: https://github.com/piotrwitek/utility-types
 */

export type ValueOf<T> = T[keyof T];

export type Nullable<T> = T | null;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type DotNotatedPropertyAccessor<
  ObjectType,
  Key extends keyof ObjectType
> = Key extends string
  ? ObjectType[Key] extends Record<string, unknown>
    ? `${Key}.${DotNotatedPropertyAccessor<
        ObjectType[Key],
        keyof ObjectType[Key]
      >}`
    : Key
  : never;

export type DotNotatedPropertyAccess<T> = {
  [K in DotNotatedPropertyAccessor<
    T,
    keyof T
  >]: K extends `${infer Head}.${infer Rest}`
    ? Head extends keyof T
      ? Rest extends DotNotatedPropertyAccessor<T[Head], keyof T[Head]>
        ? DotNotatedPropertyAccess<T[Head]>[Rest]
        : never
      : never
    : K extends keyof T
    ? T[K]
    : never;
};

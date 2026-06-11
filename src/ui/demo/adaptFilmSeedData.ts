/**
 * JSON imports contain plain strings where the domain uses branded string IDs.
 * This recursive seed shape documents that serialization boundary while keeping
 * the runtime adapter as a transparent, deterministic identity function.
 */
type FilmSeedShape<T> =
  T extends string ? string
    : T extends number | boolean | null ? T
      : T extends readonly (infer Item)[] ? readonly FilmSeedShape<Item>[]
        : T extends object ? { readonly [Key in keyof T]: FilmSeedShape<T[Key]> }
          : never;

export function adaptFilmSeedData<T>(value: FilmSeedShape<T>): T;
export function adaptFilmSeedData<T>(value: FilmSeedShape<T>): FilmSeedShape<T> {
  return value;
}

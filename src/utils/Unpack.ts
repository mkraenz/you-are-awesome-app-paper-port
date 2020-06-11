export type Unpack<A> = A extends Array<infer E> ? E : A;

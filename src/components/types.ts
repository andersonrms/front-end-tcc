type Merge<E, U> = Omit<E, keyof U> & U;

type PropsWithAs<E extends React.ElementType, P> = { as?: E } & P;

export type PolymorphicProps<E extends React.ElementType, P> = Merge<
  React.ComponentProps<E>,
  PropsWithAs<E, P>
>;
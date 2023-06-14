export const ALLOWED_TAGS = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    P: 'p',
    A: 'a',
    SPAN: 'span',
    STRONG: 'strong',
    EM: 'em',
    SMALL: 'small',
    MARK: 'mark',
    SUB: 'sub',
    SUP: 'sup',
    BLOCKQUOTE: 'blockquote',
    ABBR: 'abbr',
  } as const;

  export type TextProps<E extends React.ElementType> = React.ComponentProps<E> & {
    tag?: typeof ALLOWED_TAGS[keyof typeof ALLOWED_TAGS];
    children: React.ReactNode;
    className?: string;
  };
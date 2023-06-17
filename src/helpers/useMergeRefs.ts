/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, Ref, MutableRefObject } from 'react';

type ReactRef<T> = Ref<T> | MutableRefObject<T>;

export function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (ref == null) return;

  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  // @ts-ignore
  ref.current = value;
}

export function useMergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }

    return (node: T) => {
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node);
      });
    };
  }, refs);
}

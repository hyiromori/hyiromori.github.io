import * as React from 'react';

class AbstractContainer<P, S> extends React.Component<P, S> {
  state: S;

  setState<K extends keyof S>(
    state:
      ((prevState: Readonly<S>, props: P) => (Pick<S, K> | S | null)) |
      (Pick<S, K> | S | null),
    callback?: () => void,
  ): void {
    console.log('Update state:', state);
    super.setState(state, callback);
  }
}

export { AbstractContainer };
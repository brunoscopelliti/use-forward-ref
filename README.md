# use-forward-ref

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/use-forward-ref/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/use-forward-ref.svg?style=flat)](https://www.npmjs.com/package/@bscop/use-forward-ref)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/use-forward-ref.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/use-forward-ref)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/use-forward-ref)](https://app.codecov.io/gh/brunoscopelliti/use-forward-ref/)

React hook that permits to use the forwarded ref, or a fallback when it's not provided.

## Install

```
npm i @bscop/use-forward-ref
```

## Usage

```js
import React, { useRef } from "react";
import useForwardRef from "@bscop/use-forward-ref";

const Demo = React.forwardRef(
  (props, maybeRef) => {
    /**
     * maybeRef can be a ref, or nothing
     * depending by how the component is used.
     * ref is always a ref, equal to maybeRef
     * only when it is a ref.
     */
    const ref = useForwardRef(maybeRef);

    return (
      <div ref={ref}>
        Demo!
      </div>
    );
  }
);
```

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com

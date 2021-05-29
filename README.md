# react-forward-ref

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/react-forward-ref/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/react-forward-ref.svg?style=flat)](https://www.npmjs.com/package/@bscop/react-forward-ref)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/react-forward-ref.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/react-forward-ref)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/react-forward-ref)](https://app.codecov.io/gh/brunoscopelliti/react-forward-ref/)

React hook that permits to use the forwarded ref, or a fallback when it's not provided.

## Install

```
npm i @bscop/react-forward-ref
```

## Usage

```js
import React, { useRef } from "react";
import useForwardRef from "@bscop/react-forward-ref";

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

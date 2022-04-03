# react-simply-modal

[![NPM](https://img.shields.io/npm/v/react-simply-modal.svg)](https://www.npmjs.com/package/react-simply-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-simply-modal
```

## Usage

```jsx
import { SimplyModal, useModal } from "react-simply-modal";

export const Example = () => {
  const { isOpen, toggle } = useModal();

  return (
          <button onClick={toggle}>
            Show the modal
          </button>
          <MyComponent isOpen={isOpen} visible={toggle} content="sucess!" />
    );
};
```

## License

MIT © [MecyDev](https://github.com/MecyDev)

# react-simply-modal

[![NPM](https://img.shields.io/npm/v/react-simply-modal.svg)](https://www.npmjs.com/package/react-simply-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-simply-modal
```

## Usage

```jsx
import { SimplyModal, useModal } from "react-simply-modal";

/**
 * Optional customisation variables
 *
 * bgColor - [string] - Overlay color - only full hexa format ("#FFFFFF"), no use (#FFF).
 * bgColorOpacity - [string] - Overlay opacity - hexa format 00 (0) to FF (255). ex : "FF" (0% opacity), "80" (50% opacity) - defaut value 80.
 * bgModalColor - [string] - Modal background color.
 * bgCloseColor - [string] - Close button (cross) color.
 * bgCloseHvColor - [string] - Close button (cross) hover color.
 * borderColor - [string] - Modal border color.
 *
 * **/

const content = <h1 id="heading">Sucess!</h1> // id="heading" is for the modal aria-labelledby.

export const Example = () => {
  const { isOpen, toggle } = useModal();

  return (
          <button onClick={toggle}>
            Show the modal
          </button>
          <MyComponent isOpen={isOpen} visible={toggle} content="sucess!" bgColor="#808080" bgColorOpacity="30" bgCloseColor="#000" bgCloseHvColor="#FFF" />
    );
};
```

## License

MIT © [MecyDev](https://github.com/MecyDev)

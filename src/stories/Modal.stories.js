import React, { Fragment } from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";

import SimplyModal from "../components/Modal";
import useModal from "../components/Modal/useModal";

const stories = storiesOf("SimplyModal test", module);

stories.add("SimplyModal", () => {
  const { isOpen, toggle } = useModal();

  function submit() {
    toggle();
  }

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const H1 = styled.h1`
    font-size: 2rem;
    color: purple;
  `;

  const H2 = styled.h2`
    font-size: 1.75rem;
    color: green;
  `;

  const content = (
    <Div>
      <H1>Hello</H1>
      <H2>Hello</H2>
    </Div>
  );

  return (
    <Fragment>
      <button type="button" onClick={() => submit()}>
        Save
      </button>
      <SimplyModal
        isOpen={isOpen}
        visible={toggle}
        content={content}
        bgColor="#808080"
        bgColorOpacity="30"
        bgCloseColor="#000"
        bgCloseHvColor="#808080"
        borderColor="#455455"
      />
    </Fragment>
  );
});

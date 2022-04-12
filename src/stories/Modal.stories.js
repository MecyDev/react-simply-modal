import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";

import SimplyModal from "../components/Modal";
import useModal from "../components/Modal/useModal";
import { PropTypes } from "prop-types";

const stories = storiesOf("SimplyModal test", module);

stories.add("SimplyModal", () => {
  const { isOpen, toggle } = useModal();

  function submit() {
    toggle();
  }

  const content = <h1 id="heading">Sucess!</h1>;

  return (
    <Fragment>
      <button type="button" onClick={() => submit()}>
        Save
      </button>
      <SimplyModal isOpen={isOpen} visible={toggle} content={content} />
    </Fragment>
  );
});

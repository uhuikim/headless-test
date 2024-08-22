import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa";
const CheckboxDemo = () => (
  <form>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox.Root defaultChecked id="c1">
        <Checkbox.Indicator>
          <FaCheck />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor="c1">Accept terms and conditions.</label>
    </div>
  </form>
);

export default CheckboxDemo;

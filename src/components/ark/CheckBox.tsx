import { Checkbox } from "@ark-ui/react";
import { FaCheck } from "react-icons/fa";
export const Basic = () => (
  <Checkbox.Root>
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <FaCheck />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
);
export default Basic;

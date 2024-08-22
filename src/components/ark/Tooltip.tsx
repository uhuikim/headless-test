import { css } from "@/styled-system/css";
import { Tooltip } from "@ark-ui/react";
const TooltipDemo = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner
        className={css({
          background: "yellow",
          padding: 10,
        })}
      >
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};
export default TooltipDemo;

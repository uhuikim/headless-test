import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { css } from "@/styled-system/css";

const TooltipDemo = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button type="button">+</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={css({
              background: "red",
              padding: 10,
            })}
            sideOffset={5}
          >
            Add to library
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipDemo;

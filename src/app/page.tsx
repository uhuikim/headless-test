import { css } from "@/styled-system/css";
import RadixTooltip from "@/components/radix/Tooltip";
import ArkTooltip from "@/components/ark/Tooltip";
import RadixCheckBox from "@/components/radix/CheckBox";
import ArkCheckBox from "@/components/ark/CheckBox";
import RadixDialog from "@/components/radix/Dialog";
import ArkDialog from "@/components/ark/Dialog";
import { HStack, Stack } from "@/styled-system/jsx";

export default function Home() {
  return (
    <Stack gap={10}>
      <HStack gap={10}>
        <h2
          className={css({
            fontSize: 24,
            fontWeight: "bold",
          })}
        >
          ToolTip
        </h2>
        <div className={css({ bg: "yellow.100", width: "150px" })}>
          <p>ark</p>
          <ArkTooltip />
        </div>
        <div className={css({ bg: "red.100", width: "150px" })}>
          <p>radix</p>
          <RadixTooltip />
        </div>
      </HStack>
      <HStack gap={10}>
        <h2
          className={css({
            fontSize: 24,
            fontWeight: "bold",
          })}
        >
          CheckBox
        </h2>
        <div className={css({ bg: "yellow.100", width: "150px" })}>
          <p>ark</p>
          <ArkCheckBox />
        </div>
        <div className={css({ bg: "red.100", width: "150px" })}>
          <p>radix</p>
          <RadixCheckBox />
        </div>
      </HStack>
      <HStack gap={10}>
        <h2
          className={css({
            fontSize: 24,
            fontWeight: "bold",
          })}
        >
          Dialog
        </h2>
        <div className={css({ bg: "yellow.100", width: "150px" })}>
          <p>ark</p>
          <ArkDialog />
        </div>
        <div className={css({ bg: "red.100", width: "150px" })}>
          <p>radix</p>
          <RadixDialog />
        </div>
      </HStack>
    </Stack>
  );
}

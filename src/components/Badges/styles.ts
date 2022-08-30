import { GrClose } from "react-icons/gr"

import { styled } from "../../stitches.config"

const flex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

export const Badges = styled("div", {
  padding: "$4 $8",
  width: "fit-content",
  borderRadius: "4px",
  backgroundColor: "$primary500",
  color: "white",
  ...flex,
  gap: "$4"
})

export const Tags = styled("div", {
  padding: "$4 $8",
  borderRadius: "4px",
  backgroundColor: "$primary300",
  color: "$text500",
  width: "fit-content",
  ...flex,
  position: "relative",
  cursor: "default"
})

export const CloseIcon = styled(GrClose, {
  cursor: "pointer",
  position: "absolute",
  right: "$4",
  backgroundColor: "$primary300",
  height: "100%"
})

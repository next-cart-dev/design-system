import { GrClose } from "react-icons/gr"

import { styled } from "../../stitches.config"

const flex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

export const Badge = styled("div", {
  padding: "$4 $8",
  width: "fit-content",
  borderRadius: "4px",
  backgroundColor: "$primary500",
  variants: {
    variant: {
      success: {
        backgroundColor: "$success200",
        color: "$success700"
      },
      info: {
        backgroundColor: "$info200",
        color: "$info700"
      },
      danger: {
        backgroundColor: "$danger200",
        color: "$danger700"
      },
      warning: {
        backgroundColor: "$warning200",
        color: "$warning700"
      }
    }
  },
  color: "white",
  gap: "$4",
  fontSize: "$14",
  ...flex
})

export const IconContainer = styled("div", {
  color: "white",
  ...flex
})

export const CloseIcon = styled(GrClose, {
  cursor: "pointer",
  position: "absolute",
  right: "$4",
  backgroundColor: "$primary300",
  height: "100%",
  "@media (min-width: 600px)": {
    display: "none",
    "&:hover": {
      display: "flex"
    }
  }
})

export const Tag = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 10px",
  gap: "$8",
  padding: "$4 $8",
  borderRadius: "4px",
  backgroundColor: "$primary300",
  color: "$text500",
  width: "fit-content",
  position: "relative",
  cursor: "default",
  "&:hover svg": {
    display: "flex"
  }
})

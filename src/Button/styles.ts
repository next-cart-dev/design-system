import { styled } from "../stitches.config"

export const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  fontSize: "$18",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "$semibold",
  letterSpacing: "$0.4",
  gap: "$md",
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        background: "$primary700",
        color: "$neutral100",
        "&:hover": {
          background: "$primary900"
        },
        "&:disabled": {
          color: "$neutral400",
          background: "$neutral200",
          "& svg path": {
            fill: "$neutral400"
          }
        }
      },
      secondary: {
        background: "$background100",
        color: "$secondary400",
        border: "1px solid $secondary400",
        "&:hover": {
          background: "$secondary100"
        },
        "&:disabled": {
          color: "$neutral400",
          background: "$neutral100",
          borderColor: "$neutral400",
          "& svg path": {
            fill: "$neutral400"
          }
        }
      }
    },
    size: {
      small: {
        padding: "6px $md"
      },
      normal: {
        padding: "11px 18px"
      },
      large: {
        padding: "18px $md"
      }
    }
  }
})
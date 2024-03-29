import { styled } from "../../stitches.config"

export const Table = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexFlow: "column",
  overflow: "auto"
})

export const TableHead = styled("div", {
  display: "grid",
  position: "sticky",
  top: "0"
})

export const TableBody = styled("div", {
  height: "100%"
})

export const TableRow = styled("div", {
  height: "50px",
  display: "flex",
  fontSize: "$16",
  color: "$text700",
  minWidth: "100%"
})

export const TableHeadCell = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 $8",
  height: "56px",
  backgroundColor: "$primary200",
  fontWeight: "700",
  color: "$primary500",
  textAlign: "left",
  letterSpacing: "1.25px"
})

export const TableBodyCell = styled("div", {
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 $8",
  fontSize: "$14",
  textAlign: "left",
  fontWeight: "$normal",
  color: "$primary500",
  letterSpacing: "1.05px",
  backgroundColor: "$neutral300",
  borderBottom: "1px solid $primary300"
})

export const PaginationButton = styled("button", {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$text200",
  fontSize: "$16",
  cursor: "pointer",
  height: "32px",
  width: "32px",
  marginLeft: "$4",
  marginRight: "$4",
  transition:
    "font-weight 0.3s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out",
  borderRadius: "100%",
  "@media (min-width: 768px)": {
    fontSize: "$16",
    marginLeft: "$8",
    marginRight: "$8"
  },
  variants: {
    variant: {
      active: {
        fontWeight: "$semibold"
      }
    }
  },
  "&:hover": {
    fontWeight: "$semibold",
    backgroundColor: "$text100",
    color: "$primary500"
  },
  "&:disabled": {
    opacity: "0.3"
  }
})

export const PaginationEllipsis = styled("button", {
  all: "unset",
  height: "32px",
  width: "32px",
  color: "$text200",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "$16",
  "@media (min-width: 768px)": {
    fontSize: "$16"
  }
})

export const Pagination = styled("div", {
  userSelect: "none",
  width: "100%",
  padding: "$16",
  backgroundColor: "$primary500",
  display: "flex",
  alignItems: "center",
  flexFlow: "column",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  "@media (min-width: 768px)": {
    flexFlow: "row",
    justifyContent: "space-between"
  }
})

export const CounterItems = styled("span", {
  letterSpacing: "1.25px",
  fontSize: "$16",
  fontWeight: "$semibold",
  color: "$neutral100"
})

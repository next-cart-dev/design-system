import React, { useState } from "react"

import { BsX } from "react-icons/bs"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"
import { Icon } from "../Icon"

export const Alert = ({
  id,
  message,
  title,
  icon,
  role = "alert",
  variant = "info",
  css
}: Props) => {
  const [open, setOpen] = useState<boolean>(true)

  const cssCloseButton = {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    cursor: "pointer"
  }

  const setIconColor = (alertVariant: typeof variant) => {
    const colors = {
      info: "$info700",
      warning: "$warning700",
      danger: "$danger700",
      success: "$success700"
    }

    return colors[alertVariant]
  }

  /*
   * Use the role "alert" when the component is used as a toast
   * to disable the onClick handler since the close functionality comes from "react-toastify"
   */
  const handleCloseButtonRendering = (role: React.AriaRole) => {
    if (role === "alert") {
      return (
        <Box css={cssCloseButton}>
          <Icon
            size="large"
            icon={<BsX />}
            css={{ color: setIconColor(variant) }}
          />
        </Box>
      )
    }

    if (role === "alertdialog") {
      return (
        <Box css={cssCloseButton} onClick={() => setOpen(false)}>
          <Icon
            size="large"
            icon={<BsX />}
            css={{ color: setIconColor(variant) }}
          />
        </Box>
      )
    }

    return null
  }

  return (
    <S.Alert
      id={id}
      variant={variant}
      css={{ ...css, display: open ? "flex" : "none", alignItems: "center" }}
    >
      {icon && (
        <Box
          css={{ display: "flex", alignItems: "center", marginRight: "$16" }}
        >
          {icon}
        </Box>
      )}
      <Box css={{ display: "flex", flexFlow: "column" }}>
        {title && (
          <Box css={{ marginBottom: "$4" }}>
            <S.AlertTitle>{title}</S.AlertTitle>
          </Box>
        )}
        {message && <S.AlertMessage>{message}</S.AlertMessage>}
      </Box>
      {handleCloseButtonRendering(role)}
    </S.Alert>
  )
}

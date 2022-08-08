import React from "react"

// TODO: Implementar size: fullWidth
export type Props = {
  /**
   * The button text content.
   */
  children: React.ReactNode
  /**
   * The button variant style.
   * @default 'primary'
   */
  variant?: "primary" | "secondary"
  /**
   * The button size.
   * @default 'small'
   */
  size?: "small" | "normal" | "large"
  /**
   * The button onClick handler.
   */
  onClick?: () => void
  /**
   * The button type. Use 'submit' if it's used inside forms.
   * @default 'button'
   */
  type?: "button" | "submit"
  /**
   * The button id.
   */
  id?: string
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * The element placed before the children. Don't use it now since we only have one icon.
   * @experimental
   */
  startIcon?: React.ReactNode
  /**
   * The element placed after the children. Don't use it now since we only have one icon.
   * @experimental
   */
  endIcon?: React.ReactNode
}

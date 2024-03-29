import React from "react"

import ptBR from "date-fns/locale/pt-BR"
import "react-day-picker/dist/style.css"
import { DayPickerSingleProps } from "react-day-picker"

import * as S from "../styles"
import { components, modifiers, modifiersClassNames } from "../utils"

export const SingleCalendar = ({
  selected,
  onSelect,
  ...props
}: Omit<DayPickerSingleProps, "mode">) => {
  return (
    <S.Calendar
      {...props}
      mode="single"
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      components={components}
      locale={ptBR}
      selected={selected}
      onSelect={onSelect}
    />
  )
}

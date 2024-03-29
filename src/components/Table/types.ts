import { Dispatch, SetStateAction } from "react"

import {
  OnChangeFn,
  PaginationState,
  SortingState
} from "@tanstack/react-table"

export type Props = {
  id: string
  data: any[]
  columns: any[]
  sorting: SortingState
  setSorting: Dispatch<SetStateAction<SortingState>>
  pagination: {
    /**
     * Total items by page
     */
    pageSize: number
    /**
     * The index of the page
     */
    pageIndex: number
    /**
     * Total pages of the table
     */
    pageCount: number
    /**
     * Total items of the table
     */
    itemCount: number
    setPagination: OnChangeFn<PaginationState>
  }
}

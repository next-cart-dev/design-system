import React, { useMemo } from "react"

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table"
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"

import { TablePagination } from "./Pagination"
import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"
import { Icon } from "../Icon"

export function Table({
  id,
  data,
  columns,
  pagination,
  sorting,
  setSorting
}: Props) {
  const internalPagination = useMemo(
    () => ({ pageIndex: pagination.pageIndex, pageSize: pagination.pageSize }),
    [pagination.pageIndex, pagination.pageSize]
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: sorting,
      pagination: internalPagination
    },
    pageCount: pagination.pageCount,
    onSortingChange: setSorting,
    onPaginationChange: pagination.setPagination,
    manualPagination: true,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <>
      <Box
        css={{
          height: "40vh",
          overflow: "auto",
          "@media (min-width: 768px)": { height: "50vh" }
        }}
      >
        <S.Table id={id}>
          <S.TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <S.TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <S.TableHeadCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    css={{
                      ...(header.index === 0 && { borderTopLeftRadius: "4px" }),
                      ...(header.index === headerGroup.headers.length - 1 && {
                        borderTopRightRadius: "4px"
                      }),
                      ...(header.column.getCanSort() && {
                        cursor: "pointer",
                        userSelect: "none"
                      }),
                      minWidth: header.getSize(),
                      maxWidth: "100%"
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: (
                            <Box
                              css={{
                                marginLeft: "$8",
                                display: "flex",
                                alignItems: "center"
                              }}
                            >
                              <Icon
                                icon={<BsCaretUpFill />}
                                size="medium"
                                css={{ color: "$secondary500" }}
                              />
                            </Box>
                          ),
                          desc: (
                            <Box
                              css={{
                                marginLeft: "$8",
                                display: "flex",
                                alignItems: "center"
                              }}
                            >
                              <Icon
                                icon={<BsCaretDownFill />}
                                size="medium"
                                css={{ color: "$secondary500" }}
                              />
                            </Box>
                          )
                        }[header.column.getIsSorted() as string] ?? null}
                      </>
                    )}
                  </S.TableHeadCell>
                ))}
              </S.TableRow>
            ))}
          </S.TableHead>
          <S.TableBody>
            {table.getRowModel().rows.map((row) => (
              <S.TableRow key={row.id} data-testid={`table-row-${row.id}`}>
                {row.getVisibleCells().map((cell) => (
                  <S.TableBodyCell
                    key={cell.id}
                    css={{
                      minWidth: cell.column.getSize(),
                      maxWidth: "100%"
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </S.TableBodyCell>
                ))}
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.Table>
      </Box>
      <TablePagination table={table} pagination={pagination} />
    </>
  )
}

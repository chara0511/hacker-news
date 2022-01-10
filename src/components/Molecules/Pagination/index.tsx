import * as React from 'react'

import { IconButton } from '../../Atoms'
import { Flex, List } from '..'
import type { Hit } from '../../../types'

interface PaginationProps {
  data: Hit[];
  RenderComponent: (data: Hit) => JSX.Element;
  pageLimit: number;
  dataLimit: number;
}

const Pagination = ({
  data,
  RenderComponent,
  pageLimit,
  dataLimit
}: PaginationProps) => {
  const [pages] = React.useState(Math.ceil(data.length / dataLimit))
  const [currentPage, setCurrentPage] = React.useState(1)

  const goToNextPage = React.useCallback(() => {
    setCurrentPage((page) => page + 1)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  const goToPreviousPage = React.useCallback(() => {
    setCurrentPage((page) => page - 1)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  const changePage = React.useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const { textContent } = e?.target as HTMLButtonElement
      const pageNumber = Number(textContent)
      setCurrentPage(pageNumber)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    []
  )

  const getPaginatedData = React.useCallback(() => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }, [currentPage, data, dataLimit])

  const getPaginationGroup = React.useCallback(() => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill(NaN).map((_, idx) => start + idx + 1)
  }, [currentPage, pageLimit])

  return (
    <>
      <List>{getPaginatedData().map(RenderComponent)}</List>
      <Flex justifyContent="center">
        <IconButton disabled={currentPage === 1} onClick={goToPreviousPage}>
          {'<'}
        </IconButton>

        {getPaginationGroup().map(
          (item, index) =>
            item <= pages && (
              <IconButton
                active={currentPage === item}
                key={index}
                onClick={changePage}
              >
                <span>{item}</span>
              </IconButton>
            )
        )}

        <IconButton disabled={currentPage === pages} onClick={goToNextPage}>
          {'>'}
        </IconButton>
      </Flex>
    </>
  )
}

export default React.memo(Pagination)

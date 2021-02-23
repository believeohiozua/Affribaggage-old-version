import React from 'react'
import {filtersSortingIcon} from 'assets'

import {
  FiltersSortingWrapper,
  FiltersWrapper,
  FiltersLabel,
  FiltersButton,
  Icon,
  SortingWrapper,
  SortingLabel,
  SortingButton
} from './style'

const FiltersSorting = () => {
  const filter = () => {
    console.log('filter')
  }

  const sort = () => {
    console.log('sort')
  }

  return (
    <FiltersSortingWrapper>
      <FiltersWrapper>
        <FiltersLabel>
          Filters
        </FiltersLabel>
        <FiltersButton onClick={filter}>
          <Icon src={filtersSortingIcon}/>
        </FiltersButton>
      </FiltersWrapper>
      <SortingWrapper>
        <SortingLabel>
          Sorting
        </SortingLabel>
        <SortingButton onClick={sort}>
          <Icon src={filtersSortingIcon}/>
        </SortingButton>
      </SortingWrapper>
    </FiltersSortingWrapper>
  )
}

export default FiltersSorting
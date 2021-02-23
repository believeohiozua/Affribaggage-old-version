import React, {useEffect, useRef, useState} from 'react'

import {TablesWrapper, InfoTableWrapper, InfoItemWrapper, Info} from './style'

const InfoTable = (props) => {
  const table = useRef(null)
  const tableContinue = useRef(null)
  const [tableWidth, setTableWidth] = useState(0)
  const [tableContinueWidth, setTableContinueWidth] = useState(0)
  const [overflowedItems, setOverflowedItems] = useState([])
  const overflowedItemsArr = []

  useEffect(() => {
    async function getTablesWidth() {
      if (table.current) {
        let tableWidth = 28
        let tableContinueWidth = 28

        table.current.childNodes.forEach(item => {
          const childRect = item.getBoundingClientRect()
          const itemWidth = childRect.right - childRect.left
          tableWidth = tableWidth + itemWidth

          setTableWidth(tableWidth)
        })

        table.current.childNodes.forEach(item => {
          const parentRect = table.current.getBoundingClientRect()
          const childRect = item.getBoundingClientRect()

          const isChildOverflowed = parentRect.right - 14 <= childRect.right
          if (isChildOverflowed) {
            overflowedItemsArr.push(item)
          }
        })

        await setOverflowedItems(overflowedItemsArr)

        if (overflowedItemsArr.length < 5) {
          for (let i = 0; i < overflowedItemsArr.length; i++) {
            table.current.lastChild.remove()
          }
        }

        if (tableContinue.current) {
          tableContinue.current.childNodes.forEach(item => {
            const childRect = item.getBoundingClientRect()
            const itemWidth = childRect.right - childRect.left
            tableContinueWidth = tableContinueWidth + itemWidth
            tableWidth = tableWidth - itemWidth

            setTableContinueWidth(tableContinueWidth)
          })

          setTableWidth(tableWidth)
        }
      }
    }

    getTablesWidth()
  }, [table.current])

  return (
    <TablesWrapper>
        <InfoTableWrapper
          ref={table}
          children={props.children}
          style={{width: tableWidth}}>
        {props.children}
        </InfoTableWrapper>
      {overflowedItemsArr.length < 5 ? (
        <InfoTableWrapper ref={tableContinue} style={{width: tableContinueWidth}}>
          {overflowedItems.map((item, index) => (
            <InfoItemWrapper key={index}>
              <Info>{item.childNodes[0].textContent}</Info>
              <Info>{item.childNodes[1].textContent}</Info>
            </InfoItemWrapper>
          ))}
        </InfoTableWrapper>
      ) : null}
    </TablesWrapper>
  )
}

export default InfoTable
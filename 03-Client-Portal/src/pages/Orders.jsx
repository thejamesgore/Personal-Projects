import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Fitler, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy'
import {Header} from '../components'


const Orders = () => {
  return (
    <div>
      <Header title="Orders" category="Page" />
    </div>
  )
}

export default Orders
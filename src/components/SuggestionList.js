import React from 'react'
import { Card } from 'antd'
import 'scss/SuggestionList.scss'
import Suggestion from './Suggestion'

const SuggestionList = ({ style }) => {
  return (
    <div style={style}>
      <Card title='Suggestion for you' size='small'>
        <Suggestion />
        <Suggestion />
      </Card>
    </div>
  )
}

export default SuggestionList

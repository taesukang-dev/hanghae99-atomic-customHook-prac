import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Circle from '../components/Circle.js'

import '../styles/detail.scss'

const Detail = () => {
  let navigate = useNavigate()
  let [colorIndex, setColorIndex] = useState(0)
  let { id } = useParams()
  return (
    <div className="detail--wrapper">
      <h3 className="detail--title">
        <span className="title--hl">{id}요일</span> 평점 남기기
      </h3>
      <div className="circle--wrapper">
        {[0, 1, 2, 3, 4].map((el, i) => {
          return (
            <Circle
              key={i}
              color={colorIndex > i ? '#ffeb3b' : '#ddd'}
              onClick={() => setColorIndex(i + 1)}
            />
          )
        })}
      </div>
      <button className="detail--button" onClick={() => navigate('/')}>
        평점 남기기
      </button>
    </div>
  )
}

export default Detail

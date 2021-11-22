import { useParams } from 'react-router'
import Circle from '../components/Circle.js'

import '../styles/detail.scss'

const Detail = ({ colorIndex, setColorIndex, navigate }) => {
  let { id } = useParams()
  return (
    <div className="detail--wrapper">
      <h3 className="detail--title">
        <span className="title--hl">{colorIndex[id].date}요일</span> 평점 남기기
      </h3>
      <div className="circle--wrapper">
        {[0, 1, 2, 3, 4].map((el, i) => {
          return (
            <Circle
              key={i}
              color={colorIndex[id].num > i ? '#ffeb3b' : '#ddd'}
              onClick={() =>
                setColorIndex((prev) => {
                  let temp = prev.map((el) => {
                    return el.id === colorIndex[id].id
                      ? { ...el, num: i + 1 }
                      : el
                  })
                  return temp
                })
              }
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

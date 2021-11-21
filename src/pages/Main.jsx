import { useNavigate } from 'react-router'
import Circle from '../components/Circle.js'

import '../styles/main.scss'

const Main = () => {
  let navigate = useNavigate()
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const randomArr = [
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
  ]
  const day = new Date().getDay()
  let temp = []
  temp.push(...week.slice(day, week.length))
  temp.push(...week.slice(0, day))
  return (
    <div className="main--wrapper">
      <h3 className="main--title">내 일주일은?</h3>
      {temp.map((el, index) => {
        return (
          <div className="main--rate" key={index}>
            <p className="rate--date">{el}</p>
            {[0, 1, 2, 3, 4].map((e, i) => {
              return (
                <Circle
                  key={i}
                  color={randomArr[index] < i + 1 ? '#ddd' : '#ffeb3b'}
                />
              )
            })}
            <div
              className="rate--arrow"
              onClick={() => navigate(`/detail/${el}`)}
            ></div>
          </div>
        )
      })}
    </div>
  )
}

Circle.defaultProps = {
  color: '#ddd',
}

export default Main

import { useState } from 'react'

const useColor = () => {
  let [colorIndex, setColorIndex] = useState([
    { id: 0, date: '일', num: 0 },
    { id: 1, date: '월', num: 0 },
    { id: 2, date: '화', num: 0 },
    { id: 3, date: '수', num: 0 },
    { id: 4, date: '목', num: 0 },
    { id: 5, date: '금', num: 0 },
    { id: 6, date: '토', num: 0 },
  ])
  const day = new Date().getDay()

  // useColor가 불러질 때 매번 재구성하여 좋지 않은 방법이지만 과제 제출용!
  // 미들웨어에서 처리하면 좋으려나...?
  let filteredColor = []
  filteredColor.push(...colorIndex.slice(day, colorIndex.length))
  filteredColor.push(...colorIndex.slice(0, day))

  return [filteredColor, setColorIndex]
}

export default useColor

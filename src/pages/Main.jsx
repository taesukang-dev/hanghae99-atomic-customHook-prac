import Circle from '../components/Circle.js'

import '../styles/main.scss'

const Main = ({ colorIndex, navigate }) => {
  return (
    <div className="main--wrapper">
      <h3 className="main--title">내 일주일은?</h3>
      {colorIndex.map((el, index) => {
        return (
          <div className="main--rate" key={index}>
            <p className="rate--date">{el.date}</p>
            {[0, 1, 2, 3, 4].map((e, i) => {
              return (
                <Circle key={i} color={el.num < i + 1 ? '#ddd' : '#ffeb3b'} />
              )
            })}
            <div
              className="rate--arrow"
              onClick={() => navigate(`/detail/${index}`)}
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

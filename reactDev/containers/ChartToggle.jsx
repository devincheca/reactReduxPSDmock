import { connect } from 'react-redux'
import Chart from '../components/Chart.jsx'

const mapStateToProps = (state) => {
  function randomInteger()
  {
    return Math.floor((Math.random() * 1000000) + 1)
  }
  function retrieveData()
  {
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple']
    return {
      labels: colors,
      datasets:[{
        label: 'Colors',
        responsive: true,
        data:[
          randomInteger(),
          randomInteger(),
          randomInteger(),
          randomInteger(),
          randomInteger(),
          randomInteger()
        ],
        backgroundColor: colors,
        scaleFontColor: 'beige'
      }]
    };
  }
  return {
    source: 
    {
      data: retrieveData(),
      location: 'images/' + state.visibilityFilter + '.jpg',
    },
  }
}

const ChartToggle = connect(
  mapStateToProps
)(Chart)

export default ChartToggle
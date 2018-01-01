import { connect } from 'react-redux'
import Chart from '../components/Chart.jsx'

const mapStateToProps = (state) => {
  return {
    source: 
    {
      location: 'images/' + state.visibilityFilter + '.jpg',
    },
  }
}

const ChartToggle = connect(
  mapStateToProps
)(Chart)

export default ChartToggle
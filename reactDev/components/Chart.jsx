import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'



const Chart = ({ source }) => 
{
  return (
    <div className="animated slideInDown" style={styles.orchid.orchidBorder} src={source.location}>
      
    </div>
  )
  /*return (
    <img className="img-fluid animated slideInDown" style={styles.orchid.orchidBorder} src={source.location} />
  )*/
}

Chart.propTypes = 
{
  source: PropTypes.object.isRequired,
}

export default Chart
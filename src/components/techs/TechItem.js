import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({ techs: { firstName, lastName } }) => {
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  techs: PropTypes.object.isRequired,
}
export default TechItem

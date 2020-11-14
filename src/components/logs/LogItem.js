import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const LogItem = ({ log: { id, message, attention, tech, date } }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span>
          &nbsp; last updated by &nbsp;{' '}
          <span className="black-text">{tech}</span>
          &nbsp;on &nbsp;
          <Moment format="MMMM Do YYYY, h:mm:ss a" parse="YYYY-MM-DD HH:mm">
            {date}
          </Moment>
        </span>
        <a href="!#" className="secondary-content">
          <i className="material-icons grey-text">delete</i>{' '}
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
}
export default LogItem

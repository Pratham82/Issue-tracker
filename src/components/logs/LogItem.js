import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({
  //log: { id, message, attention, tech, date },
  deleteLog,
  setCurrent,
  log,
}) => {
  const onDelete = () => {
    deleteLog(log.id)
    M.toast({ html: 'Log deleted' })
  }
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span>
          &nbsp; last updated by &nbsp;{' '}
          <span className="black-text">{log.tech}</span>
          &nbsp;on &nbsp;
          <Moment format="MMMM Do YYYY, h:mm:ss a" parse="YYYY-MM-DD HH:mm">
            {log.date}
          </Moment>
        </span>
        <a href="!#" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>{' '}
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}
export default connect(null, { deleteLog, setCurrent })(LogItem)

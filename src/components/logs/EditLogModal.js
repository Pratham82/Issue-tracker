import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLog } from '../../actions/logActions'

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    if (current) {
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
  }, [current])

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message' })
    } else {
      console.log(message, tech, attention)

      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      }

      updateLog(updLog)
      M.toast({ html: `Log updated by ${tech}` })

      setMessage('')
      setAttention(false)
      setTech('')
    }
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technicican
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Lex Luthor">Lex Luthor</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span> Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          {' '}
          Enter
        </a>
      </div>
    </div>
  )
}

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
}

const modalStyle = {
  width: '75%',
  height: '75%',
}

const mapStateToProps = state => ({
  current: state.log.current,
})

export default connect(mapStateToProps, { updateLog })(EditLogModal)

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ techs: { firstName, lastName, id }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id)
    M.toast({ html: `${firstName} ${lastName} deleted!!` })
  }
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  techs: PropTypes.object.isRequired,
}

export default connect(null, { deleteTech })(TechItem)

import React, { useEffect, useState } from 'react'
import TechItem from './TechItem'

const TechListModal = () => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  }, [])

  const getTechs = async () => {
    setLoading(true)
    const res = await fetch('/techs')
    const data = await res.json()
    setTechs(data)
    setLoading(false)
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicican List</h4>
        <ul className="collection">
          {!loading && techs.length !== 0 ? (
            techs.map(tech => <TechItem key={tech.id} techs={tech} />)
          ) : (
            <p className="center">No logs available</p>
          )}
        </ul>
      </div>
    </div>
  )
}
export default TechListModal

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { UPDATE_USER } from '../redux Toolkit/UserSlice'
import Swal from 'sweetalert2';

function ModifierUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const fillieres = useSelector((state) => state.filliere)
    const userData = useSelector((state) => state.users.users.find(u => u.id === parseInt(id)))

    const [nom, setNom] = useState(userData.nom)
    const [prenom, setPrenom] = useState(userData.prenom)
    const [filliere, setFilliere] = useState(userData.filliere)

    const HandeleUpdate = (event) => {
        event.preventDefault()
        dispatch(UPDATE_USER({
            id: id,
            nom: nom,
            prenom: prenom,
            filliere: filliere
        }))
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${nom} ${prenom} data has been updated.`,
            showConfirmButton: false,
            timer: 1500,
          });
        navigate("/")
    }
    return (
        <div>
            <div className='container '>
                <form className='card p-5 ' onSubmit={HandeleUpdate}>
                    <div className="mb-3">
                        <label>Nom :</label>
                        <input type="text" className="form-control" onChange={(e) => setNom(e.target.value)} value={nom} />
                    </div>

                    <div className="mb-3">
                        <label>Prénom :</label>
                        <input type="text" className="form-control" onChange={(e) => setPrenom(e.target.value)} value={prenom} />
                    </div>

                    <div className="mb-3">
                        <label>Filliere :</label>
                        <select className="form-control" onChange={(e) => setFilliere(e.target.value)} value={filliere}>
                            {
                                fillieres.map((opt, index) =>
                                    <option key={index} value={opt.nomFilliere}>{opt.nomFilliere}</option>
                                )
                            }
                        </select>
                    </div>

                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    )
}
export default ModifierUser
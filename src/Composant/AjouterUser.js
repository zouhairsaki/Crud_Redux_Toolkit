import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { ADD_USER } from '../redux Toolkit/UserSlice'
import Swal  from 'sweetalert2'
function AjouterUser() {
    const fillieres = useSelector((state) => state.filliere)
    // const count = useSelector((state) => state.users.length)
    const count = useSelector((state) => state.users.users.length)
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [filliere, setFilliere] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const HandelSubmit = (event) => {
        event.preventDefault()
        dispatch(ADD_USER({
            id :count +1 ,
            nom:nom,
            prenom :prenom,
            filliere :filliere
        }))
        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${nom} ${prenom} data has been Added.`,
            showConfirmButton: false,
            timer: 1500,
          });
        navigate("/")
    }
    return (
        <div>
            <div className='container '>
                <form className='card p-5 ' onSubmit={HandelSubmit}>
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

                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AjouterUser
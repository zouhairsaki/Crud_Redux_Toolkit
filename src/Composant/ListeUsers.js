import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { DELETE_USER } from '../redux Toolkit/UserSlice';
import Swal from 'sweetalert2';
function ListeUsers() {
    // const ListUsers = useSelector((state) => state.users) 
    const ListUsers = useSelector((state) => state.users.users) 

    const dispatch = useDispatch()
    const HandelDelete = (id) => {
        console.log(id)
        dispatch(DELETE_USER(id))
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <div className='m-4'>
            <div className='container'>
                <Link to="/add_user"><button className='btn btn-success'> Add user</button></Link>
                <hr />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Filliere</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ListUsers.map((item) =>
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.nom}</td>
                                    <td>{item.prenom}</td>
                                    <td>{item.filliere}</td>
                                    <td>
                                        <Link to={`/update_user/${item.id}`}><button className='btn btn-info m-1'>Edit</button></Link>
                                        <button className='btn btn-danger' onClick={()=>HandelDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListeUsers;
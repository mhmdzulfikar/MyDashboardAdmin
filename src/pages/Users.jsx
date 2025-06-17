import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editStatus, setEditStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users'); // sesuaikan endpoint
        setUsers(res.data);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Gagal memuat data user');
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setErrorMsg('Gagal menghapus user');
      console.error(error);
    }
  };

  const startEdit = (id, currentStatus) => {
    setEditUserId(id);
    setEditStatus(currentStatus);
  };

  const saveStatus = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, { status: editStatus });
      setUsers(users.map(user =>
        user.id === id ? { ...user, status: editStatus } : user
      ));
      setEditUserId(null);
      setEditStatus('');
      setErrorMsg('');
    } catch (error) {
      setErrorMsg('Gagal menyimpan status user');
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">User List</h2>
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">Tidak ada data user</td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {editUserId === user.id ? (
                    <select
                      className="form-select"
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                    >
                      <option value="Penjual">Penjual</option>
                      <option value="Pembeli">Pembeli</option>
                    </select>
                  ) : (
                    user.status
                  )}
                </td>
                <td>
                  {editUserId === user.id ? (
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => saveStatus(user.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => startEdit(user.id, user.status)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

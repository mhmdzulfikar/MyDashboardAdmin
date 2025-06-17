import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Warung() {
  const [daftarWarung, setDaftarWarung] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchWarung = async () => {
      try {
        const res = await axios.get('http://localhost:300-/auth/warung');
        setDaftarWarung(res.data);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Gagal memuat data warung');
        console.error(error);
      }
    };

    fetchWarung();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Warung</h2>
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Nama Warung</th>
            <th>Nama Pemilik</th>
            <th>Tanggal Daftar</th>
          </tr>
        </thead>
        <tbody>
          {daftarWarung.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                Tidak ada data warung
              </td>
            </tr>
          ) : (
            daftarWarung.map((warung, index) => (
              <tr key={warung.id_warung}>
                <td>{index + 1}</td>
                <td>{warung.nama_warung}</td>
                <td>{warung.nama_pemilik || '-'}</td>
                <td>{new Date(warung.tanggal_daftar).toLocaleDateString('id-ID')}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Warung;

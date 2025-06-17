import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/penjualan'); // sesuaikan URL API-mu
        setTransactions(res.data); // anggap res.data adalah array transaksi
      } catch (error) {
        setErrorMsg('Gagal memuat data transaksi');
        console.error(error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Transaksi</h2>
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Penjual</th>
            <th>Pembeli</th>
            <th>Produk</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">Tidak ada data transaksi</td>
            </tr>
          ) : (
            transactions.map((tx, index) => (
              <tr key={tx.id}>
                <td>{index + 1}</td>
                <td>{tx.seller}</td>
                <td>{tx.buyer}</td>
                <td>{tx.product}</td>
                <td>{new Date(tx.date).toLocaleDateString('id-ID')}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;

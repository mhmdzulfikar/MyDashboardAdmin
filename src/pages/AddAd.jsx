import React, { useState } from 'react';

const AddAd = () => {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ judul, deskripsi });
    alert('Iklan berhasil ditambahkan!');
  };

  return (
    <div>
      <h2>Tambah Iklan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Judul Iklan</label>
          <input
            type="text"
            className="form-control"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deskripsi</label>
          <textarea
            className="form-control"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default AddAd;

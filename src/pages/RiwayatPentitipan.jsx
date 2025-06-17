import React, { useEffect, useState } from 'react';

const RiwayatPenitipan = ({ idPermintaan }) => {
  const [riwayatList, setRiwayatList] = useState([]);

  useEffect(() => {
    const fetchRiwayat = async () => {
      try {
        const res = await fetch(`/api/riwayat/${idPermintaan}`);
        const data = await res.json();
        setRiwayatList(data);
      } catch (err) {
        console.error('Gagal memuat data riwayat:', err);
      }
    };

    if (idPermintaan) {
      fetchRiwayat();
    }
  }, [idPermintaan]);

  return (
    <div>
      <h2>Riwayat Penitipan</h2>

      {riwayatList.length === 0 ? (
        <p>Belum ada data riwayat.</p>
      ) : (
        <ul>
          {riwayatList.map((item) => (
            <li key={item.id_riwayat}>
              Produk ID: {item.id_produk} | Masuk: {item.tanggal_masuk?.slice(0, 10)} | Keluar: {item.tanggal_keluar?.slice(0, 10)} | Jumlah: {item.jumlah} | Terjual: {item.jumlah_terjual} | Bagi Hasil: {item.bagi_hasil_persen}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RiwayatPenitipan;

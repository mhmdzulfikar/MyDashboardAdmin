import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Chat() {
  const [pesan, setPesan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id1 = 1; // ID pengguna A (misalnya Zulfikar)
  const id2 = 2; // ID pengguna B (misalnya Dian)

  useEffect(() => {
    const ambilChat = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/chat/${id1}/${id2}`);
        setPesan(response.data);
      } catch (err) {
        setError('Gagal mengambil chat');
        console.error('Gagal mengambil chat:', err);
      } finally {
        setLoading(false);
      }
    };

    ambilChat();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Chat Viewer</h2>
      <div className="border p-3 bg-light" style={{ minHeight: '150px' }}>
        {loading ? (
          <p>Memuat pesan...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : pesan.length === 0 ? (
          <p>Belum ada pesan</p>
        ) : (
          pesan.map((p, index) => (
            <p key={index}>
              <strong>{p.id_pengirim === id1 ? 'Zulfikar' : 'Dian'}:</strong> {p.isi_pesan}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default Chat;

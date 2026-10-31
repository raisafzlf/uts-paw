import { Link, useNavigate, useParams } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";

export default function Detail (){
    const {id} = useParams()
    const navigate = useNavigate()
    const {items, loading, hapus} = useKoleksi()
    const item = items.find((i) => String (i.id) === id)

    if (loading) return <p>Memuat data...</p>
    if (!item){
        return (
            <div>
            <h1>Item tidak ditemukan</h1>
            <Link to="/koleksi">Kembali ke koleksi</Link>
            </div>
        )
    }
    const konfirmasiHapus =() => {
        if (window.confirm('Hapus "${item.judul}"?')) {
         hapus (item.id)
         navigate('/koleksi')
        }
    }

    return (
        <section>
            <h1>{item.judul}</h1>
            <dl>
                <dt>Kategori</dt>
                <dd>{item.kategori}</dd>
                <dt>Tanggal Latihan</dt>
                <dd>{item.tanggal}</dd>
                <dt>Durasi Latihan</dt>
                <dd>{item.durasi}</dd>
                <dt>Kalori Terbakar</dt>
                <dd>{item.kalori}</dd>
            </dl>
            <div className="aksi">
                <button className="tombol-hapus" onClick={hapus}>Hapus</button>
                <Link className="tombol-kembali" to="/koleksi">Kembali</Link>
            </div>
        </section>
    )
}
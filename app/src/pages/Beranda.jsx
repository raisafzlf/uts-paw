import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda(){
    const { items, loading } = useKoleksi()

    const jumlahKategori = new Set( items.map((item) => item.kategori)).size
    return(
        <section>
            <h1>Sehat Bersama Aktivitas Olahraga</h1>
            <p>Tema: {mahasiswa.tema}</p>
            {loading? (
                <p>Memuat ringkasan...</p>
            ) : (
                <p>
                    Ada {items.length} aktivitas olahraga dalam {jumlahKategori} kategori.
                </p>
            )}
            <Link to= "/koleksi">Lihat semua aktivitas</Link>
        </section>
    )
}
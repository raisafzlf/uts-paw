import {Link} from 'react-router-dom'

export default function TidakDitemukan(){
    return(
        <ssection>
            <h1>404</h1>
            <p>Halaman Tidak ditemukan</p>
            <Link to="/">Kembali ke beranda</Link>
        </ssection>
    )
}
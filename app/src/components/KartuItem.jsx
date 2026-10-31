import {Link} from 'react-router-dom'

export default function KartuItem({item}){
    return (
        <article>
            <h2>{item.judul}</h2>
            <p>Kategori: {item.kategori}</p>
            <Link to={`/koleksi/${item.id}`}>Lihat Detail</Link>
        </article>
    )
}

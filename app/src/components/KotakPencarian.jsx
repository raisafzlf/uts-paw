export default function KotakPencarian ({nilai, onUbah}){
    return (
        <input
        type="search"
        role="searchbox"
        placeholder="Cari aktivitas olahraga..."
        value={nilai}
        onChange={(e) => onUbah(e.target.value)}
        />
    )
}
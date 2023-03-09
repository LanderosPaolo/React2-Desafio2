import '../assets/css/deleted.css'

export default function Deleted({ filled, onClick }) {
    return (
        <>
            <div fill={filled} onClick={onClick} className='deleted'>
                ❌
            </div>
        </>
    );
}
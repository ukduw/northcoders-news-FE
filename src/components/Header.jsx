import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()

    function handleHomeClick() {
        navigate('/')
    }

    return (
        <section>
            <h1>HEADER TEST</h1>
            <img src="https://png.pngtree.com/element_our/sm/20180516/sm_5afc76eed0142.jpg" alt="home button" onClick={handleHomeClick} className="home-button"/>
        </section>
    )
}

export default Header
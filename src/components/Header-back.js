import '../pages/contact/contact.css'

const Header = ({image, title, text }) => {
  return (
    <header>
    <div className="header__main-container">
      <div className="header-container">
        <div className="background-img">
          <img src={image} alt="" />
        </div>
        <div className="conntent-img">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
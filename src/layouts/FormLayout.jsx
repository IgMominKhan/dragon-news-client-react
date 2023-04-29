import { Outlet } from "react-router-dom"
import HeaderNav from "../shared/navbar/Navbar"

const FormLayout = () => {
  return (
    <div>
      <HeaderNav/>
      <Outlet/>
    </div>
  )
}

export default FormLayout

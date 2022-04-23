import { useEffect } from 'react';
import Button from '@mui/material/Button';
import './navArrows.scss'
import { Link } from 'react-router-dom'

const NavArrows = ({ navBack, navForward }) => {
  let navBackID
  let navForwardID
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  switch (navBack) {
    case "academics":
      navBackID = "Academics"
      break
    case "coop":
      navBackID = "Co-op"
      break
    case "lifestyles":
      navBackID = "Lifestyle"
      break
    case "demographics":
      navBackID = "Demographics"
      break
    case "highschool":
      navBackID = "High School"
      break
    default:
      navBackID = navBack
  }
  switch (navForward) {
    case "academics":
      navForwardID = "Academics"
      break
    case "coop":
      navForwardID = "Co-op"
      break
    case "lifestyles":
      navForwardID = "Lifestyle"
      break
    case "demographics":
      navForwardID = "Demographics"
      break
    case "highschool":
      navForwardID = "High School"
      break
    default:
      navForwardID = navForward
  }
  return (
    <div className="NavigationalButtons">
      <div className="ButtonWrapper" id={navBack}>
        <Link to={`/${navBack}`}>
          <Button sx={{
            backgroundColor: "#27313B",
            color: "white",
            padding: "1rem",
            borderRadius: "18px",
            textTransform: "none",
            fontSize: "1rem",
            fontFamily: 'Nunito Sans'
          }} variant="outline">&larr; {navBackID}</Button>
        </Link>
      </div>
      <div className="ButtonWrapper" id={navForward}>
        <Link to={`/${navForward}`}>
          <Button sx={{
            backgroundColor: "#27313B",
            color: "white",
            padding: "1rem",
            borderRadius: "18px",
            textTransform: "none",
            fontSize: "1rem",
            fontFamily: 'Nunito Sans'
          }} variant="outline">{navForwardID} &rarr;</Button>
        </Link>
      </div>
    </div>
  );
}

export default NavArrows;
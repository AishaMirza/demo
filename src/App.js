
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import LandSlider from './component/slider';
import Second1 from './component/secondSection';
   
const muser={
  pic:'https://media.sproutsocial.com/uploads/2022/03/Instagram-Carousels.svg'
}

function App() {
  return (
  <>
   <Header title="My First Prop"/>
   <LandSlider firstpic={muser.pic}/>
   <Second1/>
   <Footer/>
   
  </>
  );
}

export default App;

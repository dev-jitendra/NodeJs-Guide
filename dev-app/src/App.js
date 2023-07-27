import './App.css';
import PropTypes from "prop-types";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
function App() {
  return (
    <>
      <Navbar title="TextUtil" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}
Navbar.PropTypes={
  title: PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:'Set title here'
}
export default App;

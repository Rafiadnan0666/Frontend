import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
      return (
        <footer className="footer">
          <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
          <span>Make with &#10084;</span>
        </footer>
      );
    }
  }

  export default Footer;
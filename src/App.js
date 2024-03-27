import { Component } from "react";
import CryptoCard from "./components/Crypto";
import "./App.css";

class App extends Component {
  state = { name: "", desc: "", bitData: [], apiStatus: false };
  componentDidMount() {
    this.getCurrencyData();
  }

  getCurrencyData = async () => {
    const opt = {
      method: "GET",
    };
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json",
      opt
    );
    const data = await response.json();
    const { EUR, GBP, USD } = data.bpi;
    this.setState({
      bitData: [EUR, GBP, USD],
      name: data.chartName,
      desc: data.disclaimer,
      apiStatus: true,
    });
  };

  getLoader = () => (
    <div className="loader">
      <img
        src="https://pbs.twimg.com/profile_images/1725123324215218176/DBKz_Kuu_400x400.jpg"
        alt="loader"
        className="img"
      />
    </div>
  );

  getCurrencyDetailsData = () => {
    const { bitData, name, desc } = this.state;
    console.log(bitData);
    return (
      <div className="bit-coin-content">
        <h1 className="crypto">{name}</h1>
        <p className="description">{desc}</p>
        <ul className="crypto-details">
          {bitData.map((each) => (
            <CryptoCard key={each.code} each={each} />
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { apiStatus } = this.state;
    return (
      <div className="bit-coin-container">
        {apiStatus === false ? this.getLoader() : this.getCurrencyDetailsData()}
      </div>
    );
  }
}

export default App;

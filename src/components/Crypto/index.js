import "./index.css";

const CryptoCard = (props) => {
  const { each } = props;
  const { code, description, rate, symbol } = each;

  return (
    <li className="crypto-card">
      <div className="crypto-content">
        <div className="crypto-symbol">
          <span dangerouslySetInnerHTML={{ __html: symbol }}></span>
        </div>
        <h1 className="crypto-code">{code}</h1>
      </div>
      <p className="desc-name">{description}</p>
      <p className="rate">{rate} /-</p>
    </li>
  );
};
export default CryptoCard;

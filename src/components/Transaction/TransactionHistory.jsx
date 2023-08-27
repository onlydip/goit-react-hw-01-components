import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


export const TransactionHistory = ({items}) => {
    return (
<table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.headerCell}>Type</th>
          <th className={style.headerCell}>Amount</th>
          <th className={style.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={style.row}>
            <td className={style.cell}>{type}</td>
            <td className={style.cell}>{parseFloat(amount).toFixed(2)}</td>
            <td className={style.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

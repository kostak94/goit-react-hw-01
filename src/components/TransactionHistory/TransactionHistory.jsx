import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.th_td}>Type</th>
          <th className={s.th_td}>Amount</th>
          <th className={s.th_td}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={s.th_td}>{item.type}</td>
              <td className={s.th_td}>{item.amount}</td>
              <td className={s.th_td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

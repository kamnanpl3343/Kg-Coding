import styles from "./Items.module.css";
function Items({ itemName, onButtonClick }) {


  return (
    <>
      <div className={styles.innerBottom}>
        {itemName.map((itm) => {
          return (
            <button
              key={itm}
              type="button"
              className={styles.btns}
              onClick={()=> onButtonClick(itm)}
            >
              {itm}
            </button>
          );
        })}
        ;
      </div>
    </>
  );
}
export default Items;

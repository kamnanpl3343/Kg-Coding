//1) if else 2) terniary operator 3)Logical operator

//method 1 (if/else)
/*function ConditionalRendering() {
  let foodItems = [];
  //let foodItems = ["dal", "bhat", "tarkari"];
 

  if (foodItems.length == 0) {
    return <h3>No food item in the menu</h3>;
  }
  return (
    <>
      <h1>Healthy Food</h1>
      
        <ul className="list-group">
          {foodItems.map((item) => (
            <li className="list-group-item">{item}</li>
          ))}
        </ul>
         
    </>
  );
}*/

//method 2 (tertiary1)
/*function ConditionalRendering() {
  let foodItems = [];
  //let foodItems = ["dal", "bhat", "tarkari"];

  return (
    <>
      <h1>Healthy Food</h1>
      {
         foodItems.length == 0 ? (
        <h3>No food item in the menu</h3>
      ) : (
        <ul className="list-group">
          {foodItems.map((item) => (
            <li className="list-group-item">{item}</li>
          ))}
        </ul>
          )
      }
    </>
  );
}*/

//method 3(tertiary 2)

/*function ConditionalRendering() {
  let foodItems = [];
  //let foodItems = ["dal", "bhat", "tarkari"];
  let message =
    foodItems.length == 0 ? <h3>No food item in the menu</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {message}

      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}*/

//method 4(Logical Operator)
function ConditionalRendering() {
  // let foodItems = [];
  let foodItems = ["dal", "bhat", "tarkari"];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length == 0 && <h3>i am hungry</h3>}

      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ConditionalRendering;

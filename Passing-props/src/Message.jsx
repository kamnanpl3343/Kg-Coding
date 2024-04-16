function Message(Props) {
  let message = "No items in the list";
  let { itemName } = Props;
  return <>{itemName.length == 0 ? message : null}</>;
}
export default Message;

import Button from "./Button.js";
import "../styles/splittingform.css";
import { useState } from "react";
function SplittingForm({
  selectedFriend,
  friendsList,
  setSelectedFriend,
  setFriendsList,
}) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoPaid, setWhoPaid] = useState("You");
  const friendExpense = bill - myExpense;
  function onSplit(value) {
    console.log("selected friend", selectedFriend);
    setFriendsList((friendsList) =>
      friendsList.map((friend) => {
        if (friend.id === selectedFriend.id) {
          return { ...friend, balance: friend.balance + value };
        } else {
          return friend;
        }
      })
    );
  }
  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill || !myExpense) return;
    console.log(whoPaid);
    onSplit(whoPaid === "You" ? friendExpense : -myExpense);
    setSelectedFriend(null);
  }

  return (
    <form onSubmit={handleSplitBill}>
      <h2>Split the bill with {selectedFriend.name}</h2>
      <span>
        <label for="bill">Bill: </label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        ></input>
      </span>
      <span>
        <label for="your-expense">Your expense: </label>
        <input
          type="number"
          value={myExpense}
          onChange={(e) =>
            setMyExpense(
              Number(e.target.value) > bill ? myExpense : Number(e.target.value)
            )
          }
        ></input>
      </span>
      <span>
        <label for="friend-expense">Friend's expense: </label>
        <input type="number" value={friendExpense} readOnly></input>
      </span>
      <span>
        <label for="Payer">Who is paying: </label>
        <select onChange={(e) => setWhoPaid(e.target.value)}>
          <option value="You">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
      </span>
      <Button type="submit" className="button split-bill">
        Split Bill
      </Button>
    </form>
  );
}

export default SplittingForm;

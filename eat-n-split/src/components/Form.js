import Button from "./Button.js";
import "../styles/form.css";
import { useState } from "react";
function Form({ friendsList, setFriendsList }) {
  console.log("I came to form");
  const [friendName, setFriendName] = useState("");
  const [dp, setDP] = useState("");
  function handleAddFriend(e) {
    /*e.preventDefault(); prevents the default behviour of form to reload the page which resets all react components
    to initial state*/
    e.preventDefault();

    //To prevent the submission a field is not entered
    if (!friendName && !dp) return;
    setFriendsList((friendsList) => [
      ...friendsList,
      {
        id: friendsList.length,
        name: friendName,
        image: dp,
        balance: 0,
      },
    ]);
  }
  return (
    <>
      <form onSubmit={handleAddFriend}>
        <span>
          <label for="friend-name">Friend's name: </label>
          <input
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            type="text"
            id="friend-name"
          ></input>
        </span>

        <br></br>
        <span>
          <label for="image-URL">Image URL: </label>
          <input
            value={dp}
            onChange={(e) => setDP(e.target.value)}
            type="url"
          ></input>
        </span>

        <Button type="submit" className=" button formBtn">
          Add
        </Button>
      </form>
    </>
  );
}

export default Form;

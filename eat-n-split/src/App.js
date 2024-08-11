import FriendList from "./components/FriendList.js";
import Form from "./components/Form.js";
import Button from "./components/Button.js";
import SplittingForm from "./components/SplittingForm.js";
import { useState } from "react";

let friendsData = [
  {
    id: 0,
    friendname: "Bill Gates",
    image:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    balance: 0,
  },
];

function App() {
  console.log("I came to App");
  const [isAddFriendClicked, setIsAddFriendClicked] = useState(false);
  const [friendsList, setFriendsList] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowClick() {
    setIsAddFriendClicked((isAddFriendClicked) => !isAddFriendClicked);
  }
  return (
    <>
      <div id="container">
        <section id="left">
          <FriendList
            friendsList={friendsList}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          ></FriendList>
          {isAddFriendClicked && (
            <Form
              friendsList={friendsList}
              setFriendsList={setFriendsList}
            ></Form>
          )}
          <br></br>
          <Button className="button" onClick={handleShowClick}>
            {isAddFriendClicked ? "Close" : "Add a friend"}
          </Button>
        </section>
        <section id="right">
          {selectedFriend !== null && (
            <SplittingForm
              setSelectedFriend={setSelectedFriend}
              selectedFriend={selectedFriend}
              friendsList={friendsList}
              setFriendsList={setFriendsList}
            ></SplittingForm>
          )}
        </section>
      </div>
    </>
  );
}

export default App;

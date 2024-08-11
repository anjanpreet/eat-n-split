import "../styles/friendList.css";
import Button from "../components/Button.js";
function Friend({ friend, selectedFriend, setSelectedFriend }) {
  function handleFriendSelection(friend) {
    console.log(selectedFriend);
    if (selectedFriend === null || selectedFriend.id !== friend.id) {
      setSelectedFriend(friend);
    } else {
      setSelectedFriend(null);
    }
  }
  return (
    <>
      <li id="friend">
        <div class="img">
          <img src={friend.image} id="photo" />
        </div>
        <div class="name-money-owed">
          <p class="friendName">{friend.name}</p>
          {friend.balance === 0 ? (
            <p class="money-owed">You and {friend.name} are even</p>
          ) : friend.balance > 0 ? (
            <p style={{ color: "green" }} class="money-owed">
              {friend.name} owes you $ {friend.balance}
            </p>
          ) : (
            <p style={{ color: "red" }} class="money-owed">
              You owe {friend.name} ${Math.abs(friend.balance)}
            </p>
          )}
        </div>

        <Button
          className="button"
          onClick={() => handleFriendSelection(friend)}
        >
          {selectedFriend != null && selectedFriend.id === friend.id
            ? "Close"
            : "Select"}
        </Button>
      </li>
    </>
  );
}
function FriendList({ friendsList, selectedFriend, setSelectedFriend }) {
  return (
    <ul id="friendlist">
      {friendsList.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          ></Friend>
        );
      })}
    </ul>
  );
}

export default FriendList;

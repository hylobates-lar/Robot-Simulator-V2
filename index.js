document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  const moveList = document.querySelector("#moves-container")
  const moveButton = document.querySelector("#move-button")

  // add moves
  document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
      const parsedKey = event.key.slice(5).toLowerCase() // "ArrowUp" => "up"

      const li = document.createElement("li")
      li.textContent = parsedKey
      moveList.append(li)
    }
  })

  // delete moves
  moveList.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
      event.target.remove()
    }
  })

  // run moves
  moveButton.addEventListener("click", () => {
    const nextMoveLi = moveList.querySelector("li") // get the 1st li in the list
    move(nextMoveLi.textContent) // move the robot
    nextMoveLi.remove() // remove the li
  })
});

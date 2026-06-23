document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" && !warrior2.isMovingRight) {
    warrior2.isMovingRight = true;
    warrior2.isFacingLeft = false;
    updateImageByMovementEnemy();
  }

  if (e.code === "ArrowLeft" && !warrior2.isMovingLeft) {
    warrior2.isMovingLeft = true;
    warrior2.isFacingLeft = true;
    updateImageByMovementEnemy();
  }
});

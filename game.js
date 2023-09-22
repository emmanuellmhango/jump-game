function jumpGame(nums) {
  const len = nums.length;
  let position = 0;
  for (let i = 0; i < len; i++) {
    if (i > position) return false;
    position = Math.max(position, i + nums[i]);
  }
  return true;
}

console.log(jumpGame([2, 3, 1, 1, 4]));

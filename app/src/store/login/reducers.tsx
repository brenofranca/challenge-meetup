export default function login(state = [], action) {
  switch (action.type) {
    case "@login/REQUEST":
      return state;
    case "@login/SUCCESS":
      return state;
    case "@login/ERROR":
      return state;
    default:
      return state;
  }
}

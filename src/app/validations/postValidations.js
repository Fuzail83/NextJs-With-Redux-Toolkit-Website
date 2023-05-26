export default function validatePostForm(postState) {
  const { title } = postState;
  console.log("postState", postState);

  let errors = {};
  if (!title) {
    errors.title = "Title is required";
  }

  // if (!body) {
  //   errors.body = "Body is required";
  // }

  return errors;
}

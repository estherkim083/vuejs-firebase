import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`http://localhost:3000/posts/${id}`);
      console.log(data);
      if (!data.ok) {
        throw Error("no data available");
      }
      post.value = await data.json();
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return { post, error, load };
};
export default getPost;

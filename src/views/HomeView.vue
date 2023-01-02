<template>
  <div class="home">
    <!-- <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button> -->
    <!-- <input type="text" v-model="search" />
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop</button> -->

    <div class="home">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length" class="layout">
        <PostList :posts="posts" />
        <TagCloud :posts="posts" />
      </div>
      <div v-else><Spinner /></div>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    // #1
    // const ninjaOne = ref({ name: "mario", age: 30 });
    // const ninjaTwo = reactive({ name: "luigi", age: 35 });
    // // reactive cannot be used on primitive values
    // const nameOne = ref("mario"); // will be reactive
    // const nameTwo = reactive("luigi"); // will NOT be reactive
    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40;
    // };
    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 45;
    // };
    // return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo };

    // #2 computed values in setup and watch, watchEffect
    // const search = ref("");
    // const names = res(["a", "b", "c", "d", "e", "f"]);

    // const stopWatch = watch(search, () => {
    //   console.log("watch function run");
    // });

    // const stopEffect = watchEffect(() => {
    //   console.log("watch effect function run");
    // });

    // const handleClick = () => {
    //   stopWatch();
    //   stopEffect();
    // };

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });

    // return { names, search, matchingNames };
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>

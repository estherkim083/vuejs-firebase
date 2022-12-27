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

    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
export default {
  name: "Home",
  components: { PostList },
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

    // #3
    const posts = ref([
      { title: "welcome to the blog", body: "lorem ipsum", id: 1 },
      { title: "top 5 css tips", body: "lorem ipsum", id: 2 },
    ]);
    const showPosts = ref(true);
    return { posts, showPosts };
  },
  mounted() {
    console.log("mounted using options api");
  },
};
</script>

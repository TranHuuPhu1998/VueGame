<template>
  <div>
    <div class="cursor"></div>
    <router-view></router-view>
    <PingPong/>
  </div>
</template>

<script>
import PingPong from './pages/ping-pong'
export default {
  name:"app",
  components : {PingPong},
  mounted: function () {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });

    document.addEventListener("click", () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 100);
    });
  },
};
</script>

<style lang="scss" scoped></style>

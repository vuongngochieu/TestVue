$(document).ready(function () {
  Vue.component("custom-input", {
    prop: ["value"],
    data: function () {
      return {
        text: "Ngọc Hiếu",
      };
    },
    template: `
            <template>
                <input
                    v-bind:value="value"
                    v-on:input="$emit('input', $event.target.value)
                >
                <h2>Hello {{ text }} </h2>
            </template>
      `,
  });
  new Vue({
    el: "#v-model-demo",
  });
});

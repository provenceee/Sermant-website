<template>
  <span class="nav-item" v-if="options && options.length > 0">
    Version:
    <select v-model="selected" @change="onChange">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </span>
</template>

<script>
import Axios from 'axios';
import Base64 from 'js-base64'
export default {
  data() {
    return {
      selected: undefined,
      options: [],
    };
  },
  created: async function() {
    try {
      let res = await Axios.get(
        'https://api.github.com/repos/provenceee/Sermant-website/git/trees/main',
      );
      const versionNode = res.data.tree.find(e => {
        return e.path.toLowerCase() === 'version.config';
      });
      res = await Axios.get(versionNode.url);
      this.options = Base64.decode(res.data.content).versions.map(e => {
        return {value: e.version, text: e.version + 'x'};
      });;
      this.options.unshift({value: 'main', text: 'main'});
      const path = window.location.pathname;
      if (path.startsWith('/Sermant-website/version/')) {
        const start = 25;
        const end = path.indexOf('/', start);
        this.selected = path.substring(start, end);
      } else {
        this.selected = 'main';
      }
    } catch (ex) {}
  },
  methods: {
    onChange(event) {
      const targetVersionPath =
        this.selected === 'main' ? '' : `/version/${this.selected}`;
      const path = window.location.pathname;
      let startIdx = 16;
      const versionIdx = path.indexOf('/version/');
      if (versionIdx >= 0) {
        startIdx = versionIdx + 9;
      }
      const endIdx = path.indexOf('/', startIdx);
      window.location.pathname =
        window.location.pathname.substring(0, 16) +
        targetVersionPath +
        window.location.pathname.substring(endIdx);
    },
  },
};
</script>
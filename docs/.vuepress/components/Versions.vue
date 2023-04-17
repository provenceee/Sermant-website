<template>
  <span class="nav-item" v-if="options && options.length > 0">
    Versions:
    <select v-model="selected" @change="onChange">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </span>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      selected: undefined,
      options: []
    };
  },
  created: async function() {
    try {
      let response = await Axios.get(
        'https://api.github.com/repos/provenceee/Sermant-website/git/trees/test1',
      );
      const versionsNode = response.data.tree.find(e => {
        return e.path == 'versions.json';
      });
      response = await Axios.get(versionsNode.url);
      this.options = eval("(" + window.atob(response.data.content) + ")").versions.map(v => {
        return {value: v, text: v};
      });
      if (this.options.length == 0) {
        return;
      }
      this.options.unshift({value: 'latest', text: 'latest'});
      const path = window.location.pathname;
      if (path.startsWith('/Sermant-website/versions/')) {
        const start = 26;
        const end = path.indexOf('/', start);
        this.selected = path.substring(start, end);
      } else {
        this.selected = 'latest';
      }
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    onChange(event) {
      const path = window.location.pathname;
      const versionIdx = path.indexOf('/versions/');
      const startIdx = versionIdx >= 0 ? versionIdx + 10 : 16;
      const endIdx = path.indexOf('/', startIdx);
      const versionPath = this.selected == 'latest' ? '' : `/versions/${this.selected}`;
      window.location.pathname = path.substring(0, 16) + versionPath + path.substring(endIdx);
    }
  }
};
</script>
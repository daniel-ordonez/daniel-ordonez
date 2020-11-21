export default {
  methods: {
    getValueOfStr(str) {
      if (!str.length) return 0;
      const code = str.charCodeAt(0);
      const value =
        code % 5 === 0 ? 3 : code % 8 === 0 ? 2 : code % 3 === 0 ? 1 : 0;
      return ["yellow", "pink", "cyan", "green"][value];
    },
  },
}

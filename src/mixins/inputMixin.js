export default {
  methods: {
    handleChange(e) {
      this.$emit('handleChange', e.target.value);
    },
  },
};

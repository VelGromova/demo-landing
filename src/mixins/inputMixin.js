export default {
  methods: {
    handleChange($event) {
      this.$emit('input', $event.target.value);
    },
  },
};

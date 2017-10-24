// define a mixin object
export default {
  data: () => {
    return {
      open: true
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    }
  }
}

export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    scale: [Number, String],
    spin: {
      type: Boolean,
      default: false,
    },
    flip: {
      validator: val => val === 'horizontal' || val === 'vertical',
    },
  },
  computed: {
    xlink() {
      const symbol = require(`@/assets/svg/${this.name}.svg`);
      return { viewBox: symbol.default.viewBox, href: `#${symbol.default.id}` };
    },
    normalizedScale() {
      let scale = this.scale;
      scale = typeof scale === 'undefined' ? 1 : Number(scale);
      if (isNaN(scale) || scale <= 0) {
        return 1;
      }
      return scale;
    },
    clazz() {
      return {
        icon: true,
        'icon--spin': this.spin,
        'icon--flip-horizontal': this.flip === 'horizontal',
        'icon--flip-vertical': this.flip === 'vertical',
      };
    },
    width() {
      const w = this.xlink.viewBox.split(' ')[2];
      return w * this.normalizedScale;
    },
    height() {
      const h = this.xlink.viewBox.split(' ')[3];
      return h * this.normalizedScale;
    },
  },
};


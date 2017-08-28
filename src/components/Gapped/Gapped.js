export default {
  name: 'gapped',
  render(h) {
    if (this.vertical) {
      return this.renderVertical(h);
    }
    return this.renderHorizontal(h);
  },
  props: {
    gap: {
      type: Number,
      default: 10,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    verticalAlign: {
      type: String,
      default: 'middle',
      validator: (value) => {
        if (value in ['top', 'middle', 'baseline', 'bottom']) {
          return value;
        }
        return 'middle';
      },
    },
  },
  methods: {
    renderVertical(h) {
      const subsequentItemStyle = {
        paddingTop: `${this.gap}px`,
      };
      let isFirst = true;
      return h('div', this.$slots.default.map((v) => {
        if (!v.tag) { return v; }
        const style = isFirst ? null : subsequentItemStyle;

        isFirst = false;
        return h('div', { style }, [v]);
      }));
    },
    renderHorizontal(h) {
      const itemStyle = {
        display: 'inline-block',
        marginLeft: `${this.gap}px`,
        marginTop: `${this.gap}px`,
        verticalAlign: `${this.verticalAlign}`,
      };
      const contStyle = {
        marginTop: `${-this.gap - 1}px`,
        marginLeft: `${-this.gap}px`,
      };
      const rootStyle = {
        paddingTop: `${1}px`,
      };

      return h('div', { style: rootStyle }, [h('div', { style: contStyle }, this.$slots.default.map((v) => {
        if (!v.tag) { return v; }

        return h('span', { style: itemStyle }, [v]);
      }))]);
    },
  },
};

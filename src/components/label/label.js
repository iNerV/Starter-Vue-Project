export default {
  name: 'label',
  components: {
  },
  props: {
    triangle: {
      type: String,
      default: 'default',
      validator: val => (
        val === 'default' || val === 'top' || val === 'right' || val === 'bottom' || val === 'left'
      ),
    },
    use: {
      type: String,
      default: 'default',
      validator: val => (
        val === 'default' || val === 'main' || val === 'danger' || val === 'success'
      ),
    },
  },
  data() {
    return {
    };
  },
  computed: {
    clazz() {
      return {
        'label--main': this.use === 'main',
        'label--danger': this.use === 'danger',
        'label--success': this.use === 'success',

        'label__triangle-top': this.triangle === 'top',
        'label__triangle-right': this.triangle === 'right',
        'label__triangle-bottom': this.triangle === 'bottom',
        'label__triangle-left': this.triangle === 'left',

        'label__triangle-top--main': this.use === 'main' && this.triangle === 'top',
        'label__triangle-right--main': this.use === 'main' && this.triangle === 'right',
        'label__triangle-bottom--main': this.use === 'main' && this.triangle === 'bottom',
        'label__triangle-left--main': this.use === 'main' && this.triangle === 'left',

        'label__triangle-top--danger': this.use === 'danger' && this.triangle === 'top',
        'label__triangle-right--danger': this.use === 'danger' && this.triangle === 'right',
        'label__triangle-bottom--danger': this.use === 'danger' && this.triangle === 'bottom',
        'label__triangle-left--danger': this.use === 'danger' && this.triangle === 'left',

        'label__triangle-top--success': this.use === 'success' && this.triangle === 'top',
        'label__triangle-right--success': this.use === 'success' && this.triangle === 'right',
        'label__triangle-bottom--success': this.use === 'success' && this.triangle === 'bottom',
        'label__triangle-left--success': this.use === 'success' && this.triangle === 'left',
      };
    },
  },
  filters: {
  },
  methods: {
  },
};

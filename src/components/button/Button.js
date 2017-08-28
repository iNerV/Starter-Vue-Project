import icon from '@/components/icon/icon.vue';

export default { // TODO усправить непропадающий фокус после нажатия
  name: 'Button',
  components: {
    icon,
  },
  props: {
    onClick: {
      type: Function,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    focused: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    use: {
      type: String,
      default: 'default',
      validator: val => (
        val === 'default' || val === 'main' || val === 'danger' ||
        val === 'success' || val === 'link' || val === 'block'
      ),
    },
    size: {
      type: String,
      default: null,
      validator: val => val === 'lg' || val === 'sm',
    },
    icon: {
      type: String,
    },
    type: {
      type: String,
      default: 'button',
      validator: val => val === 'button' || val === 'submit' || val === 'reset',
    },
  },
  data() {
    return {
    };
  },
  computed: {
    clazz() {
      return {
        'btn--lg': this.size === 'lg',
        'btn--sm': this.size === 'sm',
        'btn--main': this.use === 'main',
        'btn--danger': this.use === 'danger',
        'btn--success': this.use === 'success',
        'btn--link': this.use === 'link',
        'btn--disabled': this.disabled,
        'btn--block': this.use === 'block',
      };
    },
    iconClazz() {
      return {
        'btn__icon--link': this.use === 'link',
      };
    },
  },
};

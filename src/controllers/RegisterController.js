import Footer from '@/components/Footer.vue'
import Header2 from '@/components/Header2.vue';
import { registerUser } from '@/models/registerUser'
import { useMutation} from '@vue/apollo-composable'
import gql from 'graphql-tag'



export default {
  name: 'RegisterView',
  components: {
    Footer, Header2,
  },
  data() {
    return {
      form: {
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
      },
      error: '',
    }
  },
  methods: {
    async handleRegister() {
      this.error = ''
      if (this.form.password !== this.form.confirmPassword) {
        this.error = 'Las contraseñas no coinciden'
        return
      }
      if (!this.form.acceptTerms) {
        this.error = 'Debes aceptar los términos y condiciones'
        return
      }


      try {
        await registerUser(this.form)
        this.$router.push('/principal')
      } catch (e) {
        this.error = 'Error al registrar. Intenta nuevamente.'
      }
    },
  },
}
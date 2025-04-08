import Footer from '@/components/Footer.vue'
import Header2 from '@/components/Header2.vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!, $username: String!, $name: String!) {
    registerUser(email: $email, password: $password, username: $username, name: $name) {
      id
      email
    }
  }
`

export default {
  name: 'RegisterView',
  components: {
    Footer,
    Header2,
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
  setup() {
    const { mutate: registerUser, onDone, onError } = useMutation(REGISTER_USER)
    return { registerUser, onDone, onError }
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
        await this.registerUser({
          email: this.form.email,
          password: this.form.password,
          username: this.form.username,
          name: this.form.name,
        })

        this.$router.push('/principal')
      } catch (e) {
        console.error(e)
        this.error = 'Error al registrar. Intenta nuevamente.'
      }
    },
  },
}

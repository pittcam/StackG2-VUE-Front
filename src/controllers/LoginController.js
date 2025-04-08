import Footer from '@/components/Footer.vue'
import Header2 from '@/components/Header2.vue';
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'


const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`

export default {
  name: 'LoginView',
  components: {
    Footer,
    Header2,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: '',
    }
  },
  setup() {
    const { mutate: login, onDone, onError } = useMutation(LOGIN_USER)
    return { login, onDone, onError }
  },
  methods: {
    async handleLogin() {
      this.error = ''

      if (!this.form.email || !this.form.password) {
        this.error = 'Correo y contraseña son requeridos'
        return
      }

      try {
        const { data } = await this.login({
          email: this.form.email,
          password: this.form.password,
        })

        // Guarda token si es necesario
        localStorage.setItem('token', data.login.token)

        // Redirección exitosa
        this.$router.push('/principal')
      } catch (e) {
        console.error(e)
        this.error = 'Error al iniciar sesión. Verifica tus credenciales.'
      }
    },
  },
}

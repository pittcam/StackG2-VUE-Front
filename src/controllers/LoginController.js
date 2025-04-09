import Footer from '@/views/components/Footer.vue'
import Header2 from '@/views/components/Header2.vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      email
      token
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
    const { mutate: loginUser } = useMutation(LOGIN_USER)
    return { loginUser }
  },
  methods: {
    async handleLogin() {
      this.error = ''

      if (!this.form.email || !this.form.password) {
        this.error = 'Correo y contraseña son requeridos'
        return
      }

      try {
        const { data } = await this.loginUser({
          email: this.form.email,
          password: this.form.password,
        })

        // Guarda el token en localStorage
        localStorage.setItem('token', data.loginUser.token)

        // Redirige a la página principal
        this.$router.push('/principal')
      } catch (e) {
        console.error(e)
        this.error = 'Error al iniciar sesión. Verifica tus credenciales.'
      }
    },
  },
}

// src/controllers/LoginController.js
import Footer from '@/components/Footer.vue'
import Header2 from '@/components/Header2.vue';
import { supabase } from '@/lib/supabase' 

export default {
    name: 'LoginView',
    components: {
        Footer, Header2, supabase,
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
    methods: {
      async handleLogin() {
        // Aquí iría tu lógica real de autenticación (con API)
        if (!this.form.username || !this.form.password) {
          this.error = 'Usuario y contraseña son requeridos'
          return
        }

        const { error } = await supabase.auth.signInWithPassword({
            email: this.form.username, 
            password: this.form.password,
        })

        if (error) {
            this.error = error.message
            return
        }
    
        // Simula redirección exitosa
        this.$router.push('/')
      },
    },
  }
  
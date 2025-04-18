
const HeaderSearchController = {
    data() {
      return {
        searchQuery: '',
        userName: this.getUserName()
      };
    },
  
    methods: {
        search(query) {
            if (!query.trim()) return;
            window.location.href = `/principal?q=${encodeURIComponent(query)}`;
        },
  
      handleSearch() {
        this.search(this.searchQuery);
      },
  
      logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      },
  
      getUserName() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user?.name || 'Usuario';
      }
    }
  };
  
  export default HeaderSearchController;
  

  import CharacterListView from "@/views/CharacterListView"
  import CharacterDetailView from "@/views/CharacterDetailView"

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/characters',
        name: 'home',
        component: CharacterListView
      },
      {
        path: '/character/:id',
        name: 'Character',
        component: CharacterDetailView,
        props: true
      }
    
      
    ]
  })

  export default router;

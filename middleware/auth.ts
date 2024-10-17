export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabaseClient();
    const user = await supabase.auth.getSession();
  
    if (!user.data.session && to.path !== '/login') {
      return navigateTo('/login');
    }
  });
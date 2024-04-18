import { useFirebase } from "~/composables/useFirebase";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async(to, from) => {
  const firebase = useFirebase();
  const authStore = useAuthStore();
  const isLoggedIn = await authStore.init();
  if (from.name == "login") return;
  if (to.name == "login") return;
  if (isLoggedIn) {
    if (to.name == "gestore" && authStore.userGetter.email != "gabrielebonanno31@gmail.com") {
      return 'login';
    } else {
      return;
    }
  } else {
    return 'login';
  }
});

import { useGuasti } from "~/store/guasti";

export default defineNuxtRouteMiddleware((to, from)=>{
    if (process.server)return;
    const guastiStore=useGuasti();
    guastiStore.init();
});


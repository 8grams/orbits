import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (Astro, next) => {
  const user = await Astro?.session?.get("user");
  const isLoginPage = ["/login", "/login-admin"].includes(Astro.url.pathname);
  const isDashboardRoute = Astro.url.pathname.startsWith("/dashboard");
  const ProtectedRoutes = [
    "/dashboard/users",
    "/dashboard/users-create-or-update-modal",
    "/dashboard/users-delete",
  ].includes(Astro.url.pathname);

  if (user) {
    Astro.locals.user = user;
  }

  if (user && isLoginPage) {
    return Astro.redirect("/dashboard");
  }

  if (!user && isDashboardRoute) {
    return Astro.redirect("/");
  }

  if (ProtectedRoutes && !["admin"].includes(user?.role)) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/forbidden",
      },
    });
  }

  return next();
};

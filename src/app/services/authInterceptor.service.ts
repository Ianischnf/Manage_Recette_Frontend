import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Interceptor appelé pour : ", req.url);

   if (req.url.includes('/auth/login') || req.url.includes('/auth/register')) {
    return next(req);
  }
  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
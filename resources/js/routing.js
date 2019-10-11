import Home from './components/pages/Home';
import LoginPage from './components/auth/login';
import RegisterPage from './components/auth/register';

export const routing = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/telegram',
        beforeEnter() {location.href = 'https://t.me/xergashev'}
    },
    {
        path: '/instagram',
        beforeEnter() {location.href = 'https://instagram.com/khurshid_1607'}
    },
    {
        path: '/twitter',
        beforeEnter() {location.href = 'https://twitter.com'}
    }
]
import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Portfolio | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://nurlanasadov.me'
          },
          {
            name: 'title',
            content: 'Portfolio | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'description',
            content:
              "Discover the portfolio of Nurlan Asadov, a passionate junior software developer and cybersecurity enthusiast."
          },
          {
            name: 'keywords',
            content: 'portfolio, nurlan asadov, junior software developer, cybersecurity enthusiast, software development, cybersecurity, programming, web development, applications, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Nurlan Asadov'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Portfolio | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'application-name',
            content: 'Portfolio | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Portfolio | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'twitter:description',
            content:
              "Discover the portfolio of Nurlan Asadov, a passionate junior software developer and cybersecurity enthusiast."
          },
          {
            name: 'twitter:image',
            content: 'https://nurlanasadov.me/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Nurlan Asadov'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Portfolio | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            property: 'og:description',
            content:
              "Discover the portfolio of Nurlan Asadov, a passionate junior software developer and cybersecurity enthusiast."
          },
          {
            property: 'og:site_name',
            content: 'Portfolio | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            property: 'og:url',
            content: 'https://nurlanasadov.me'
          },
          {
            property: 'og:image',
            content: 'https://nurlanasadov.me/img/logo-portfolio-black.webp'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Nurlan Asadov'
          },
          {
            property: 'og:locale',
            content: 'az_AZ'
          },
          {
            property: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Office | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://nurlanasadov.me/office'
          },
          {
            name: 'title',
            content: 'Office | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'description',
            content:
              "Discover the office of Nurlan Asadov, a passionate junior software developer and cybersecurity enthusiast."
          },
          {
            name: 'keywords',
            content: 'office, nurlan asadov, junior software developer, cybersecurity enthusiast, web development, software development, programming, technology'
          },
          {
            name: 'author',
            content: 'Nurlan Asadov'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Office | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'application-name',
            content: 'Office | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Office | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'twitter:description',
            content:
              "Discover the office of Nurlan Asadov, a passionate junior software developer and cybersecurity enthusiast."
          },
          {
            name: 'twitter:image',
            content: 'https://nurlanasadov.me/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Nurlan Asadov'
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Office | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'og:description',
            content:
              "Discover the office of Nurlan Asadov, a passionate junior software developer and cybersecurity enthusiast."
          },
          {
            name: 'og:site_name',
            content: 'Office | Nurlan Asadov - Junior Software Developer and Cybersecurity Enthusiast'
          },
          {
            name: 'og:url',
            content: 'https://nurlanasadov.me/office'
          },
          {
            name: 'og:image',
            content: 'https://nurlanasadov.me/img/logo-portfolio-black.webp'
          },
          {
            name: 'og:image:alt',
            content: 'Logo Portfolio Nurlan Asadov'
          },
          {
            name: 'og:locale',
            content: 'az_AZ'
          },
          {
            name: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    }
  ]
})

export default router

<script setup lang="ts">
import { ref } from "vue";

// nav on mobile or device with a width smaller than 768px
const displayNavOnMobile = ref(false);

const setDisplayNavOnMobileToOpposite = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      displayNavOnMobile.value
            ? (document.querySelectorAll("body")[0].style.overflowY = "visible")
            : (document.querySelectorAll("body")[0].style.overflowY = "hidden");
      displayNavOnMobile.value = !displayNavOnMobile.value;
};
const setDisplayNavOnMobileToFalse = () => {
      displayNavOnMobile.value = false;
      document.querySelectorAll("body")[0].style.overflowY = "visible";
};
</script>

<template>
      <header class="header">
            <RouterLink
                  :to="{ name: 'home' }"
                  class="link_accueil"
                  >Luel Baptiste</RouterLink
            >

            <div
                  @click="setDisplayNavOnMobileToOpposite"
                  class="burger_icon"
                  :class="{ burger_icon_cross: displayNavOnMobile }">
                  <span class="span_burger"></span>
                  <span class="span_burger"></span>
                  <span class="span_burger"></span>
            </div>

            <nav
                  class="nav"
                  :class="{ nav_displayed_mobile: displayNavOnMobile }"
                  @click="setDisplayNavOnMobileToFalse">
                  <RouterLink
                        :to="{ name: 'home' }"
                        class="nav_links"
                        active-class="active_link">
                        Accueil
                  </RouterLink>
                  <RouterLink
                        :to="{ name: 'about' }"
                        class="nav_links"
                        active-class="active_link">
                        A propos
                  </RouterLink>
                  <RouterLink
                        :to="{ name: 'compétences' }"
                        class="nav_links"
                        active-class="active_link">
                        Compétences
                  </RouterLink>
                  <RouterLink
                        :to="{ name: 'projets' }"
                        class="nav_links"
                        active-class="active_link">
                        Projets
                  </RouterLink>
                  <RouterLink
                        :to="{ name: 'contact' }"
                        class="nav_links"
                        active-class="active_link">
                        Contact
                  </RouterLink>
            </nav>
      </header>
</template>

<style scoped>
.header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: var(--secondary);

      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
}

.link_accueil {
      max-width: 30%;

      color: var(--text);

      font-weight: 700;
}

.nav {
      width: 0;
      height: 100lvh;

      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10%;

      background-color: var(--secondary);
      overflow-x: hidden;
      transition: 0.5s;
}

.nav_displayed_mobile {
      width: 100vw;

      .nav_links {
            opacity: 1;
      }
}

/* links */

.nav_links {
      width: 60%;
      min-height: 50px;

      text-align: center;
      align-content: center;

      opacity: 0;

      background-color: var(--background);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      transition: 0.3s;
}

.active_link {
      background-color: var(--accent);
      color: var(--background);
}

/* burger menu  */

.burger_icon {
      width: 30px;
      height: 30px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;

      z-index: 1;
}

.span_burger {
      display: block;
      width: 100%;
      height: 2px;

      background-color: var(--accent);
      border-radius: var(--border-radius);

      transition: 0.5s;
}

.burger_icon_cross {
      .span_burger:nth-child(1) {
            rotate: 45deg;
      }

      .span_burger:nth-child(2) {
            rotate: -45deg;
            margin-top: -7px;
      }

      .span_burger:nth-child(3) {
            opacity: 0;
      }
}

@media screen and (min-width: 768px) {
      /* nav & burger menu */

      .nav {
            max-width: 70%;
            width: 100%;
            height: fit-content;

            position: static;

            flex-direction: row;
            justify-content: flex-end;
            gap: 7%;

            background-color: transparent;
      }

      .burger_icon {
            display: none;
      }

      /* nav links */

      .nav_links {
            min-height: auto;
            width: auto;

            background-color: transparent;
            box-shadow: none;
            border-radius: 0;

            opacity: 1;
      }

      .nav_links::after {
            content: "";

            width: 0;
            height: 2px;

            display: block;

            position: relative;
            left: 0.2px;

            background-color: var(--accent);
            border-radius: var(--border-radius);

            transition: 0.4s;
      }

      .nav_links:hover::after {
            width: 100%;
      }

      /* active links */

      .active_link {
            color: var(--primary);
            overflow-x: visible;
      }

      .active_link::after {
            width: 100%;
      }
}
</style>

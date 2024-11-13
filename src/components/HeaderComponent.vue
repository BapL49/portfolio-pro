<template>
      <header class="header">
            <RouterLink :to="{ name: 'home' }" class="link_accueil">Luel Baptiste</RouterLink>

            <!-- burger menu -->
            <input type="checkbox" name="menu-btn" id="menu_btn" class="menu_btn" />
            <label class="burger_icon" for="menu_btn">
                  <span class="span_burger"></span>
                  <span class="span_burger"></span>
                  <span class="span_burger"></span>
            </label>

            <nav class="nav">
                  <RouterLink :to="{ name: 'home' }" class="nav_links" active-class="active_link">
                        Accueil
                  </RouterLink>
                  <RouterLink :to="{ name: 'about' }" class="nav_links" active-class="active_link">
                        A propos
                  </RouterLink>
                  <RouterLink :to="{ name: 'compétences' }" class="nav_links" active-class="active_link">
                        Compétences
                  </RouterLink>
                  <RouterLink :to="{ name: 'projets' }" class="nav_links" active-class="active_link">
                        Projets
                  </RouterLink>
                  <RouterLink :to="{ name: 'contact' }" class="nav_links" active-class="active_link">
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

      padding: var(--padding);

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
      transition: 0.5s;
}

.menu_btn:checked ~ .nav {
      width: 100vw;

      .nav_links {
            opacity: 1;
      }
}

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

.menu_btn {
      position: absolute;
      left: -100vw;
      top: -100vw;
}

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

.menu_btn:checked ~ .burger_icon {
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
      .nav {
            max-width: 70%;
            width: 100%;
            height: fit-content;

            position: static;

            flex-direction: row;
            justify-content: space-evenly;
            gap: 0;

            background-color: transparent;
      }

      .burger_icon,
      .menu_btn {
            display: none;
      }

      .nav_links {
            min-height: auto;
            width: auto;

            background-color: transparent;
            box-shadow: none;
      }

      .active_link {
            text-decoration: underline;
      }
}
</style>

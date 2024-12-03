<script lang="ts" setup></script>

<template>
      <section
            class="section"
            id="contact">
            <h2>Travaillons ensemble</h2>
            <div class="container_form_text">
                  <p class="paragraph">
                        <strong>Vous avez besoin d'un développeur pour vos projets ? </strong> <br />Oui,
                        alors n'hésitez pas à me contacter par
                        <a
                              class="link_in_paragraph"
                              href="mailto:luelbaptiste49@laposte.net"
                              >email</a
                        >
                        ou directement avec le formulaire ci-dessous.
                  </p>
                  <form
                        class="form"
                        action="">
                        <div class="input_horizontal">
                              <div class="container_label_input">
                                    <label
                                          class="label"
                                          for="name"
                                          >Name</label
                                    >
                                    <input
                                          class="input"
                                          type="text"
                                          name="name"
                                          autocomplete="name"
                                          id="name" />
                              </div>
                              <div class="container_label_input">
                                    <label
                                          class="label"
                                          for="company"
                                          >Company</label
                                    >
                                    <input
                                          class="input"
                                          type="text"
                                          autocomplete="organization"
                                          name="company"
                                          id="company" />
                              </div>
                        </div>
                        <div class="container_label_input">
                              <label
                                    class="label"
                                    for="email"
                                    >Email</label
                              >
                              <input
                                    class="input"
                                    type="email"
                                    name="email"
                                    autocomplete="email"
                                    id="email" />
                        </div>
                        <div class="container_label_textarea">
                              <label
                                    class="label"
                                    for="message"
                                    >Message</label
                              >
                              <textarea
                                    class="textarea"
                                    placeholder="How can I help you ?"
                                    name="message"
                                    id="message"></textarea>
                        </div>
                        <button
                              class="button"
                              type="submit">
                              Envoyer
                        </button>
                  </form>
            </div>
      </section>
</template>

<style scoped>
.section {
      height: fit-content;
}

.form,
.container_form_text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
}

.container_form_text {
      width: 100%;
      max-width: 768px;

      gap: 50px;
}

.paragraph {
      width: 100%;

      .link_in_paragraph:hover {
            text-decoration: underline;
      }
}

.form {
      width: 100%;

      gap: 40px;
}

.input_horizontal {
      display: flex;

      width: 100%;

      gap: 10px;
}

.container_label_input,
.container_label_textarea {
      width: 100%;
      height: 50px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
}

.container_label_textarea {
      height: 200px;
      gap: 20px;
}

.input {
      width: 100%;

      font-family: inherit;

      background-color: transparent;

      outline: none;

      border: none;
      border-bottom: 1px solid var(--text);
}

.label {
      font-size: calc(var(--font-smallest) - 0.5em);
      color: var(--accent);
}

.textarea {
      width: 100%;
      height: 100%;

      padding: 15px;

      color: var(--text);

      font-family: inherit;

      background-color: transparent;

      border: 1px solid var(--text);
      border-radius: var(--border-radius);
}

.button {
      width: 100%;
      height: 60px;

      color: var(--background);
      font-size: calc(var(--font-smallest) - 0.3em);

      cursor: pointer;

      border-radius: var(--border-radius);
      border: none;

      background-color: var(--primary);

      box-shadow: var(--box-shadow);

      outline: none;
}

@media screen and (min-width: 768px) {
      .input_horizontal {
            gap: 50px;
      }
}
</style>

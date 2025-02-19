<script lang="ts" setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import ErrorComponent from "../notifications/ErrorComponent.vue";
import SuccessNotificationComponent from "../notifications/SuccessNotificationComponent.vue";
import FadeTransition from "../transitions/FadeTransition.vue";

const formInputs = ref({
      name: "",
      company: "",
      email: "",
      message: "",
      antispam: "",
});

// input errors
const formErrors = ref({
      message: false,
      email: false,
      name: false,
});

// form submit error
const formError = ref(false);
const formSent = ref(false);

const validationFormValue = () => {
      if (formInputs.value.name.length < 3) {
            formErrors.value.name = true;
      } else {
            formErrors.value.name = false;
      }

      if (
            !formInputs.value.email.match(
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
      ) {
            formErrors.value.email = true;
      } else {
            formErrors.value.email = false;
      }

      if (formInputs.value.message.length < 20) {
            formErrors.value.message = true;
      } else {
            formErrors.value.message = false;
      }
};

const sendEmail = () => {
      validationFormValue();

      if (
            !formErrors.value.name &&
            !formErrors.value.email &&
            !formErrors.value.message &&
            formInputs.value.antispam.length === 0
      ) {
            emailjs
                  .send(
                        "service_hvifpxs",
                        "template_dqi8su5",
                        {
                              name: formInputs.value.name,
                              company: formInputs.value.company,
                              email: formInputs.value.email,
                              message: formInputs.value.message,
                        },
                        { publicKey: "y3SnXCZR8TnQ0BIh5" }
                  )
                  .then(() => {
                        formError.value = false;
                        formSent.value = true;
                        formInputs.value = {
                              name: "",
                              company: "",
                              email: "",
                              message: "",
                              antispam: "",
                        };
                        setTimeout(() => {
                              formSent.value = false;
                        }, 3000);
                  })
                  .catch(() => {
                        formError.value = true;
                  });
      }
};
</script>

<template>
      <section
            class="section"
            id="contact">
            <div class="header">
                  <h2>Vous avez besoin d'un développeur pour vos projets ?</h2>
                  <p class="paragraph">
                        Alors n'hésitez pas à me contacter par
                        <a
                              class="link_in_paragraph"
                              href="mailto:luelbaptiste49@laposte.net"
                              >email</a
                        >
                        ou directement avec le formulaire ci-dessous.
                  </p>
            </div>
            <div class="container_form_text">
                  <form
                        class="form"
                        v-on:submit.prevent="sendEmail"
                        ref="contact">
                        <div class="input_horizontal">
                              <div class="container_label_input">
                                    <label
                                          class="label"
                                          for="name"
                                          >Name*</label
                                    >
                                    <input
                                          class="input"
                                          :class="{ input_error: formErrors.name }"
                                          type="text"
                                          required
                                          name="name"
                                          autocomplete="name"
                                          id="name"
                                          v-model="formInputs.name" />
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
                                          id="company"
                                          v-model="formInputs.company" />
                              </div>
                        </div>
                        <div class="container_label_input">
                              <label
                                    class="label"
                                    for="email"
                                    >Email*</label
                              >
                              <input
                                    class="input"
                                    :class="{ input_error: formErrors.email }"
                                    type="email"
                                    name="email"
                                    required
                                    autocomplete="email"
                                    id="email"
                                    v-model="formInputs.email" />
                        </div>
                        <div class="container_label_textarea">
                              <label
                                    class="label"
                                    for="message"
                                    >Message*</label
                              >
                              <textarea
                                    class="textarea"
                                    :class="{ textarea_error: formErrors.message }"
                                    placeholder="How can I help you ?"
                                    name="message"
                                    required
                                    id="message"
                                    v-model="formInputs.message"></textarea>
                        </div>

                        <!-- input anti-spam -->
                        <label
                              class="remarque"
                              for="remarque"
                              >remarque</label
                        >
                        <input
                              type="text"
                              name="remarque"
                              class="remarque"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                              placeholder="nom"
                              v-model="formInputs.antispam" />
                        <!-- input anti-spam -->

                        <button
                              class="button"
                              type="submit">
                              Envoyer
                        </button>
                        <FadeTransition>
                              <ErrorComponent
                                    message="Une erreur est survenue"
                                    v-if="formError" />
                        </FadeTransition>
                        <FadeTransition>
                              <SuccessNotificationComponent
                                    message="Votre message a bien été envoyé"
                                    v-if="formSent" />
                        </FadeTransition>
                  </form>
            </div>
      </section>
</template>

<style scoped>
.section {
      height: fit-content;
}

.header {
      display: flex;
      flex-direction: column;
      gap: 25px;
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

.input_error {
      border-bottom: 1px solid red;
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

.textarea_error {
      border: 1px solid red;
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

/* input anti-spam */
.remarque {
      display: none;
}

@media screen and (min-width: 768px) {
      .input_horizontal {
            gap: 50px;
      }
}
</style>
